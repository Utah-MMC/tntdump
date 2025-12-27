import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Yard Waste Dumpster Guide: Size, Cost & Disposal Tips |...',
  description: 'Yard waste dumpster guide: size, cost, what you can toss, seasonal tips, and disposal rules for Utah cleanups and landscaping.',
  keywords: 'yard waste dumpster, yard cleanup dumpster, yard debris removal, landscaping waste dumpster, yard waste disposal, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/blog/yard-waste-dumpster-guide' },
    openGraph: {
      title: 'Yard Waste Dumpster Guide: Size, Cost & Disposal Tips |...',
      description: 'Yard waste dumpster guide: size, cost, what you can toss, seasonal tips, and disposal rules for Utah cleanups and landscaping.',
      url: 'https://tntdump.com/blog/yard-waste-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/yard-waste-dumpster-guide"} title={"Yard Waste Dumpster Guide: Size, Cost & Disposal Tips |..."} description={"Yard waste dumpster guide: size, cost, what you can toss, seasonal tips, and disposal rules for Utah cleanups and landscaping."} url="https://tntdump.com/blog/yard-waste-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Yard Waste Dumpster Guide: Size, Cost & Disposal Tips |...</h1>
            <p className="mt-4 text-lg text-gray-600">Yard waste dumpster guide: size, cost, what you can toss, seasonal tips, and disposal rules for Utah cleanups and landscaping.</p>
        </div>
      </section>
    </main>
  )
}
