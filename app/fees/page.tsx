import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Fees: Common Surcharges Explained | TNT...',
  description: 'A simple guide to common dumpster rental fees, including overweight charges, trip fees, and prohibited item surcharges. ',
  keywords: 'dumpster rental fees, overweight fee dumpster, trip fee dumpster, prohibited items fee, dumpster surcharges',
  alternates: { canonical: 'https://tntdump.com/fees' },
  openGraph: {
    title: 'Dumpster Rental Fees: Common Surcharges Explained | TNT Dumpsters',
    description: 'A simple guide to common dumpster rental fees, including overweight charges, trip fees, and prohibited item surcharges.',
    url: 'https://tntdump.com/fees',
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
            Dumpster Rental Fees: Common Surcharges Explained
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Most dumpster rentals are straightforward, but fees can show up if the load
            exceeds limits or the dumpster is not accessible. This page explains the most
            common surcharges so you can avoid surprises.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Overweight fees</h2>
          <p>
            Overweight fees happen when the load exceeds the included weight allowance.
            Heavy debris like concrete, tile, or shingles can push you over quickly. If
            your project is heavy, ask about weight limits and consider a smaller dumpster.
          </p>

          <h2>Trip fees and access issues</h2>
          <p>
            Trip fees occur when the driver cannot access the dumpster for pickup. Keep the
            area clear and make sure the dumpster is not blocked by vehicles or debris. A
            clean access path prevents these fees.
          </p>

          <h2>Prohibited item surcharges</h2>
          <p>
            Items like paint, batteries, chemicals, and tires are often prohibited. If they
            are found in the load, the landfill may charge extra. See our
            <Link href="/dumpster-prohibited-items">prohibited items guide</Link> for details.
          </p>

          <h2>Extended rental fees</h2>
          <p>
            Rentals include a standard number of days. Keeping the dumpster longer can add
            daily fees. If you need more time, ask about extended rates ahead of time.
          </p>

          <h2>Conclusion</h2>
          <p>
            The best way to avoid fees is to plan ahead, keep the load level, and follow
            access and disposal rules. If you have questions about surcharges, call TNT
            Dumpsters and we will walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
