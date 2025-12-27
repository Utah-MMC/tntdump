import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap Rental Dumpsters Near Me | TNT Dumpsters',
  description: 'Budget friendly dumpster rentals with clear terms, reliable delivery, and size recommendations.',
  keywords: 'cheap rental dumpsters near me, affordable dumpster rental, roll off dumpster prices',
  alternates: { canonical: 'https://tntdump.com/cheap-rental-dumpsters-near-me' },
  openGraph: {
    title: 'Cheap Rental Dumpsters Near Me | TNT Dumpsters',
    description: 'Budget friendly dumpster rentals with clear terms, reliable delivery, and size recommendations.',
    url: 'https://tntdump.com/cheap-rental-dumpsters-near-me',
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
            Cheap Rental Dumpsters Near Me
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Affordable rentals start with the right size and clear terms. We help you pick
            a size that fits your project without paying for extra hauls.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Affordable planning tips</h2>
          <p>
            Size correctly, avoid heavy debris overages, and schedule within standard rental
            windows to keep pricing low.
          </p>

          <h2>Conclusion</h2>
          <p>
            Call TNT Dumpsters for a quick quote and the most cost effective size options.
          </p>
        </div>
      </section>
    </main>
  );
}
