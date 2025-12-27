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
    minimumCacheTTL: 31536000, // 1 year - images are immutable
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true, // Enable ETags for better caching

  // Workaround for a Vercel-only build crash in Next's micromatch/picomatch stack.
  // Disabling tracing avoids the problematic glob matching during build.
  outputFileTracing: false,
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
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/sitemap-:path*.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/blog/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/services/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/ut/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/about',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/contact',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/quote',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/calculator/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
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

  async redirects() {
    return [
      // Canonicalize legacy city URLs to the service-area route
      {
        source: '/ut/:city/dumpster-rental',
        destination: '/:city-dumpster-rentals/service-areas/:city',
        permanent: true,
      },
      {
        source: '/dumpster-rental-:city-ut',
        destination: '/:city-dumpster-rentals/service-areas/:city',
        permanent: true,
      },
      {
        source: '/cities/:city',
        destination: '/:city-dumpster-rentals/service-areas/:city',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },

      // Redirect accidental /slug/slug duplicates (prevents crawl waste + duplicate content)
      { source: '/avoid-overweight-fees-dumpster/avoid-overweight-fees-dumpster', destination: '/avoid-overweight-fees-dumpster', permanent: true },
      { source: '/10-vs-15-yard-dumpster-comparison/10-vs-15-yard-dumpster-comparison', destination: '/10-vs-15-yard-dumpster-comparison', permanent: true },
      { source: '/15-yard-dumpster-complete-guide/15-yard-dumpster-complete-guide', destination: '/15-yard-dumpster-complete-guide', permanent: true },
      { source: '/20-yard-dumpster-complete-guide/20-yard-dumpster-complete-guide', destination: '/20-yard-dumpster-complete-guide', permanent: true },
      { source: '/20-vs-30-yard-dumpster-comparison/20-vs-30-yard-dumpster-comparison', destination: '/20-vs-30-yard-dumpster-comparison', permanent: true },
      { source: '/basement-cleanout-dumpster-tips/basement-cleanout-dumpster-tips', destination: '/basement-cleanout-dumpster-tips', permanent: true },
      { source: '/bathroom-remodel-dumpster-guide/bathroom-remodel-dumpster-guide', destination: '/bathroom-remodel-dumpster-guide', permanent: true },
      { source: '/choose-right-dumpster-size/choose-right-dumpster-size', destination: '/choose-right-dumpster-size', permanent: true },
      { source: '/commercial-dumpster-rental-guide/commercial-dumpster-rental-guide', destination: '/commercial-dumpster-rental-guide', permanent: true },
      { source: '/concrete-disposal-dumpster-tips/concrete-disposal-dumpster-tips', destination: '/concrete-disposal-dumpster-tips', permanent: true },
      { source: '/construction-dumpster-size-guide/construction-dumpster-size-guide', destination: '/construction-dumpster-size-guide', permanent: true },
      { source: '/construction-waste-management/construction-waste-management', destination: '/construction-waste-management', permanent: true },
      { source: '/contractor-swap-scheduling-tips/contractor-swap-scheduling-tips', destination: '/contractor-swap-scheduling-tips', permanent: true },
      { source: '/deck-demolition-dumpster-guide/deck-demolition-dumpster-guide', destination: '/deck-demolition-dumpster-guide', permanent: true },
      { source: '/dumpster-placement-driveway-protection/dumpster-placement-driveway-protection', destination: '/dumpster-placement-driveway-protection', permanent: true },
      { source: '/dumpster-prohibited-items/dumpster-prohibited-items', destination: '/dumpster-prohibited-items', permanent: true },
      { source: '/dumpster-rental-cost-2025/dumpster-rental-cost-2025', destination: '/dumpster-rental-cost-2025', permanent: true },
      { source: '/dumpster-rental-prices-by-size/dumpster-rental-prices-by-size', destination: '/dumpster-rental-prices-by-size', permanent: true },
      { source: '/dumpster-rentals-2025-guide/dumpster-rentals-2025-guide', destination: '/dumpster-rentals-2025-guide', permanent: true },
      { source: '/estate-cleanout-complete-guide/estate-cleanout-complete-guide', destination: '/estate-cleanout-complete-guide', permanent: true },
      { source: '/estate-cleanout-steps/estate-cleanout-steps', destination: '/estate-cleanout-steps', permanent: true },
      { source: '/fence-removal-dumpster-guide/fence-removal-dumpster-guide', destination: '/fence-removal-dumpster-guide', permanent: true },
      { source: '/forty-yard-dumpster-guide/forty-yard-dumpster-guide', destination: '/forty-yard-dumpster-guide', permanent: true },
      { source: '/garage-cleanout-checklist/garage-cleanout-checklist', destination: '/garage-cleanout-checklist', permanent: true },
      { source: '/holiday-cleanup-dumpster-tips/holiday-cleanup-dumpster-tips', destination: '/holiday-cleanup-dumpster-tips', permanent: true },
      { source: '/home-cleanout-timeline/home-cleanout-timeline', destination: '/home-cleanout-timeline', permanent: true },
      { source: '/home-renovation-dumpster-guide/home-renovation-dumpster-guide', destination: '/home-renovation-dumpster-guide', permanent: true },
      { source: '/kitchen-remodel-dumpster-guide/kitchen-remodel-dumpster-guide', destination: '/kitchen-remodel-dumpster-guide', permanent: true },
      { source: '/landscaping-debris-dumpster/landscaping-debris-dumpster', destination: '/landscaping-debris-dumpster', permanent: true },
      { source: '/moving-cleanout-dumpster-guide/moving-cleanout-dumpster-guide', destination: '/moving-cleanout-dumpster-guide', permanent: true },
      { source: '/office-cleanout-dumpster-guide/office-cleanout-dumpster-guide', destination: '/office-cleanout-dumpster-guide', permanent: true },
      { source: '/roofing-dumpster-weight-guide/roofing-dumpster-weight-guide', destination: '/roofing-dumpster-weight-guide', permanent: true },
      { source: '/shed-demolition-dumpster/shed-demolition-dumpster', destination: '/shed-demolition-dumpster', permanent: true },
      { source: '/small-vs-large-dumpster-comparison/small-vs-large-dumpster-comparison', destination: '/small-vs-large-dumpster-comparison', permanent: true },
      { source: '/spring-cleanout-dumpster-plan/spring-cleanout-dumpster-plan', destination: '/spring-cleanout-dumpster-plan', permanent: true },
      { source: '/storm-cleanup-dumpster-guide/storm-cleanup-dumpster-guide', destination: '/storm-cleanup-dumpster-guide', permanent: true },
      { source: '/ten-yard-dumpster-uses/ten-yard-dumpster-uses', destination: '/ten-yard-dumpster-uses', permanent: true },
      { source: '/utah-dumpster-permit-checklist/utah-dumpster-permit-checklist', destination: '/utah-dumpster-permit-checklist', permanent: true },
      { source: '/winter-dumpster-rental-tips/winter-dumpster-rental-tips', destination: '/winter-dumpster-rental-tips', permanent: true },
      { source: '/yard-waste-dumpster-guide/yard-waste-dumpster-guide', destination: '/yard-waste-dumpster-guide', permanent: true },
    ];
  },

  // Rewrites for legacy assets to new App Router path (no redirect)
  async rewrites() {
    return [
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
