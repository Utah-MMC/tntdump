import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Dumpsters Near Me Prices | TNT Dumpsters',
  description: 'Local dumpster price factors, including size, weight limits, and rental length for Utah projects.',
  keywords: 'rental dumpsters near me prices, dumpster rental prices, roll off dumpster cost',
  alternates: { canonical: 'https://tntdump.com/rental-dumpsters-near-me-prices' },
  openGraph: {
    title: 'Rental Dumpsters Near Me Prices | TNT Dumpsters',
    description: 'Local dumpster price factors, including size, weight limits, and rental length for Utah projects.',
    url: 'https://tntdump.com/rental-dumpsters-near-me-prices',
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
            Rental Dumpsters Near Me Prices
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pricing depends on size, weight allowance, and rental length. We help you pick
            the right size to keep costs stable.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Price factors</h2>
          <p>
            Larger sizes cost more but reduce the chance of a second haul. Heavy debris can
            create overage fees. Plan size carefully to avoid surprises.
          </p>

          <h2>Conclusion</h2>
          <p>
            Call TNT Dumpsters for a local quote and size recommendation.
          </p>
        </div>
      </section>
    </main>
  );
}
