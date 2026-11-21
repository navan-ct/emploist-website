// Takes the app screenshots the website shows, from the
// Emploist app running locally with its sample data (`npm run db:seed` in the
// app's repository). Run it from this folder with the app's dev server up:
//
//   node scripts/screenshots.mjs
//
// It signs in as the sample admin with an email code: the app prints the code
// in its server log, and this script asks for it. The session is kept in
// .auth/ so later runs skip signing in until it expires.
//
// Settings (environment variables):
//   APP_URL        the app            (default http://localhost:3000)
//   CAREERS_URL    the sample company's careers page
//                                     (default http://fieldnote.localhost:3000)
//   SIGN_IN_EMAIL  who to sign in as  (default alex@example.com)
//   JOB_TITLE      the job to show    (default Senior Product Designer)
//   ONLY           names of shots to take, comma-separated (default all);
//                  "post" and "mcp-post" take the blog posts' shots (see
//                  postShots and mcpPostShots); "docs" takes per-guide
//                  docs shots (see docsShots) for /docs/; and "covers" only
//                  redraws the posts' covers from their saved shots
//   MCP_URL        the app's MCP_URL, for "mcp-post"
//                                     (default https://mcp.emploist.com)

import { execFile } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { chromium } from "playwright-core";
import sharp from "sharp";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";
const CAREERS_URL = process.env.CAREERS_URL ?? "http://fieldnote.localhost:3000";
const EMAIL = process.env.SIGN_IN_EMAIL ?? "alex@example.com";
const JOB_TITLE = process.env.JOB_TITLE ?? "Senior Product Designer";
const ONLY = process.env.ONLY?.split(",").map((name) => name.trim());

const AUTH_FILE = new URL("../.auth/screenshots.json", import.meta.url);
const OUT_DIR = new URL("../src/assets/screenshots/", import.meta.url);
const SCALE = 2;
const DESKTOP = { width: 1280, height: 800 };

// The careers page and email previews are sandboxed iframes, which Chrome
// draws in a process of their own that the context's deviceScaleFactor
// doesn't reach, so they came out at 1x and blurry. Forcing the scale on the
// whole browser draws them at 2x too.
const browser = await chromium.launch({
  channel: "chrome",
  args: [`--force-device-scale-factor=${SCALE}`],
});

/** Signs in with an email code and saves the session, unless it still works. */
async function signIn() {
  const saved = await readFile(AUTH_FILE, "utf8").catch(() => null);
  if (saved) {
    const context = await browser.newContext({ storageState: JSON.parse(saved) });
    const response = await context.request.get(`${APP_URL}/api/auth/get-session`);
    const session = response.ok() ? await response.json() : null;
    await context.close();
    if (session) return JSON.parse(saved);
  }

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${APP_URL}/sign-in`);
  const post = (path, body) =>
    page.evaluate(
      async ([path, body]) => {
        const response = await fetch(path, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        });
        return response.ok;
      },
      [path, body],
    );

  if (!(await post("/api/auth/email-otp/send-verification-otp", { email: EMAIL, type: "sign-in" }))) {
    throw new Error(`Couldn't send a sign-in code to ${EMAIL}. Is the app running at ${APP_URL}?`);
  }
  const prompt = createInterface({ input: stdin, output: stdout });
  const code = await prompt.question(`Sign-in code for ${EMAIL} (from the app's server log): `);
  prompt.close();
  if (!(await post("/api/auth/sign-in/email-otp", { email: EMAIL, otp: code.trim() }))) {
    throw new Error("That code didn't work. Run the script again for a new one.");
  }

  const state = await context.storageState();
  await mkdir(new URL(".", AUTH_FILE), { recursive: true });
  await writeFile(AUTH_FILE, JSON.stringify(state));
  await context.close();
  return state;
}

/** The ID of the job the screenshots show, found by its title. */
async function findJobId(storageState) {
  const context = await browser.newContext({ storageState });
  const response = await context.request.get(
    `${APP_URL}/api/jobs?search=${encodeURIComponent(JOB_TITLE)}`,
  );
  const body = await response.json();
  await context.close();
  const jobs = body.jobs ?? body.items ?? body;
  const job = Array.isArray(jobs) ? jobs.find((job) => job.title === JOB_TITLE) : null;
  if (!job) throw new Error(`Couldn't find the job "${JOB_TITLE}".`);
  return job.id;
}

/** Waits for the page to settle: requests done, fonts loaded, animations over. */
async function settle(page) {
  // Some pages keep polling (e.g. pending matches), so don't wait forever.
  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);
}

/**
 * A rectangle around the boxes of the given locators, with padding. A
 * padding of -1 keeps the boxes' own borders out, so the website's frame
 * stands in for them instead of doubling them.
 */
