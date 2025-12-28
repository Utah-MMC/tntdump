import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Bathroom Remodel Dumpster Guide: Size, Cost, and Tips |...',
  description: 'A bathroom remodel dumpster guide with size recommendations, debris planning, and loading tips to keep your project clean and on budget.',
  keywords: 'bathroom remodel dumpster, bathroom renovation dumpster, bathroom demolition dumpster, small dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/bathroom-remodel-dumpster-guide' },
    openGraph: {
      title: 'Bathroom Remodel Dumpster Guide: Size, Cost, and Tips | TNT Dumpsters',
      description: 'A bathroom remodel dumpster guide with size recommendations, debris planning, and loading tips to keep your project clean and on budget.',
      url: 'https://tntdump.com/blog/bathroom-remodel-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/bathroom-remodel-dumpster-guide"} title={"Bathroom Remodel Dumpster Guide: Size, Cost & What Fits..."} description={"Bathroom remodel dumpster guide: size recommendations, what fits, weight pitfalls for tile, cost estimates, and money-saving tips."} url="https://tntdump.com/blog/bathroom-remodel-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bathroom Remodel Dumpster Guide: Size, Cost & What Fits...</h1>
            <p className="mt-4 text-lg text-gray-600">Bathroom remodel dumpster guide: size recommendations, what fits, weight pitfalls for tile, cost estimates, and money-saving tips.</p>
        </div>
      </section>
    </main>
  )
}

