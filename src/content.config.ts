import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Blog posts: Markdown or MDX files in src/content/blog/. The file name is the
// post's address, e.g. hiring-checklist.md → /blog/hiring-checklist/.
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      /** Shown on the page and in search results. Aim for under 60 characters. */
      title: z.string(),
      /** The summary under the title, in search results, and in link previews. Aim for 120 to 160 characters. */
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("The Emploist team"),
      /** A cover image next to the post, also used for link previews. 1200 × 630 works best. */
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      /** Drafts show while running `npm run dev`, but aren't built or listed. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
