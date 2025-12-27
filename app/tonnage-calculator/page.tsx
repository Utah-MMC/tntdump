import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tonnage Calculator: Estimate Dumpster Weight | TNT Dumpsters',
  description: 'A simple tonnage calculator guide to estimate debris weight and stay under dumpster weight limits.',
  keywords: 'tonnage calculator, dumpster weight estimate, debris weight, weight limit dumpster, heavy debris',
  alternates: { canonical: 'https://tntdump.com/tonnage-calculator' },
  openGraph: {
    title: 'Tonnage Calculator: Estimate Dumpster Weight | TNT Dumpsters',
    description: 'A simple tonnage calculator guide to estimate debris weight and stay under dumpster weight limits.',
    url: 'https://tntdump.com/tonnage-calculator',
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
            Tonnage Calculator: Estimate Dumpster Weight
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Weight limits matter for heavy debris like concrete, shingles, and tile. This
            guide explains how to estimate weight so you avoid overage fees.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Estimate weight by material</h2>
          <p>
            Heavy debris can exceed weight limits fast. If your project includes dense
            materials, ask about weight allowances and consider a smaller dumpster.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a weight estimate for your project, call TNT Dumpsters and we will
            help you plan a safe load.
          </p>
        </div>
      </section>
    </main>
  );
}
