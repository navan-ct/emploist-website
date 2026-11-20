// Line icons on a 20 × 20 grid, drawn with a 1.2–1.4 stroke. Each is an SVG
// path for <Icon>.

/** The "And more" details, in the order of their words in the messages. */
export const DETAIL_ICONS = [
  // Export anytime
  "M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 13.5V15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5",
  // Resumes, right there
  "M6 2.75h5.5L15 6.25V15.5a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 4 15.5v-11A1.75 1.75 0 0 1 5.75 2.75Zm5 0V6.5h4M7 10.25h6M7 13.25h4",
  // Unlimited jobs
  "M3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-8ZM7.5 5V3.75A.75.75 0 0 1 8.25 3h3.5a.75.75 0 0 1 .75.75V5M3 10h14",
  // Duplicate a job
  "M7 7V4.75A1.75 1.75 0 0 1 8.75 3h6.5A1.75 1.75 0 0 1 17 4.75v6.5A1.75 1.75 0 0 1 15.25 13H13M4.75 7h6.5A1.75 1.75 0 0 1 13 8.75v6.5A1.75 1.75 0 0 1 11.25 17h-6.5A1.75 1.75 0 0 1 3 15.25v-6.5A1.75 1.75 0 0 1 4.75 7Z",
  // No passwords
  "M9.5 10a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm0 0H17m-2.75 0v2.75M17 10v2",
  // Private by default
  "M10 2.75 4 5v4.6c0 3.6 2.5 6.4 6 7.65 3.5-1.25 6-4.05 6-7.65V5l-6-2.25ZM7.5 10l1.75 1.75L12.75 8",
  // Notifications that matter
  "M5 13.5V9a5 5 0 0 1 10 0v4.5l1.25 1.5H3.75L5 13.5ZM8.25 17.25a1.9 1.9 0 0 0 3.5 0",
  // Light and dark
  "M10 3.25a6.75 6.75 0 1 0 0 13.5V3.25Zm0 0a6.75 6.75 0 0 1 0 13.5",
] as const;

/** The careers page's facts, in the order of their words in the messages. */
export const CAREERS_FACT_ICONS = [
  // Your address, or your domain: a globe.
  "M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5ZM2.75 10h14.5M10 2.75c2 2 3 4.4 3 7.25s-1 5.25-3 7.25c-2-2-3-4.4-3-7.25s1-5.25 3-7.25Z",
  // Easy to browse: filters.
  "M3.5 5.5h13M6 10h8M8.5 14.5h3",
  // Fast on every screen: a bolt.
  "M11 2.75 4.75 11h5l-1 6.25L15.25 9h-5l.75-6.25Z",
  // Applying takes minutes: a clock.
  "M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5ZM10 6v4l2.75 1.75",
  // Transparent about AI: sparkles.
  "M9 3.25c.4 3.2 1.65 4.45 4.85 4.85-3.2.4-4.45 1.65-4.85 4.85-.4-3.2-1.65-4.45-4.85-4.85C7.35 7.7 8.6 6.45 9 3.25ZM14.75 11.75c.2 1.6.85 2.25 2.5 2.5-1.65.25-2.3.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5Z",
  // Protected from spam: a shield.
  "M10 2.75 4 5v4.6c0 3.6 2.5 6.4 6 7.65 3.5-1.25 6-4.05 6-7.65V5l-6-2.25Z",
] as const;

/** "Design in code": the three ways to work on the code. */
export const CODE_POINT_ICONS = [
  // Edit right in Emploist, with a live preview: a window with a split view.
  "M3 5.25A1.75 1.75 0 0 1 4.75 3.5h10.5A1.75 1.75 0 0 1 17 5.25v9.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 14.75v-9.5ZM3 7h14M10 7v9.5M5.5 9.5l1.5 1.5-1.5 1.5",
  // Or download it and work in your own editor: a terminal.
  "M3 5.25A1.75 1.75 0 0 1 4.75 3.5h10.5A1.75 1.75 0 0 1 17 5.25v9.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 14.75v-9.5ZM6 8l2.5 2L6 12M10.5 12.5h3.5",
  // Mistakes are caught before you save: a check in a circle.
  "M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5ZM6.75 10.25l2.25 2.25 4.25-4.75",
] as const;

export const CHECK_ICON = "M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5ZM6.9 10.2l2.1 2.05 4.1-4.45";
export const ARROW_ICON = "M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5";
