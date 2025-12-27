import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Rental Cost in Salt Lake City | TNT Dumpsters',
  description: 'Salt Lake City dumpster rental cost factors, including size, weight limits, and permit considerations.',
  keywords: 'dumpster rental cost salt lake city, salt lake dumpster prices, utah dumpster pricing',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-cost-salt-lake-city' },
  openGraph: {
    title: 'Dumpster Rental Cost in Salt Lake City | TNT Dumpsters',
    description: 'Salt Lake City dumpster rental cost factors, including size, weight limits, and permit considerations.',
    url: 'https://tntdump.com/dumpster-rental-cost-salt-lake-city',
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
            Dumpster Rental Cost in Salt Lake City
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pricing in Salt Lake City depends on size, weight, rental length, and placement
            requirements. This page highlights the factors that influence costs locally.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Local pricing factors</h2>
          <p>
            Size and weight allowance are the biggest variables. Street placement may require
            a permit. If you need help planning, call TNT Dumpsters for a local quote.
          </p>

          <h2>Conclusion</h2>
          <p>
            For a custom estimate in Salt Lake City, call TNT Dumpsters and we will recommend
            the right size and schedule.
          </p>
        </div>
      </section>
    </main>
  );
}
