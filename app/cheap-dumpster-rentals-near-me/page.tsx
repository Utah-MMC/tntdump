import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap Dumpster Rentals Near Me in Utah | TNT Dumpsters',
  description: 'Affordable dumpster rental options in Utah with reliable delivery and clear pricing guidance. Get fast delivery and clea',
  keywords: 'cheap dumpster rentals near me, affordable dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/cheap-dumpster-rentals-near-me' },
  openGraph: {
    title: 'Cheap Dumpster Rentals Near Me in Utah | TNT Dumpsters',
    description: 'Affordable dumpster rental options in Utah with reliable delivery and clear pricing guidance.',
    url: 'https://tntdump.com/cheap-dumpster-rentals-near-me',
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
            Cheap Dumpster Rentals Near Me in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Looking for affordable dumpster rentals in Utah? We keep pricing clear, match
            the size to your project, and help you avoid extra fees.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>How to keep costs low</h2>
          <p>
            Choose the right size, avoid heavy debris overages, and schedule within the
            standard rental window. This keeps your total cost lower.
          </p>

          <h2>Conclusion</h2>
          <p>
            For a quote, call TNT Dumpsters and we will recommend the best affordable option.
          </p>
        </div>
      </section>
    </main>
  );
}
