import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '40 Yard Dumpster Rental | Extra-Large Bin | TNT Dumpsters',
  description:
    'A 40 yard dumpster is our largest roll-off container for major cleanouts and construction. Learn capacity and book delivery.',
  keywords:
    '40 yard dumpster rental, extra large dumpster, roll off dumpster 40 yard, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/40-yard-dumpster-rental' },
  openGraph: {
    title: '40 Yard Dumpster Rental | Extra-Large Bin | TNT Dumpsters',
    description:
      'A 40 yard dumpster is our largest roll-off container for major cleanouts and construction. Learn capacity and book delivery.',
    url: 'https://tntdump.com/40-yard-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">40 Yard Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            The 40 yard dumpster is our largest container, built for heavy-volume projects like
            commercial cleanouts, estate clear-outs, and major construction.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Ideal jobs for a 40 yard dumpster</h2>
          <p>
            Choose 40 yards for large commercial work, warehouse cleanouts, and multi-room demolition.
            It gives you the most volume and helps avoid swap fees on big projects.
          </p>

          <h2>Capacity notes</h2>
          <p>
            Expect capacity around 230 to 250 trash bags. Keep heavy materials balanced and avoid
            overfilling so pickup stays safe and on schedule.
          </p>

          <h2>Plan delivery</h2>
          <p>
            Use our <Link href="/dumpster-size-calculator">size calculator</Link> for quick guidance,
            or call to confirm availability. For pricing details, visit <Link href="/pricing">pricing</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
