import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Tips: Save Time and Avoid Fees | TNT Dumpsters',
  description: 'Practical dumpster rental tips to help you choose the right size, load efficiently, and avoid common fees.',
  keywords: 'dumpster rental tips, roll off dumpster tips, avoid dumpster fees, dumpster loading tips',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-tips' },
  openGraph: {
    title: 'Dumpster Rental Tips: Save Time and Avoid Fees | TNT Dumpsters',
    description: 'Practical dumpster rental tips to help you choose the right size, load efficiently, and avoid common fees.',
    url: 'https://tntdump.com/dumpster-rental-tips',
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
            Dumpster Rental Tips: Save Time and Avoid Fees
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A few simple dumpster rental tips can save you time and money. Most problems I
            see are from the wrong size, poor placement, or overfilled loads. This page
            highlights the habits that keep projects smooth.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Choose the right size</h2>
          <p>
            Size drives cost and convenience. If you are unsure, describe your project and
            ask for a recommendation. It is often cheaper to size up than to order a second
            haul.
          </p>

          <h2>Prepare the placement</h2>
          <p>
            Clear the driveway, mark the placement area, and check for overhead clearance.
            If the dumpster will sit on the street, check permit requirements early. See
            <Link href="/dumpster-rental-permits">permits</Link> for guidance.
          </p>

          <h2>Load efficiently</h2>
          <p>
            Load bulky items first, break down large pieces, and keep the load level. Avoid
            prohibited items to prevent fees. If you are unsure, check
            <Link href="/dumpster-prohibited-items">prohibited items</Link>.
          </p>

          <h2>Watch weight limits</h2>
          <p>
            Heavy debris like concrete and tile can exceed weight limits quickly. If your
            project is heavy, ask about weight allowances and consider a smaller dumpster.
          </p>

          <h2>Conclusion</h2>
          <p>
            Good planning makes dumpster rentals easy. Choose the right size, prepare the
            placement, load smart, and respect weight limits. If you have questions, call
            TNT Dumpsters and we will help you plan.
          </p>
        </div>
      </section>
    </main>
  );
}
