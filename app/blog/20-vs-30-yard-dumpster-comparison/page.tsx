import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '20 vs 30 Yard Dumpster Comparison: Pick the Right Size |...',
  description: 'A practical 20 vs 30 yard dumpster comparison with size, capacity, costs, and real project fit so you avoid overpaying or running out of space.',
  keywords: '20 vs 30 yard dumpster, 20 yard vs 30 yard, medium dumpster comparison, kitchen remodel dumpster, roof tear-off dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/20-vs-30-yard-dumpster-comparison' },
    openGraph: {
      title: '20 vs 30 Yard Dumpster Comparison: Pick the Right Size | TNT Dumpsters',
      description: 'A practical 20 vs 30 yard dumpster comparison with size, capacity, costs, and real project fit so you avoid overpaying or running out of space.',
      url: 'https://tntdump.com/blog/20-vs-30-yard-dumpster-comparison',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/20-vs-30-yard-dumpster-comparison"} title={"20 vs 30 Yard Dumpster: Which Size for Your Project? |..."} description={"Compare 20 vs 30 yard dumpsters: capacity, cost, and best uses. Learn which size fits remodels, roof tear-offs, and renovations."} url="https://tntdump.com/blog/20-vs-30-yard-dumpster-comparison" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">20 vs 30 Yard Dumpster: Which Size for Your Project? |...</h1>
            <p className="mt-4 text-lg text-gray-600">Compare 20 vs 30 yard dumpsters: capacity, cost, and best uses. Learn which size fits remodels, roof tear-offs, and renovations.</p>
        </div>
      </section>
    </main>
  )
}

