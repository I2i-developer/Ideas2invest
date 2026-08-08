const fs = require('fs');
const path = require('path');

function getBlogPaths() {
  const blogsDir = path.join(__dirname, 'src', 'data', 'blogs');
  if (!fs.existsSync(blogsDir)) return [];

  return fs
    .readdirSync(blogsDir)
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .flatMap((file) => {
      const source = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const match = source.match(/slug\s*:\s*["']([^"']+)["']/);
      return match ? [`/blogs/${match[1]}`] : [];
    });
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ideas2invest.com',
  sourceDir: process.env.NEXT_DIST_DIR || '.next',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/thank-you'], // exclude unnecessary and post-submit pages
  additionalPaths: async (config) =>
    getBlogPaths().map((path) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    })),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/500', '/api/']
      }
    ]
  }
}
