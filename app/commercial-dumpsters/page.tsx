import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Dumpsters | Sizes for Business Projects | TNT Dumpsters',
  description:
    'Browse commercial dumpster options for retail, offices, and property managers. Compare sizes and schedule delivery in Utah.',
  keywords:
    'commercial dumpsters, business dumpster sizes, roll off dumpsters for commercial projects, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/commercial-dumpsters' },
  openGraph: {
    title: 'Commercial Dumpsters | Sizes for Business Projects | TNT Dumpsters',
    description:
      'Browse commercial dumpster options for retail, offices, and property managers. Compare sizes and schedule delivery in Utah.',
    url: 'https://tntdump.com/commercial-dumpsters',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Commercial Dumpsters</h1>
          <p className="mt-4 text-lg text-gray-600">
            Commercial projects need the right container size and predictable pickup timing. This page
            highlights common sizes and where they fit.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Choose a size that matches your scope</h2>
          <p>
            Retail refreshes and office cleanouts often fit a 15 or 20 yard dumpster. Larger build-outs
            and property turnovers typically need 30 or 40 yards. Use the <Link href="/dumpster-size-calculator">size calculator</Link>{' '}
            if you want quick guidance.
          </p>

          <h2>Support for ongoing projects</h2>
          <p>
            If you need multiple hauls, we can schedule swaps or staged deliveries. Learn more on our
            <Link href="/commercial-dumpster-rental"> commercial dumpster rental</Link> page.
          </p>
        </div>
      </section>
    </main>
  );
}
