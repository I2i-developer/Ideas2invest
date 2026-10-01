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
      const slugMatch = source.match(/slug\s*:\s*["']([^"']+)["']/);
      const dateMatch = source.match(/date\s*:\s*["'](\d{2})-(\d{2})-(\d{4})["']/);
      if (!slugMatch) return [];

      return [
        {
          loc: `/blogs/${slugMatch[1]}`,
          lastmod: dateMatch
            ? new Date(`${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}T00:00:00.000Z`).toISOString()
            : new Date().toISOString(),
        },
      ];
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
    getBlogPaths().map((blogPath) => ({
      loc: blogPath.loc,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: blogPath.lastmod,
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
