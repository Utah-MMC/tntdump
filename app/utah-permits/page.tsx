import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Utah Dumpster Permits Guide: Quick Local Overview | TNT...',
  description: 'A Utah focused permit overview for dumpster rentals, including street placement basics and links to local guidance. Get ',
  keywords: 'utah dumpster permits, dumpster permit utah, street placement permit, roll off permit utah',
  alternates: { canonical: 'https://tntdump.com/utah-permits' },
  openGraph: {
    title: 'Utah Dumpster Permits Guide: Quick Local Overview | TNT Dumpsters',
    description: 'A Utah focused permit overview for dumpster rentals, including street placement basics and links to local guidance.',
    url: 'https://tntdump.com/utah-permits',
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
            Utah Dumpster Permits Guide: Quick Local Overview
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Permits are usually required when a dumpster sits on a public street or sidewalk.
            This page summarizes the local rule of thumb and links to Utah specific guidance.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>When permits apply</h2>
          <p>
            If a dumpster is placed on public property, most Utah cities require a permit.
            If the dumpster is fully on a driveway, permits are usually not required. Confirm
            with the city if you are unsure.
          </p>

          <h2>Helpful Utah resources</h2>
          <p>
            See our <Link href="/utah-dumpster-permit-checklist">Utah permit checklist</Link>
            and <Link href="/dumpster-rental-permits">permit guide</Link> for more detail.
          </p>

          <h2>Conclusion</h2>
          <p>
            Plan permits early to avoid delivery delays. If you need help confirming local
            rules, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
