import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025',
  description: '15 vs 20 yard dumpsters: capacity, pricing, and best projects. Learn when to size up to avoid extra hauls or overages. G',
  keywords: '15 vs 20 yard dumpster, 15 yard or 20 yard dumpster, dumpster size comparison, 15 yard dumpster vs 20 yard, which dumpster size, dumpster rental comparison',
,
  alternates: { canonical: 'https://tntdump.com/blog/15-vs-20-yard-dumpster' },
    openGraph: {
      title: '15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025',
      description: '15 vs 20 yard dumpsters: capacity, pricing, and best projects. Learn when to size up to avoid extra hauls or overages. G',
      url: 'https://tntdump.com/blog/15-vs-20-yard-dumpster',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/15-vs-20-yard-dumpster"} title={"15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025"} description={"15 vs 20 yard dumpsters: capacity, pricing, and best projects. Learn when to size up to avoid extra hauls or overages. G"} url="https://tntdump.com/blog/15-vs-20-yard-dumpster" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025</h1>
            <p className="mt-4 text-lg text-gray-600">15 vs 20 yard dumpsters: capacity, pricing, and best projects. Learn when to size up to avoid extra hauls or overages. G</p>
        </div>
      </section>
    </main>
  )
}
