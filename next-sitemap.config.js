/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tekmera.ai",
  // robots.txt is hand-maintained (custom per-bot rules); don't let next-sitemap overwrite it.
  generateRobotsTxt: false,
  // Single sitemap.xml (no index file) — matches the Sitemap reference in robots.txt.
  generateIndexSitemap: false,
};
