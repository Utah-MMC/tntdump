import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental | Business-Ready Service |...',
  description:
    'Commercial dumpster rental for retail, offices, and property managers in Utah. Reliable scheduling, clear pricing, and responsive support.',
  keywords:
    'commercial dumpster rental, business dumpster service, roll off dumpsters for businesses, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/commercial-dumpster-rental' },
  openGraph: {
    title: 'Commercial Dumpster Rental | Business-Ready Service | TNT Dumpsters',
    description:
      'Commercial dumpster rental for retail, offices, and property managers in Utah. Reliable scheduling, clear pricing, and responsive support.',
    url: 'https://tntdump.com/commercial-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Commercial Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            Businesses need dependable hauling, fast swaps, and clear communication. Our commercial
            dumpster rental service keeps your projects on schedule with flexible delivery windows
            and straightforward pricing.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Built for commercial projects</h2>
          <p>
            We support retail remodels, property turnovers, office cleanouts, and construction
            timelines. If you need recurring pickups or staged deliveries, we will set up a plan
            that fits your schedule.
          </p>

          <h2>Flexible sizes and clear pricing</h2>
          <p>
            Choose from 10 to 40 yard dumpsters, with guidance on weight limits and loading rules.
            Review <Link href="/pricing">pricing</Link> and <Link href="/fees">fees</Link> for a full
            breakdown.
          </p>

          <h2>Request a commercial quote</h2>
          <p>
            Start with our <Link href="/dumpster-rental-cost-calculator">cost calculator</Link> or
            call for a custom quote. We can also help with permits and placement rules.
          </p>
        </div>
      </section>
    </main>
  );
}
