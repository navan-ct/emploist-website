import rss from "@astrojs/rss";
import { getMessages } from "../i18n";
import { DEFAULT_LOCALE, type Locale, REGIONAL_LOCALES } from "../i18n/locales";
import { getPosts, getTranslations, postSlug, postUrl } from "./blog";
import { SITE } from "./site";

/** A language's RSS feed: its translated posts, and the others in English. */
export async function blogFeed(locale: Locale, site: URL | undefined) {
  const t = getMessages(locale);
  const translations = (await getTranslations()).get(locale);
  const posts = await getPosts();
  return rss({
    title: t.site.blogFeedTitle,
    description: t.site.blogFeedDescription,
    site: site ?? SITE.url,
    trailingSlash: true,
    items: posts.map((post) => {
      const slug = postSlug(post.id);
      const translation = translations?.get(slug);
      const { data } = translation ?? post;
      return {
        title: data.title,
        description: data.description,
        pubDate: data.pubDate,
        author: data.author,
        categories: data.tags,
        link: postUrl(slug, translation ? locale : DEFAULT_LOCALE),
      };
    }),
    customData: `<language>${REGIONAL_LOCALES[locale].toLowerCase()}</language>`,
  });
}
