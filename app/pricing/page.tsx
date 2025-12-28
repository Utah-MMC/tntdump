import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Pricing: What to Expect in Utah | TNT...',
  description: 'Clear dumpster rental pricing guidance with factors that affect cost, weight limits, and tips to keep your budget steady.',
  keywords: 'dumpster rental pricing, dumpster rental cost utah, roll off dumpster prices, dumpster rates, dumpster rental fees',
  alternates: { canonical: 'https://tntdump.com/pricing' },
  openGraph: {
    title: 'Dumpster Rental Pricing: What to Expect in Utah | TNT Dumpsters',
    description: 'Clear dumpster rental pricing guidance with factors that affect cost, weight limits, and tips to keep your budget steady.',
    url: 'https://tntdump.com/pricing',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental Pricing: What to Expect in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dumpster pricing depends on size, weight, and rental length. This page explains
            the main cost drivers and how to keep your budget steady. If you want a quick
            comparison by size, see our <Link href="/dumpster-rental-prices-by-size">pricing by size guide</Link>.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>What affects dumpster pricing</h2>
          <p>
            Size is the biggest factor. Larger dumpsters cost more but reduce the chance
            of a second haul. Weight limits also matter. Heavy debris can create overage
            fees, so it is important to ask about the included weight allowance.
          </p>
          <p>
            Rental length affects price as well. Most rentals include a standard number of
            days. If your project runs longer, daily extension fees may apply. Planning your
            timeline helps keep costs predictable.
          </p>

          <h2>Tips to keep pricing predictable</h2>
          <p>
            Choose the right size to avoid a second haul. Load efficiently, keep the load
            level, and avoid prohibited items that can add fees. For weight heavy projects,
            consider a smaller dumpster or a heavy debris option.
          </p>
          <p>
            If you want to estimate costs, start with project scope and debris type. We can
            recommend the best size and explain how pricing is structured for your project.
          </p>

          <h2>Conclusion</h2>
          <p>
            Dumpster pricing is straightforward when you understand size, weight, and rental
            length. If you want a custom quote, call TNT Dumpsters and we will walk you through
            the options.
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pricing Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/transparent-pricing" className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              Transparent Pricing
            </a>
            <a href="/no-hidden-fees" className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              No Hidden Fees
            </a>
            <a href="/competitive-pricing" className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              Competitive Pricing
            </a>
            <a href="/fees" className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              Fees & Surcharges
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
