# Emploist website

The marketing site for [Emploist](https://www.emploist.com): a single landing page
with a blog, in the app's ten languages. It's built with
[Astro](https://astro.build) as static HTML and CSS, with no client-side
framework, so pages load fast and are easy for search engines to read.

## Tech stack

- **Astro 7**, static output, with the Fonts API (self-hosted Inter) and
  `astro:assets` (AVIF and WebP screenshots at several widths)
- **Tailwind CSS 4**, configured in `src/styles/global.css`, with the
  typography plugin for blog posts
- **Markdown and MDX** blog posts in a content collection, with RSS and a
  sitemap
- **Ten languages**, the same as the app's: English, French, German, Spanish,
  Italian, Japanese, Korean, Polish, Turkish, and Indonesian (see
  [Languages](#languages))

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
  components/            Header, footer, SEO tags, screenshots, buttons,
                         the language switcher
    pages/               The home page, blog, post, and 404, in any language
    sections/            The landing page's sections, in page order
  content/blog/          Blog posts (Markdown or MDX), and their
                         translations in a folder per language
  content.config.ts      The blog post frontmatter schema
  i18n/
    locales.ts           The languages, and their addresses
    messages/            The site's words: en.ts, and one file per language
    format.ts            Numbers, prices, dates, and plurals per language
  layouts/               The base layout, and the legal pages' layout
  legal/                 The Terms and Privacy Policy, translated
  lib/
    site.ts              URLs, prices, credits, and the trial
    legal.ts             The English Terms' and Privacy Policy's dates
    blog.ts              Post helpers: sorting, translations, reading time
  pages/                 Routes: home, blog, posts, terms, privacy, 404,
                         rss.xml, robots.txt; [lang]/ has the same for the
                         other languages
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
- For screenshots taken at 2x, write the post in MDX and use
  `src/components/blog/Figure.astro`: it frames the shot like the landing
  page's, adds a caption, and shows it wider than the text on large screens.
- Posts appear on `/blog/`, in `/rss.xml`, and in the sitemap, newest first.
  Each post gets article metadata and structured data for search engines.

## Languages

English is at the root (`/`, `/blog/`); every other language has its own
address (`/fr/`, `/de/blog/`, …), with `hreflang` tags and the sitemap telling
search engines which page is which language. Visitors pick a language from
the globe in the header, the mobile menu, or the footer. Nothing is detected
or remembered: links simply keep you in the language you're reading.

The languages are listed in `src/i18n/locales.ts`, `astro.config.mjs`,
`src/content.config.ts` (the translations' folders), and `vercel.json` (each
language's 404 page). They match `LANGUAGES` in the app's
`packages/shared/src/languages.ts`.

**Words.** Everything the site says is in `src/i18n/messages/en.ts`, and in
the same shape in each language's file there. When you change or add a
message in English, change it in every language too: `npm run check` fails if
a language is missing a message. Messages that include prices, counts, or
dates are functions, so each language can order the words its own way and
format numbers its own way (`f.usd`, `f.number`, `f.percent`, `f.plural`).
Use the same words as the app's translations
(`packages/shared/src/locales/<language>/`), in the same tone: French vous,
German Sie, Spanish tú, Italian tu, Polish ty, Turkish siz, Indonesian Anda,
Japanese です・ます, Korean 해요체.

**Blog posts.** A translation goes in `src/content/blog/<language>/`, with the
same file name as the English post (`src/content/blog/fr/hiring-checklist.md`
is published at `/fr/blog/hiring-checklist/`). Until a post is translated,
each language's blog lists it in English, marked "In English". Links inside a
translated post need the language prefix (`/fr/#pricing`), and links to its
own headings use the ids of the translated headings.

**Terms and Privacy.** The English pages in `src/pages/` are the binding
versions; the translations are in `src/legal/<language>/`, with a notice that
the English applies. When you change an English document, update its date in
`src/lib/legal.ts`. Each translation records the date it was translated from
(`translatedFrom`), and shows readers that a newer English version exists
until it's translated again and its `translatedFrom` updated.

**Not translated:** the app screenshots and the link preview image, which
show the app in English.

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

The same script takes the screenshots in the "How to customize your careers
page with code or AI" post (`ONLY=post`), and draws its cover. It edits the
sample company's careers page code as it goes, using the redesign in
`scripts/fixtures/careers-page-redesign/` (made by Claude on claude.ai), then
puts the code back. The post's two claude.ai screenshots were taken by hand.

## Keeping facts in sync

Prices, credits, and the trial live in `src/lib/site.ts`, and the FAQ in
`faq` in each language's messages (`src/i18n/messages/`), which fill in the
numbers from `site.ts`. They mirror `packages/shared/src/billing.ts` in the
app's repository, so update both together.

## SEO

- Every page has a title, description, canonical URL, Open Graph and Twitter
  tags, and a theme color.
- The home page has structured data for the organization, website, software
  application (with its price), and FAQ. Posts have `BlogPosting` and
  breadcrumb data.
- `sitemap-index.xml`, `robots.txt`, and `rss.xml` are generated on build.

## Deploying

`npm run build` writes a static site to `dist/`, which any static host can
serve (Cloudflare Pages, Netlify, Vercel, S3 with CloudFront, and so on).

- Pages are folders (`blog/index.html`), and links end with a slash
  (`/blog/`). Most hosts serve these as they are.
- Serve `dist/404.html` for missing pages, and `dist/<language>/404/index.html`
  for missing pages under a language's address. On Vercel, `vercel.json` does
  this.
- Files in `dist/_astro/` have a hash in their name, so cache them for a year
  (`Cache-Control: public, max-age=31536000, immutable`). Cache HTML for a short
  time, or not at all, so updates show up right away.
- The site is at `https://www.emploist.com` (`site` in `astro.config.mjs`). If that
  changes, update it there and in `src/lib/site.ts`.
