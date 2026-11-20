// Draws public/og.png, the 1200 × 630 image that link previews show (Open
// Graph and Twitter cards), from the HTML below. Run it after changing the
// match screenshot, the panel texture, or the headline:
//
//   node scripts/og-image.mjs

import { readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const root = new URL("../", import.meta.url);
const asDataUrl = async (path, type) =>
  `data:${type};base64,${(await readFile(new URL(path, root))).toString("base64")}`;

const sans = await asDataUrl("node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2", "font/woff2");
const mono = await asDataUrl(
  "node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2",
  "font/woff2",
);
const match = await asDataUrl("src/assets/screenshots/match-light.png", "image/png");
const texture = await asDataUrl("src/assets/textures/panel.webp", "image/webp");

// The site's look: a light gray page between hatched rails, hairlines, and a
// gradient panel (see .rails, .rule-t, and .texture in src/styles/global.css).
const html = `<!doctype html>
<html>
<head>
<style>
  @font-face { font-family: Geist; src: url(${sans}) format("woff2"); font-weight: 100 900; }
  @font-face { font-family: "Geist Mono"; src: url(${mono}) format("woff2"); font-weight: 100 900; }
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    font-family: Geist, sans-serif; background: #f5f5f5; color: #0d0d0d;
    -webkit-font-smoothing: antialiased;
  }
  .line { position: absolute; left: 0; right: 0; height: 1px; background: #d9d9d9; }
  .rail {
    position: absolute; top: 0; bottom: 0; width: 24px; z-index: 2;
    border-inline: 1px solid #d9d9d9; background: #f5f5f5;
    background-image: repeating-linear-gradient(-45deg, #c4c4c4 0 1px, transparent 1px 6px);
  }
  .text { position: absolute; left: 88px; top: 92px; width: 520px; }
  .brand { display: flex; align-items: center; gap: 12px; font-size: 30px; font-weight: 500; letter-spacing: -0.045em; }
  .tag {
    display: inline-flex; align-items: center; gap: 10px; margin-top: 64px; padding: 6px 12px;
    border: 1px solid #d9d9d9; font: 15px/1 "Geist Mono", monospace; text-transform: uppercase; letter-spacing: 0.02em;
  }
  .tag::before { content: ""; width: 9px; height: 9px; background: #4f46e5; }
  h1 { margin-top: 24px; font-size: 66px; line-height: 1.02; font-weight: 400; letter-spacing: -0.055em; }
  p { margin-top: 22px; font-size: 23px; line-height: 1.45; color: #616161; letter-spacing: -0.022em; }
  .url { position: absolute; left: 88px; bottom: 76px; font: 18px/1 "Geist Mono", monospace; text-transform: uppercase; color: #4f46e5; }
  .stage { position: absolute; left: 640px; right: 64px; top: 48px; bottom: 48px; overflow: hidden; background: url(${texture}) center / cover; }
  .stage::after {
    content: ""; position: absolute; inset: 0; mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3'%3E%3Cpath d='M0 2h3v1H0zM2 0h1v2H2z' fill='%23000' fill-opacity='.2'/%3E%3C/svg%3E");
  }
  .card {
    position: absolute; left: 36px; right: 36px; top: 50%; transform: translateY(-50%); z-index: 1;
    border: 1px solid #d9d9d9; background: #fff; box-shadow: 0 32px 64px -24px rgb(0 0 0 / 0.6);
  }
  .card img { display: block; width: 100%; }
</style>
</head>
<body>
  <div class="line" style="top: 48px"></div>
  <div class="line" style="bottom: 48px"></div>
  <div class="rail" style="left: 40px"></div>
  <div class="rail" style="right: 40px"></div>
  <div class="text">
    <div class="brand">
      <svg viewBox="0 0 64 64" width="40" height="40">
        <rect width="64" height="64" rx="16" fill="#4f46e5"/>
        <g fill="#fff">
          <rect x="15" y="17" width="34" height="8" rx="4"/>
          <rect x="15" y="28" width="24" height="8" rx="4" opacity="0.7"/>
          <rect x="15" y="39" width="14" height="8" rx="4" opacity="0.42"/>
        </g>
      </svg>
      Emploist
    </div>
    <div class="tag">Applicant tracking, ranked by AI</div>
    <h1>See your best applicants first.</h1>
    <p>A careers page, a hiring pipeline, and AI that ranks every application.</p>
  </div>
  <div class="url">emploist.com</div>
  <div class="stage"><div class="card"><img src="${match}"></div></div>
</body>
</html>`;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: new URL("public/og.png", root).pathname });
await browser.close();
console.log("Saved public/og.png");
