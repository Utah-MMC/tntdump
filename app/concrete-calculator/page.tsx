import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Calculator: Plan Heavy Debris Loads | TNT Dumpsters',
  description: 'A concrete calculator guide to estimate debris weight and choose the right dumpster for heavy materials.',
  keywords: 'concrete calculator, concrete weight estimate, concrete dumpster size, heavy debris dumpster',
  alternates: { canonical: 'https://tntdump.com/concrete-calculator' },
  openGraph: {
    title: 'Concrete Calculator: Plan Heavy Debris Loads | TNT Dumpsters',
    description: 'A concrete calculator guide to estimate debris weight and choose the right dumpster for heavy materials.',
    url: 'https://tntdump.com/concrete-calculator',
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
            Concrete Calculator: Plan Heavy Debris Loads
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Concrete is dense and can exceed weight limits fast. This guide explains how to
            estimate concrete weight and choose the right dumpster size.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Estimate concrete weight</h2>
          <p>
            Thickness and square footage drive weight. If your project involves heavy slabs,
            a smaller dumpster or heavy debris option is usually safer.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want help estimating concrete weight, call TNT Dumpsters and we will help
            you plan the right load.
          </p>
        </div>
      </section>
    </main>
  );
}
