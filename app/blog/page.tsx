import type { Metadata } from 'next'
import posts from '@/data/posts.json'

export const metadata: Metadata = {
  title: 'Dumpster Rental Blog | TNT Dumpsters | Tips, Guides & News',
  description: 'Expert tips, guides, and news about dumpster rental services. Learn about waste management, project planning, and get the latest updates from TNT Dumpsters.',
  keywords: 'dumpster rental blog, waste management tips, project planning, dumpster rental guides, utah dumpster rental news',
  alternates: { canonical: 'https://tntdump.com/blog' },
  openGraph: {
    title: 'Dumpster Rental Blog | TNT Dumpsters | Tips, Guides & News',
    description: 'Expert tips, guides, and news about dumpster rental services. Learn about waste management, project planning, and get the latest updates from TNT Dumpsters.',
    url: 'https://tntdump.com/blog',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

function toTitle(slug: string) {
  const cleaned = slug.replace(/^\/+/, '').replace(/[-_]/g, ' ')
  return cleaned.replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function Page() {
  const blogPosts = (posts as string[]).map((slug, index) => {
    const path = slug.startsWith('/') ? slug : `/${slug}`
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: toTitle(path.split('/').pop() || ''),
      url: `https://tntdump.com${path}`,
    }
  })

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'TNT Dumpsters Blog',
            url: 'https://tntdump.com/blog',
            description: 'Expert tips, guides, and news about dumpster rental services in Utah.',
            publisher: { '@id': 'https://tntdump.com/#organization' },
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.name,
              mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
              url: post.url,
            })),
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tntdump.com/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tntdump.com/blog' },
            ],
          })
        }}
      />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Blog</h1>
            <p className="mt-4 text-lg text-gray-600">Expert tips, guides, and news about dumpster rental services. Learn about waste management, project planning, and get the latest updates from TNT Dumpsters.</p>
        </div>
      </section>
    </main>
  )
}
