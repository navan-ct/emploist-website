// The website's words in English, the source for every other language. Each
// language has a file like this one with the same shape (checked by
// `astro check`), in src/i18n/messages/<language>.ts.
//
// - Functions take the facts that go into a sentence (prices, counts, dates)
//   and return the whole sentence, so each language can order the words its
//   own way. Format numbers and prices with `f` (below), never by hand.
// - Strings marked "HTML" are rendered as HTML: they may contain <strong>,
//   and `link(text)` makes a link around the text it's given.
// - Lists (steps, facts, the FAQ) must have the same items in the same order.
import { formatters } from "../format";

const f = formatters("en");

/** Builds a link around some text, with the right address and styles. */
type Link = (text: string) => string;

/** Facts the FAQ and pricing repeat, from src/lib/site.ts. */
export interface PlanFacts {
  priceUsd: number;
  yearlyPriceUsd: number;
  yearlySavingsPercent: number;
  credits: number;
  yearlyCredits: number;
  trialDays: number;
  trialCredits: number;
  firstPack: { credits: number; priceUsd: number };
}

const en = {
  site: {
    title: "Emploist: Applicant tracking with AI ranking and a careers page",
    description: (p: PlanFacts) =>
      `Post jobs on your own careers page, collect applications, and see every applicant ranked by AI against your job description. ${f.usd(p.priceUsd)} a month for your whole team, with a ${p.trialDays}-day free trial.`,
    imageAlt: "Emploist: see your best applicants first",
    skipToContent: "Skip to content",
    home: "Emploist home",
    blogFeedTitle: "Emploist blog",
    blogFeedDescription: "Guides and updates from the Emploist team.",
    monthlyOffer: (p: PlanFacts) =>
      `${p.trialDays}-day free trial, then ${f.usd(p.priceUsd)} a month for the whole team.`,
    yearlyOffer: (p: PlanFacts) =>
      `${p.trialDays}-day free trial, then ${f.usd(p.yearlyPriceUsd)} a year for the whole team.`,
  },

  nav: {
    main: "Main",
    features: "Features",
    careersPage: "Careers page",
    aiAssistants: "AI assistants",
    mcp: "MCP",
    /** The last item in the Features menu, after the feature sections. */
    moreFeatures: "More features",
    pricing: "Pricing",
    faq: "FAQ",
    blog: "Blog",
    docs: "Docs",
    signIn: "Sign in",
    startFreeTrial: "Start free trial",
    menu: "Menu",
  },

  language: {
    /** The switcher's label, read out with the current language's name. */
    label: "Language",
  },

  footer: {
    tagline:
      "An intelligent applicant tracking software with a careers page and AI ranking. Made for teams that want to hire well without the busywork.",
    product: "Product",
    resources: "Resources",
    account: "Account",
    legal: "Legal",
    rssFeed: "RSS feed",
    support: "Support",
    llmsTxt: "llms.txt",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    copyright: (year: number) => `© ${year} Emploist. All rights reserved.`,
    questions: "Questions?",
  },

  /** Calls to action used in several places. */
  cta: {
    startYourFreeTrial: "Start your free trial",
  },

  hero: {
    eyebrow: "Applicant tracking, ranked by AI",
    title: "See your best applications without manual filters and complex ATS",
    lead: "Emploist gives you a careers page, a simple hiring pipeline, and AI that ranks every application against your job description. Your team spends less time sorting and more time with the people who fit.",
    cta: "Rank your applicants",
    seeHowItWorks: "See how it works",
    note: (p: PlanFacts) => `${p.trialDays} days free, then ${f.usd(p.priceUsd)} a month. No per-seat fees.`,
    screenshotAlt:
      "The applications for a Senior Product Designer job in Emploist, sorted by best match: 91%, 88%, 86%, and so on, with each applicant's name, email, and comment count.",
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "From job post to hire, in one place.",
    steps: [
      {
        title: "Post a job",
        text: "Write the description, choose the questions you want answered, and publish it to your careers page.",
      },
      {
        title: "Candidates apply",
        text: "People find the job on your careers page and apply in a couple of minutes. No account needed.",
      },
      {
        title: "AI ranks every application",
        text: "Each application gets a match score against the job, with a breakdown your team can read.",
      },
      {
        title: "Move people forward",
        text: "Review, comment, and move applicants through your stages. Emails go out at each step.",
      },
    ],
  },

  ranking: {
    eyebrow: "AI ranking",
    title: "A match score you can actually read.",
    lead: "Every application is scored against the job as soon as it arrives. Instead of a mystery number, you see how each applicant measures up on the things that matter for the role.",
    points: [
      {
        title: "A clear breakdown.",
        text: "Skills, experience, seniority fit, and qualifications are each scored, so you can see exactly where someone stands out.",
      },
      {
        title: "More than a resume.",
        text: "Answers to your application questions are part of the picture too.",
      },
      {
        title: "Fair and consistent.",
        text: "Every applicant for a job is scored the same way, against the same criteria.",
      },
      {
        title: "You stay in charge.",
        text: "The match is there to guide your review, not replace it. Update a job, and you can rank its applicants again.",
      },
    ],
    screenshotAlt:
      "An applicant's 91% match in Emploist, broken down into skills (93), experience (88), seniority fit (95), and qualifications (85), each with a short explanation.",
    caption: (p: PlanFacts) =>
      `Each ranking uses one AI credit. Your plan comes with ${f.number(p.credits)} every month.`,
  },

  careersPage: {
    eyebrow: "Careers page",
    title: "A careers page that's ready on day one.",
    lead: "Every company gets a fast, polished careers page with its logo and color. New jobs show up the moment you publish them, and applications land straight in the job's inbox.",
    screenshotAlt:
      "Fieldnote Labs' careers page: a header with the company's logo, a short introduction, and open roles grouped by department with filters for department and location.",
    mobileScreenshotAlt:
      "A job page on a phone: Senior Product Designer in Berlin, hybrid and full-time, with an Apply for this job button and the job description.",
    facts: [
      {
        title: "Your address, or your domain",
        text: "Start at yourcompany.emploist.com, then connect a domain of your own, like careers.yourcompany.com.",
      },
      {
        title: "Easy to browse",
        text: "Open roles are grouped by department, and candidates can filter them by department and location.",
      },
      {
        title: "Fast on every screen",
        text: "Pages load quickly and look great everywhere, from phones to wide monitors.",
      },
      {
        title: "Applying takes minutes",
        text: "No accounts or passwords. Candidates fill in your form, attach their resume, and they're done.",
      },
      {
        title: "Transparent about AI",
        text: "Your page lets candidates know when AI helps review their application.",
      },
      {
        title: "Protected from spam",
        text: "Built-in protection keeps spam out of your inbox, so you only see real applicants.",
      },
    ],
  },

  designInCode: {
    eyebrow: "Design in code",
    title: "Make it look exactly like your website.",
    lead: "The default design looks good with just your logo and color. When you want more, every page of your careers site is HTML, CSS, and Liquid templates you can change.",
    points: [
      "Edit right in Emploist, with a live preview at desktop and phone sizes.",
      "Or download the code, change it in your own editor or with an AI assistant, and preview it on your computer with a single command.",
      "Mistakes are caught before you save, so candidates always see a working page.",
    ],
    screenshotAlt:
      "The careers page code editor in Emploist: the layout template with syntax highlighting on the left, and a live preview of the careers page on the right.",
  },

  formsAndTeam: {
    label: "Application forms and teamwork",
    forms: {
      eyebrow: "Application forms",
      title: "Ask what matters for each role.",
      text: "Build a form for every job with short and long answers, yes-or-no questions, choices, dropdowns, scales, and checkboxes, then drag them into the order you want.",
      screenshotAlt:
        "An application form in Emploist: full name, email, and resume, then a phone number, a portfolio link, a single-choice question about years of experience, and a multiple-choice question about tools.",
    },
    team: {
      eyebrow: "Teamwork",
      title: "Decide together.",
      text: "Comment on any application and @mention a teammate to get their take. Invite your whole team at no extra cost.",
      screenshotAlt:
        "Comments on an application from three teammates, and a new comment mentioning Priya Shah, picked from a list of teammates.",
    },
  },

  stagesAndEmails: {
    eyebrow: "Stages and emails",
    title: "Keep candidates in the loop, automatically.",
    lead: "Every job has its own stages. Move an applicant to the next one, and that stage's email goes out on its own, written once and personal for everyone.",
    points: [
      "Start with ready-made stages, then rename, reorder, and add your own to fit each role.",
      "Each stage comes with a ready-made email. Personalize it with details like first name and job title, and check it in a live preview.",
      "Moved someone by mistake? Undo it, and the email isn't sent.",
      "Emails use your company's template and logo, and replies go to the address you choose.",
    ],
    editorScreenshotAlt:
      "The email for the Interviewing stage in Emploist. The subject and message use variables for the applicant's first name, the job title, and the company name.",
    previewScreenshotAlt:
      "The finished email, as an applicant named Sam receives it: Fieldnote Labs at the top, a personal invitation to interview for the Senior Product Designer role, and a link to open roles.",
  },

  aiAssistants: {
    eyebrow: "AI assistants",
    title: "Manage hiring from your AI assistant.",
    lead: "Connect Claude, ChatGPT, or another assistant that supports MCP, and work with your jobs and applicants just by asking.",
    points: [
      {
        title: "Ask about your applicants.",
        text: "Find the best matches for a job, catch up on new applications, or get a quick summary of someone's answers.",
      },
      {
        title: "Get things done.",
        text: "Create and publish jobs, move applicants between stages, and leave comments, right from the chat.",
      },
      {
        title: "Stay in control.",
        text: "Connect your assistant with the same access you have, and nothing more. Disconnect it anytime, and it stops right away.",
      },
    ],
    worksWith: "Works with",
    otherClients: "popular AI assistants",
    chat: {
      label: "An example chat with an AI assistant connected to Emploist",
      assistant: "Your AI assistant",
      /** After "Emploist", hidden on phones: "Emploist connected". */
      connected: "connected",
      /** Read out before a tool's name: "Used Emploist list_applications". */
      used: "Used",
      question: "Which applicants for the Senior Product Designer job are the best match?",
      answerIntro: "Here are the three best matches in the inbox:",
      /** A match on the list, e.g. "91% match"; the word is hidden on phones. */
      match: (percent: number) => ({ value: f.percent(percent), label: "match" }),
      answerOutro: "Diego leads on seniority fit and skills. Want me to move anyone forward?",
      request: "Move Diego to Phone screen.",
      done: "Done. Diego is in Phone screen now, and that stage's email goes out in 2 minutes. I can undo it before then if you change your mind.",
      placeholder: "Ask about your jobs and applicants",
    },
    caption: "Each person connects their own assistant in a few steps.",
  },

  /** The /mcp/ landing page. */
  mcp: {
    description:
      "Connect Claude, ChatGPT, and other AI assistants to Emploist with MCP. Ask about applicants, move stages, and create jobs from chat, with your own permissions.",
    eyebrow: "MCP",
    heading: "Hire from the chat you already use.",
    lead: "MCP connects Emploist to Claude, ChatGPT, and other assistants. You ask in plain words. The assistant does the work in Emploist, as you.",
    whatTitle: "What is MCP?",
    whatLead:
      "MCP is short for Model Context Protocol. It is an open way for an AI assistant to use another app safely.",
    whatPoints: [
      {
        title: "A connector, not a new product.",
        text: "Emploist still holds your jobs and applicants. MCP is how your assistant reaches them.",
      },
      {
        title: "One server address.",
        text: "Emploist's hosted MCP server is at mcp.emploist.com. You paste that into Claude, ChatGPT, or another client that supports MCP.",
      },
      {
        title: "Included in your plan.",
        text: "Anyone on your team can connect their own assistant. Ranking an application from chat uses the same AI credit as ranking it in Emploist.",
      },
    ],
    howTitle: "How it works",
    howSteps: [
      {
        title: "You connect once.",
        text: "Open MCP in Emploist, pick your assistant, and follow its steps. Sign in with Emploist when asked. No API keys to copy.",
      },
      {
        title: "You ask in the chat.",
        text: "Mention Emploist, then ask who fits a role, move someone to the next stage, leave a comment, or draft a job.",
      },
      {
        title: "Emploist does the work.",
        text: "The assistant calls Emploist tools under your login. Write actions ask for confirmation before they stick.",
      },
    ],
    canDoTitle: "What you can ask",
    canDo: [
      "Which applicants for Senior Product Designer are the best matches?",
      "Move Priya to Phone screen and tell me when the stage email goes out.",
      "Summarize the new applications from today.",
      "Draft a Customer Support job for Berlin and show me the form before we publish.",
      "Leave a comment on Sara's application for Priya.",
    ],
    connectTitle: "Connect an assistant",
    connectLead: "Emploist's MCP page has tabs for each client. The server URL is the same everywhere:",
    serverUrl: "https://mcp.emploist.com",
    connectClients: [
      {
        name: "Claude",
        text: "In Claude, open Customize → Connectors, add a custom connector, paste the URL, and sign in to Emploist.",
      },
      {
        name: "ChatGPT",
        text: "In ChatGPT on the web, open Plugins, add a custom MCP server, paste the URL, create the plugin, then mention it with @.",
      },
      {
        name: "Other clients",
        text: "Cursor, VS Code, Claude Code, and other MCP clients use the same URL. Emploist's MCP page lists the steps for each.",
      },
    ],
    controlTitle: "You stay in control",
    controlPoints: [
      {
        title: "Your role, nothing more.",
        text: "The assistant can only do what you can already do in Emploist. Billing, team invites, and deleting the company stay out of reach.",
      },
      {
        title: "Approvals on writes.",
        text: "Moving an applicant or creating a job asks for confirmation first. Decline anything that looks wrong.",
      },
      {
        title: "Disconnect anytime.",
        text: "On the MCP page, disconnect an assistant and it stops. Admins can also turn MCP off for the whole company.",
      },
    ],
    worksWith: "Works with",
    guidesTitle: "Guides",
    guidesLead: "Step-by-step setup and examples.",
    guideClaude: "How to manage hiring from Claude with MCP",
    guideChatgpt: "Top ChatGPT plugins for HR managers",
    guideDocs: "Connect an AI assistant",
    cta: "Connect your AI assistant",
    copySetup: "Copy MCP setup",
    copiedSetup: "Copied",
    /** Pasted into an AI chat. Keep facts (URL, OAuth) intact across locales. */
    setupCopy: (u: { mcpDocs: string; serverUrl: string }) =>
      `Emploist is applicant tracking software. This file tells an AI assistant how to connect to Emploist's MCP server and what it can do after connecting.

Connect Emploist's MCP server so you can manage hiring from this chat.

MCP Docs: ${u.mcpDocs}
Server URL: ${u.serverUrl}
Authentication: OAuth (sign in with Emploist when prompted)

After connecting, help with jobs and applicants in Emploist: list and rank applications, move people between stages, leave comments, and create or publish jobs. Work only with my Emploist permissions. Confirm before any write action.
`,
  },

  details: {
    eyebrow: "And more",
    title: "The details that make hiring smoother.",
    // In the order of the icons in Details.astro.
    items: [
      {
        title: "Export anytime",
        text: "Download a job's applications as a spreadsheet, with every resume in the same ZIP file.",
      },
      {
        title: "Resumes, right there",
        text: "PDF and Word resumes open inside Emploist, next to the application. Nothing to download.",
      },
      {
        title: "Unlimited jobs",
        text: "Post as many jobs as you need, and find any of them in seconds with search and filters.",
      },
      {
        title: "Duplicate a job",
        text: "Hiring for a similar role? Copy a job's details, form, stages, and emails in one click.",
      },
      {
        title: "No passwords",
        text: "Sign in with Google, Microsoft, or a one-time code sent to your email.",
      },
      {
        title: "Private by default",
        text: "Resumes are stored privately, and only people on your team can open them.",
      },
      {
        title: "Notifications that matter",
        text: "Get notified when someone mentions you or replies on an application you've commented on.",
      },
      {
        title: "Light and dark",
        text: "Emploist follows your system's theme, or you can pick the one you like.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "One plan with everything in it.",
    lead: "No feature tiers and no per-seat fees. One price, paid monthly or yearly, covers your whole company, however many people you invite.",
    creditTitle: "What's an AI credit?",
    creditText: (p: PlanFacts) =>
      `Ranking one application uses one credit. Your plan includes ${f.number(p.credits)} every month, or ${f.number(p.yearlyCredits)} up front when you pay yearly, and you can top up anytime.`,
    billing: "Billing",
    monthly: "Monthly",
    yearly: "Yearly",
    save: (percent: number) => `Save ${f.percent(percent)}`,
    perMonth: "a month",
    perYear: "a year",
    monthlyCredits: (credits: number) => `${f.number(credits)} AI credits every month`,
    yearlyCredits: (credits: number) => `${f.number(credits)} AI credits up front`,
    startTrial: (days: number) => `Start your ${days}-day free trial`,
    included: [
      "Unlimited jobs",
      "Your whole team, no per-seat fees",
      "A careers page on your own domain",
      "Full control of your careers page code",
      "Application forms and hiring stages",
      "Automatic emails to candidates, in your own template",
      "Comments, mentions, and notifications",
      "Export your applications anytime",
    ],
    /** HTML. */
    trial: (p: PlanFacts) =>
      `<strong>The free trial</strong> gives you ${p.trialDays} days and ${f.number(p.trialCredits)} AI credits to try everything. You won't be charged until it ends, and you can cancel anytime.`,
    moreCredits: "Need more credits?",
    packsNote: "Buy a pack whenever you like. Packs never expire.",
    packsCaption: "Credit packs and their prices",
    creditsColumn: "Credits",
    priceColumn: "Price",
    packCredits: (credits: number) => `${f.number(credits)} credits`,
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    /** HTML. `email` is a link to the support address. */
    intro: (email: string) => `Can't find what you're looking for? Email us at ${email} and we'll get back to you.`,
    items: (p: PlanFacts) => [
      {
        question: "How does the free trial work?",
        answer: `You get ${p.trialDays} days with every feature and ${f.number(p.trialCredits)} AI credits to try it on real applications. You won't be charged until the trial ends, and you can cancel anytime before then.`,
      },
      {
        question: "What is an AI credit?",
        answer: `Ranking one application uses one credit. Your plan includes ${f.number(p.credits)} credits every month, or ${f.number(p.yearlyCredits)} up front when you pay yearly. If you need more, packs start at ${f.number(p.firstPack.credits)} credits for ${f.usd(p.firstPack.priceUsd)}, and they never expire.`,
      },
      {
        question: "Can we pay yearly?",
        answer: `Yes. Yearly is ${f.usd(p.yearlyPriceUsd)} a year, ${f.percent(p.yearlySavingsPercent)} less than paying monthly, with ${f.number(p.yearlyCredits)} AI credits up front. It starts with the same ${p.trialDays}-day free trial. If you're on monthly, you can switch to yearly anytime in Billing, and you pay for the year less the unused days of your current month.`,
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
        answer: "Yes. An admin can turn AI features on or off for your whole company in Settings.",
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
        question: "Which languages does Emploist support?",
        answer:
          "You can use Emploist in English, French, German, Spanish, Italian, Japanese, Korean, Polish, Turkish, and Indonesian, and everyone on your team picks their own. Careers pages and the emails applicants get start out in English, and you can rewrite them in any language.",
      },
      {
        question: "Can we take our data with us?",
        answer:
          "Yes. Export any job's applications as a spreadsheet of every application and answer, along with each resume.",
      },
      {
        question: "Can we use Emploist from Claude or ChatGPT?",
        answer:
          "Yes. Anyone on your team can connect Claude, ChatGPT, Grok, Gemini, Copilot, or another assistant that supports MCP, and manage jobs and applications by chatting. It's included in your plan. Ranking an application from an assistant uses one AI credit, just like in Emploist.",
      },
      {
        question: "What can an AI assistant do in Emploist?",
        answer:
          "It can view and change jobs, stages, and application forms, read applications and resumes, move applicants between stages, and comment. It works as the person who connected it, with their role. Billing, team members, and deleting your company or account aren't included. You can disconnect your assistant anytime, and an admin can turn assistants off for the whole company in Settings.",
      },
      {
        question: "Can we cancel anytime?",
        answer:
          "Yes. Cancel whenever you like, and your plan keeps working until the end of the period you've paid for. You can still see and export everything afterwards.",
      },
    ],
  },

  callToAction: {
    title: "Meet your best applicants without the gruntwork.",
    text: (p: PlanFacts) =>
      `Try Emploist free for ${p.trialDays} days. Setup takes a few minutes, and your careers page is ready as soon as you are.`,
    talkToUs: "Talk to us",
  },

  notFound: {
    title: "Page not found",
    description: "This page doesn't exist.",
    heading: "This page doesn't exist.",
    text: "It may have moved, or the link might have a typo. Let's get you back on track.",
    home: "Go to the home page",
    blog: "Read the blog",
  },

  docs: {
    title: "Emploist documentation",
    lead: "Follow these official docs to get things done in Emploist.",
    copyMarkdown: "Copy markdown",
    copied: "Copied",
    discussWith: "Discuss with",
    /** Prefill for AI chat links. */
    discussPrompt: (title: string, url: string) =>
      `Help me with this Emploist guide: "${title}". Read ${url} and answer my questions about it.`,
  },

  blog: {
    title: "Blog",
    description:
      "Guides on hiring, careers pages, and applicant tracking, plus product updates from the Emploist team.",
    heading: "Notes on hiring well.",
    emptyTitle: "The first posts are on their way.",
    /** HTML. */
    emptyText: (link: Link) =>
      `We're writing guides on hiring and getting the most out of Emploist. Follow along with the ${link("RSS feed")}, or start your free trial in the meantime.`,
    minutesToRead: (minutes: number) => `${minutes} min read`,
    draft: "Draft",
    readPost: "Read the post",
    /** On posts that aren't translated yet, which open in English. */
    inEnglish: "In English",
    updated: (date: string) => `Updated ${date}`,
    home: "Home",
    /** The label of the link back to the blog, for screen readers. */
    breadcrumb: "Breadcrumb",
    /** The label of the box at the end of a post, for screen readers. */
    tryEmploist: "Try Emploist",
    ctaTitle: "See your best applicants first.",
    ctaText: (p: PlanFacts) =>
      `Try Emploist free for ${p.trialDays} days, then ${f.usd(p.priceUsd)} a month for your whole team.`,
    defaultAuthor: "The Emploist team",
    writtenBy: (name: string) => `Written by ${name}`,
  },

  /** The directories that list Emploist (/listed-on/), linked from the footer. */
  listedOn: {
    /** The page's title, and the footer link. */
    title: "Listed on",
    description:
      "The software directories that list Emploist, the applicant tracking system with a careers page, a hiring pipeline, and AI ranking.",
    heading: "Find Emploist around the web.",
    lead: "The directories where Emploist is listed.",
  },

  legal: {
    lastUpdated: (date: string) => `Last updated ${date}`,
    contents: "Contents",
    /** HTML. At the top of translated Terms and Privacy; `link` goes to the English version. */
    translationNotice: {
      terms: (link: Link) =>
        `This is a translation of our Terms of Service, provided for convenience. The ${link("English version")} is legally binding and applies if the two differ.`,
      privacy: (link: Link) =>
        `This is a translation of our Privacy Policy, provided for convenience. If it differs from the ${link("English version")}, the English version applies, as far as the law allows.`,
    },
    /** HTML. When the English changed after the translation was made. */
    outdated: (date: string, link: Link) =>
      `The English version was updated on ${date}, after this translation was made. ${link("Read the current English version")}.`,
  },
};

export type Messages = typeof en;

export default en;
