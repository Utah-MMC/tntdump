import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'How to Choose the Right Dumpster Size: A Simple Guide | TNT Dumpsters',
  description: 'A simple, practical guide for choosing the right dumpster size with real project examples, volume tips, and cost-saving advice.',
  keywords: 'dumpster sizes explained, cubic yards, dumpster dimensions, dumpster capacity, choose dumpster size, weight limits, debris tonnage, dumpster pricing fees',
  alternates: { canonical: 'https://tntdump.com/blog/choose-right-dumpster-size' },
    openGraph: {
      title: 'How to Choose the Right Dumpster Size: A Simple Guide | TNT Dumpsters',
      description: 'A simple, practical guide for choosing the right dumpster size with real project examples, volume tips, and cost-saving advice.',
      url: 'https://tntdump.com/blog/choose-right-dumpster-size',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/choose-right-dumpster-size"} title={"Dumpster Sizes: Yards, Dimensions, Capacity | TNT Dumpsters"} description={"Dumpster size guide: dimensions, capacity, and best uses. Estimate volume, avoid overages, plan placement, and compare pricing."} url="https://tntdump.com/blog/choose-right-dumpster-size" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Sizes: Yards, Dimensions, Capacity</h1>
            <p className="mt-4 text-lg text-gray-600">Dumpster size guide: dimensions, capacity, and best uses. Estimate volume, avoid overages, plan placement, and compare pricing.</p>
        </div>
      </section>
    </main>
  )
}

