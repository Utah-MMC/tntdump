import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roll Off Dumpster Guide: Sizes, Uses, and Rules | TNT...',
  description: 'A roll off dumpster guide covering size options, common uses, placement rules, and loading tips for Utah projects. Get f',
  keywords: 'roll off dumpster guide, roll off dumpster sizes, roll off rental, roll off dumpster rules',
  alternates: { canonical: 'https://tntdump.com/rolloff-dumpster-guide' },
  openGraph: {
    title: 'Roll Off Dumpster Guide: Sizes, Uses, and Rules | TNT Dumpsters',
    description: 'A roll off dumpster guide covering size options, common uses, placement rules, and loading tips for Utah projects.',
    url: 'https://tntdump.com/rolloff-dumpster-guide',
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
            Roll Off Dumpster Guide: Sizes, Uses, and Rules
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Roll off dumpsters are the go to option for cleanouts, remodels, and construction
            projects. This guide covers the basics: sizes, common uses, placement rules, and
            how to load safely.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Common roll off sizes</h2>
          <p>
            10 yard for small cleanouts, 15 yard for medium projects, 20 yard for remodels,
            30 yard for large cleanouts, and 40 yard for major construction. See
            <Link href="/dumpsters">dumpster sizes</Link> for details.
          </p>

          <h2>Placement rules</h2>
          <p>
            Place on a flat surface with clear overhead access. If the dumpster will sit on
            the street, check permit rules first. See <Link href="/dumpster-rental-permits">permits</Link>
            for guidance.
          </p>

          <h2>Loading basics</h2>
          <p>
            Load bulky items first, keep the load level, and avoid prohibited materials.
            See <Link href="/dumpster-prohibited-items">prohibited items</Link> for the list.
          </p>

          <h2>Conclusion</h2>
          <p>
            Roll off dumpsters are simple when you plan size, placement, and loading. If you
            need help choosing the right size, call TNT Dumpsters and we will help you plan.
          </p>
        </div>
      </section>
    </main>
  );
}
