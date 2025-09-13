/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tntdump.com',
          },
        ],
        destination: 'https://tntdump.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
