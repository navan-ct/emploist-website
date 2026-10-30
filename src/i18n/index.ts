import { CREDIT_PACKS, PLAN, YEARLY_SAVINGS } from "../lib/site";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";
import en, { type Messages, type PlanFacts } from "./messages/en";

const translations = import.meta.glob<{ default: Messages }>("./messages/*.ts", { eager: true });

/** The website's words in `locale`. */
export function getMessages(locale: Locale): Messages {
  return translations[`./messages/${locale}.ts`]?.default ?? en;
}

/** The language of the page being built, from its address. */
export function getLocale(astro: { currentLocale: string | undefined }): Locale {
  return isLocale(astro.currentLocale) ? astro.currentLocale : DEFAULT_LOCALE;
}

/** The facts from src/lib/site.ts that messages put into sentences. */
export const PLAN_FACTS: PlanFacts = {
  priceUsd: PLAN.priceUsd,
  yearlyPriceUsd: PLAN.yearlyPriceUsd,
  yearlySavingsPercent: YEARLY_SAVINGS,
  credits: PLAN.credits,
  yearlyCredits: PLAN.yearlyCredits,
  trialDays: PLAN.trialDays,
  trialCredits: PLAN.trialCredits,
  firstPack: CREDIT_PACKS[0],
};

/** A `link` for messages: an <a> around the text, escaped. */
export function linkTo(href: string, attributes = ""): (text: string) => string {
  return (text) => `<a href="${escapeHtml(href)}"${attributes ? ` ${attributes}` : ""}>${escapeHtml(text)}</a>`;
}

export function escapeHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