async function around(page, locators, padding = 0) {
  const boxes = [];
  for (const locator of locators) {
    const box = await locator.boundingBox();
    if (!box) throw new Error(`Nothing to frame: ${locator}`);
    boxes.push(box);
  }
  const left = Math.min(...boxes.map((box) => box.x)) - padding;
  const top = Math.min(...boxes.map((box) => box.y)) - padding;
  const right = Math.max(...boxes.map((box) => box.x + box.width)) + padding;
  const bottom = Math.max(...boxes.map((box) => box.y + box.height)) + padding;
  const viewport = page.viewportSize();
  const x = Math.max(0, left);
  const y = Math.max(0, top);
  return {
    x,
    y,
    width: Math.min(viewport.width, right) - x,
    height: Math.min(viewport.height, bottom) - y,
  };
}

async function openFirstApplication(page, jobId) {
  await page.goto(`${APP_URL}/jobs/${jobId}`);
  await settle(page);
  await page.locator("a[href*='/applications/']").first().click();
  await page.getByRole("heading", { name: "Match", exact: true }).waitFor();
  await settle(page);
}

/** A question's row in the application form builder, by its title. */
function formRow(page, title) {
  return page
    .getByText(title, { exact: true })
    .first()
    .locator("xpath=ancestor::div[contains(@class,'relative') and contains(@class,'border')][1]");
}

/** Opens the Interviewing stage's email panel and waits for its preview. */
async function openStageEmail(page) {
  const row = page.getByRole("listitem").filter({ has: page.getByText("Interviewing", { exact: true }) });
  await row.getByRole("button", { name: "Edit email" }).click();
  await page.frameLocator("iframe[title='Preview of the email']").locator("body").waitFor();
  await settle(page);
}

/**
 * Each shot: where it opens, its viewport, what to do first, and optionally a
 * part of the page to keep. `themes` lists the color schemes to take it in.
 */
const shots = (jobId) => [
  {
    name: "applications",
    url: `${APP_URL}/jobs/${jobId}`,
    // Narrow enough that the page fills the window, without wide margins
    // around its column.
    viewport: { width: 1280, height: 920 },
  },
  {
    name: "match",
    viewport: { width: 1280, height: 1000 },
    prepare: (page) => openFirstApplication(page, jobId),
    clip: (page) => {
      const section = page
        .getByRole("heading", { name: "Match", exact: true })
        .locator("xpath=ancestor::section[1]");
      return around(page, [section.locator(":scope > *").first(), section.locator(":scope > *").last()], 24);
    },
  },
  {
    name: "comments",
    // Short enough that the comments sit right above the new one.
    viewport: { width: 1280, height: 712 },
    prepare: async (page) => {
      await openFirstApplication(page, jobId);
      // Start a comment that mentions a teammate, so the suggestions show.
      await page.locator(".tiptap[contenteditable=true]").last().click();
      await page.keyboard.type("Strong portfolio. What do you think, @Pri", { delay: 20 });
      await page.getByRole("option", { name: /Priya Shah/ }).waitFor();
      await settle(page);
    },
    clip: (page) =>
      // The Comments column, from its gray title bar ("Comments 3") down,
      // without the line on its left.
      around(page, [page.getByRole("heading", { name: /^Comments\b/ }).locator("xpath=..")], -1),
  },
  {
    name: "form",
    // Narrow, so the questions are close to their badges and the shot's
    // text isn't too small on the website, but wide enough for the longest
    // question to fit.
    viewport: { width: 720, height: 1400 },
    url: `${APP_URL}/jobs/${jobId}/form`,
    // The questions after "Which tools do you use most?" would peek in at
    // the bottom, so they're hidden.
    prepare: (page) =>
      formRow(page, "Which tools do you use most?").evaluate((row) => {
        for (let next = row.nextElementSibling; next; next = next.nextElementSibling) next.style.visibility = "hidden";
      }),
    clip: (page) =>
      around(page, [formRow(page, "Full name"), formRow(page, "Which tools do you use most?")], 20),
  },
  {
    name: "stage-email",
    url: `${APP_URL}/jobs/${jobId}/stages`,
    viewport: { width: 1440, height: 1500 },
    prepare: openStageEmail,
    // The panel from its title bar down to the message's hint, without the
    // line on its left.
    clip: async (page) => {
      const dialog = page.getByRole("dialog");
      const clip = await around(page, [
        dialog.locator(":scope > *").first(),
        dialog.getByText("Type { to quickly add a variable."),
      ]);
      return { ...clip, x: clip.x + 1, width: clip.width - 1, height: clip.height + 24 };
    },
  },
  {
    name: "stage-email-preview",
    url: `${APP_URL}/jobs/${jobId}/stages`,
    viewport: { width: 1440, height: 1500 },
    prepare: openStageEmail,
    // Inside the preview's border.
    clip: (page) => around(page, [page.locator("iframe[title='Preview of the email']").locator("xpath=../..")], -1),
  },
  {
    name: "careers-code",
    // Shown on the website's dark "Design in code" section.
    themes: ["dark"],
    url: `${APP_URL}/careers-page/code`,
    viewport: { width: 1280, height: 760 },
  },
  {
    name: "careers-page",
    url: CAREERS_URL,
    themes: ["light"],
  },
  {
    name: "careers-job-mobile",
    themes: ["light"],
    viewport: { width: 390, height: 844 },
    prepare: async (page) => {
      await page.goto(CAREERS_URL);
      const href = await page.getByRole("link", { name: JOB_TITLE }).first().getAttribute("href");
      await page.goto(new URL(href, CAREERS_URL).href);
      await settle(page);
    },
  },
];

