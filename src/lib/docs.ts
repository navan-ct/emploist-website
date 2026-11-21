// Docs on the marketing site come from the app's Support guides
// (packages/shared/src/locales/*/support.json in navan-ct/emploist).
// Keep the JSON copies in src/data/docs/support/ in sync with the app.
import type { Locale } from "../i18n/locales";
import { DEFAULT_LOCALE } from "../i18n/locales";
import { SITE } from "./site";

/** App routes the guide markup links to (same paths as in the app). */
const APP_LINKS = {
  jobs: "/jobs",
  notifications: "/notifications",
  design: "/careers-page/design",
  domain: "/careers-page/domain",
  members: "/settings/members",
  danger: "/settings/danger-zone",
  general: "/settings/general",
  emails: "/emails",
  billing: "/billing",
  mcp: "/mcp",
} as const;

/** Facts the pluralized guide steps need — same as the app's shared package. */
export const DOCS_FACTS = {
  invitationExpiresInDays: 7,
  stageEmailDelayMinutes: 2,
  trialDays: 14,
  trialCredits: 100,
} as const;

export type DocsTopicId =
  | "jobsAndApplications"
  | "careersPage"
  | "teamAndEmails"
  | "aiAndBilling"
  | "aiAssistants";

/** Screenshot file stems in src/assets/screenshots/<name>-<scheme>.png */
export type DocsScreenshotName =
  | "applications"
  | "match"
  | "comments"
  | "form"
  | "stage-email"
  | "stage-email-preview"
  | "careers-page"
  | "careers-job-mobile"
  | "careers-code"
  // Dedicated docs captures from `ONLY=docs node scripts/screenshots.mjs`
  | "docs-jobs"
  | "docs-job-details"
  | "docs-job-form"
  | "docs-job-stages"
  | "docs-job-more"
  | "docs-export"
  | "docs-application"
  | "docs-application-unranked"
  | "docs-notifications"
  | "docs-careers-domain"
  | "docs-careers-change"
  | "docs-invite"
  | "docs-members"
  | "docs-danger-zone"
  | "docs-danger-confirm"
  | "docs-emails"
  | "docs-email-layout"
  | "docs-ai-switch"
  | "docs-email-applicants"
  | "docs-billing";

/** A real dashboard shot for a guide cover or step. */
export interface DocsShot {
  /** Lander/docs shot name (src/assets/screenshots/<name>-<scheme>.png). */
  lander?: DocsScreenshotName;
  /**
   * Tried in order when `lander` isn't on disk yet (e.g. docs-* before
   * `ONLY=docs` capture). Prefer an accurate existing lander/blog over blank.
   */
  fallback?: DocsScreenshotName;
  scheme?: "light" | "dark";
  /** Blog capture under src/content/blog/images/. */
  blog?: string;
  /** window = full page chrome; modal/plain = cropped dialog-style shot. */
  frame?: "window" | "modal" | "plain";
  url?: string;
}

export interface GuideMeta {
  /** URL slug from the English title, e.g. /docs/create-and-publish-a-job/ */
  slug: string;
  /** Key under `guides` in support.json */
  key: string;
  topic: DocsTopicId;
  /** Step keys in the order the app shows them */
  steps: string[];
  adminOnly?: boolean;
  /** Count used for pluralized step bodies, when the step has body_one/body_other */
  pluralCounts?: Record<string, number>;
}

/** URL path segment from the English guide title. */
export function slugifyGuideTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type GuideDef = Omit<GuideMeta, "slug">;

/**
 * Guide catalog — order and step keys match apps/web/src/routes/support-guides.tsx.
 * Slugs come from the English title in support.json.
 * Screenshots can be wired later (see docs-shots.ts / DocsShot.astro).
 */
