import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Utah Dumpster Rental Locations | TNT Dumpsters',
  description:
    'Find TNT Dumpsters service areas across Utah. Browse city and county pages to see local availability.',
  keywords: 'utah dumpster rental locations, utah service areas, dumpster rental cities, tnt dumpsters',
  alternates: { canonical: 'https://tntdump.com/utahlocations' },
  openGraph: {
    title: 'Utah Dumpster Rental Locations | TNT Dumpsters',
    description:
      'Find TNT Dumpsters service areas across Utah. Browse city and county pages to see local availability.',
    url: 'https://tntdump.com/utahlocations',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Utah Dumpster Rental Locations</h1>
          <p className="mt-4 text-lg text-gray-600">
            TNT Dumpsters serves a wide range of Utah cities and counties. Use the links below to
            find local pages and service details.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Browse by city or county</h2>
          <p>
            Start with our <Link href="/cities">city pages</Link> or explore counties on the
            <Link href="/counties"> counties page</Link>. Each location page includes local coverage
            and permit tips.
          </p>
        </div>
      </section>
    </main>
  );
}
