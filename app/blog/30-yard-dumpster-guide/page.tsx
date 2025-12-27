import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '30 Yard Dumpster: When to Use & What Fits | Complete...',
  description: '30-yard dumpster guide: dimensions, what fits, weight limits, typical pricing, and when to choose 30 vs 20-yard for big projects.',
  keywords: '30 yard dumpster, 30 yard dumpster rental, what fits in 30 yard dumpster, 30 yard dumpster dimensions, 30 yard dumpster size, 30 yard dumpster cost, large dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/30-yard-dumpster-guide' },
    openGraph: {
      title: '30 Yard Dumpster: When to Use & What Fits | Complete...',
      description: '30-yard dumpster guide: dimensions, what fits, weight limits, typical pricing, and when to choose 30 vs 20-yard for big projects.',
      url: 'https://tntdump.com/blog/30-yard-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/30-yard-dumpster-guide"} title={"30 Yard Dumpster: When to Use & What Fits | Complete..."} description={"30-yard dumpster guide: dimensions, what fits, weight limits, typical pricing, and when to choose 30 vs 20-yard for big projects."} url="https://tntdump.com/blog/30-yard-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">30 Yard Dumpster: When to Use & What Fits | Complete...</h1>
            <p className="mt-4 text-lg text-gray-600">30-yard dumpster guide: dimensions, what fits, weight limits, typical pricing, and when to choose 30 vs 20-yard for big projects.</p>
        </div>
      </section>
    </main>
  )
}