// The blog post "How to customize your careers page with code or AI"
// (src/content/blog/2026-10-22-how-to-customize-your-careers-page-with-code-or-ai.mdx), taken with `ONLY=post`. These
// shots follow the post's steps in one page, so they change the sample
// company's careers page code as they go: first the editor's example edits,
// then the redesign Claude made on claude.ai (kept in
// scripts/fixtures/careers-page-redesign/). The code is put back afterwards.
// The post's two claude.ai shots were taken by hand.

const POST_DIR = new URL("../src/content/blog/images/customize-careers-page/", import.meta.url);
const REDESIGN_DIR = new URL("./fixtures/careers-page-redesign/", import.meta.url);
/** The ZIP's name in the toast after uploading it, as Claude named it. */
const REDESIGN_ZIP = "careers-page.zip";
const CAREERS_FILES = ["layout.liquid", "jobs.liquid", "job.liquid", "apply.liquid", "applied.liquid", "styles.css"];
const EDITOR = { width: 1400, height: 860 };
const FONT_LINK =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&display=swap">';

/**
 * Adds room to a shot's edges, in points, by repeating their pixels. For
 * crops whose content sits close to the page's edge, where the page itself
 * has nothing more to show.
 */
async function extendEdges(file, edges) {
  const image = await sharp(fileURLToPath(file))
    .extend({ top: 0, right: 0, bottom: 0, left: 0, ...scaled(edges), extendWith: "copy" })
    .toBuffer();
  await writeFile(file, image);
}

/** Points to the shots' pixels. */
function scaled(edges) {
  return Object.fromEntries(Object.entries(edges).map(([edge, points]) => [edge, points * SCALE]));
}

/** Calls the app's API from a page on it, with the page's session. */
function api(page, method, path, body) {
  return page.evaluate(
    async ([method, path, body]) => {
      const response = await fetch(path, {
        method,
        headers: body ? { "content-type": "application/json" } : {},
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!response.ok) throw new Error(`${method} ${path}: ${response.status} ${await response.text()}`);
      return response.status === 204 ? null : response.json();
    },
    [method, path, body],
  );
}

async function press(page, key, times = 1) {
  for (let i = 0; i < times; i++) await page.keyboard.press(key);
}

/** Puts the cursor in the open file's first line that contains `text`. */
async function clickLine(page, text) {
  await page.locator(".cm-line", { hasText: text }).first().click();
}

/** Waits for the editor's preview to catch up with the code. */
async function waitForPreview(page) {
  // The preview waits for typing to pause before it updates.
  await page.waitForTimeout(800);
  await page.getByText("Updating…").waitFor({ state: "hidden" });
  await page.frameLocator("iframe[title='Preview of your careers page']").locator("body").waitFor();
  await settle(page);
}

/** Scrolls the code back to the left, which the cursor may have moved. */
async function scrollCodeLeft(page) {
  await page.locator(".cm-scroller").evaluate((scroller) => {
    scroller.scrollLeft = 0;
  });
}

/** The redesign's files as a ZIP, like the one Claude sent back. */
async function redesignZip() {
  const dir = await mkdtemp(path.join(tmpdir(), "emploist-"));
  const zip = path.join(dir, REDESIGN_ZIP);
  const files = CAREERS_FILES.map((name) => fileURLToPath(new URL(name, REDESIGN_DIR)));
  await promisify(execFile)("zip", ["-j", "-q", zip, ...files]);
  return zip;
}

/**
 * The post's cover and link preview, 1200 × 630: the editor with the new
 * font, and the redesigned page on a phone.
 */
async function drawCover() {
  const asDataUrl = async (name) =>
    `data:image/png;base64,${(await readFile(new URL(`${name}.png`, POST_DIR))).toString("base64")}`;
  const [editor, phone] = await Promise.all([asDataUrl("editor-font"), asDataUrl("careers-after-mobile")]);
  const html = `<!doctype html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 55%, #ede9fe 100%);
  }
  .window {
    position: absolute; left: 64px; top: 72px; width: 820px;
    overflow: hidden; border: 1px solid #d9d9d9; background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 0.04), 0 30px 60px -16px rgb(40 30 120 / 0.28);
  }
  .bar { display: flex; gap: 6px; align-items: center; height: 30px; padding: 0 12px; background: #f5f5f5; border-bottom: 1px solid #d9d9d9; }
  .bar span { width: 8px; height: 8px; background: #c4c4c4; }
  .window img { display: block; width: 100%; }
  .phone {
    position: absolute; right: 72px; top: 44px; width: 270px; height: 560px;
    border: 8px solid #18181b; border-radius: 40px; background: #18181b; overflow: hidden;
    box-shadow: 0 30px 60px -12px rgb(24 24 27 / 0.45);
  }
  .phone img { display: block; width: 100%; border-radius: 32px; }
</style>
</head>
<body>
  <div class="window"><div class="bar"><span></span><span></span><span></span></div><img src="${editor}"></div>
  <div class="phone"><img src="${phone}"></div>
</body>
</html>`;
  // At 2x, since the post shows its cover up to 64rem wide.
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: SCALE });
  await page.setContent(html);
  await page.screenshot({ path: new URL("cover.png", POST_DIR).pathname });
  await page.close();
  console.log("Saved cover.png");
}

