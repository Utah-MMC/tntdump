import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garage Cleanout Dumpster Rental | TNT Dumpsters',
  description:
    'Fast dumpster rentals for garage cleanouts. Pick the right size, protect your driveway, and get quick pickup.',
  keywords:
    'garage cleanout dumpster rental, garage cleanup dumpster, small dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/garage-cleanout' },
  openGraph: {
    title: 'Garage Cleanout Dumpster Rental | TNT Dumpsters',
    description:
      'Fast dumpster rentals for garage cleanouts. Pick the right size, protect your driveway, and get quick pickup.',
    url: 'https://tntdump.com/services/garage-cleanout',
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
            Garage Cleanout Dumpster Rental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A garage cleanout goes faster with a roll-off dumpster on site. We deliver compact sizes
            that fit most driveways and make cleanup easy.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Recommended sizes</h2>
          <p>
            Most garage cleanouts fit a 10 or 15 yard dumpster. Use the
            <Link href="/dumpster-size-calculator"> size calculator</Link> if you want a quick estimate.
          </p>

          <h2>Protect your driveway</h2>
          <p>
            We can place boards under the wheels to protect surfaces. For more tips, read our
            <Link href="/dumpster-placement-driveway-protection"> driveway protection guide</Link>.
          </p>

          <h2>Ready to schedule?</h2>
          <p>
            Visit <Link href="/services/garage-cleanout-service">garage cleanout service</Link> for more
            details or request a quote today.
          </p>
        </div>
      </section>
    </main>
  );
}
