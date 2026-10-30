// Numbers, prices, and dates as each language writes them.
import type { Locale } from "./locales";

export function formatNumber(value: number, locale: Locale): string {
  return value.toLocaleString(locale);
}

/** A whole-dollar price: $29 in English, 29 $US in French, and so on. */
export function formatUsd(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** A date like "October 22, 2026", from a Date or an ISO date ("2026-10-22"). */
export function formatDate(date: Date | string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(typeof date === "string" ? new Date(`${date}T00:00:00Z`) : date);
}

/** A whole percentage: 17% in English, 17 % in French, %17 in Turkish. */
export function formatPercent(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 }).format(value / 100);
}

/** The formatters for one language, for its messages file. */
export function formatters(locale: Locale) {
  return {
    number: (value: number) => formatNumber(value, locale),
    usd: (value: number) => formatUsd(value, locale),
    percent: (value: number) => formatPercent(value, locale),
    plural: (count: number, forms: Parameters<typeof plural>[2]) => plural(count, locale, forms),
  };
}

/**
 * Picks the form of a word for a count, by the language's plural rules:
 * English has `one` and `other`; Polish `one`, `few`, `many`, and `other`;
 * Japanese, Korean, and Indonesian only `other`.
 */
export function plural(
  count: number,
  locale: Locale,
  forms: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string },
): string {
  return forms[new Intl.PluralRules(locale).select(count)] ?? forms.other;
}
