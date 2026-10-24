// Facts about Emploist the website repeats. Prices, credits, and the trial
// match `packages/shared/src/billing.ts` in the app's repository; update both
// together.

export const SITE = {
  name: "Emploist",
  url: "https://www.emploist.com",
  title: "Emploist: Applicant tracking with AI ranking and a careers page",
  description:
    "Post jobs on your own careers page, collect applications, and see every applicant ranked by AI against your job description. $29 a month for your whole team, with a 14-day free trial.",
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
  yearlyPriceUsd: 299,
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

/** The landing page's sections, in the header and footer. */
export const NAV = [
  { label: "Features", href: "/#features" },
  { label: "Careers page", href: "/#careers-page" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog/" },
] as const;

export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}
