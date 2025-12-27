import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: '20 Yard vs 30 Yard Dumpster: Complete Comparison 2025',
  description: '20 vs 30 yard dumpsters: capacity, cost differences, weight limits, and best projects. Use this decision guide to pick the right size.',
  keywords: '20 vs 30 yard dumpster, 20 yard or 30 yard dumpster, dumpster size comparison, 20 yard dumpster vs 30 yard, which dumpster size, large dumpster comparison',
,
  alternates: { canonical: 'https://tntdump.com/blog/20-vs-30-yard-dumpster' },
    openGraph: {
      title: '20 Yard vs 30 Yard Dumpster: Complete Comparison 2025',
      description: '20 vs 30 yard dumpsters: capacity, cost differences, weight limits, and best projects. Use this decision guide to pick the right size.',
      url: 'https://tntdump.com/blog/20-vs-30-yard-dumpster',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/20-vs-30-yard-dumpster"} title={"20 Yard vs 30 Yard Dumpster: Complete Comparison 2025"} description={"20 vs 30 yard dumpsters: capacity, cost differences, weight limits, and best projects. Use this decision guide to pick the right size."} url="https://tntdump.com/blog/20-vs-30-yard-dumpster" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">20 Yard vs 30 Yard Dumpster: Complete Comparison 2025</h1>
            <p className="mt-4 text-lg text-gray-600">20 vs 30 yard dumpsters: capacity, cost differences, weight limits, and best projects. Use this decision guide to pick the right size.</p>
        </div>
      </section>
    </main>
  )
}
