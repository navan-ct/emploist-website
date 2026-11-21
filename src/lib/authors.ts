/** Profiles shown under blog posts. Keyed by the post frontmatter `author` string. */

export type AuthorProfile = {
  name: string;
  position: string;
  bio: string;
};

const AUTHORS: Record<string, AuthorProfile> = {
  "Navaneeth CT": {
    name: "Navaneeth CT",
    position: "Founder",
    /** HTML. */
    bio: `<a href="https://navaneethct.com/">Navaneeth</a> is the engineer behind Emploist. Expect hands-on posts about how it works, from careers page code to managing hiring from Claude. Say hello on <a href="https://www.linkedin.com/in/navaneeth-ct">LinkedIn</a>.`,
  },
  "Mighil Puthukkudy": {
    name: "Mighil Puthukkudy",
    position: "Partner & GTM Engineer",
    /** HTML. */
    bio: `<a href="https://mighil.com/">Mighil</a> is a generalist. On Emploist, he writes practical guides on better hiring, AI adoption for HR teams, and AI-driven transitions for career teams. Find him on <a href="https://www.linkedin.com/in/mighil">LinkedIn</a>.`,
  },
};

export function getAuthor(author: string): AuthorProfile | undefined {
  return AUTHORS[author];
}
