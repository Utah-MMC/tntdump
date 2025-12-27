import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Calculator: Plan Dumpster Size | TNT Dumpsters',
  description: 'A demolition calculator guide to estimate dumpster size and weight for demo projects.',
  keywords: 'demolition calculator, dumpster size for demolition, demo debris estimate, demolition dumpster',
  alternates: { canonical: 'https://tntdump.com/demolition-calculator' },
  openGraph: {
    title: 'Demolition Calculator: Plan Dumpster Size | TNT Dumpsters',
    description: 'A demolition calculator guide to estimate dumpster size and weight for demo projects.',
    url: 'https://tntdump.com/demolition-calculator',
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
            Demolition Calculator: Plan Dumpster Size
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Demo debris adds up quickly. This guide explains how to estimate dumpster size
            based on square footage and material type.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Estimate by scope</h2>
          <p>
            Small demos often fit 10 to 15 yards, while full room demos or multiple rooms
            can require 20 to 30 yards. Heavy materials may require smaller sizes.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want help sizing a demo project, call TNT Dumpsters and we will recommend
            the right dumpster.
          </p>
        </div>
      </section>
    </main>
  );
}
