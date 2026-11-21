import { DEFAULT_LOCALE } from "../i18n/locales";
import { getPosts, postSlug, postUrl } from "./blog";
import { docsUrl, getSupportDocs, GUIDES } from "./docs";
import { APP, PLAN, SITE } from "./site";

/** Absolute URL on the marketing site. */
function abs(path: string): string {
  return new URL(path, SITE.url).href;
}

/**
 * Curated `/llms.txt` for agents: product context plus the pages that answer
 * common questions. Keep descriptions short; detail lives on the linked pages.
 */
export async function buildLlmsTxt(): Promise<string> {
  const docs = getSupportDocs(DEFAULT_LOCALE);
  const posts = await getPosts();

  const product = [
    `- [Home](${abs("/")}): Product overview: careers page, hiring pipeline, and AI ranking.`,
    `- [Pricing](${abs("/pricing/")}): One plan for the whole team, free trial, AI credits, and credit packs.`,
    `- [MCP](${abs("/mcp/")}): What Emploist's MCP is, how it works, and how to connect Claude, ChatGPT, and other assistants.`,
    `- [FAQ](${abs("/#faq")}): Common questions about pricing, AI ranking, careers pages, and assistants.`,
  ].join("\n");

  const features = [
    `- [AI ranking](${abs("/#ai-ranking")}): Match scores that break down skills, experience, seniority, and qualifications.`,
    `- [Careers page](${abs("/#careers-page")}): Hosted careers site with branding, custom domain, and optional code editing.`,
    `- [AI assistants](${abs("/#ai-assistants")}): Connect Claude, ChatGPT, and other MCP clients to manage hiring from chat.`,
  ].join("\n");

  const guideLines = GUIDES.map((guide) => {
    const copy = docs.guides[guide.key];
    const note = copy?.summary ? `: ${copy.summary}` : "";
    return `- [${copy?.title ?? guide.key}](${abs(docsUrl(guide.slug, DEFAULT_LOCALE))})${note}`;
  }).join("\n");

  const blogLines =
    posts.length === 0
      ? `- [Blog](${abs("/blog/")}): Guides and product updates.`
      : posts
          .map((post) => {
            const slug = postSlug(post.id);
            return `- [${post.data.title}](${abs(postUrl(slug, DEFAULT_LOCALE))}): ${post.data.description}`;
          })
          .join("\n");

  const legal = [
    `- [Terms of Service](${abs("/terms/")}): Legal terms for using Emploist.`,
    `- [Privacy Policy](${abs("/privacy/")}): How Emploist handles personal data.`,
  ].join("\n");

  const optional = [
    `- [Docs index](${abs("/docs/")}): All how-to guides.`,
    `- [Blog index](${abs("/blog/")}): All posts.`,
    `- [RSS feed](${abs("/rss.xml")}): Blog updates as RSS.`,
    `- [mcp.txt](${abs("/mcp.txt")}): Precise Emploist MCP connection docs for AI agents.`,
    `- [Sign in / start trial](${APP.signUpUrl}): Open the Emploist app.`,
    `- [Support](mailto:${SITE.supportEmail}): Email ${SITE.supportEmail}.`,
  ].join("\n");

  return `# ${SITE.name}

> Emploist is applicant tracking software for businesses: a hosted careers page, a hiring pipeline with stages and emails, and AI that ranks every application against the job. ${PLAN.trialDays}-day free trial, then $${PLAN.priceUsd}/month (or $${PLAN.yearlyPriceUsd}/year) for the whole team, with no per-seat fees. Operated by Navaneeth CT, trading as Emploist. GTM engineered by Mighil Puthukkudy. App: ${APP.signInUrl}.

Use this file to find the right page on ${SITE.url}. Prefer linked pages for current pricing, legal text, and step-by-step instructions. Ranking one application uses one AI credit; the plan includes ${PLAN.credits.toLocaleString("en-US")} credits per month (${PLAN.yearlyCredits.toLocaleString("en-US")} with yearly billing).

## Product

${product}

## Features

${features}

## Docs

${guideLines}

## Blog

${blogLines}

## Legal

${legal}

## Optional

${optional}
`;
}
