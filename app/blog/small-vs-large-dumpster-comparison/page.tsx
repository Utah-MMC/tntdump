import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Small vs Large Dumpster Comparison: Which Size Wins? | TNT Dumpsters',
  description: 'A practical small vs large dumpster comparison with cost, capacity, and project fit to help you choose the right size.',
  keywords: 'small vs large dumpster, small dumpster vs large dumpster, dumpster size comparison, residential vs commercial dumpster, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/blog/small-vs-large-dumpster-comparison' },
    openGraph: {
      title: 'Small vs Large Dumpster Comparison: Which Size Wins? | TNT Dumpsters',
      description: 'A practical small vs large dumpster comparison with cost, capacity, and project fit to help you choose the right size.',
      url: 'https://tntdump.com/blog/small-vs-large-dumpster-comparison',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/small-vs-large-dumpster-comparison"} title={"Small vs Large Dumpster: Complete Comparison Guide | TNT..."} description={"Small vs large dumpsters: compare capacity, cost, and best uses for 10–15 yard vs 30–40 yard containers on Utah projects."} url="https://tntdump.com/blog/small-vs-large-dumpster-comparison" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Small vs Large Dumpster: Complete Comparison Guide | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Small vs large dumpsters: compare capacity, cost, and best uses for 10–15 yard vs 30–40 yard containers on Utah projects.</p>
        </div>
      </section>
    </main>
  )
}
