import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental | TNT Dumpsters',
  description: 'Residential dumpster rental for cleanouts, remodels, and yard projects across Utah.',
  keywords: 'residential dumpster rental, home dumpster rental, roll off for home, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental/home' },
  openGraph: {
    title: 'Residential Dumpster Rental | TNT Dumpsters',
    description: 'Residential dumpster rental for cleanouts, remodels, and yard projects across Utah.',
    url: 'https://tntdump.com/dumpster-rental/home',
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
            Residential Dumpster Rental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide residential dumpsters for cleanouts, remodels, and yard projects.
            Call for size recommendations and delivery options.
          </p>
        </div>
      </section>
    </main>
  );
}
