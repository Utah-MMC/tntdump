import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Size Guide Utah: Choose the Right Fit | TNT...',
  description: 'A Utah focused dumpster size guide with common project matches, capacity tips, and links to size resources. Get fast del',
  keywords: 'dumpster size guide utah, utah dumpster sizes, roll off size guide, choose dumpster size, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-size-guide-utah' },
  openGraph: {
    title: 'Dumpster Size Guide Utah: Choose the Right Fit | TNT Dumpsters',
    description: 'A Utah focused dumpster size guide with common project matches, capacity tips, and links to size resources.',
    url: 'https://tntdump.com/dumpster-size-guide-utah',
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
            Dumpster Size Guide Utah: Choose the Right Fit
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choosing the right dumpster size is the fastest way to keep your project on
            budget. This Utah focused guide explains common size matches and links to more
            detailed size resources.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Quick size matches</h2>
          <p>
            10 yard: small cleanouts and light yard work. 15 yard: bathroom remodels and
            medium cleanouts. 20 yard: kitchen remodels and basements. 30 yard: large
            cleanouts and renovations. 40 yard: major construction projects.
          </p>

          <h2>Helpful size resources</h2>
          <p>
            For detailed comparisons, see our <Link href="/choose-right-dumpster-size">size
            selection guide</Link> and <Link href="/dumpster-rental-prices-by-size">pricing
            by size</Link>.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you are unsure about size, call TNT Dumpsters and describe your project. We
            can recommend the right fit based on the materials and timeline.
          </p>
        </div>
      </section>
    </main>
  );
}
