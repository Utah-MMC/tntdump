import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '20 Yard Dumpster Rental | Most Popular Size | TNT Dumpsters',
  description:
    'Our 20 yard dumpster is the most popular size for remodels, roofing, and cleanouts. Learn capacity and book delivery. Ge',
  keywords:
    '20 yard dumpster rental, roll off dumpster 20 yard, construction dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/20-yard-dumpster-rental' },
  openGraph: {
    title: '20 Yard Dumpster Rental | Most Popular Size | TNT Dumpsters',
    description:
      'Our 20 yard dumpster is the most popular size for remodels, roofing, and cleanouts. Learn capacity and book delivery.',
    url: 'https://tntdump.com/20-yard-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">20 Yard Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            The 20 yard dumpster is the most requested size because it balances capacity with
            a manageable footprint. It is ideal for home renovations and medium construction work.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Projects that fit a 20 yard dumpster</h2>
          <p>
            I recommend 20 yards for kitchen remodels, roofing jobs, flooring removal, and
            partial home cleanouts. It handles bulky items without needing a huge delivery area.
          </p>

          <h2>Capacity overview</h2>
          <p>
            You can expect room for about 110 to 130 trash bags. If your debris is heavy, ask
            about weight limits before loading.
          </p>

          <h2>Get pricing and delivery</h2>
          <p>
            Use our <Link href="/dumpster-rental-cost-calculator">cost calculator</Link> for a fast
            estimate, or review <Link href="/pricing">pricing details</Link>. We can schedule same-day
            delivery in many Utah areas.
          </p>
        </div>
      </section>
    </main>
  );
}
