import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Dumpster Rental Costs: Complete Pricing Guide | TNT...',
  description: 'Complete guide to dumpster rental costs: average pricing by size, transparent weight billing at $55/ton, rental periods, and money-saving tips for Utah...',
  keywords: 'dumpster rental cost, how much does a dumpster cost, dumpster rental prices, dumpster cost calculator, dumpster rental pricing, average dumpster rental cost, cheap dumpster rental, affordable dumpster rental, utah dumpster rental cost',
  alternates: { canonical: 'https://tntdump.com/blog/dumpster-rental-costs' },
    openGraph: {
      title: 'Dumpster Rental Costs: Complete Pricing Guide | TNT...',
      description: 'Complete guide to dumpster rental costs: average pricing by size, transparent weight billing at $55/ton, rental periods, and money-saving tips for Utah...',
      url: 'https://tntdump.com/blog/dumpster-rental-costs',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/dumpster-rental-costs"} title={"Dumpster Rental Costs: Complete Pricing Guide | TNT..."} description={"Complete guide to dumpster rental costs: average pricing by size, transparent weight billing at $55/ton, rental periods, and money-saving tips for Utah..."} url="https://tntdump.com/blog/dumpster-rental-costs" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Costs: Complete Pricing Guide | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Complete guide to dumpster rental costs: average pricing by size, transparent weight billing at $55/ton, rental periods, and money-saving tips for Utah...</p>
        </div>
      </section>
    </main>
  )
}

