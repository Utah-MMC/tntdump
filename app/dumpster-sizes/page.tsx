import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Sizes: Compare Capacity and Uses | TNT Dumpsters',
  description: 'A quick overview of dumpster sizes with common project matches and links to size resources.',
  keywords: 'dumpster sizes, roll off dumpster sizes, dumpster size comparison, dumpster capacity',
  alternates: { canonical: 'https://tntdump.com/dumpster-sizes' },
  openGraph: {
    title: 'Dumpster Sizes: Compare Capacity and Uses | TNT Dumpsters',
    description: 'A quick overview of dumpster sizes with common project matches and links to size resources.',
    url: 'https://tntdump.com/dumpster-sizes',
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
            Dumpster Sizes: Compare Capacity and Uses
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Use this page as a quick size reference. For deeper guidance, see our
            <Link href="/choose-right-dumpster-size">size selection guide</Link> and
            <Link href="/dumpsters">dumpster types</Link>.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Common size matches</h2>
          <p>
            10 yard: small cleanouts and light yard work. 15 yard: bathroom remodels and
            medium cleanouts. 20 yard: kitchens and basements. 30 yard: large cleanouts and
            renovations. 40 yard: major construction projects.
          </p>

          <h2>Pricing by size</h2>
          <p>
            For cost comparisons, see <Link href="/dumpster-rental-prices-by-size">pricing by size</Link>.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a tailored recommendation, call TNT Dumpsters and describe your
            project. We will help you choose the right size.
          </p>
        </div>
      </section>
    </main>
  );
}
