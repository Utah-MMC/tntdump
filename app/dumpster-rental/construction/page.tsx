import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental | TNT Dumpsters',
  description: 'Construction dumpster rentals for demo, remodels, and job site cleanup across Utah. Get fast delivery and clear pricing.',
  keywords: 'construction dumpster rental, job site dumpster, roll off for construction, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental/construction' },
  openGraph: {
    title: 'Construction Dumpster Rental | TNT Dumpsters',
    description: 'Construction dumpster rentals for demo, remodels, and job site cleanup across Utah.',
    url: 'https://tntdump.com/dumpster-rental/construction',
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
            Construction Dumpster Rental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We support construction projects with right sized dumpsters and fast swaps.
            Call for scheduling and site planning.
          </p>
        </div>
      </section>
    </main>
  );
}
