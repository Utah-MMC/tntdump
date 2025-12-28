import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Competitive Dumpster Pricing: How We Stay Fair | TNT...',
  description: 'Our competitive pricing approach focuses on fair rates, clear terms, and reliable service. Get fast delivery and clear p',
  keywords: 'competitive dumpster pricing, fair dumpster rates, roll off pricing, dumpster rental value',
  alternates: { canonical: 'https://tntdump.com/competitive-pricing' },
  openGraph: {
    title: 'Competitive Dumpster Pricing: How We Stay Fair | TNT Dumpsters',
    description: 'Our competitive pricing approach focuses on fair rates, clear terms, and reliable service.',
    url: 'https://tntdump.com/competitive-pricing',
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
            Competitive Dumpster Pricing: How We Stay Fair
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We keep pricing competitive by matching the right size to the project, offering
            clear weight limits, and avoiding surprise fees.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Right size, right price</h2>
          <p>
            The best way to keep pricing fair is to avoid a second haul. We help you choose
            the right size based on your project scope.
          </p>

          <h2>Clear terms</h2>
          <p>
            We outline weight allowances and rental periods up front. See <a href="/pricing">pricing</a>
            for a full overview.
          </p>

          <h2>Conclusion</h2>
          <p>
            Competitive pricing is about value and reliability. If you want a custom quote,
            call TNT Dumpsters and we will help you plan.
          </p>
        </div>
      </section>
    </main>
  );
}
