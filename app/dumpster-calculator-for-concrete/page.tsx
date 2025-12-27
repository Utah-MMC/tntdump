import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Dumpster Calculator: Estimate Heavy Loads | TNT Dumpsters',
  description: 'Estimate concrete debris weight and choose the right dumpster size for heavy loads.',
  keywords: 'concrete dumpster calculator, concrete weight estimate, heavy debris dumpster, concrete disposal',
  alternates: { canonical: 'https://tntdump.com/dumpster-calculator-for-concrete' },
  openGraph: {
    title: 'Concrete Dumpster Calculator: Estimate Heavy Loads | TNT Dumpsters',
    description: 'Estimate concrete debris weight and choose the right dumpster size for heavy loads.',
    url: 'https://tntdump.com/dumpster-calculator-for-concrete',
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
            Concrete Dumpster Calculator: Estimate Heavy Loads
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Concrete is heavy and can exceed weight limits quickly. This guide helps you
            estimate heavy loads and choose the safest dumpster size.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Plan by thickness and square footage</h2>
          <p>
            Concrete weight depends on thickness and area. For large slabs, consider a
            smaller dumpster or heavy debris option to avoid overage fees.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want help estimating concrete weight, call TNT Dumpsters and we will
            recommend the right approach.
          </p>
        </div>
      </section>
    </main>
  );
}
