import { type CollectionEntry, getCollection } from "astro:content";
import { DEFAULT_LOCALE, type Locale, localizePath, type TranslatedLocale } from "../i18n/locales";

export type Post = CollectionEntry<"blog">;
export type PostTranslation = CollectionEntry<"blogTranslations">;

/** Published posts, newest first. Drafts are included only in development. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** A translation's language and the English post's id: "fr/hiring-checklist" → fr, hiring-checklist. */
export function translationOf(translation: PostTranslation): { locale: TranslatedLocale; slug: string } {
  const [locale, slug] = translation.id.split("/") as [TranslatedLocale, string];
  return { locale, slug };
}

/** Published translations of published posts, by language and then the English post's id. */
export async function getTranslations(): Promise<Map<Locale, Map<string, PostTranslation>>> {
  const published = new Set((await getPosts()).map((post) => post.id));
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
  return localizePath(`/blog/${slug}/`, locale);
}

/**
 * Minutes to read, at about 225 words a minute, or 500 characters for
 * Japanese, which doesn't put spaces between words. MDX imports and
 * components, like a screenshot's alt text, aren't counted.
 */
export function readingMinutes(post: Post | PostTranslation, locale: Locale = DEFAULT_LOCALE): number {
  const text = (post.body ?? "").replace(/^import\s.*$/gm, "").replace(/<[A-Z][\s\S]*?\/>/g, "");
  if (locale === "ja") return Math.max(1, Math.round(text.replace(/\s/g, "").length / 500));
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}
