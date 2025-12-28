import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Guide: Plan, Size, and Save | TNT Dumpsters',
  description: 'A complete dumpster rental guide with size planning, placement tips, and loading basics to keep your project smooth. Get',
  keywords: 'dumpster rental guide, roll off dumpster guide, how to rent a dumpster, dumpster size guide',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-guide' },
  openGraph: {
    title: 'Dumpster Rental Guide: Plan, Size, and Save | TNT Dumpsters',
    description: 'A complete dumpster rental guide with size planning, placement tips, and loading basics to keep your project smooth.',
    url: 'https://tntdump.com/dumpster-rental-guide',
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
            Dumpster Rental Guide: Plan, Size, and Save
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            If you want a simple, reliable plan for renting a dumpster, this is it. The key
            is to pick the right size, prepare placement, load safely, and schedule pickup.
            This guide covers the basics and links to the deeper resources we use every day.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Choose the right size</h2>
          <p>
            Size drives cost and convenience. If you are unsure, start with scope and debris
            type. Our <Link href="/choose-right-dumpster-size">size selection guide</Link>
            and <Link href="/dumpster-rental-prices-by-size">pricing by size</Link> are
            quick ways to confirm the right fit.
          </p>

          <h2>Plan placement and permits</h2>
          <p>
            Place the dumpster on a flat, accessible surface. If you need street placement,
            check permits early. See <Link href="/dumpster-rental-permits">permits</Link>
            for the general rules and <Link href="/utah-dumpster-permit-checklist">Utah
            checklist</Link> for local guidance.
          </p>

          <h2>Load safely and avoid fees</h2>
          <p>
            Load bulky items first, keep the load level, and avoid prohibited items. See
            <Link href="/dumpster-prohibited-items">prohibited items</Link> and
            <Link href="/avoid-overweight-fees-dumpster">overweight fee tips</Link> for the
            most common pitfalls.
          </p>

          <h2>Conclusion</h2>
          <p>
            A good rental plan keeps your project on schedule and on budget. If you want
            help choosing a size or scheduling delivery, call TNT Dumpsters and we will
            walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
