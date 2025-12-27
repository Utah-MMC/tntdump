import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bin Dumpster Rental: Flexible Options in Utah | TNT Dumpsters',
  description: 'Bin dumpster rental options for cleanouts and remodels across Utah, with reliable delivery and pickup.',
  keywords: 'bin dumpster rental, dumpster bin rental, roll off bin, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/bin-dumpster-rental' },
  openGraph: {
    title: 'Bin Dumpster Rental: Flexible Options in Utah | TNT Dumpsters',
    description: 'Bin dumpster rental options for cleanouts and remodels across Utah, with reliable delivery and pickup.',
    url: 'https://tntdump.com/bin-dumpster-rental',
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
            Bin Dumpster Rental: Flexible Options in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer bin dumpster rentals sized for cleanouts, remodels, and construction
            projects across Utah. Call for a quick recommendation.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Right size, right fit</h2>
          <p>
            Size depends on project scope and debris type. We can recommend the right option
            to avoid extra hauls.
          </p>

          <h2>Conclusion</h2>
          <p>
            Call TNT Dumpsters to schedule a bin rental and confirm the right size.
          </p>
        </div>
      </section>
    </main>
  );
}
