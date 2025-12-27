import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQ: Common Questions Answered | TNT Dumpsters',
  description: 'Quick answers to common dumpster rental questions about size, permits, prohibited items, and scheduling.',
  keywords: 'dumpster rental faq, dumpster questions, roll off dumpster faq, dumpster rental help',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-faq' },
  openGraph: {
    title: 'Dumpster Rental FAQ: Common Questions Answered | TNT Dumpsters',
    description: 'Quick answers to common dumpster rental questions about size, permits, prohibited items, and scheduling.',
    url: 'https://tntdump.com/dumpster-rental-faq',
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
            Dumpster Rental FAQ: Common Questions Answered
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            These quick answers cover the most common dumpster rental questions. For a
            full FAQ list, visit our <Link href="/faqs">FAQs page</Link>.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>What size dumpster do I need?</h2>
          <p>
            Most small cleanouts fit 10 yards, medium remodels fit 15 to 20 yards, and
            large projects often need 30 yards. See <Link href="/choose-right-dumpster-size">size selection</Link>
            for a detailed guide.
          </p>

          <h2>Do I need a permit?</h2>
          <p>
            Permits are usually required for street placement. Driveway placement typically
            does not require a permit. See <Link href="/dumpster-rental-permits">permit guidance</Link>
            for details.
          </p>

          <h2>What items are prohibited?</h2>
          <p>
            Paint, batteries, chemicals, and tires are common prohibited items. See
            <Link href="/dumpster-prohibited-items">prohibited items</Link> for the full list.
          </p>

          <h2>How long can I keep the dumpster?</h2>
          <p>
            Rentals include a standard number of days. If you need more time, ask about
            extension options in advance.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you still have questions, call TNT Dumpsters and we will help you plan the
            right rental.
          </p>
        </div>
      </section>
    </main>
  );
}
