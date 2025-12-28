import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Rental in Utah | TNT Dumpsters',
  description: 'Dumpster rental service across Utah for cleanouts, remodels, and construction projects. Get fast delivery and clear pric',
  keywords: 'dumpster rental, utah dumpster rental, roll off dumpster rental, dumpster service',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental' },
  openGraph: {
    title: 'Dumpster Rental in Utah | TNT Dumpsters',
    description: 'Dumpster rental service across Utah for cleanouts, remodels, and construction projects.',
    url: 'https://tntdump.com/dumpster-rental',
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
            Dumpster Rental in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide roll off dumpster rentals for residential and commercial projects
            across Utah. Call for size recommendations and scheduling.
          </p>
        </div>
      </section>
    </main>
  );
}
