/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ideas2invest.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404'], // exclude unnecessary pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/404'] }
    ]
  }
}