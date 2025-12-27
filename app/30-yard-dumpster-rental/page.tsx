import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '30 Yard Dumpster Rental | Large Project Bin | TNT Dumpsters',
  description:
    'Need extra volume? A 30 yard dumpster is ideal for large cleanouts and construction debris. Learn capacity and request delivery.',
  keywords:
    '30 yard dumpster rental, large dumpster rental, roll off dumpster 30 yard, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/30-yard-dumpster-rental' },
  openGraph: {
    title: '30 Yard Dumpster Rental | Large Project Bin | TNT Dumpsters',
    description:
      'Need extra volume? A 30 yard dumpster is ideal for large cleanouts and construction debris. Learn capacity and request delivery.',
    url: 'https://tntdump.com/30-yard-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">30 Yard Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            The 30 yard dumpster is built for big cleanouts, construction jobs, and renovation
            projects that generate a lot of debris. It offers more volume without jumping all
            the way to a 40 yard bin.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Who should choose a 30 yard dumpster</h2>
          <p>
            This size works well for whole-home cleanouts, large remodeling projects, and
            multi-room construction jobs. If you want to avoid a second haul, 30 yards often
            solves it.
          </p>

          <h2>Capacity and loading</h2>
          <p>
            A 30 yard dumpster typically holds 170 to 190 trash bags. Keep debris level with
            the side walls to ensure safe pickup.
          </p>

          <h2>Schedule delivery</h2>
          <p>
            Call for availability or review <Link href="/dumpster-rental-costs">rental costs</Link>.
            If you are unsure between 20 and 30 yards, see our <Link href="/dumpster-size-calculator">size calculator</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
