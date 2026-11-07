// The directories that list Emploist, shown on /listed-on/ in this order.
// Directories check that page for their backlink or badge.
//
// - `badge` is the directory's embed code, pasted as it gives it, but with
//   its light badge where it has one, to suit the light page. It must be a
//   plain link around an image, or a directory's script that only shows one:
//   no iframes, and nothing that sets cookies. The Privacy Policy covers only
//   these badges and scripts loading from the directories' own servers.
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
  // SourceForge, Slashdot, and Top Business Software are one company's sites.
  // Their embed code, used as given in both places, loads a script from its
  // server (b.sf-syn.com) that only replaces the link with a linked badge.
  {
    name: "SourceForge",
    url: "https://sourceforge.net/software/product/Emploist/",
    badge: `<!-- Begin SF Tag -->
<div class="sf-root" data-id="4163392" data-badge="customers-love-us-white" data-variant-id="sf" style="width:125px">
    <a href="https://sourceforge.net/software/product/Emploist/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=sf';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End SF Tag -->`,
    homeBadge: `<!-- Begin SF Tag -->
<div class="sf-root" data-id="4163392" data-badge="customers-love-us-white" data-variant-id="sf" style="width:125px">
    <a href="https://sourceforge.net/software/product/Emploist/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=sf';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End SF Tag -->`,
  },
  {
    name: "Slashdot",
    url: "https://slashdot.org/software/p/Emploist/",
    badge: `<!-- Begin Slashdot Tag -->
<div class="sf-root" data-id="4163392" data-badge="users-love-us-new-white" data-variant-id="sd" style="width:125px">
    <a href="https://slashdot.org/software/p/Emploist/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=sd';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End Slashdot Tag -->`,
    homeBadge: `<!-- Begin Slashdot Tag -->
<div class="sf-root" data-id="4163392" data-badge="users-love-us-new-white" data-variant-id="sd" style="width:125px">
    <a href="https://slashdot.org/software/p/Emploist/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=sd';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End Slashdot Tag -->`,
  },
  {
    name: "Top Business Software",
    url: "https://topbusinesssoftware.com/products/Emploist/reviews/",
    badge: `<!-- Begin TBS Tag -->
<div class="sf-root" data-id="4163392" data-badge="most-loved" data-variant-id="tbs" style="width:125px">
    <a href="https://topbusinesssoftware.com/products/Emploist/reviews/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=tbs';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End TBS Tag -->`,
    homeBadge: `<!-- Begin TBS Tag -->
<div class="sf-root" data-id="4163392" data-badge="most-loved" data-variant-id="tbs" style="width:125px">
    <a href="https://topbusinesssoftware.com/products/Emploist/reviews/" target="_blank">Emploist Reviews</a>
</div>
<script>(function () {var sc=document.createElement('script');sc.async=true;sc.src='https://b.sf-syn.com/badge_js?sf_id=4163392&variant_id=tbs';var p=document.getElementsByTagName('script')[0];p.parentNode.insertBefore(sc, p);})();
</script>
<!-- End TBS Tag -->`,
  },
  {
    name: "Fazier",
    url: "https://fazier.com/launches/www.emploist.com",
    badge: `<a href="https://fazier.com/launches/www.emploist.com" target="_blank"><img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=light" width=250 alt="Fazier badge" /></a>`,
    homeBadge: `<a href="https://fazier.com/launches/www.emploist.com" target="_blank"><img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=light" width=250 alt="Fazier badge" /></a>`,
  },
  {
    name: "Startup Fame",
    url: "https://startupfa.me/s/emploist?utm_source=www.emploist.com",
    badge: `<a href="https://startupfa.me/s/emploist?utm_source=www.emploist.com" target="_blank"><img src="https://startupfa.me/badges/featured-badge.webp" alt="Emploist - Featured on Startup Fame" width="171" height="54" /></a>`,
    homeBadge: `<a href="https://startupfa.me/s/emploist?utm_source=www.emploist.com" target="_blank"><img src="https://startupfa.me/badges/featured-badge.webp" alt="Emploist - Featured on Startup Fame" width="171" height="54" /></a>`,
  },
  {
    name: "DANG!",
    url: "https://dang.ai",
    // DANG!'s code gives its dark badge. Its server also has a light one,
    // dang-verified-light.png, which the page uses.
    badge: `<a href="https://dang.ai" target="_blank" rel="dofollow noopener" style="display:inline-block;text-decoration:none;"><img src="https://assets.dang.ai/badges/dang-verified-light.png" alt="Verified on DANG!" width="260" height="94" style="display:block;width:260px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" /></a>`,
  },
  {
    name: "Findly.tools",
    url: "https://findly.tools/emploist?utm_source=emploist",
    badge: `<a href="https://findly.tools/emploist?utm_source=emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="175" height="55" />
</a>`,
    homeBadge: `<a href="https://findly.tools/emploist?utm_source=emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="175" height="55" />
</a>`,
  },
  {
    name: "Turbo0",
    url: "https://turbo0.com/item/emploist",
    badge: `<a href="https://turbo0.com/item/emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" style="height: 54px; width: auto;" />
</a>`,
    homeBadge: `<a href="https://turbo0.com/item/emploist" target="_blank" rel="noopener noreferrer">
  <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" style="height: 54px; width: auto;" />
</a>`,
  },
  {
    name: "Twelve Tools",
    url: "https://twelve.tools",
    badge: `<a href="https://twelve.tools" target="_blank"><img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" width="148" height="40"></a>`,
    homeBadge: `<a href="https://twelve.tools" target="_blank"><img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" width="148" height="40"></a>`,
  },
  {
    name: "ToolPilot",
    url: "https://www.toolpilot.ai",
    // ToolPilot gives no embed code, only its badge image to link to it.
    // Its server also has a light one, f-w.png, which the page uses.
    badge: `<a href="https://www.toolpilot.ai" target="_blank" rel="noopener"><img src="https://www.toolpilot.ai/cdn/shop/files/f-w.png" alt="Featured on ToolPilot" width="300" height="66" /></a>`,
  },
  {
    name: "LaunchIgniter",
    url: "https://launchigniter.com/product/emploist?ref=badge-emploist",
    badge: `<a href="https://launchigniter.com/product/emploist?ref=badge-emploist" target="_blank">
  <img src="https://launchigniter.com/api/badge/emploist?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
</a>`,
    homeBadge: `<a href="https://launchigniter.com/product/emploist?ref=badge-emploist" target="_blank">
  <img src="https://launchigniter.com/api/badge/emploist?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
</a>`,
  },
  {
    name: "AI Agents Directory",
    url: "https://aiagentsdirectory.com/agent/emploist",
    // Its badge comes in one color only, so both places use the same code.
    badge: `<a href="https://aiagentsdirectory.com/agent/emploist" target="_blank" rel="noopener" title="Discover Emploist on AI Agents Directory">
  <img src="https://aiagentsdirectory.com/featured-badge.svg?v=2024" alt="Emploist - Featured on AI Agents Directory" width="200" height="50" />
</a>`,
    homeBadge: `<a href="https://aiagentsdirectory.com/agent/emploist" target="_blank" rel="noopener" title="Discover Emploist on AI Agents Directory">
  <img src="https://aiagentsdirectory.com/featured-badge.svg?v=2024" alt="Emploist - Featured on AI Agents Directory" width="200" height="50" />
</a>`,
  },
  {
    name: "Smol Launch",
    url: "https://smollaunch.com",
    badge: `<a href="https://smollaunch.com" target="_blank" rel="noopener">
  <img src="https://smollaunch.com/badges/featured.svg" alt="Emploist — Featured on Smol Launch" loading="lazy" width="250" height="60" />
</a>`,
    homeBadge: `<a href="https://smollaunch.com" target="_blank" rel="noopener">
  <img src="https://smollaunch.com/badges/featured.svg" alt="Emploist — Featured on Smol Launch" loading="lazy" width="250" height="60" />
</a>`,
  },
  {
    name: "OpenHunts",
    url: "https://openhunts.com",
    // Its badge comes in one color only, so both places use the same code.
    badge: `<a href="https://openhunts.com" target="_blank" title="OpenHunts Club">
  <img alt="OpenHunts Club Member" height="105" src="https://cdn.openhunts.com/badges/club.webp" style="width: 195px; height: auto;" width="486">
</a>`,
    homeBadge: `<a href="https://openhunts.com" target="_blank" title="OpenHunts Club">
  <img alt="OpenHunts Club Member" height="105" src="https://cdn.openhunts.com/badges/club.webp" style="width: 195px; height: auto;" width="486">
</a>`,
  },
  {
    name: "Startup Fast",
    url: "https://startupfa.st",
    // Its dark badge is light text on a see-through background, which
    // disappears on a white page, so both places use the light one.
    badge: `<a href="https://startupfa.st" target="_blank" title="Powered by Startup Fast">
  <img
    src="https://startupfa.st/images/badges/powered-by-light.svg"
    alt="Powered by Startup Fast"
    width="150"
    height="44"
  />
</a>`,
    homeBadge: `<a href="https://startupfa.st" target="_blank" title="Powered by Startup Fast">
  <img
    src="https://startupfa.st/images/badges/powered-by-light.svg"
    alt="Powered by Startup Fast"
    width="150"
    height="44"
  />
</a>`,
  },
  {
    name: "DevHunt",
    url: "https://devhunt.org/tool/emploist",
    // DevHunt's code gives its dark badge. Its server also serves a light
    // one when "?theme=light" is added, which both places use.
    badge: `<a href="https://devhunt.org/tool/emploist" target="_blank" title="Emploist on DevHunt"><img src="https://devhunt.org/badge/emploist.svg?theme=light" alt="Emploist - Featured on DevHunt" width="220" height="54" /></a>`,
    homeBadge: `<a href="https://devhunt.org/tool/emploist" target="_blank" title="Emploist on DevHunt"><img src="https://devhunt.org/badge/emploist.svg?theme=light" alt="Emploist - Featured on DevHunt" width="220" height="54" /></a>`,
  },
  {
    name: "Huzzler",
    url: "https://huzzler.so/products/PtRzohv6Zg/emploist-com?utm_source=huzzler_product_website&utm_medium=badge&utm_campaign=free_listing",
    // Huzzler's code gives its dark badge. Its server also has a light one,
    // featured-light.png, which both places use.
    badge: `<a href="https://huzzler.so/products/PtRzohv6Zg/emploist-com?utm_source=huzzler_product_website&amp;utm_medium=badge&amp;utm_campaign=free_listing" target="_blank" rel="noopener noreferrer">
    <img alt="Huzzler Embed Badge" src="https://huzzler.so/assets/images/embeddable-badges/featured-light.png" width="159" height="55" />
</a>`,
    homeBadge: `<a href="https://huzzler.so/products/PtRzohv6Zg/emploist-com?utm_source=huzzler_product_website&amp;utm_medium=badge&amp;utm_campaign=free_listing" target="_blank" rel="noopener noreferrer">
    <img alt="Huzzler Embed Badge" src="https://huzzler.so/assets/images/embeddable-badges/featured-light.png" width="159" height="55" />
</a>`,
  },
];
