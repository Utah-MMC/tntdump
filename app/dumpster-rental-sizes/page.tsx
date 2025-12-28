import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Sizes | Compare 10-40 Yard Options | TNT...',
  description:
    'Compare dumpster rental sizes from 10 to 40 yards. Learn what fits your project and get a fast quote in Utah. Get fast d',
  keywords:
    'dumpster rental sizes, dumpster size chart, 10 yard 20 yard 30 yard 40 yard dumpsters, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-sizes' },
  openGraph: {
    title: 'Dumpster Rental Sizes | Compare 10-40 Yard Options | TNT Dumpsters',
    description:
      'Compare dumpster rental sizes from 10 to 40 yards. Learn what fits your project and get a fast quote in Utah.',
    url: 'https://tntdump.com/dumpster-rental-sizes',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Sizes</h1>
          <p className="mt-4 text-lg text-gray-600">
            From small cleanouts to large construction jobs, the right size keeps your project
            efficient and cost-effective. This page gives a quick overview and links to full details.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Popular sizes at a glance</h2>
          <p>
            10 yard dumpsters handle heavy materials and small cleanouts, 15 to 20 yard dumpsters
            cover most remodels, and 30 to 40 yard dumpsters are best for large projects.
          </p>
          <p>
            For a detailed breakdown, visit the <Link href="/dumpster-sizes">dumpster sizes page</Link>.
            You can also check individual size pages like the <Link href="/20-yard-dumpster-rental">20 yard dumpster</Link>.
          </p>

          <h2>Need a fast recommendation?</h2>
          <p>
            Use the <Link href="/dumpster-size-calculator">dumpster size calculator</Link> or call us
            for a quick recommendation based on your project.
          </p>
        </div>
      </section>
    </main>
  );
}
