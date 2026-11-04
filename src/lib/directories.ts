// The directories that list Emploist, shown on /listed-on/ in this order.
// Directories check that page for their backlink or badge.
//
// - `badge` is the directory's embed code, pasted exactly as it gives it. It
//   must be a plain link around an image: no scripts, iframes, or images that
//   set cookies. The Privacy Policy says the website has none, and covers only
//   these images loading from the directories' own servers.
// - Leave `badge` out for a directory that asks only for a link: the page
//   then shows its name, linked.
// - `homeBadge` is for a directory that requires its badge on the home page.
//   It's shown small in the home page's footer, which the Privacy Policy
//   also covers. Same rules as `badge`.

export interface Directory {
  name: string;
  url: string;
  /** HTML: the directory's badge embed code. */
  badge?: string;
  /** HTML: the embed code for the home page's footer, exactly as given. */
  homeBadge?: string;
}

export const DIRECTORIES: Directory[] = [
  {
    name: "DANG!",
    url: "https://dang.ai",
    badge: `<a href="https://dang.ai" target="_blank" rel="dofollow noopener" style="display:inline-block;text-decoration:none;"><img src="https://assets.dang.ai/badges/dang-verified-dark.png" alt="Verified on DANG!" width="260" height="94" style="display:block;width:260px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" /></a>`,
  },
  {
    name: "Findly.tools",
    url: "https://findly.tools/emploist?utm_source=emploist",
    badge: `<a href="https://findly.tools/emploist?utm_source=emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://findly.tools/badges/findly-tools-badge-dark.svg" alt="Featured on Findly.tools" width="175" height="55" />
</a>`,
    homeBadge: `<a href="https://findly.tools/emploist?utm_source=emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="175" height="55" />
</a>`,
  },
  {
    name: "Turbo0",
    url: "https://turbo0.com/item/emploist",
    badge: `<a href="https://turbo0.com/item/emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://img.turbo0.com/badge-listed-dark.svg" alt="Listed on Turbo0" style="height: 54px; width: auto;" />
</a>`,
    homeBadge: `<a href="https://turbo0.com/item/emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" style="height: 54px; width: auto;" />
</a>`,
  },
  {
    name: "Twelve Tools",
    url: "https://twelve.tools",
    badge: `<a href="https://twelve.tools" target="_blank"><img src="https://twelve.tools/badge0-dark.svg" alt="Featured on Twelve Tools" width="148" height="40"></a>`,
    homeBadge: `<a href="https://twelve.tools" target="_blank"><img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" width="148" height="40"></a>`,
  },
  {
    name: "ToolPilot",
    url: "https://www.toolpilot.ai",
    // ToolPilot gives no embed code, only its badge image to link to it.
    badge: `<a href="https://www.toolpilot.ai" target="_blank" rel="noopener"><img src="https://www.toolpilot.ai/cdn/shop/files/f-b.png" alt="Featured on ToolPilot" width="300" height="66" /></a>`,
  },
  {
    name: "LaunchIgniter",
    url: "https://launchigniter.com/product/emploist?ref=badge-emploist",
    badge: `<a href="https://launchigniter.com/product/emploist?ref=badge-emploist" target="_blank">
  <img src="https://launchigniter.com/api/badge/emploist?theme=dark" alt="Featured on LaunchIgniter" width="212" height="55" />
</a>`,
    homeBadge: `<a href="https://launchigniter.com/product/emploist?ref=badge-emploist" target="_blank">
  <img src="https://launchigniter.com/api/badge/emploist?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
</a>`,
  },
];