async function postShots(storageState) {
  await mkdir(POST_DIR, { recursive: true });
  const context = await browser.newContext({
    storageState,
    colorScheme: "light",
    viewport: DESKTOP,
    deviceScaleFactor: SCALE,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const shot = async (name, clip, fullPage = false) => {
    await page.screenshot({ path: new URL(`${name}.png`, POST_DIR).pathname, clip, fullPage, animations: "disabled" });
    console.log(`Saved ${name}.png`);
  };

  await page.goto(`${APP_URL}/careers-page/design`);
  const { files: original } = await api(page, "GET", "/api/careers-page");
  const { files: defaults } = await api(page, "GET", "/api/careers-page/default-code");
  try {
    await api(page, "PUT", "/api/careers-page/code", { files: defaults });

    await page.goto(CAREERS_URL);
    await settle(page);
    await shot("careers-before");

    await page.setViewportSize({ width: 1280, height: 880 });
    await page.goto(`${APP_URL}/careers-page/design`);
    await settle(page);
    await shot("design-tab");
    // Wide enough for every file's tab to fit above the code.
    await page.setViewportSize(EDITOR);

    await page.goto(`${APP_URL}/careers-page/code`);
    await waitForPreview(page);
    await shot("editor");

    // The headline: "Join Fieldnote Labs" → "Build what's next at Fieldnote Labs".
    await page.getByRole("tab", { name: "jobs.liquid" }).click();
    await clickLine(page, "hero-title");
    await press(page, "End");
    await press(page, "ArrowLeft", "{{ company.name }}</h1>".length + 1);
    await press(page, "Shift+ArrowLeft", "Join".length);
    await page.keyboard.insertText("Build what's next at");
    await scrollCodeLeft(page);
    await waitForPreview(page);
    await shot("editor-headline");

    // The font: load Fraunces from Google Fonts, then put it first in --font.
    await page.getByRole("tab", { name: "layout.liquid" }).click();
    await clickLine(page, "stylesheet_url");
    await press(page, "Home");
    await page.keyboard.insertText(FONT_LINK);
    await press(page, "Enter");
    await page.getByRole("tab", { name: "styles.css" }).click();
    await clickLine(page, "--font:");
    await press(page, "Home");
    await press(page, "ArrowRight", "--font: ".length);
    await page.keyboard.insertText('"Fraunces", ');
    await scrollCodeLeft(page);
    await waitForPreview(page);
    await shot("editor-font");

    await page.getByRole("button", { name: "Mobile" }).click();
    await settle(page);
    await shot("editor-mobile");
    await page.getByRole("button", { name: "Desktop" }).click();

    // A mistake: delete the {% endif %} that closes the description's {% if %}.
    await page.getByRole("tab", { name: "jobs.liquid" }).click();
    await clickLine(page, "endif");
    await press(page, "End");
    await press(page, "Shift+Home");
    await press(page, "Backspace");
    await waitForPreview(page);
    await page.getByRole("region", { name: "Problems" }).waitFor();
    await scrollCodeLeft(page);
    await shot("editor-problem");
    await press(page, "ControlOrMeta+z");
    await waitForPreview(page);
    await page.getByRole("region", { name: "Problems" }).waitFor({ state: "hidden" });

    await page.getByRole("button", { name: "Reference" }).click();
    await page.getByRole("dialog").waitFor();
    await settle(page);
    await shot("editor-reference");
    await press(page, "Escape");
    await page.getByRole("dialog").waitFor({ state: "hidden" });

    await page.getByRole("button", { name: "More actions" }).click();
    const menu = page.getByRole("menu");
    await menu.waitFor();
    await settle(page);
    const box = await menu.boundingBox();
    await shot("editor-menu", {
      x: EDITOR.width - 640,
      y: 0,
      width: 640,
      height: box.y + box.height + 24,
    });
    // The toolbar sits close to the page's top and right edges, so the
    // post's rounded frame would crowd it: give it room there.
    await extendEdges(new URL("editor-menu.png", POST_DIR), { top: 14, right: 12 });
    await press(page, "Escape");

    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page.getByText("Code saved").waitFor();

    // Upload the redesign on the Design tab, which opens it in the editor.
    await page.goto(`${APP_URL}/careers-page/design`);
    await settle(page);
    await page.locator("input[type=file]").setInputFiles(await redesignZip());
    const toasts = page.getByRole("dialog").filter({ hasText: `from ${REDESIGN_ZIP}` });
    await toasts.first().waitFor();
    // Hovering the toast keeps it open while the preview loads. In development
    // the app shows it twice (React's Strict Mode), so close the other one.
    await toasts.first().hover();
    await page.waitForTimeout(500);
    if ((await toasts.count()) > 1) await toasts.last().getByRole("button", { name: "Dismiss" }).click();
    await toasts.first().hover();
    await waitForPreview(page);
    await shot("editor-upload");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page.getByText("Code saved").waitFor();

    // The page down to the end of the redesign's "Why join us" section.
    await page.setViewportSize(DESKTOP);
    await page.goto(CAREERS_URL);
    await settle(page);
    const why = await page.locator("#why-join").boundingBox();
    await shot("careers-after", { x: 0, y: 0, width: DESKTOP.width, height: why.y + why.height + 64 }, true);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(CAREERS_URL);
    await settle(page);
    await shot("careers-after-mobile");

    await drawCover();
  } finally {
    await page.goto(`${APP_URL}/careers-page/design`);
    await api(page, "PUT", "/api/careers-page/code", { files: original });
    await context.close();
  }
}

// The blog post "How to manage hiring from Claude with MCP"
// (src/content/blog/2026-11-12-how-to-manage-hiring-from-claude-with-mcp.mdx), taken with
// `ONLY=mcp-post`. These are Emploist's side of connecting Claude: the page
// that asks to allow it, the MCP page with Claude connected, MCP in Settings,
// and the comment Claude left in the post's chat. Start the app with
// MCP_URL=https://mcp.emploist.com, so the MCP page shows Emploist's real
// address. The post's claude.ai shots were taken separately (see the README).

const MCP_POST_DIR = new URL("../src/content/blog/images/manage-hiring-from-claude/", import.meta.url);
/** The app's MCP_URL: the address assistants sign in for. */
const MCP_URL = process.env.MCP_URL ?? "https://mcp.emploist.com";
/** Where claude.ai takes the sign-in back. The browser is stopped before it gets there. */
const CLAUDE_CALLBACK = "https://claude.ai/api/mcp/auth_callback";
/** The comment Claude left on Sara Nair's application in the post's chat. */
const CLAUDE_COMMENT = (priya) =>
  `<@${priya}> Could you check Sara's answer to "Tell us about a project you're proud of"? It's word-for-word identical to Fatima Lindqvist's (the scheduling tool redesign for 400 warehouse supervisors, three hours down to forty minutes). Worth finding out whether they worked on the same project or something else is going on before we move her forward.`;

/** A PKCE code challenge, which the authorization request needs. */
function codeChallenge() {
  const verifier = randomBytes(32).toString("base64url");
  return createHash("sha256").update(verifier).digest("base64url");
}

/**
 * The post's cover and link preview, 1200 × 630: Emploist's MCP page, and
 * Claude's answer about the last 30 days of hiring in front of it.
 */
async function drawMcpCover() {
  const asDataUrl = async (name) =>
    `data:image/png;base64,${(await readFile(new URL(`${name}.png`, MCP_POST_DIR))).toString("base64")}`;
  const [emploist, claude] = await Promise.all([asDataUrl("emploist-mcp-page"), asDataUrl("claude-hiring-stats")]);
  const html = `<!doctype html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 55%, #ede9fe 100%);
  }
  .window {
    position: absolute; left: 56px; top: 56px; width: 720px; height: 620px;
    overflow: hidden; border: 1px solid #d9d9d9; background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 0.04), 0 30px 60px -16px rgb(40 30 120 / 0.28);
  }
  .bar { display: flex; gap: 6px; align-items: center; height: 30px; padding: 0 12px; background: #f5f5f5; border-bottom: 1px solid #d9d9d9; }
  .bar span { width: 8px; height: 8px; background: #c4c4c4; }
  .window img { display: block; width: 100%; }
  .chat {
    position: absolute; right: 56px; top: 126px; width: 520px;
    border-radius: 16px; overflow: hidden; background: #191919; padding-bottom: 14px;
    box-shadow: 0 30px 60px -12px rgb(24 24 27 / 0.5);
  }
  /* Down to the end of Claude's first paragraph. The image has its own padding. */
  .chat div { height: 374px; overflow: hidden; }
  .chat img { display: block; width: 100%; }
</style>
</head>
<body>
  <div class="window"><div class="bar"><span></span><span></span><span></span></div><img src="${emploist}"></div>
  <div class="chat"><div><img src="${claude}"></div></div>
</body>
</html>`;
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: SCALE });
  await page.setContent(html);
  await page.screenshot({ path: new URL("cover.png", MCP_POST_DIR).pathname });
  await page.close();
  console.log("Saved cover.png");
}

