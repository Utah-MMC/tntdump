import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estimate the Right Dumpster Size for a Home Cleanout |...',
  description:
    'A quick guide to estimating dumpster size for a home cleanout, with tips on volume, weight, and common project types. Ge',
  keywords:
    'estimate dumpster size, home cleanout dumpster, dumpster size guide, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/estimate-right-dumpster-size-home-cleanout' },
  openGraph: {
    title: 'Estimate the Right Dumpster Size for a Home Cleanout | TNT Dumpsters',
    description:
      'A quick guide to estimating dumpster size for a home cleanout, with tips on volume, weight, and common project types.',
    url: 'https://tntdump.com/estimate-right-dumpster-size-home-cleanout',
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
            Estimate the Right Dumpster Size for a Home Cleanout
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Home cleanouts can surprise people with how much volume they create. This guide helps you
            estimate the right dumpster size so you avoid last-minute upgrades.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Start with rooms and bulky items</h2>
          <p>
            A single room cleanout often fits in a 10 yard dumpster. A multi-room cleanout or full
            basement typically needs 15 to 20 yards, especially if you have bulky furniture.
          </p>

          <h2>Weight matters for dense debris</h2>
          <p>
            If your cleanout includes flooring, tile, or heavy materials, a smaller dumpster may
            be safer to stay under the weight limit. We can help you choose the best fit.
          </p>

          <h2>Use the quick calculator</h2>
          <p>
            Try the <Link href="/dumpster-size-calculator">dumpster size calculator</Link> for a quick
            estimate, then compare sizes on our <Link href="/dumpster-sizes">size guide</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
