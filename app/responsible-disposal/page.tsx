import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Responsible Disposal: Keep Your Project Compliant | TNT Dumpsters',
  description: 'Responsible disposal tips for dumpster rentals, including prohibited items, recycling ideas, and safe handling guidance.',
  keywords: 'responsible disposal, dumpster disposal rules, prohibited items, recycling tips, dumpster rental safety',
  alternates: { canonical: 'https://tntdump.com/responsible-disposal' },
  openGraph: {
    title: 'Responsible Disposal: Keep Your Project Compliant | TNT Dumpsters',
    description: 'Responsible disposal tips for dumpster rentals, including prohibited items, recycling ideas, and safe handling guidance.',
    url: 'https://tntdump.com/responsible-disposal',
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
            Responsible Disposal: Keep Your Project Compliant
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Responsible disposal keeps your project safe and prevents surprise fees. The
            goal is simple: know what can go in the dumpster, keep heavy or hazardous items
            separate, and use local recycling options when possible. This page covers the
            basics we recommend on every TNT Dumpsters rental.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Know the prohibited items</h2>
          <p>
            Paint, chemicals, batteries, tires, and electronics are common prohibited items.
            These materials require special handling and should not go in the dumpster. See
            our <Link href="/dumpster-prohibited-items">prohibited items guide</Link> for the
            full list.
          </p>

          <h2>Separate heavy and dense debris</h2>
          <p>
            Concrete, brick, tile, and dirt can exceed weight limits quickly. If your project
            includes heavy debris, ask about weight limits and consider a smaller dumpster or
            a heavy debris option. Our <Link href="/concrete-disposal-dumpster-tips">concrete
            disposal tips</Link> explain the safest approach.
          </p>

          <h2>Recycle when it makes sense</h2>
          <p>
            Metal, clean cardboard, and some appliances can often be recycled. Recycling reduces
            landfill impact and can free up dumpster space. If you are unsure, ask about local
            recycling options or drop offs.
          </p>

          <h2>Load safely and keep the site clean</h2>
          <p>
            Keep the load level, avoid overfilling, and maintain a clear loading area. A neat
            load is safer for pickup and reduces the chance of fees. If you need a quick
            refresher, see our <Link href="/dumpster-rental-tips">dumpster rental tips</Link>.
          </p>

          <h2>Conclusion</h2>
          <p>
            Responsible disposal protects your project, your budget, and the community. If
            you have questions about disposal rules, call TNT Dumpsters and we will help you
            plan the right approach.
          </p>
        </div>
      </section>
    </main>
  );
}
