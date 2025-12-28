import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'No Hidden Fees: What to Expect from TNT Dumpsters',
  description: 'Learn how we avoid hidden fees with clear quotes, weight limits, and upfront guidance. Get fast delivery and clear prici',
  keywords: 'no hidden fees dumpster, dumpster pricing honesty, roll off dumpster fees, dumpster rental transparency',
  alternates: { canonical: 'https://tntdump.com/no-hidden-fees' },
  openGraph: {
    title: 'No Hidden Fees: What to Expect from TNT Dumpsters',
    description: 'Learn how we avoid hidden fees with clear quotes, weight limits, and upfront guidance.',
    url: 'https://tntdump.com/no-hidden-fees',
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
            No Hidden Fees: What to Expect from TNT Dumpsters
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Clear pricing makes projects easier. We explain weight limits, rental periods,
            and access rules up front so you are not surprised later.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Upfront guidance</h2>
          <p>
            We review size options and weight limits before delivery. The right size prevents
            extra hauls and keeps pricing stable.
          </p>

          <h2>Clear fee explanations</h2>
          <p>
            If a fee can apply, we explain it up front. See our <a href="/fees">fee guide</a>
            for the common surcharges.
          </p>

          <h2>Conclusion</h2>
          <p>
            No hidden fees means clear communication. If you have questions about pricing,
            call TNT Dumpsters and we will walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
