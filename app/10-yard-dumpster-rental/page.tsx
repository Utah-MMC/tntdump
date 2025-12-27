import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Yard Dumpster Rental | Small Dumpster for Cleanouts | TNT Dumpsters',
  description:
    'Rent a 10 yard dumpster for small cleanouts and light demo in Utah. Learn capacity, ideal projects, and how to book fast delivery.',
  keywords:
    '10 yard dumpster rental, small dumpster rental, roll off dumpster 10 yard, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/10-yard-dumpster-rental' },
  openGraph: {
    title: '10 Yard Dumpster Rental | Small Dumpster for Cleanouts | TNT Dumpsters',
    description:
      'Rent a 10 yard dumpster for small cleanouts and light demo in Utah. Learn capacity, ideal projects, and how to book fast delivery.',
    url: 'https://tntdump.com/10-yard-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">10 Yard Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            A 10 yard dumpster is the go-to size for small cleanouts, light demo, and heavy debris
            when you want to stay within a lower weight limit. It is compact, driveway friendly,
            and easy to load.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Best projects for a 10 yard dumpster</h2>
          <p>
            I recommend this size for garage and shed cleanouts, small bathroom tear-outs, carpet
            removal, and yard debris. If you have concrete, tile, or dirt, the 10 yard can be a safer
            choice because it keeps weight under control.
          </p>

          <h2>Capacity and space needs</h2>
          <p>
            A 10 yard dumpster holds about 50 to 70 trash bags. Make sure you have about 18 to 20 feet
            of space for delivery, with clear overhead access.
          </p>

          <h2>How to order</h2>
          <p>
            If you are unsure between sizes, compare options on our <Link href="/dumpster-sizes">dumpster sizes</Link>{' '}
            page or use the <Link href="/dumpster-size-calculator">size calculator</Link>. For pricing,
            see <Link href="/pricing">dumpster pricing</Link> or call for a quick quote.
          </p>
        </div>
      </section>
    </main>
  );
}
