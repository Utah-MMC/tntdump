import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Business Profit Margin | TNT Dumpsters',
  description:
    'A practical look at roll-off dumpster business margins, common cost drivers, and how to price jobs responsibly.',
  keywords:
    'roll off dumpster business profit margin, dumpster business costs, dumpster pricing strategy, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/roll-off-dumpster-business-profit-margin' },
  openGraph: {
    title: 'Roll-Off Dumpster Business Profit Margin | TNT Dumpsters',
    description:
      'A practical look at roll-off dumpster business margins, common cost drivers, and how to price jobs responsibly.',
    url: 'https://tntdump.com/roll-off-dumpster-business-profit-margin',
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
            Roll-Off Dumpster Business Profit Margin
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Profit margins in the roll-off dumpster business depend on hauling costs, landfill fees,
            equipment expenses, and route efficiency. This overview explains the factors that move
            pricing up or down.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Key cost drivers</h2>
          <p>
            Fuel, labor, landfill tipping fees, and container maintenance are the biggest variables.
            Longer hauls and heavier loads create higher costs, which impacts pricing.
          </p>

          <h2>Why transparent pricing matters</h2>
          <p>
            Customers appreciate clear breakdowns and no hidden fees. Our pricing pages outline what
            is included and how overages work. See <Link href="/transparent-pricing">transparent pricing</Link>{' '}
            and <Link href="/fees">fees and surcharges</Link> for details.
          </p>

          <h2>Building long-term relationships</h2>
          <p>
            Consistent service and honest pricing create repeat customers, especially for contractors
            and property managers. Learn more about our <Link href="/partners">partner options</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
