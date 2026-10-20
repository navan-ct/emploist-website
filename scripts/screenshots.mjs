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
//                                     (default http://northwind.localhost:3000)
//   SIGN_IN_EMAIL  who to sign in as  (default alex@example.com)
//   JOB_TITLE      the job to show    (default Senior Product Designer)
//   ONLY           names of shots to take, comma-separated (default all)

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { chromium } from "playwright-core";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";
const CAREERS_URL = process.env.CAREERS_URL ?? "http://northwind.localhost:3000";
const EMAIL = process.env.SIGN_IN_EMAIL ?? "alex@example.com";
const JOB_TITLE = process.env.JOB_TITLE ?? "Senior Product Designer";
const ONLY = process.env.ONLY?.split(",").map((name) => name.trim());

const AUTH_FILE = new URL("../.auth/screenshots.json", import.meta.url);
const OUT_DIR = new URL("../src/assets/screenshots/", import.meta.url);
const SCALE = 2;
const DESKTOP = { width: 1280, height: 800 };

const browser = await chromium.launch({ channel: "chrome" });

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

/** A rectangle around the boxes of the given locators, with padding. */
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

/** Opens the Interviewing stage's email panel and waits for its preview. */
async function openStageEmail(page) {
  const row = page.locator("li, [role='listitem'], div").filter({ hasText: /^Interviewing/ }).last();
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
    viewport: { width: 1440, height: 1040 },
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
    viewport: { width: 1280, height: 680 },
    prepare: async (page) => {
      await openFirstApplication(page, jobId);
      // Start a comment that mentions a teammate, so the suggestions show.
      await page.locator(".tiptap[contenteditable=true]").last().click();
      await page.keyboard.type("Strong portfolio. What do you think, @Pri", { delay: 20 });
      await page.getByRole("option", { name: /Priya Shah/ }).waitFor();
      await settle(page);
    },
    clip: (page) =>
      around(page, [page.getByRole("heading", { name: "Comments", exact: true }).locator("xpath=..")]),
  },
  {
    name: "form",
    viewport: { width: 1280, height: 1400 },
    url: `${APP_URL}/jobs/${jobId}/form`,
    clip: (page) =>
      around(page, [
        page.getByText("Full name", { exact: true }).first().locator("xpath=ancestor::*[contains(@class,'rounded')][1]"),
        page.getByText("Which tools do you use most?").first().locator("xpath=ancestor::*[contains(@class,'rounded')][1]"),
      ], 20),
  },
  {
    name: "stage-email",
    url: `${APP_URL}/jobs/${jobId}/stages`,
    viewport: { width: 1440, height: 1500 },
    prepare: openStageEmail,
    clip: async (page) => {
      const dialog = page.getByRole("dialog");
      const clip = await around(page, [
        dialog.locator(":scope > *").first(),
        dialog.getByText("Type { to quickly add a variable."),
      ]);
      return { ...clip, height: clip.height + 24 };
    },
  },
  {
    name: "stage-email-preview",
    url: `${APP_URL}/jobs/${jobId}/stages`,
    viewport: { width: 1440, height: 1500 },
    prepare: openStageEmail,
    clip: (page) => around(page, [page.locator("iframe[title='Preview of the email']").locator("xpath=../..")]),
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

const storageState = await signIn();
const jobId = await findJobId(storageState);
await mkdir(OUT_DIR, { recursive: true });

for (const shot of shots(jobId)) {
  if (ONLY && !ONLY.includes(shot.name)) continue;
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

await browser.close();
