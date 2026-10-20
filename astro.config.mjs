// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// Pages that shouldn't be indexed yet: the legal pages are placeholders.
const NOINDEX_PATHS = ["/terms/", "/privacy/"];

export default defineConfig({
  site: "https://emploist.com",
  // Pages build to folders (blog/index.html), which every static host serves
  // at /blog/, so links and canonical URLs end with a slash.
  trailingSlash: "always",
  build: {
    // The CSS is small, so inline it and save a render-blocking request.
    inlineStylesheets: "always",
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: {
        variants: [
          {
            // Weight and optical size axes: large text gets Inter's display cut.
            src: ["@fontsource-variable/inter/files/inter-latin-opsz-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
