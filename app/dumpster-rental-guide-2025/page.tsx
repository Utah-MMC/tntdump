import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Rental Guide 2025: Plan Your Project | TNT Dumpsters',
  description: 'A 2025 dumpster rental guide covering size choices, pricing factors, and loading tips for Utah projects.',
  keywords: 'dumpster rental guide 2025, dumpster rentals 2025, roll off rental tips, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-guide-2025' },
  openGraph: {
    title: 'Dumpster Rental Guide 2025: Plan Your Project | TNT Dumpsters',
    description: 'A 2025 dumpster rental guide covering size choices, pricing factors, and loading tips for Utah projects.',
    url: 'https://tntdump.com/dumpster-rental-guide-2025',
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
            Dumpster Rental Guide 2025: Plan Your Project
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This 2025 guide covers size planning, pricing factors, permits, and safe
            loading tips for Utah projects.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Size and pricing basics</h2>
          <p>
            Choose a size that matches your scope to avoid a second haul. Weight limits and
            rental length affect pricing. Plan ahead to keep costs stable.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a tailored plan, call TNT Dumpsters and we will recommend the
            right size and schedule.
          </p>
        </div>
      </section>
    </main>
  );
}
