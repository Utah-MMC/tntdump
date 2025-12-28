import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Cost Calculator: Budget Your Project |...',
  description: 'A dumpster rental cost calculator guide explaining size, weight, and rental length factors that impact price. Get fast d',
  keywords: 'dumpster rental cost calculator, dumpster cost estimate, roll off rental price, dumpster pricing',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-cost-calculator' },
  openGraph: {
    title: 'Dumpster Rental Cost Calculator: Budget Your Project | TNT Dumpsters',
    description: 'A dumpster rental cost calculator guide explaining size, weight, and rental length factors that impact price.',
    url: 'https://tntdump.com/dumpster-rental-cost-calculator',
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
            Dumpster Rental Cost Calculator: Budget Your Project
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Cost depends on size, weight allowance, rental length, and delivery distance.
            This guide explains the inputs that affect price and links to the most useful
            cost resources.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Key pricing factors</h2>
          <p>
            Size and weight are the biggest variables. Heavier debris can create overage
            fees. Rental length and placement requirements can also affect price.
          </p>

          <h2>Helpful pricing resources</h2>
          <p>
            See <Link href="/dumpster-rental-prices-by-size">pricing by size</Link> and
            <Link href="/pricing">pricing overview</Link> for quick comparisons.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a custom estimate, call TNT Dumpsters and we will walk you through
            the options for your project.
          </p>
        </div>
      </section>
    </main>
  );
}
