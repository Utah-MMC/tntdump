import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '20 Yard Dumpster: Complete Guide (Size, Uses & Cost) | TNT Dumpsters',
  description:
    'A full 20-yard dumpster guide with size, capacity, typical projects, loading tips, and how to avoid overage fees in Utah rentals.',
  keywords:
    '20 yard dumpster rental, 20 yard dumpster dimensions, 20 yard dumpster cost, 20 yard vs 30 yard, 20 yard vs 15 yard dumpster, residential dumpster rental, kitchen remodel dumpster',
  alternates: { canonical: 'https://tntdump.com/20-yard-dumpster-complete-guide' },
  robots: { index: false, follow: true },
  openGraph: {
    title: '20 Yard Dumpster: Complete Guide (Size, Uses & Cost) | TNT Dumpsters',
    description:
      'A full 20-yard dumpster guide with size, capacity, typical projects, loading tips, and how to avoid overage fees in Utah rentals.',
    url: 'https://tntdump.com/20-yard-dumpster-complete-guide',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema
        slug={"20-yard-dumpster-complete-guide"}
        title={"20 Yard Dumpster: The Complete Guide to Utah"}
        description={
          "20-yard dumpster guide: dimensions, what fits, weight limits, typical pricing in Utah, and when to choose it for remodels or roofing."
        }
        url="https://tntdump.com/20-yard-dumpster-complete-guide"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">20 Yard Dumpster: The Complete Guide to Utah</h1>
          <p className="mt-4 text-lg text-gray-600">
            20-yard dumpster guide: dimensions, what fits, weight limits, typical pricing in Utah, and when to choose it for remodels or roofing.
          </p>
        </div>
      </section>
    </main>
  )
}