const GUIDE_DEFS: readonly GuideDef[] = [
  {
    key: "createJob",
    topic: "jobsAndApplications",
    steps: ["start", "describe", "formAndStages", "saveOrPublish"],
  },
  {
    key: "applicationForm",
    topic: "jobsAndApplications",
    steps: ["open", "essentials", "addQuestions", "setUp", "save"],
  },
  {
    key: "stages",
    topic: "jobsAndApplications",
    steps: ["open", "inbox", "addRenameReorder", "delete"],
  },
  {
    key: "reviewApplications",
    topic: "jobsAndApplications",
    steps: ["openJob", "find", "openApplication", "move"],
  },
  {
    key: "comments",
    topic: "jobsAndApplications",
    steps: ["write", "mention", "replies", "editOrDelete"],
  },
  {
    key: "manageJob",
    topic: "jobsAndApplications",
    steps: ["closeOrReopen", "duplicate", "archive", "delete"],
  },
  {
    key: "exportApplications",
    topic: "jobsAndApplications",
    steps: ["start", "openZip"],
  },
  {
    key: "customizeCareersPage",
    topic: "careersPage",
    steps: ["color", "code", "preview", "save"],
    adminOnly: true,
  },
  {
    key: "editCodeLocally",
    topic: "careersPage",
    steps: ["download", "preview", "check", "upload"],
    adminOnly: true,
  },
  {
    key: "changeAddress",
    topic: "careersPage",
    steps: ["open", "choose", "confirm"],
    adminOnly: true,
  },
  {
    key: "customDomain",
    topic: "careersPage",
    steps: ["add", "records", "wait"],
    adminOnly: true,
  },
  {
    key: "inviteTeam",
    topic: "teamAndEmails",
    steps: ["send", "role", "join", "followUp"],
    adminOnly: true,
    pluralCounts: { join: DOCS_FACTS.invitationExpiresInDays },
  },
  {
    key: "manageMembers",
    topic: "teamAndEmails",
    steps: ["changeRole", "remove", "leave"],
  },
  {
    key: "deleteCompanyOrAccount",
    topic: "teamAndEmails",
    steps: ["open", "deleteCompany", "deleteAccount", "confirm"],
  },
  {
    key: "stageEmails",
    topic: "teamAndEmails",
    steps: ["open", "customize", "preview", "timing", "pause"],
    pluralCounts: { timing: DOCS_FACTS.stageEmailDelayMinutes },
  },
  {
    key: "repliesLayout",
    topic: "teamAndEmails",
    steps: ["replyTo", "layout", "save"],
    adminOnly: true,
  },
  {
    key: "matchScores",
    topic: "aiAndBilling",
    steps: ["read", "aspects", "useAsGuide", "noScore", "rankAgain"],
  },
  {
    key: "aiSwitch",
    topic: "aiAndBilling",
    steps: ["find", "whileOff", "turnOn", "tellApplicants"],
    adminOnly: true,
  },
  {
    key: "planCredits",
    topic: "aiAndBilling",
    steps: ["startTrial", "plan", "switchToYearly", "buyCredits", "runOut", "endTrial", "planStops"],
    adminOnly: true,
    pluralCounts: { startTrial: DOCS_FACTS.trialDays },
  },
  {
    key: "connectAssistant",
    topic: "aiAssistants",
    steps: ["choose", "follow", "allow", "disconnect"],
  },
  {
    key: "mcpSwitch",
    topic: "aiAssistants",
    steps: ["find", "whileOff"],
    adminOnly: true,
  },
];

export const TOPIC_ORDER: readonly DocsTopicId[] = [
  "jobsAndApplications",
  "careersPage",
  "teamAndEmails",
  "aiAndBilling",
  "aiAssistants",
];

interface GuideStepJson {
  title: string;
  body?: string;
  body_one?: string;
  body_other?: string;
}

interface GuideJson {
  title: string;
  summary: string;
  steps: Record<string, GuideStepJson>;
  credits_one?: string;
  credits_other?: string;
}

export interface SupportDocsJson {
  title: string;
  description: string;
  contact: {
    title: string;
    description: string;
    copied: string;
    copy: string;
  };
  guideList: {
    title: string;
    description: string;
    adminOnly: string;
  };
  topics: Record<DocsTopicId, string>;
  guides: Record<string, GuideJson>;
}

const supportModules = import.meta.glob<{ default: SupportDocsJson }>("../data/docs/support/*.json", {
  eager: true,
});

function supportFor(locale: Locale): SupportDocsJson {
  const mod =
    supportModules[`../data/docs/support/${locale}.json`] ??
    supportModules[`../data/docs/support/${DEFAULT_LOCALE}.json`];
  if (!mod) throw new Error("Missing docs support JSON");
  return mod.default;
}

function guidesWithSlugs(): GuideMeta[] {
  const en = supportFor(DEFAULT_LOCALE);
  const seen = new Set<string>();
  return GUIDE_DEFS.map((def) => {
    const title = en.guides[def.key]?.title;
    if (!title) throw new Error(`Missing English title for guide ${def.key}`);
    const slug = slugifyGuideTitle(title);
    if (!slug) throw new Error(`Empty slug for guide ${def.key} ("${title}")`);
    if (seen.has(slug)) throw new Error(`Duplicate docs slug "${slug}"`);
    seen.add(slug);
    return { ...def, slug };
  });
}

/** Guides with URL slugs from the English title (stable across locales). */
export const GUIDES: readonly GuideMeta[] = guidesWithSlugs();

