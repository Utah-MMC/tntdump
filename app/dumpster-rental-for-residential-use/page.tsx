import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental for Residential Use | Home Projects | TNT Dumpsters',
  description:
    'Rent a dumpster for residential cleanouts, remodels, and yard projects. Compare sizes, placement tips, and pricing.',
  keywords:
    'residential dumpster rental, home dumpster rental, driveway dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-for-residential-use' },
  openGraph: {
    title: 'Dumpster Rental for Residential Use | Home Projects | TNT Dumpsters',
    description:
      'Rent a dumpster for residential cleanouts, remodels, and yard projects. Compare sizes, placement tips, and pricing.',
    url: 'https://tntdump.com/dumpster-rental-for-residential-use',
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
            Dumpster Rental for Residential Use
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Home projects move faster when you have a place to put debris. We deliver driveway-safe
            dumpsters for cleanouts, remodels, and seasonal projects across Utah.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Popular home projects</h2>
          <p>
            Bathroom and kitchen remodels, garage cleanouts, flooring removal, and yard debris are
            all great fits for residential rentals. Smaller 10 to 20 yard dumpsters are usually
            the sweet spot.
          </p>

          <h2>Placement and permit tips</h2>
          <p>
            Most rentals go in the driveway. If you need to place the dumpster on the street,
            review the <Link href="/utah-dumpster-permit-checklist">permit checklist</Link> first.
          </p>

          <h2>Get a quick recommendation</h2>
          <p>
            Use the <Link href="/dumpster-size-calculator">size calculator</Link> or compare options
            on the <Link href="/dumpster-sizes">dumpster sizes</Link> page. For pricing, visit
            <Link href="/pricing"> our pricing page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
