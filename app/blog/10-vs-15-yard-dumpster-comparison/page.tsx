import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '10 vs 15 Yard Dumpster: Which Size Do You Need? | TNT...',
  description: 'A clear 10 vs 15 yard dumpster comparison with capacity, footprint, costs, and real project examples to help you pick the right size.',
  keywords: '10 vs 15 yard dumpster, 10 yard vs 15 yard, small dumpster comparison, dumpster size comparison, residential dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/10-vs-15-yard-dumpster-comparison' },
    openGraph: {
      title: '10 vs 15 Yard Dumpster: Which Size Do You Need? | TNT Dumpsters',
      description: 'A clear 10 vs 15 yard dumpster comparison with capacity, footprint, costs, and real project examples to help you pick the right size.',
      url: 'https://tntdump.com/blog/10-vs-15-yard-dumpster-comparison',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/10-vs-15-yard-dumpster-comparison"} title={"10 vs 15 Yard Dumpster: Which Size Do You Need? | TNT..."} description={"10 vs 15 yard dumpsters compared: dimensions, capacity, cost, and best uses so you choose the right size and avoid overpaying."} url="https://tntdump.com/blog/10-vs-15-yard-dumpster-comparison" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">10 vs 15 Yard Dumpster: Which Size Do You Need? | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">10 vs 15 yard dumpsters compared: dimensions, capacity, cost, and best uses so you choose the right size and avoid overpaying.</p>
        </div>
      </section>
    </main>
  )
}

