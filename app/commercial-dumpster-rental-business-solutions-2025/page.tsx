import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Business Solutions 2025 | TNT Dumpsters',
  description:
    'Planning commercial projects in 2025? Explore dumpster rental solutions for retail, offices, and property managers across Utah.',
  keywords:
    'commercial dumpster rental 2025, business dumpster solutions, commercial roll off dumpsters, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/commercial-dumpster-rental-business-solutions-2025' },
  openGraph: {
    title: 'Commercial Dumpster Rental Business Solutions 2025 | TNT Dumpsters',
    description:
      'Planning commercial projects in 2025? Explore dumpster rental solutions for retail, offices, and property managers across Utah.',
    url: 'https://tntdump.com/commercial-dumpster-rental-business-solutions-2025',
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
            Commercial Dumpster Rental Business Solutions 2025
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Commercial work in 2025 is moving fast, and cleanup needs to keep up. We provide flexible
            delivery windows, quick swaps, and clear communication for retail, office, and property
            projects across Utah.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Smarter scheduling for busy teams</h2>
          <p>
            We coordinate deliveries around your crew and your timeline. That includes early drop-offs,
            staged bins for phased remodels, and on-demand swaps.
          </p>

          <h2>Right size for each phase</h2>
          <p>
            Use smaller bins for dense debris and larger containers for bulky waste. Compare options on
            our <Link href="/dumpster-sizes">dumpster sizes</Link> page or get a quick recommendation.
          </p>

          <h2>Request a commercial plan</h2>
          <p>
            Talk with our team about multi-site projects and recurring schedules. Start with the
            <Link href="/commercial-dumpster-rental"> commercial dumpster rental</Link> page or request
            a quote directly.
          </p>
        </div>
      </section>
    </main>
  );
}
