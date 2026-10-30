// The languages the website is in, the same as the app's (`LANGUAGES` in
// `packages/shared/src/languages.ts` in the app's repository). English is the
// source and lives at the site's root; the others are under /fr/, /de/, and
// so on. Keep in sync with `i18n.locales` in astro.config.mjs.

export const LOCALES = ["en", "fr", "de", "es", "it", "ja", "ko", "pl", "tr", "id"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "en" satisfies Locale;

export type TranslatedLocale = Exclude<Locale, typeof DEFAULT_LOCALE>;

export const TRANSLATED_LOCALES = LOCALES.filter(
  (locale): locale is TranslatedLocale => locale !== DEFAULT_LOCALE,
);

/** Each language in its own words, as the language switcher lists them. */
export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  pl: "Polski",
  tr: "Türkçe",
  id: "Bahasa Indonesia",
};

/** With a region, for link previews (og:locale) and the RSS feeds. */
export const REGIONAL_LOCALES: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
  it: "it-IT",
  ja: "ja-JP",
  ko: "ko-KR",
  pl: "pl-PL",
  tr: "tr-TR",
  id: "id-ID",
};

export function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly (string | undefined)[]).includes(value);
}

/** A root-relative path in `locale`: "/blog/" → "/fr/blog/", "/#faq" → "/fr/#faq". */
export function localizePath(path: string, locale: Locale): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/** A pathname's language and the path without it: "/fr/blog/" → fr and "/blog/". */
export function splitPath(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first !== DEFAULT_LOCALE && isLocale(first)) return { locale: first, path: `/${rest.join("/")}` };
  return { locale: DEFAULT_LOCALE, path: pathname };
}
