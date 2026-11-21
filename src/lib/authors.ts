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
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