export function getSupportDocs(locale: Locale): SupportDocsJson {
  return supportFor(locale);
}

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function docsUrl(slug: string | undefined, locale: Locale): string {
  const path = slug ? `/docs/${slug}/` : "/docs/";
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path}`;
}

export interface ResolvedStep {
  key: string;
  title: string;
  /** HTML, already escaped except for our own tags. */
  bodyHtml: string;
  /** Plain markdown for the step body (copy / AI discuss). */
  bodyMarkdown: string;
}

export interface ResolvedGuide {
  meta: GuideMeta;
  title: string;
  summary: string;
  steps: ResolvedStep[];
  /** Full guide as markdown, for copy and AI discuss links. */
  markdown: string;
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatNumber(n: number, locale: Locale): string {
  return new Intl.NumberFormat(locale).format(n);
}

function pickPlural(step: GuideStepJson, count: number): string {
  if (step.body) return step.body;
  return count === 1 ? (step.body_one ?? step.body_other ?? "") : (step.body_other ?? step.body_one ?? "");
}

function interpolate(template: string, values: Record<string, string>): string {
  return template
    .replaceAll("{{count, number}}", values.count ?? "")
    .replaceAll("{{credits}}", values.credits ?? "")
    .replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] ?? "");
}

const APP_ORIGIN = "https://app.emploist.com";

/** Turn app guide markup (`<ui>`, `<jobs>`, …) into HTML for the marketing site. */
export function renderGuideBody(raw: string): string {
  // Escape first, then re-introduce known tags from the escaped form.
  let html = escapeHtml(raw);

  html = html.replace(/&lt;ui&gt;([\s\S]*?)&lt;\/ui&gt;/g, "<strong>$1</strong>");
  html = html.replace(/&lt;code&gt;([\s\S]*?)&lt;\/code&gt;/g, "<code>$1</code>");

  for (const [tag, path] of Object.entries(APP_LINKS)) {
    const url = `${APP_ORIGIN}${path}`;
    html = html.replace(
      new RegExp(`&lt;${tag}&gt;([\\s\\S]*?)&lt;\\/${tag}&gt;`, "g"),
      `<a href="${url}">$1</a>`,
    );
  }

  return html;
}

/** Same markup as HTML, but as Markdown for copy / AI tools. */
export function renderGuideBodyMarkdown(raw: string): string {
  let text = raw;
  text = text.replace(/<ui>([\s\S]*?)<\/ui>/g, "**$1**");
  text = text.replace(/<code>([\s\S]*?)<\/code>/g, "`$1`");
  for (const [tag, path] of Object.entries(APP_LINKS)) {
    text = text.replace(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "g"), `[$1](${APP_ORIGIN}${path})`);
  }
  return text;
}

/** Full guide document as Markdown. */
export function guideMarkdown(guide: Pick<ResolvedGuide, "title" | "summary" | "steps">, pageUrl?: string): string {
  const lines = [`# ${guide.title}`, "", guide.summary, ""];
  for (const [index, step] of guide.steps.entries()) {
    lines.push(`## ${index + 1}. ${step.title}`, "", step.bodyMarkdown, "");
  }
  if (pageUrl) {
    lines.push(`Source: ${pageUrl}`, "");
  }
  return lines.join("\n").trim() + "\n";
}

export function resolveGuide(slug: string, locale: Locale): ResolvedGuide | undefined {
  const meta = getGuideMeta(slug);
  if (!meta) return undefined;
  const docs = supportFor(locale);
  const guide = docs.guides[meta.key];
  if (!guide) return undefined;

  const creditsLabel = (() => {
    const count = DOCS_FACTS.trialCredits;
    // Trial credits are always plural in practice (100).
    const tpl = guide.credits_other ?? guide.credits_one;
    if (!tpl) return formatNumber(count, locale);
    return interpolate(tpl, { count: formatNumber(count, locale) });
  })();

  const steps: ResolvedStep[] = meta.steps.map((stepKey) => {
    const step = guide.steps[stepKey];
    if (!step) throw new Error(`Missing step ${meta.key}.${stepKey} for ${locale}`);
    const count = meta.pluralCounts?.[stepKey] ?? 1;
    const raw = interpolate(pickPlural(step, count), {
      count: formatNumber(count, locale),
      credits: creditsLabel,
    });
    return {
      key: stepKey,
      title: step.title,
      bodyHtml: renderGuideBody(raw),
      bodyMarkdown: renderGuideBodyMarkdown(raw),
    };
  });

  const resolved = { meta, title: guide.title, summary: guide.summary, steps, markdown: "" };
  resolved.markdown = guideMarkdown(resolved, `${SITE.url}${docsUrl(slug, locale)}`);
  return resolved;
}

export function guidesByTopic(locale: Locale) {
  const docs = supportFor(locale);
  return TOPIC_ORDER.map((topicId) => ({
    id: topicId,
    title: docs.topics[topicId],
    guides: GUIDES.filter((g) => g.topic === topicId).map((meta) => {
      const guide = docs.guides[meta.key];
      return {
        meta,
        title: guide?.title ?? meta.slug,
        summary: guide?.summary ?? "",
      };
    }),
  }));
}