async function mcpPostShots(storageState, jobId) {
  await mkdir(MCP_POST_DIR, { recursive: true });
  const context = await browser.newContext({
    storageState,
    colorScheme: "light",
    viewport: DESKTOP,
    deviceScaleFactor: SCALE,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const shot = async (name, options = {}) => {
    await page.screenshot({ path: new URL(`${name}.png`, MCP_POST_DIR).pathname, animations: "disabled", ...options });
    console.log(`Saved ${name}.png`);
  };
  // Allowing an assistant sends the browser back to claude.ai; stay here.
  await page.route(`${CLAUDE_CALLBACK}**`, (route) => route.fulfill({ status: 200, body: "" }));

  // Start with no assistants connected, then connect one as claude.ai does.
  await page.goto(`${APP_URL}/mcp`);
  const { connections } = await api(page, "GET", "/api/mcp/connections");
  for (const connection of connections) await api(page, "DELETE", `/api/mcp/connections/${connection.id}`);
  const client = await api(page, "POST", "/api/auth/oauth2/register", {
    client_name: "Claude",
    client_uri: "https://claude.ai",
    redirect_uris: [CLAUDE_CALLBACK],
    token_endpoint_auth_method: "none",
    grant_types: ["authorization_code", "refresh_token"],
    response_types: ["code"],
  });
  const authorize = new URL("/api/auth/oauth2/authorize", APP_URL);
  authorize.search = new URLSearchParams({
    response_type: "code",
    client_id: client.client_id,
    redirect_uri: CLAUDE_CALLBACK,
    scope: "emploist offline_access",
    state: "screenshots",
    code_challenge: codeChallenge(),
    code_challenge_method: "S256",
    resource: MCP_URL,
    prompt: "consent",
  }).toString();
  await page.goto(authorize.href);
  const allow = page.getByRole("button", { name: "Allow", exact: true });
  await allow.waitFor();
  await settle(page);
  const heading = page.getByRole("heading", { name: "Allow Claude to use Emploist?" });
  await shot("emploist-consent", {
    clip: await around(page, [page.locator("main img, main svg").first(), heading.locator("xpath=ancestor::*[contains(@class,'border')][1]")], 32),
  });
  await allow.click();
  await page.waitForURL(`${CLAUDE_CALLBACK}**`);

  // The MCP page, with Claude connected and the steps for Claude.
  await page.goto(`${APP_URL}/mcp`);
  await page.getByText("claude.ai").waitFor();
  await settle(page);
  // The whole page in one window, rather than a full-page shot, so the
  // sidebar (as tall as the window) runs all the way down beside it.
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: DESKTOP.width, height });
  await settle(page);
  await shot("emploist-mcp-page");

  // The comment Claude left, as the team sees it in Emploist.
  const { stages } = await api(page, "GET", `/api/jobs/${jobId}`);
  const { applications } = await api(
    page,
    "GET",
    `/api/jobs/${jobId}/applications?${new URLSearchParams({ stage: stages[0].id, q: "Sara Nair" })}`,
  );
  const sara = applications[0].id;
  const { timeline } = await api(page, "GET", `/api/applications/${sara}`);
  if (!JSON.stringify(timeline).includes("word-for-word identical")) {
    const { members } = await api(page, "GET", "/api/members");
    const priya = members.find((member) => member.name === "Priya Shah");
    await api(page, "POST", `/api/applications/${sara}/comments`, { body: CLAUDE_COMMENT(priya.userId) });
  }
  await page.setViewportSize({ width: 1280, height: 1000 });
  await page.goto(`${APP_URL}/jobs/${jobId}/applications/${sara}`);
  const comments = page.getByRole("heading", { name: /^Comments\b/ }).locator("xpath=..");
  const comment = page.getByText("word-for-word identical");
  await comment.waitFor();
  await settle(page);
  // Down to Claude's comment, inside the panel's borders.
  const panel = await around(page, [comments]);
  const commentBox = await comment.boundingBox();
  await shot("emploist-comment", {
    clip: { x: panel.x + 1, y: panel.y, width: panel.width - 2, height: commentBox.y + commentBox.height + 24 - panel.y },
  });

  // MCP in Settings, where admins can turn assistants off for everyone.
  await page.setViewportSize(DESKTOP);
  await page.goto(`${APP_URL}/settings/general`);
  await shot("emploist-settings-mcp", { clip: await settingsGroup(page, "MCP") });

  await context.close();
  await drawMcpCover();
}

