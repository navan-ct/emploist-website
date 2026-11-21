// Facts about Emploist the website repeats. Prices, credits, and the trial
// match `packages/shared/src/billing.ts` in the app's repository; update both
// together.

/** The site's title and description, in each language, are in src/i18n/messages. */
export const SITE = {
  name: "Emploist",
  url: "https://www.emploist.com",
  supportEmail: "support@emploist.com",
} as const;

export const APP = {
  /** Signing in and signing up are the same flow in the app. */
  signInUrl: "https://app.emploist.com/sign-in",
  signUpUrl: "https://app.emploist.com/sign-in",
} as const;

export const PLAN = {
  priceUsd: 29,
  credits: 1000,
  /** Yearly's credits come all at once. */
  yearlyPriceUsd: 290,
  yearlyCredits: 12000,
  trialDays: 14,
  trialCredits: 100,
} as const;

/** How much cheaper yearly is than 12 months, as a whole percentage. */
export const YEARLY_SAVINGS = Math.round((1 - PLAN.yearlyPriceUsd / (PLAN.priceUsd * 12)) * 100);

export const CREDIT_PACKS = [
  { credits: 1000, priceUsd: 9 },
  { credits: 5000, priceUsd: 39 },
  { credits: 10000, priceUsd: 69 },
] as const;

/**
 * The header's links after its Features menu (see src/lib/features.ts), with
 * their words in src/i18n/messages.
 */
export const NAV = [
  { key: "mcp", href: "/mcp/" },
  { key: "pricing", href: "/pricing/" },
  { key: "faq", href: "/#faq" },
  { key: "blog", href: "/blog/" },
  { key: "docs", href: "/docs/" },
] as const;
