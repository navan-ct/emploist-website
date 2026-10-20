# Emploist website

The marketing site for [Emploist](https://emploist.com): a single landing page
with a blog. It's built with [Astro](https://astro.build) as static HTML and
CSS, with no client-side framework, so pages load fast and are easy for search
engines to read.

## Tech stack

- **Astro 7**, static output, with the Fonts API (self-hosted Inter) and
  `astro:assets` (AVIF and WebP screenshots at several widths)
- **Tailwind CSS 4**, configured in `src/styles/global.css`, with the
  typography plugin for blog posts
- **Markdown and MDX** blog posts in a content collection, with RSS and a
  sitemap

## Getting started

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Start the dev server on port 4321                      |
| `npm run build`   | Type-check, then build the site into `dist/`           |
| `npm run preview` | Serve the built site from `dist/`                      |
| `npm run check`   | Type-check Astro and TypeScript files                  |

## Project structure

```
public/                  Favicons, and og.png (the link preview image)
scripts/
  screenshots.mjs        Takes the app screenshots from a local Emploist app
  og-image.mjs           Draws public/og.png
src/
  assets/screenshots/    App screenshots
  components/            Header, footer, SEO tags, screenshots, buttons
    sections/            The landing page's sections, in page order
  content/blog/          Blog posts (Markdown or MDX)
  content.config.ts      The blog post frontmatter schema
  layouts/               The base layout, and the legal pages' layout
  lib/
    site.ts              URLs, prices, credits, and the trial
    faq.ts               The FAQ (also sent to search engines)
    blog.ts              Post helpers: sorting, dates, reading time
  pages/                 Routes: home, blog, posts, terms, privacy, 404,
                         rss.xml, robots.txt
  styles/global.css      Design tokens and shared styles
```

## Writing a blog post

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/`. Its file
name becomes its address: `hiring-checklist.md` is published at
`/blog/hiring-checklist/`.

```markdown
---
title: "A hiring checklist for small teams"
description: "What to prepare before you post your first job, from the job description to your interview stages."
pubDate: 2026-11-03
# Optional:
updatedDate: 2026-11-10
author: "Priya Shah"            # defaults to "The Emploist team"
image: ./images/checklist.png   # cover and link preview, 1200 × 630 works best
imageAlt: "A checklist next to a job post"
tags: ["Hiring"]
draft: true                     # shows in `npm run dev` only
---

Your post, in Markdown.
```

- Keep `title` under about 60 characters and `description` between 120 and
  160, since search engines cut longer ones off.
- Put images next to the post (for example in `src/content/blog/images/`) and
  link them with relative paths. Astro optimizes them when it builds.
- Posts appear on `/blog/`, in `/rss.xml`, and in the sitemap, newest first.
  Each post gets article metadata and structured data for search engines.

## Screenshots

The screenshots in `src/assets/screenshots/` come from the Emploist app running
locally with its sample data. When the app's interface changes, take them again:

1. In the app's repository, fill it with sample data (`npm run db:seed`) and
   start it with a higher rate limit, since the script makes many requests:

   ```bash
   RATE_LIMIT_MAX=5000 npm run dev
   ```

2. In this repository, run the script. It needs Google Chrome installed.

   ```bash
   node scripts/screenshots.mjs
   ```

   It signs in as `alex@example.com` and asks for the sign-in code, which the
   app prints in its server log. The session is saved in `.auth/` (ignored by
   Git) so later runs skip this until it expires. To take only some shots, list
   them: `ONLY=match,comments node scripts/screenshots.mjs`.

Each shot is taken at 2x in the app's light theme, except `careers-code`, which
is taken in the dark theme for the dark "Design in code" section. The site
itself is light only.

After changing the match screenshot or the headline, redraw the link preview
image with `node scripts/og-image.mjs`.

## Keeping facts in sync

Prices, credits, and the trial live in `src/lib/site.ts`, and the FAQ in
`src/lib/faq.ts`. They mirror `packages/shared/src/billing.ts` in the app's
repository, so update both together.

## SEO

- Every page has a title, description, canonical URL, Open Graph and Twitter
  tags, and a theme color.
- The home page has structured data for the organization, website, software
  application (with its price), and FAQ. Posts have `BlogPosting` and
  breadcrumb data.
- `sitemap-index.xml`, `robots.txt`, and `rss.xml` are generated on build.
- The Terms and Privacy pages are placeholders, so they're marked `noindex` and
  left out of the sitemap. When their real text is ready, remove `noindex` in
  `src/layouts/LegalLayout.astro` and `NOINDEX_PATHS` in `astro.config.mjs`.

## Deploying

`npm run build` writes a static site to `dist/`, which any static host can
serve (Cloudflare Pages, Netlify, Vercel, S3 with CloudFront, and so on).

- Pages are folders (`blog/index.html`), and links end with a slash
  (`/blog/`). Most hosts serve these as they are.
- Serve `dist/404.html` for missing pages.
- Files in `dist/_astro/` have a hash in their name, so cache them for a year
  (`Cache-Control: public, max-age=31536000, immutable`). Cache HTML for a short
  time, or not at all, so updates show up right away.
- The site is at `https://emploist.com` (`site` in `astro.config.mjs`). If that
  changes, update it there and in `src/lib/site.ts`.
