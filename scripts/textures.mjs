// Draws the site's gradient backgrounds into src/assets/textures/: soft
// ribbons of light in the brand's indigo, from near-black to pale lavender.
// They're smooth, so they're drawn small and scaled up; the fine dot grid and
// grain on top are CSS (.texture in src/styles/global.css), so they stay sharp
// at any size.
//
//   node scripts/textures.mjs
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const OUT = new URL("../src/assets/textures/", import.meta.url);

// Dark to light: the ribbons' cores are the palest.
const RAMP = [
  [0.0, [7, 5, 22]],
  [0.22, [19, 13, 66]],
  [0.4, [42, 30, 156]],
  [0.55, [79, 70, 229]],
  [0.7, [126, 110, 248]],
  [0.83, [192, 174, 255]],
  [0.93, [236, 229, 255]],
  [1.0, [250, 248, 255]],
];

function ramp(v) {
  const t = Math.min(1, Math.max(0, v));
  for (let i = 1; i < RAMP.length; i++) {
    const [p1, c1] = RAMP[i];
    const [p0, c0] = RAMP[i - 1];
    if (t <= p1) {
      const k = (t - p0) / (p1 - p0);
      const s = k * k * (3 - 2 * k);
      return c0.map((c, j) => c + (c1[j] - c) * s);
    }
  }
  return RAMP.at(-1)[1];
}

/**
 * Each ribbon is a wavy band across the image: its center line is
 * y = base + tilt·x + amp·sin(2π·freq·x + phase), and it fades out over
 * `width`. Glows are round spots. All in 0–1 of the image's height, with x
 * running 0 to the aspect ratio.
 */
function draw({ width, height, ribbons = [], glows = [], gain = 1, lift = 0 }) {
  const aspect = width / height;
  const data = Buffer.alloc(width * height * 3);
  for (let py = 0; py < height; py++) {
    const y = py / height;
    for (let px = 0; px < width; px++) {
      const x = (px / width) * aspect;
      let v = 0;
      for (const r of ribbons) {
        const wx = x + 0.06 * Math.sin(3.1 * y + r.phase);
        const center = r.base + r.tilt * wx + r.amp * Math.sin(2 * Math.PI * r.freq * wx + r.phase);
        const d = (y - center) / r.width;
        v += r.weight * Math.exp(-d * d);
      }
      for (const g of glows) {
        const dx = (x - g.x) / g.r;
        const dy = (y - g.y) / g.r;
        v += g.weight * Math.exp(-(dx * dx + dy * dy));
      }
      const value = lift + (1 - Math.exp(-v * gain * 0.8)) * (1 - lift);
      const [r, g, b] = ramp(value);
      const i = (py * width + px) * 3;
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
    }
  }
  return sharp(data, { raw: { width, height, channels: 3 } });
}

const textures = {
  // Behind the hero's screenshot: light along the top and down the right.
  hero: {
    width: 1280,
    height: 640,
    ribbons: [
      { base: -0.05, tilt: 0.02, amp: 0.08, freq: 0.35, phase: 0.6, width: 0.16, weight: 1.6 },
      { base: 0.15, tilt: 0.45, amp: 0.1, freq: 0.3, phase: 2.2, width: 0.12, weight: 0.9 },
      { base: 1.05, tilt: -0.05, amp: 0.06, freq: 0.4, phase: 1.4, width: 0.18, weight: 0.8 },
    ],
    glows: [
      { x: 2.0, y: 0.0, r: 0.35, weight: 2.4 },
      { x: 0.1, y: 1.0, r: 0.4, weight: 0.5 },
    ],
    gain: 1.15,
  },
  // The call to action: dark top left, a bright sweep along the bottom right.
  cta: {
    width: 1280,
    height: 600,
    ribbons: [
      { base: 0.92, tilt: -0.12, amp: 0.1, freq: 0.45, phase: 3.6, width: 0.15, weight: 1.9 },
      { base: 0.02, tilt: 0.02, amp: 0.07, freq: 0.55, phase: 0.4, width: 0.11, weight: 1.0 },
      { base: 0.55, tilt: -0.05, amp: 0.12, freq: 0.3, phase: 1.1, width: 0.22, weight: 0.35 },
    ],
    glows: [
      { x: 1.95, y: 1.0, r: 0.45, weight: 2.6 },
      { x: 2.1, y: 0.05, r: 0.25, weight: 1.6 },
    ],
    gain: 1.05,
  },
  // Tall panels beside a list (AI ranking, stages and emails).
  panel: {
    width: 800,
    height: 900,
    ribbons: [
      { base: 0.12, tilt: 0.15, amp: 0.06, freq: 0.9, phase: 0.2, width: 0.09, weight: 1.4 },
      { base: 0.55, tilt: -0.25, amp: 0.08, freq: 0.7, phase: 2.6, width: 0.12, weight: 0.8 },
      { base: 0.98, tilt: -0.1, amp: 0.07, freq: 0.8, phase: 1.3, width: 0.14, weight: 1.5 },
    ],
    glows: [
      { x: 0.85, y: 0.95, r: 0.3, weight: 1.6 },
      { x: 0.0, y: 0.1, r: 0.25, weight: 0.8 },
    ],
    gain: 1.0,
  },
  // A second panel, flowing the other way, so neighbors don't repeat.
  "panel-alt": {
    width: 800,
    height: 900,
    ribbons: [
      { base: 0.85, tilt: 0.1, amp: 0.08, freq: 0.75, phase: 1.9, width: 0.11, weight: 1.6 },
      { base: 0.35, tilt: 0.3, amp: 0.07, freq: 0.6, phase: 0.4, width: 0.1, weight: 0.9 },
      { base: 0.0, tilt: 0.05, amp: 0.05, freq: 0.9, phase: 2.9, width: 0.1, weight: 1.2 },
    ],
    glows: [
      { x: 0.05, y: 0.9, r: 0.32, weight: 1.4 },
      { x: 0.9, y: 0.02, r: 0.22, weight: 1.2 },
    ],
    gain: 1.0,
  },
  // "Design in code": mostly dark, for the dark editor screenshot.
  code: {
    width: 1280,
    height: 800,
    ribbons: [
      { base: 0.04, tilt: 0.03, amp: 0.06, freq: 0.4, phase: 2.0, width: 0.12, weight: 1.3 },
      { base: 0.7, tilt: -0.2, amp: 0.1, freq: 0.35, phase: 0.8, width: 0.18, weight: 0.45 },
    ],
    glows: [
      { x: 0.0, y: 0.0, r: 0.4, weight: 1.6 },
      { x: 1.6, y: 1.0, r: 0.4, weight: 0.9 },
    ],
    gain: 1.0,
  },
};

await mkdir(OUT, { recursive: true });
const only = process.env.ONLY?.split(",");
for (const [name, options] of Object.entries(textures)) {
  if (only && !only.includes(name)) continue;
  await draw(options)
    .webp({ quality: 92, smartSubsample: true })
    .toFile(new URL(`${name}.webp`, OUT).pathname);
  console.log(`src/assets/textures/${name}.webp`);
}
