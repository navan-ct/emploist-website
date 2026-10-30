import type { APIContext } from "astro";
import { TRANSLATED_LOCALES, type TranslatedLocale } from "../../i18n/locales";
import { blogFeed } from "../../lib/rss";

export function getStaticPaths() {
  return TRANSLATED_LOCALES.map((lang) => ({ params: { lang } }));
}

export function GET(context: APIContext) {
  return blogFeed(context.params.lang as TranslatedLocale, context.site);
}
