#!/usr/bin/env node
/**
 * Pull Support guide copy from the emploist app repo into src/data/docs/support/.
 *
 * Usage:
 *   node scripts/sync-docs.mjs
 *   EMPLOIST_APP=/path/to/emploist node scripts/sync-docs.mjs
 *
 * Defaults to a sibling ../emploist checkout, then falls back to GitHub raw.
 */
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src/data/docs/support");
const locales = ["en", "fr", "de", "es", "it", "ja", "ko", "pl", "tr", "id"];

const localApp = process.env.EMPLOIST_APP ?? join(root, "..", "emploist");
const localLocales = join(localApp, "packages/shared/src/locales");

mkdirSync(outDir, { recursive: true });

async function sync() {
  if (existsSync(join(localLocales, "en/support.json"))) {
    for (const locale of locales) {
      copyFileSync(join(localLocales, locale, "support.json"), join(outDir, `${locale}.json`));
    }
    console.log(`Synced docs from ${localLocales}`);
    return;
  }

  const base =
    "https://raw.githubusercontent.com/navan-ct/emploist/main/packages/shared/src/locales";
  for (const locale of locales) {
    const url = `${base}/${locale}/support.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    writeFileSync(join(outDir, `${locale}.json`), await res.text());
  }
  console.log("Synced docs from GitHub (navan-ct/emploist)");
}

sync().catch((err) => {
  console.error(err);
  process.exit(1);
});
