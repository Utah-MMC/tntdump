import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '15 Yard Dumpster Rental | Versatile Mid-Size Bin | TNT...',
  description:
    'A 15 yard dumpster is ideal for small remodels, roofing jobs, and cleanouts. See capacity details and book fast delivery in Utah.',
  keywords:
    '15 yard dumpster rental, mid size dumpster, roll off dumpster 15 yard, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/15-yard-dumpster-rental' },
  openGraph: {
    title: '15 Yard Dumpster Rental | Versatile Mid-Size Bin | TNT Dumpsters',
    description:
      'A 15 yard dumpster is ideal for small remodels, roofing jobs, and cleanouts. See capacity details and book fast delivery in Utah.',
    url: 'https://tntdump.com/15-yard-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">15 Yard Dumpster Rental</h1>
          <p className="mt-4 text-lg text-gray-600">
            The 15 yard dumpster is a great middle ground when 10 yards feels tight but 20 yards
            might be overkill. It fits most driveways and handles a surprising amount of debris.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Common uses for a 15 yard dumpster</h2>
          <p>
            This size works well for kitchen or bathroom remodels, roofing replacements, and
            medium cleanouts. It is also a good option for light construction jobs where volume
            is moderate.
          </p>

          <h2>Capacity and placement tips</h2>
          <p>
            Expect room for about 80 to 100 trash bags. Make sure the delivery area is flat and
            free of low branches or overhead lines.
          </p>

          <h2>Need help deciding?</h2>
          <p>
            Compare sizes on our <Link href="/dumpster-sizes">dumpster sizes</Link> page or try the
            <Link href="/dumpster-size-calculator"> size calculator</Link>. We can also talk through
            the job and recommend the best fit.
          </p>
        </div>
      </section>
    </main>
  );
}
