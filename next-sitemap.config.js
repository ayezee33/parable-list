/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://parablelist.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap if you have one
  generateIndexSitemap: false, // Set to true if you have more than 50,000 URLs
} 