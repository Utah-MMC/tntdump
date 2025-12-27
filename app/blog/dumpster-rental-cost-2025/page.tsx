import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Dumpster Rental Cost 2025: What Affects Price | TNT Dumpsters',
  description: 'A clear 2025 dumpster rental cost guide with pricing factors, common fees, and tips to keep your project on budget.',
  keywords: 'dumpster rental cost, how much does a dumpster cost, dumpster rental prices, dumpster cost calculator, dumpster rental pricing, average dumpster rental cost, cheap dumpster rental, affordable dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/blog/dumpster-rental-cost-2025' },
    openGraph: {
      title: 'Dumpster Rental Cost 2025: What Affects Price | TNT Dumpsters',
      description: 'A clear 2025 dumpster rental cost guide with pricing factors, common fees, and tips to keep your project on budget.',
      url: 'https://tntdump.com/blog/dumpster-rental-cost-2025',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/dumpster-rental-cost-2025"} title={"How Much Does a Dumpster Rental Cost in 2025? | Complete..."} description={"Dumpster rental cost breakdown: average pricing, what’s included, common fees, and ways to save on delivery and disposal in Utah."} url="https://tntdump.com/blog/dumpster-rental-cost-2025" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Much Does a Dumpster Rental Cost in 2025? | Complete...</h1>
            <p className="mt-4 text-lg text-gray-600">Dumpster rental cost breakdown: average pricing, what’s included, common fees, and ways to save on delivery and disposal in Utah.</p>
        </div>
      </section>
    </main>
  )
}
