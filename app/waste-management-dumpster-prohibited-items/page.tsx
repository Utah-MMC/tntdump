import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Prohibited Items | What You Cannot Throw Away |...',
  description:
    'A clear list of prohibited items for dumpster rentals, plus safer disposal options. Stay compliant and avoid trip fees. ',
  keywords:
    'dumpster prohibited items, hazardous waste disposal, what cannot go in a dumpster, utah dumpster rental rules',
  alternates: { canonical: 'https://tntdump.com/waste-management-dumpster-prohibited-items' },
  openGraph: {
    title: 'Dumpster Prohibited Items | What You Cannot Throw Away | TNT Dumpsters',
    description:
      'A clear list of prohibited items for dumpster rentals, plus safer disposal options. Stay compliant and avoid trip fees.',
    url: 'https://tntdump.com/waste-management-dumpster-prohibited-items',
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
            Dumpster Prohibited Items
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Certain materials are not allowed in roll-off dumpsters because of safety and landfill
            regulations. This guide explains the most common prohibited items and what to do instead.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Common prohibited items</h2>
          <p>
            Paint, oils, batteries, tires, and hazardous chemicals are not accepted in standard
            dumpsters. These items require specialized handling and disposal.
          </p>

          <h2>Safer disposal options</h2>
          <p>
            Many cities offer household hazardous waste drop-off events. If you are unsure about an
            item, call our team first so we can guide you to the right option.
          </p>

          <h2>Need the full list?</h2>
          <p>
            See our detailed <Link href="/dumpster-prohibited-items">prohibited items page</Link> or
            review <Link href="/responsible-disposal">responsible disposal</Link> tips for best practices.
          </p>
        </div>
      </section>
    </main>
  );
}
