// Draws public/og.png, the 1200 × 630 image that link previews show (Open
// Graph and Twitter cards), from the HTML below. Run it after changing the
// match screenshot or the headline:
//
//   node scripts/og-image.mjs

import { readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const root = new URL("../", import.meta.url);
const asDataUrl = async (path, type) =>
  `data:${type};base64,${(await readFile(new URL(path, root))).toString("base64")}`;

const font = await asDataUrl("node_modules/@fontsource-variable/inter/files/inter-latin-opsz-normal.woff2", "font/woff2");
const match = await asDataUrl("src/assets/screenshots/match-light.png", "image/png");

const html = `<!doctype html>
<html>
<head>
<style>
  @font-face { font-family: Inter; src: url(${font}) format("woff2"); font-weight: 100 900; }
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    font-family: Inter, sans-serif; font-feature-settings: "cv11", "ss01";
    background: #fff; color: #09090b; -webkit-font-smoothing: antialiased;
  }
  .text { position: absolute; left: 72px; top: 64px; width: 560px; }
  .brand { display: flex; align-items: center; gap: 12px; font-size: 30px; font-weight: 600; letter-spacing: -0.02em; }
  h1 { margin-top: 96px; font-size: 68px; line-height: 1.02; font-weight: 600; letter-spacing: -0.04em; }
  p { margin-top: 24px; font-size: 24px; line-height: 1.45; color: #52525c; letter-spacing: -0.01em; }
  .url { position: absolute; left: 72px; bottom: 56px; font-size: 20px; font-weight: 500; color: #4f39f6; }
  .stage {
    position: absolute; left: 676px; top: 0; right: 0; bottom: 0;
    background: #f7f7f8; border-left: 1px solid #e4e4e7;
  }
  .card {
    position: absolute; left: 56px; top: 150px; width: 660px;
    border-radius: 18px; overflow: hidden; border: 1px solid #e4e4e7; background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 0.04), 0 30px 60px -16px rgb(40 30 120 / 0.25);
  }
  .card img { display: block; width: 100%; }
</style>
</head>
<body>
  <div class="text">
    <div class="brand">
      <svg viewBox="0 0 64 64" width="44" height="44">
        <rect width="64" height="64" rx="14" fill="#4f39f6"/>
        <g fill="#fff">
          <rect x="16" y="18" width="32" height="7" rx="3.5"/>
          <rect x="16" y="28.5" width="24" height="7" rx="3.5" opacity="0.72"/>
          <rect x="16" y="39" width="16" height="7" rx="3.5" opacity="0.45"/>
        </g>
      </svg>
      Emploist
    </div>
    <h1>See your best applicants first.</h1>
    <p>Applicant tracking with a careers page and AI that ranks every application.</p>
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
