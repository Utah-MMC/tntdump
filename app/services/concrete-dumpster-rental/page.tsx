import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Concrete Dumpster Rental | Heavy Debris Solutions | TNT...',
  description:
    'Concrete dumpster rental for driveways, patios, and demolition projects. Learn weight limits and safe loading tips. Get ',
  keywords:
    'concrete dumpster rental, heavy debris dumpster, concrete disposal, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/concrete-dumpster-rental' },
  openGraph: {
    title: 'Concrete Dumpster Rental | Heavy Debris Solutions | TNT Dumpsters',
    description:
      'Concrete dumpster rental for driveways, patios, and demolition projects. Learn weight limits and safe loading tips.',
    url: 'https://tntdump.com/services/concrete-dumpster-rental',
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
            Concrete Dumpster Rental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Concrete is dense and heavy, so the right dumpster size matters. We help you stay within
            weight limits and schedule reliable pickup for demolition debris.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Best sizes for concrete</h2>
          <p>
            Most concrete jobs fit best in a 10 or 15 yard dumpster. Smaller sizes help control weight
            and avoid overage fees.
          </p>

          <h2>Estimate weight before you load</h2>
          <p>
            Use the <Link href="/tonnage-calculator">tonnage calculator</Link> or the
            <Link href="/dumpster-calculator-for-concrete"> concrete calculator</Link> to estimate
            weight and volume.
          </p>

          <h2>Related services</h2>
          <p>
            See our <Link href="/services/concrete">concrete dumpster service</Link> or call for a quote.
          </p>
        </div>
      </section>
    </main>
  );
}
