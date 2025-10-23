/** @type {import('next').NextConfig} */
// Load env early for build-time checks
try {
  const path = require('path')
  require('dotenv').config({ path: path.join(__dirname, '.env.local') })
  require('dotenv').config({ path: path.join(__dirname, '.env') })
} catch {}
// Enforce required email credentials at build time (prod/CI)
const mustEnforce = process.env.NODE_ENV === 'production' || String(process.env.CI).toLowerCase() === 'true'
if (mustEnforce && (!process.env.EMAIL_USER || !process.env.EMAIL_PASS)) {
  throw new Error('Build aborted: EMAIL_USER and EMAIL_PASS must be set in environment or .env.local')
}

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
    ]
  },

  // Allow deploy to succeed even if there are ESLint/TypeScript errors.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // No redirects/rewrites for city pages; they now exist at new paths
};

module.exports = nextConfig;
