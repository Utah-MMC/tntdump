import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequent Buyers Program | Contractor & Business Support...',
  description:
    'A simple way for frequent buyers to streamline dumpster rentals. Priority scheduling, consistent pricing, and dedicated support.',
  keywords:
    'frequent buyers dumpster rentals, contractor dumpster program, business dumpster discounts, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/frequent-buyers' },
  openGraph: {
    title: 'Frequent Buyers Program | Contractor & Business Support | TNT Dumpsters',
    description:
      'A simple way for frequent buyers to streamline dumpster rentals. Priority scheduling, consistent pricing, and dedicated support.',
    url: 'https://tntdump.com/frequent-buyers',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequent Buyers Program</h1>
          <p className="mt-4 text-lg text-gray-600">
            If you rent dumpsters regularly, our frequent buyers program keeps your jobs moving with
            streamlined scheduling, consistent pricing, and a dedicated point of contact.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Built for contractors and property teams</h2>
          <p>
            We work with contractors, property managers, and renovation teams who need reliable
            delivery windows and flexible swap plans. You get a predictable process and fast responses.
          </p>

          <h2>How to get started</h2>
          <p>
            Tell us about your typical project types and volume. We will set up a plan that matches
            your needs. For more details, visit our <Link href="/partners">partner page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
