import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Prices in Utah: What Affects Cost | TNT Dumpsters',
  description: 'A quick overview of dumpster prices in Utah and the factors that affect total rental cost. Get fast delivery and clear p',
  keywords: 'dumpster prices, utah dumpster prices, roll off pricing, dumpster rental cost',
  alternates: { canonical: 'https://tntdump.com/dumpster-prices' },
  openGraph: {
    title: 'Dumpster Prices in Utah: What Affects Cost | TNT Dumpsters',
    description: 'A quick overview of dumpster prices in Utah and the factors that affect total rental cost.',
    url: 'https://tntdump.com/dumpster-prices',
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
            Dumpster Prices in Utah: What Affects Cost
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pricing depends on size, weight allowance, rental length, and delivery distance.
            For quick comparisons, see pricing by size.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Cost drivers</h2>
          <p>
            Larger sizes cost more but can reduce the chance of a second haul. Heavy debris
            can create overage fees. Longer rentals may add daily charges.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a custom quote, call TNT Dumpsters and we will recommend the best
            size and pricing option.
          </p>
        </div>
      </section>
    </main>
  );
}