/**
 * One group of Settings → General, by its title ("MCP"): the gray title
 * cell and its settings, switch included. Inside the card's borders and
 * under the line between groups, so the website's frame stands in for them.
 */
async function settingsGroup(page, title) {
  const group = page.getByRole("heading", { name: title, exact: true }).locator("xpath=..");
  await group.scrollIntoViewIfNeeded();
  await settle(page);
  const box = await around(page, [group]);
  const line = await group.evaluate((element) => Number.parseFloat(getComputedStyle(element).borderTopWidth) || 0);
  return { ...box, y: box.y + line, height: box.height - line };
}

/** The open dialog, inside its border (a confirmation is an alertdialog). */
async function openDialog(page) {
  const dialog = page.getByRole("dialog").or(page.getByRole("alertdialog")).first();
  await dialog.waitFor();
  await settle(page);
  return around(page, [dialog], -1);
}

/**
 * Docs guide shots — one capture per screen the marketing /docs/ pages show.
 * Named docs-* so they don't overwrite lander shots. Run with ONLY=docs.
 */
const docsShots = (jobId) => [
  {
    name: "docs-jobs",
    url: `${APP_URL}/jobs`,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: "docs-job-details",
    url: `${APP_URL}/jobs/${jobId}/details`,
    viewport: { width: 1440, height: 1000 },
  },
  {
    name: "docs-job-form",
    url: `${APP_URL}/jobs/${jobId}/form`,
    viewport: { width: 1440, height: 1100 },
  },
  {
    name: "docs-job-stages",
    url: `${APP_URL}/jobs/${jobId}/stages`,
    viewport: { width: 1440, height: 1000 },
  },
  {
    name: "docs-job-more",
    url: `${APP_URL}/jobs/${jobId}`,
    viewport: { width: 1440, height: 900 },
    prepare: async (page) => {
      // Job header "…" / More actions next to the Open status control
      const more = page.getByRole("button", { name: /^More/ }).first();
      if (await more.count()) await more.click();
      else await page.locator("button[aria-haspopup='menu']").first().click();
      await settle(page);
    },
  },
  {
    name: "docs-export",
    url: `${APP_URL}/jobs/${jobId}`,
    viewport: { width: 1440, height: 900 },
    prepare: async (page) => {
      const more = page.getByRole("button", { name: /^More/ }).first();
      if (await more.count()) await more.click();
      else await page.locator("button[aria-haspopup='menu']").first().click();
      await page.getByRole("menuitem", { name: /Export applications/i }).waitFor({ timeout: 3000 }).catch(() => {});
      await settle(page);
    },
  },
  {
    name: "docs-application",
    viewport: { width: 1280, height: 1000 },
    prepare: (page) => openFirstApplication(page, jobId),
  },
  {
    name: "docs-application-unranked",
    url: `${APP_URL}/jobs/${jobId}`,
    viewport: { width: 1440, height: 900 },
    prepare: async (page) => {
      // Prefer a row that shows Ranking / Needs credits / Not ranked if present
      const status = page.getByText(/Needs credits|Not ranked|Ranking/i).first();
      if (await status.count()) {
        await status.scrollIntoViewIfNeeded();
        await settle(page);
      }
    },
  },
  {
    name: "docs-notifications",
    url: `${APP_URL}/notifications`,
    viewport: { width: 1280, height: 900 },
  },
  {
    name: "docs-careers-domain",
    url: `${APP_URL}/careers-page/domain`,
    viewport: { width: 1280, height: 1000 },
  },
  {
    name: "docs-careers-change",
    url: `${APP_URL}/careers-page/domain`,
    viewport: { width: 1280, height: 900 },
    prepare: async (page) => {
      const change = page.getByRole("button", { name: /^Change\b/ });
      if (await change.count()) {
        await change.first().click();
        await page.getByRole("dialog").waitFor({ timeout: 3000 }).catch(() => {});
        await settle(page);
      }
    },
    clip: openDialog,
  },
  {
    name: "docs-invite",
    url: `${APP_URL}/settings/members`,
    viewport: { width: 1280, height: 900 },
    prepare: async (page) => {
      const invite = page.getByRole("button", { name: /Invite member|^Invite\b/ });
      if (await invite.count()) {
        await invite.first().click();
        await page.getByRole("dialog").waitFor();
        await settle(page);
      }
    },
    clip: openDialog,
  },
  {
    name: "docs-members",
    url: `${APP_URL}/settings/members`,
    viewport: { width: 1280, height: 900 },
  },
  {
    name: "docs-danger-zone",
    url: `${APP_URL}/settings/danger-zone`,
    viewport: { width: 1280, height: 900 },
  },
  {
    name: "docs-danger-confirm",
    url: `${APP_URL}/settings/danger-zone`,
    viewport: { width: 1280, height: 900 },
    prepare: async (page) => {
      const del = page.getByRole("button", { name: /Delete company/i });
      if (await del.count()) {
        await del.first().click();
        await page.getByRole("alertdialog").waitFor({ timeout: 3000 }).catch(() => {});
        await settle(page);
      }
    },
    clip: openDialog,
  },
  {
    name: "docs-emails",
    url: `${APP_URL}/emails`,
    viewport: { width: 1280, height: 900 },
  },
  {
    name: "docs-email-layout",
    url: `${APP_URL}/emails/layout`,
    viewport: { width: 1440, height: 1000 },
  },
  {
    name: "docs-ai-switch",
    url: `${APP_URL}/settings/general`,
    viewport: { width: 1280, height: 900 },
    clip: (page) => settingsGroup(page, "AI features"),
  },
  {
    name: "docs-email-applicants",
    url: `${APP_URL}/settings/general`,
    viewport: { width: 1280, height: 900 },
    clip: (page) => settingsGroup(page, "Emails"),
  },
  {
    name: "docs-billing",
    url: `${APP_URL}/billing`,
    viewport: { width: 1280, height: 1000 },
  },
];

