/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tntdump.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // disable index; live index is /sitemap.xml
  sitemapSize: 45000,
  exclude: ['/admin/*', '/api/*'],

  // We generate these three files ourselves in /public via the script.
  additionalSitemaps: [
    'https://tntdump.com/sitemap-pages.xml',
    'https://tntdump.com/sitemap-cities.xml',
    'https://tntdump.com/sitemap-posts.xml'
  ],

  // Keep hints lean
  changefreq: undefined,
  priority: undefined,

  // Fallback lastmod; type sitemaps carry the real updated_at values
  transform: async (_config, url) => ({
    loc: url,
    lastmod: new Date().toISOString()
  }),

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin/', '/api/'] }
    ],
    additionalSitemaps: [
      'https://tntdump.com/sitemap-pages.xml',
      'https://tntdump.com/sitemap-cities.xml',
      'https://tntdump.com/sitemap-posts.xml'
    ]
  }
};
