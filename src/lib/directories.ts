// The directories that list Emploist, shown on /listed-on/ in this order.
// Directories check that page for their backlink or badge.
//
// - `badge` is the directory's embed code, pasted exactly as it gives it. It
//   must be a plain link around an image: no scripts, iframes, or images that
//   set cookies. The Privacy Policy says the website has none, and covers only
//   these images loading from the directories' own servers.
// - Leave `badge` out for a directory that asks only for a link: the page
//   then shows its name, linked.

export interface Directory {
  name: string;
  url: string;
  /** HTML: the directory's badge embed code. */
  badge?: string;
}

export const DIRECTORIES: Directory[] = [
  {
    name: "DANG!",
    url: "https://dang.ai",
    badge: `<a href="https://dang.ai" target="_blank" rel="dofollow noopener" style="display:inline-block;text-decoration:none;"><img src="https://assets.dang.ai/badges/dang-verified-dark.png" alt="Verified on DANG!" width="260" height="94" style="display:block;width:260px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" /></a>`,
  },
];
