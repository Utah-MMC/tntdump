import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Calculator: Estimate Dumpster Needs | TNT Dumpsters',
  description: 'A roofing calculator guide to estimate dumpster size and weight for roof tear offs. Get fast delivery and clear pricing.',
  keywords: 'roofing calculator, dumpster size for roofing, roof tear off dumpster, roofing weight estimate',
  alternates: { canonical: 'https://tntdump.com/roofing-calculator' },
  openGraph: {
    title: 'Roofing Calculator: Estimate Dumpster Needs | TNT Dumpsters',
    description: 'A roofing calculator guide to estimate dumpster size and weight for roof tear offs.',
    url: 'https://tntdump.com/roofing-calculator',
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
            Roofing Calculator: Estimate Dumpster Needs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Roofing debris is heavy and dense. This guide explains how to estimate dumpster
            size and weight for roof tear offs.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Estimate by squares and layers</h2>
          <p>
            Roofing is measured in squares (100 square feet). More layers mean more weight.
            Ask about weight limits and choose a size that matches your roof scope.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want help planning a roofing dumpster, call TNT Dumpsters and we will
            recommend the right size.
          </p>
        </div>
      </section>
    </main>
  );
}
