import { CREDIT_PACKS, PLAN, formatNumber } from "./site";

/** The landing page's questions, also sent to search engines as FAQPage data. */
export const FAQ: readonly { question: string; answer: string }[] = [
  {
    question: "How does the free trial work?",
    answer: `You get ${PLAN.trialDays} days with every feature and ${PLAN.trialCredits} AI credits to try it on real applications. You won't be charged until the trial ends, and you can cancel anytime before then.`,
  },
  {
    question: "What is an AI credit?",
    answer: `Ranking one application uses one credit. Your plan includes ${formatNumber(PLAN.credits)} credits every month. If you need more, packs start at ${formatNumber(CREDIT_PACKS[0].credits)} credits for $${CREDIT_PACKS[0].priceUsd}, and they never expire.`,
  },
  {
    question: "What happens if we run out of credits?",
    answer:
      "Nothing is lost. Applications keep coming in, and you can buy more credits at any time to rank them.",
  },
  {
    question: "How does the AI score an application?",
    answer:
      "It reads each resume and the answers to your questions, and compares them with the job you posted. Skills, experience, seniority fit, and qualifications are each scored, then combined into one match, so you can see why someone ranks where they do.",
  },
  {
    question: "Can we turn AI ranking off?",
    answer:
      "Yes. An admin can turn AI features on or off for your whole company in Settings.",
  },
  {
    question: "Can we use our own domain for the careers page?",
    answer:
      "Yes. Your careers page starts at yourcompany.emploist.com, and you can connect a domain like careers.yourcompany.com in a few steps, with HTTPS included.",
  },
  {
    question: "Do candidates need an account to apply?",
    answer:
      "No. Candidates fill in the form on your careers page and attach their resume. It takes a couple of minutes.",
  },
  {
    question: "Who on our team can use Emploist?",
    answer:
      "Everyone you invite, at no extra cost. Admins also manage billing, the careers page, and company settings.",
  },
  {
    question: "Can we take our data with us?",
    answer:
      "Yes. Export any job's applications as a spreadsheet of every application and answer, along with each resume.",
  },
  {
    question: "Can we cancel anytime?",
    answer:
      "Yes. Cancel whenever you like, and your plan keeps working until the end of the period you've paid for. You can still see and export everything afterwards.",
  },
];
