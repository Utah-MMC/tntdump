import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '15 Yard Dumpster Complete Guide: Size, Uses, and Tips | TNT Dumpsters',
  description: 'A complete 15 yard dumpster guide covering size, capacity, common projects, weight limits, and loading tips for Utah rentals.',
  keywords: '15 yard dumpster rental, 15 yard dumpster size, what fits in 15 yard dumpster, 15 yard dumpster dimensions, 15 yard dumpster cost, 15 yard dumpster capacity, 15 yard dumpster weight limit',
,
  alternates: { canonical: 'https://tntdump.com/blog/15-yard-dumpster-complete-guide' },
    openGraph: {
      title: '15 Yard Dumpster Complete Guide: Size, Uses, and Tips | TNT Dumpsters',
      description: 'A complete 15 yard dumpster guide covering size, capacity, common projects, weight limits, and loading tips for Utah rentals.',
      url: 'https://tntdump.com/blog/15-yard-dumpster-complete-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/15-yard-dumpster-complete-guide"} title={"15 Yard Dumpster: Complete Guide, Dimensions, Uses &..."} description={"15-yard dumpster guide: best projects, what fits, weight limits, and typical pricing in Utah—plus loading tips to avoid overages."} url="https://tntdump.com/blog/15-yard-dumpster-complete-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">15 Yard Dumpster: Complete Guide, Dimensions, Uses &...</h1>
            <p className="mt-4 text-lg text-gray-600">15-yard dumpster guide: best projects, what fits, weight limits, and typical pricing in Utah—plus loading tips to avoid overages.</p>
        </div>
      </section>
    </main>
  )
}
