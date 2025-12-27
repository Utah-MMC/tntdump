import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Dumpster Rentals | Home Projects | TNT Dumpsters',
  description:
    'Residential dumpster rentals for cleanouts, remodels, and yard debris. Compare sizes, pricing, and delivery options.',
  keywords:
    'residential dumpster rentals, home dumpster rental, driveway roll off dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/residential-dumpster-rentals' },
  openGraph: {
    title: 'Residential Dumpster Rentals | Home Projects | TNT Dumpsters',
    description:
      'Residential dumpster rentals for cleanouts, remodels, and yard debris. Compare sizes, pricing, and delivery options.',
    url: 'https://tntdump.com/services/residential-dumpster-rentals',
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
            Residential Dumpster Rentals
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Home projects are easier when debris is handled in one place. We deliver residential
            dumpsters across Utah with flexible scheduling and clear pricing.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Popular residential uses</h2>
          <p>
            We support cleanouts, remodels, landscaping, and seasonal projects. Most homeowners choose
            10 to 20 yard dumpsters.
          </p>

          <h2>Get size and price guidance</h2>
          <p>
            Review <Link href="/dumpster-sizes">dumpster sizes</Link> or use the
            <Link href="/dumpster-size-calculator"> size calculator</Link>. For pricing, visit
            <Link href="/pricing"> pricing</Link>.
          </p>

          <h2>Related services</h2>
          <p>
            Visit <Link href="/services/residential-dumpster-rental">residential dumpster rental</Link> for
            more details or request a quote.
          </p>
        </div>
      </section>
    </main>
  );
}
