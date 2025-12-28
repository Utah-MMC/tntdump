import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accurate Weight Based Billing: What It Means | TNT Dumpsters',
  description: 'Learn how weight based billing works for dumpsters and how to plan loads to avoid overage fees. Get fast delivery and cl',
  keywords: 'weight based billing, dumpster weight limits, overage fees, heavy debris dumpster',
  alternates: { canonical: 'https://tntdump.com/accurate-weight-based-billing' },
  openGraph: {
    title: 'Accurate Weight Based Billing: What It Means | TNT Dumpsters',
    description: 'Learn how weight based billing works for dumpsters and how to plan loads to avoid overage fees.',
    url: 'https://tntdump.com/accurate-weight-based-billing',
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
            Accurate Weight Based Billing: What It Means
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Weight based billing means your price depends on debris weight. Understanding
            weight limits helps you avoid overage fees.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Why weight matters</h2>
          <p>
            Heavy debris like concrete, shingles, and tile can exceed limits quickly. Ask
            about weight allowances before loading dense materials.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want help estimating weight, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
