// The landing page's feature sections, in page order, for the header's
// Features menu. Each is named by its section's tag, so the menu reads like
// the page in every language.
import { type Locale, localizePath } from "../i18n/locales";
import type { Messages } from "../i18n/messages/en";
import { FEATURE_ICONS } from "./icons";

export interface Feature {
  /** The section's id on the landing page. */
  id: keyof typeof FEATURE_ICONS;
  label: string;
  href: string;
  icon: string;
}

export function getFeatures(t: Messages, locale: Locale): Feature[] {
  const { forms, team } = t.formsAndTeam;
  const sections = [
    { id: "ai-ranking", label: t.ranking.eyebrow },
    { id: "careers-page", label: t.careersPage.eyebrow },
    { id: "design-in-code", label: t.designInCode.eyebrow },
    { id: "application-forms", label: forms.eyebrow },
    { id: "teamwork", label: team.eyebrow },
    { id: "stages-and-emails", label: t.stagesAndEmails.eyebrow },
    { id: "ai-assistants", label: t.aiAssistants.eyebrow },
    { id: "more-features", label: t.nav.moreFeatures },
  ] as const;
  return sections.map((section) => ({
    ...section,
    href: localizePath(`/#${section.id}`, locale),
    icon: FEATURE_ICONS[section.id],
  }));
}
