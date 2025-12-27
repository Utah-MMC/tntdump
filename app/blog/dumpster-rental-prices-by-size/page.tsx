import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Dumpster Rental Prices by Size: A Clear Breakdown | TNT Dumpsters',
  description: 'A clear breakdown of dumpster rental prices by size with what each size fits and how to avoid extra fees.',
  keywords: 'dumpster rental prices, 15 yard dumpster cost, 20 yard dumpster price, dumpster price comparison, dumpster rental cost by size, cheapest dumpster rental, affordable dumpster rental, dumpster pricing',
  alternates: { canonical: 'https://tntdump.com/blog/dumpster-rental-prices-by-size' },
    openGraph: {
      title: 'Dumpster Rental Prices by Size: A Clear Breakdown | TNT Dumpsters',
      description: 'A clear breakdown of dumpster rental prices by size with what each size fits and how to avoid extra fees.',
      url: 'https://tntdump.com/blog/dumpster-rental-prices-by-size',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/dumpster-rental-prices-by-size"} title={"Dumpster Rental Prices by Size: Complete Cost Comparison..."} description={"Dumpster rental prices by size in Utah: compare 10, 15, 20, and 30-yard costs and pick the most cost-effective container."} url="https://tntdump.com/blog/dumpster-rental-prices-by-size" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Prices by Size: Complete Cost Comparison...</h1>
            <p className="mt-4 text-lg text-gray-600">Dumpster rental prices by size in Utah: compare 10, 15, 20, and 30-yard costs and pick the most cost-effective container.</p>
        </div>
      </section>
    </main>
  )
}

