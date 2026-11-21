// Which real captures belong on which docs step.
//
// Prefer dedicated docs-* shots (`ONLY=docs node scripts/screenshots.mjs`).
// Until those exist, `fallback` points at an accurate existing lander/blog
// capture so the guide isn't blank. DocsShot skips anything still missing.

import type { DocsShot } from "./docs";

const app = (path = "") => ({
  url: path ? `app.emploist.com${path}` : "app.emploist.com",
});

const windowShot = (
  lander: NonNullable<DocsShot["lander"]>,
  path?: string,
  fallback?: DocsShot["fallback"],
): DocsShot => ({
  lander,
  ...(fallback ? { fallback } : {}),
  frame: "window",
  ...app(path),
});

const modalShot = (
  lander: NonNullable<DocsShot["lander"]>,
  fallback?: DocsShot["fallback"],
): DocsShot => ({
  lander,
  ...(fallback ? { fallback } : {}),
  frame: "modal",
});

const blogModal = (blog: string): DocsShot => ({
  blog,
  frame: "modal",
});

const blogWindow = (blog: string, path?: string): DocsShot => ({
  blog,
  frame: "window",
  ...app(path),
});

/**
 * Accurate step → shot map. Steps with no entry stay text-only.
 * Covers only when the image matches the guide's subject.
 */
/** Keys are English title slugs (see slugifyGuideTitle in docs.ts). */
export const GUIDE_SHOTS: Record<
  string,
  { cover?: DocsShot; steps?: Partial<Record<string, DocsShot>> }
