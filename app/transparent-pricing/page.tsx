import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparent Dumpster Pricing: What’s Included | TNT Dumpsters',
  description: 'Our transparent pricing approach explains what’s included in your rental and how to avoid surprise fees.',
  keywords: 'transparent dumpster pricing, dumpster pricing included, roll off pricing, dumpster rental cost clarity',
  alternates: { canonical: 'https://tntdump.com/transparent-pricing' },
  openGraph: {
    title: 'Transparent Dumpster Pricing: What’s Included | TNT Dumpsters',
    description: 'Our transparent pricing approach explains what’s included in your rental and how to avoid surprise fees.',
    url: 'https://tntdump.com/transparent-pricing',
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
            Transparent Dumpster Pricing: What’s Included
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Transparent pricing means you know what to expect up front. We outline size,
            weight allowance, rental period, and any potential surcharges so there are no
            surprises.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>What’s included</h2>
          <p>
            Your rental includes delivery, pickup, a set rental period, and a weight
            allowance. For pricing details, see our <a href="/pricing">pricing overview</a>.
          </p>

          <h2>What can change the cost</h2>
          <p>
            Overweight loads, extended rentals, or prohibited items can add fees. See
            <a href="/fees">fee details</a> for the common surcharges.
          </p>

          <h2>Conclusion</h2>
          <p>
            We keep pricing clear so you can budget confidently. If you want a custom quote,
            call TNT Dumpsters and we will walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
