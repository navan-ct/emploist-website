// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// The website's languages, as in src/i18n/locales.ts. English is at the root;
// the others are under /fr/, /de/, and so on.
const locales = ["en", "fr", "de", "es", "it", "ja", "ko", "pl", "tr", "id"];

/** Old blog slugs → title-based slugs (keep old URLs working). */
const blogSlugRedirects = {
  "manage-hiring-from-claude": "how-to-manage-hiring-from-claude-with-mcp",
  "customize-careers-page": "how-to-customize-your-careers-page-with-code-or-ai",
};

/** `/blog/old/` and `/fr/blog/old/` → new title slugs, for every language. */
const redirects = Object.fromEntries(
  Object.entries(blogSlugRedirects).flatMap(([from, to]) =>
    locales.map((locale) => {
      const prefix = locale === "en" ? "" : `/${locale}`;
      return [`${prefix}/blog/${from}/`, `${prefix}/blog/${to}/`];
    }),
  ),
);

export default defineConfig({
  site: "https://www.emploist.com",
  // Pages build to folders (blog/index.html), which every static host serves
  // at /blog/, so links and canonical URLs end with a slash.
  trailingSlash: "always",
  redirects,
  build: {
    // The CSS is small, so inline it and save a render-blocking request.
    inlineStylesheets: "always",
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    // Lists each page's other languages, for search engines.
    sitemap({
      // Each language's 404 page (/fr/404/, …) is only for missing pages.
      filter: (page) => !page.endsWith("/404/"),
      i18n:{ defaultLocale: "en", locales: Object.fromEntries(locales.map((locale) => [locale, locale])) },
    }),
  ],
  fonts: [
    {
      // Text: Geist, self-hosted.
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/geist/files/geist-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
            unicodeRange: ["U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"],
          },
          {
            // Polish and Turkish letters (ł, ś, ğ, ş, …). Browsers download it
            // only for pages that use them, and BaseLayout preloads it there.
            src: ["@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
            unicodeRange: ["U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"],
          },
        ],
      },
    },
    {
      // Labels and buttons: Geist Mono.
      provider: fontProviders.local(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      fallbacks: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
            unicodeRange: ["U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"],
          },
          {
            // Polish and Turkish letters (ł, ś, ğ, ş, …). Browsers download it
            // only for pages that use them, and BaseLayout preloads it there.
            src: ["@fontsource-variable/geist-mono/files/geist-mono-latin-ext-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
            unicodeRange: ["U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