> = {
  "create-and-publish-a-job": {
    steps: {
      start: windowShot("docs-jobs", "/jobs", "applications"),
      describe: windowShot("docs-job-details", "/jobs", "applications"),
      // Form questions until the full form tab is captured
      formAndStages: windowShot("docs-job-form", "/jobs", "form"),
      saveOrPublish: windowShot("docs-job-details", "/jobs", "applications"),
    },
  },

  "build-the-application-form": {
    cover: modalShot("form"),
    steps: {
      open: windowShot("docs-job-form", "/jobs", "form"),
      essentials: modalShot("form"),
      addQuestions: modalShot("form"),
      setUp: modalShot("form"),
      save: windowShot("docs-job-form", "/jobs", "form"),
    },
  },

  "set-up-hiring-stages": {
    // Stage pills live on the applications header until Stages tab is captured
    cover: windowShot("applications"),
    steps: {
      open: windowShot("docs-job-stages", "/jobs", "applications"),
      inbox: windowShot("docs-job-stages", "/jobs", "applications"),
      addRenameReorder: windowShot("docs-job-stages", "/jobs", "applications"),
      delete: windowShot("docs-job-stages", "/jobs", "applications"),
    },
  },

  "review-applications": {
    cover: windowShot("applications"),
    steps: {
      openJob: windowShot("applications"),
      find: windowShot("applications"),
      openApplication: windowShot("docs-application", "/jobs", "match"),
      move: windowShot("docs-application", "/jobs", "applications"),
    },
  },

  "comment-and-mention-teammates": {
    cover: modalShot("comments"),
    steps: {
      write: modalShot("comments"),
      mention: modalShot("comments"),
      replies: windowShot("docs-notifications", "/notifications", "comments"),
      editOrDelete: modalShot("comments"),
    },
  },

  "close-archive-or-duplicate-a-job": {
    steps: {
      closeOrReopen: windowShot("applications"),
      duplicate: windowShot("docs-jobs", "/jobs", "applications"),
      archive: windowShot("docs-jobs", "/jobs", "applications"),
      delete: windowShot("docs-job-more", "/jobs", "applications"),
    },
  },

  "export-applications": {
    steps: {
      start: windowShot("docs-export", "/jobs", "applications"),
    },
  },

  "customize-your-careers-page": {
    cover: windowShot("careers-page"),
    steps: {
      color: blogWindow("customize-careers-page/design-tab.png", "/careers-page/design"),
      code: { lander: "careers-code", scheme: "dark", frame: "window", url: "app.emploist.com/careers-page/code" },
      preview: blogWindow("customize-careers-page/editor-mobile.png", "/careers-page/code"),
      save: blogWindow("customize-careers-page/editor.png", "/careers-page/code"),
    },
  },

  "edit-the-code-on-your-computer": {
    steps: {
      download: blogWindow("customize-careers-page/design-tab.png", "/careers-page/design"),
      upload: blogModal("customize-careers-page/editor-upload.png"),
    },
  },

  "change-your-careers-page-address": {
    // Domain tab lives next to Design — use Design shot until domain is captured
    steps: {
      open: blogWindow("customize-careers-page/design-tab.png", "/careers-page/domain"),
      choose: modalShot("docs-careers-change"),
      confirm: modalShot("docs-careers-change"),
    },
  },

  "connect-your-own-domain": {
    steps: {
      add: blogWindow("customize-careers-page/design-tab.png", "/careers-page/domain"),
      records: blogWindow("customize-careers-page/design-tab.png", "/careers-page/domain"),
      wait: blogWindow("customize-careers-page/design-tab.png", "/careers-page/domain"),
    },
  },

  "invite-your-team": {
    steps: {
      send: modalShot("docs-invite"),
      role: modalShot("docs-invite"),
      followUp: windowShot("docs-members", "/settings/members"),
    },
  },

  "manage-roles-and-members": {
    steps: {
      changeRole: windowShot("docs-members", "/settings/members"),
      remove: windowShot("docs-members", "/settings/members"),
      leave: windowShot("docs-members", "/settings/members"),
    },
  },

  "delete-your-company-or-account": {
    steps: {
      open: windowShot("docs-danger-zone", "/settings/danger-zone"),
      deleteCompany: windowShot("docs-danger-zone", "/settings/danger-zone"),
      deleteAccount: windowShot("docs-danger-zone", "/settings/danger-zone"),
      confirm: modalShot("docs-danger-confirm"),
    },
  },

  "email-applicants-at-each-stage": {
    cover: modalShot("stage-email"),
    steps: {
      open: modalShot("stage-email"),
      customize: modalShot("stage-email"),
      preview: modalShot("stage-email-preview"),
      pause: modalShot("docs-email-applicants"),
    },
  },

  "set-up-replies-and-the-email-layout": {
    steps: {
      replyTo: windowShot("docs-emails", "/emails"),
      layout: windowShot("docs-email-layout", "/emails/layout", "careers-code"),
      save: windowShot("docs-email-layout", "/emails/layout", "careers-code"),
    },
  },

  "understand-match-scores": {
    cover: modalShot("match"),
    steps: {
      read: windowShot("applications"),
      aspects: modalShot("match"),
      useAsGuide: modalShot("match"),
      noScore: windowShot("docs-application-unranked", "/jobs", "applications"),
      rankAgain: windowShot("docs-job-details", "/jobs", "applications"),
    },
  },

  "turn-ai-ranking-off-or-on": {
    // Same General settings row style as MCP until AI switch is captured
    steps: {
      find: modalShot("docs-ai-switch"),
      whileOff: modalShot("docs-ai-switch"),
      turnOn: modalShot("docs-ai-switch"),
    },
  },

  "manage-your-plan-and-credits": {
    cover: windowShot("docs-billing", "/billing"),
    steps: {
      startTrial: windowShot("docs-billing", "/billing"),
      plan: windowShot("docs-billing", "/billing"),
      switchToYearly: windowShot("docs-billing", "/billing"),
      buyCredits: windowShot("docs-billing", "/billing"),
    },
  },

  "connect-an-ai-assistant": {
    cover: blogWindow("manage-hiring-from-claude/emploist-mcp-page.png", "/mcp"),
    steps: {
      choose: blogWindow("manage-hiring-from-claude/emploist-mcp-page.png", "/mcp"),
      follow: blogWindow("manage-hiring-from-claude/emploist-mcp-page.png", "/mcp"),
      allow: blogModal("manage-hiring-from-claude/emploist-consent.png"),
      disconnect: blogWindow("manage-hiring-from-claude/emploist-mcp-page.png", "/mcp"),
    },
  },

  "turn-mcp-off-or-on": {
    cover: blogModal("manage-hiring-from-claude/emploist-settings-mcp.png"),
    steps: {
      find: blogModal("manage-hiring-from-claude/emploist-settings-mcp.png"),
      whileOff: blogModal("manage-hiring-from-claude/emploist-settings-mcp.png"),
    },
  },
};

/** Merge accurate shots onto a guide catalog entry. */
export function withShots<T extends { slug: string }>(guide: T): T & {
  screenshot?: DocsShot;
  stepScreenshots?: Partial<Record<string, DocsShot>>;
} {
  const shots = GUIDE_SHOTS[guide.slug];
  if (!shots) return guide;
  return {
    ...guide,
    ...(shots.cover ? { screenshot: shots.cover } : {}),
    ...(shots.steps ? { stepScreenshots: shots.steps } : {}),
  };
}