async function captureShot(shot, storageState) {
  for (const colorScheme of shot.themes ?? ["light"]) {
    const context = await browser.newContext({
      storageState,
      colorScheme,
      viewport: shot.viewport ?? DESKTOP,
      deviceScaleFactor: SCALE,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    if (shot.url) {
      await page.goto(shot.url);
      await settle(page);
    }
    await shot.prepare?.(page);
    const clip = await shot.clip?.(page);
    const file = new URL(`${shot.name}-${colorScheme}.png`, OUT_DIR);
    await page.screenshot({ path: file.pathname, clip, animations: "disabled" });
    console.log(`Saved ${shot.name}-${colorScheme}.png`);
    await context.close();
  }
}

// "covers" redraws both posts' covers from the shots already saved, with no
// need for the app.
if (ONLY?.includes("covers")) {
  await drawCover();
  await drawMcpCover();
  if (ONLY.every((name) => name === "covers")) {
    await browser.close();
    process.exit();
  }
}

const storageState = await signIn();
const jobId = await findJobId(storageState);
await mkdir(OUT_DIR, { recursive: true });

const onlyDocs = Boolean(ONLY?.includes("docs") || ONLY?.some((name) => name.startsWith("docs-")));
const onlyDocsExclusive = ONLY?.length === 1 && ONLY[0] === "docs";
const skipLander = onlyDocsExclusive || (ONLY && ONLY.every((name) => name.startsWith("docs-")));
const skipPost = onlyDocsExclusive || (ONLY && !ONLY.includes("post") && !ONLY.includes("mcp-post"));

if (!skipLander) {
  for (const shot of shots(jobId)) {
    if (ONLY && !ONLY.includes(shot.name)) continue;
    await captureShot(shot, storageState);
  }
}

if (!ONLY || onlyDocs) {
  for (const shot of docsShots(jobId)) {
    if (ONLY && !ONLY.includes("docs") && !ONLY.includes(shot.name)) continue;
    await captureShot(shot, storageState);
  }
}

if ((!ONLY && !skipPost) || ONLY?.includes("post")) await postShots(storageState);
if ((!ONLY && !skipPost) || ONLY?.includes("mcp-post")) await mcpPostShots(storageState, jobId);

await browser.close();
