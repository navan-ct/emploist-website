// When the English Terms and Privacy Policy last changed, as ISO dates. Each
// translation records the English version it was translated from; when that
// isn't the current one, the translation says so and links to the English.
// Update the date here when you change a document.

export const LEGAL_VERSIONS = {
  terms: "2026-10-28",
  privacy: "2026-11-04",
} as const;

export type LegalDocument = keyof typeof LEGAL_VERSIONS;
