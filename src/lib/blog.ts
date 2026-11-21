import { type CollectionEntry, getCollection } from "astro:content";
import { DEFAULT_LOCALE, type Locale, localizePath, type TranslatedLocale } from "../i18n/locales";

export type Post = CollectionEntry<"blog">;
export type PostTranslation = CollectionEntry<"blogTranslations">;

/** `2026-10-12-hiring-checklist` → `hiring-checklist`. */
const DATED_SLUG = /^(\d{4}-\d{2}-\d{2})-(.+)$/;

/**
 * The public slug for a post file id. Dated file names keep the date in the
 * content folder; URLs stay `/blog/hiring-checklist/`.
 */
export function postSlug(id: string): string {
  const base = id.includes("/") ? id.slice(id.indexOf("/") + 1) : id;
  const match = base.match(DATED_SLUG);
  return match ? match[2] : base;
}

/** Published posts, newest first. Drafts are included only in development. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** A translation's language and the English post's slug: "fr/2026-10-12-hiring-checklist" → fr, hiring-checklist. */
export function translationOf(translation: PostTranslation): { locale: TranslatedLocale; slug: string } {
  const [locale, fileId] = translation.id.split("/") as [TranslatedLocale, string];
  return { locale, slug: postSlug(fileId) };
}

/** Published translations of published posts, by language and then the public slug. */
export async function getTranslations(): Promise<Map<Locale, Map<string, PostTranslation>>> {
  const published = new Set((await getPosts()).map((post) => postSlug(post.id)));
  const translations = await getCollection("blogTranslations", ({ data }) => import.meta.env.DEV || !data.draft);
  const byLocale = new Map<Locale, Map<string, PostTranslation>>();
  for (const translation of translations) {
    const { locale, slug } = translationOf(translation);
    if (!published.has(slug)) continue;
    if (!byLocale.has(locale)) byLocale.set(locale, new Map());
    byLocale.get(locale)!.set(slug, translation);
  }
  return byLocale;
}

/** A post's address in a language: /blog/hiring-checklist/ or /fr/blog/hiring-checklist/. */
export function postUrl(slug: string, locale: Locale = DEFAULT_LOCALE): string {
  return localizePath(`/blog/${postSlug(slug)}/`, locale);
}

/** MDX body without imports and component tags, for reading time and copy. */
function plainBody(post: Post | PostTranslation): string {
  return (post.body ?? "")
    .replace(/^import\s.*$/gm, "")
    .replace(/<[A-Z][\w.]*[\s\S]*?\/>/g, "")
    .replace(/<[A-Z][\w.][^>]*>[\s\S]*?<\/[A-Z][\w.]*>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Minutes to read, at about 225 words a minute, or 500 characters for
 * Japanese, which doesn't put spaces between words. MDX imports and
 * components, like a screenshot's alt text, aren't counted.
 */
export function readingMinutes(post: Post | PostTranslation, locale: Locale = DEFAULT_LOCALE): number {
  const text = plainBody(post);
  if (locale === "ja") return Math.max(1, Math.round(text.replace(/\s/g, "").length / 500));
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

/** Full post as Markdown for copy / AI discuss links. */
export function postMarkdown(post: Post | PostTranslation, pageUrl: string): string {
  return [`# ${post.data.title}`, "", post.data.description, "", plainBody(post), "", `Source: ${pageUrl}`, ""].join(
    "\n",
  );
}
