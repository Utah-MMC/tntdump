/** @type {import('next').NextConfig} */
// Load env early for build-time checks
try {
  const fs = require('fs')
  const path = require('path')
  const envFiles = [path.join(__dirname, '.env.local'), path.join(__dirname, '.env')]
  for (const f of envFiles) {
    if (fs.existsSync(f)) {
      const raw = fs.readFileSync(f, 'utf8')
      raw.split(/\r?\n/).forEach((line) => {
        const m = line.match(/^([^#=\s]+)\s*=\s*(.*)$/)
        if (m) {
          const key = m[1]
          let val = m[2]
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1)
          }
          if (process.env[key] === undefined) process.env[key] = val
        }
      })
    }
  }
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

  // Rewrites for legacy city URLs to new App Router path (no redirect)
  async rewrites() {
    return [
      { source: '/cities/:city', destination: '/ut/:city/dumpster-rental' },
      { source: '/dumpster-rental-:city-ut', destination: '/ut/:city/dumpster-rental' },
      // Root-level favicon and PWA assets preferred by Google Search
      { source: '/favicon.ico', destination: '/images/logo/favicon.ico' },
      { source: '/apple-touch-icon.png', destination: '/images/logo/apple-touch-icon.png' },
      { source: '/site.webmanifest', destination: '/images/logo/site.webmanifest' },
      { source: '/android-chrome-192x192.png', destination: '/images/logo/android-chrome-192x192.png' },
      { source: '/android-chrome-512x512.png', destination: '/images/logo/android-chrome-512x512.png' },
    ]
  },
};

module.exports = nextConfig;
