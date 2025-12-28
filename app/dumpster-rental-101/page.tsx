import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental 101: Quick Start Guide | TNT Dumpsters',
  description: "A beginner friendly dumpster rental guide with size tips, placement basics, and loading dos and don'ts so first-time renters avoid surprises.",
  keywords: 'dumpster rental 101, how to rent a dumpster, roll off dumpster basics, dumpster rental guide',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-101' },
  openGraph: {
    title: 'Dumpster Rental 101: Quick Start Guide | TNT Dumpsters',
    description: "A beginner friendly dumpster rental guide with size tips, placement basics, and loading do's and don'ts so first-time renters avoid surprises.",
    url: 'https://tntdump.com/dumpster-rental-101',
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
            Dumpster Rental 101: Quick Start Guide
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            If this is your first time renting a dumpster, you are not alone. This page is
            the quick start guide I give friends: how to choose a size, where to place it,
            and how to load it safely. Keep it simple and you will be done fast.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Pick the right size</h2>
          <p>
            Small cleanouts fit 10 yards, medium remodels fit 15 to 20 yards, and large
            projects often need 30 yards. If you are unsure, size up. A second haul usually
            costs more than a small size upgrade.
          </p>

          <h2>Plan placement and access</h2>
          <p>
            Choose a flat, accessible spot with clear overhead space. If you need street
            placement, check permits first. Our <Link href="/dumpster-rental-permits">permit guide</Link>
            covers the basics.
          </p>

          <h2>Load safely</h2>
          <p>
            Load bulky items first, keep the load level, and avoid prohibited items. If you
            are not sure what is allowed, see <Link href="/dumpster-prohibited-items">prohibited items</Link>.
          </p>

          <h2>Schedule pickup</h2>
          <p>
            When you are done, schedule pickup and make sure the dumpster is accessible.
            Keep vehicles and debris away from the container so the driver can pick it up
            without delays.
          </p>

          <h2>Conclusion</h2>
          <p>
            Dumpster rental is easy when you follow the basics. Pick the right size, plan
            placement, load safely, and schedule pickup. If you want help, call TNT Dumpsters
            and we will walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
