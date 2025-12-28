import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Dumpster Rental | TNT Dumpsters',
  description: 'Business dumpster rental for commercial cleanouts, renovations, and ongoing projects. Get fast delivery and clear pricin',
  keywords: 'business dumpster rental, commercial dumpster rental, roll off for business, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental/business' },
  openGraph: {
    title: 'Business Dumpster Rental | TNT Dumpsters',
    description: 'Business dumpster rental for commercial cleanouts, renovations, and ongoing projects.',
    url: 'https://tntdump.com/dumpster-rental/business',
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
            Business Dumpster Rental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Commercial dumpster rentals for renovations, cleanouts, and ongoing operations.
            Call for size and scheduling recommendations.
          </p>
        </div>
      </section>
    </main>
  );
}
