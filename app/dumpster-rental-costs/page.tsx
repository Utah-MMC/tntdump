import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Rental Costs: What to Expect | TNT Dumpsters',
  description: 'A simple overview of dumpster rental costs, including size, weight, and rental length factors.',
  keywords: 'dumpster rental costs, dumpster cost, roll off pricing, dumpster rental fees',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-costs' },
  openGraph: {
    title: 'Dumpster Rental Costs: What to Expect | TNT Dumpsters',
    description: 'A simple overview of dumpster rental costs, including size, weight, and rental length factors.',
    url: 'https://tntdump.com/dumpster-rental-costs',
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
            Dumpster Rental Costs: What to Expect
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Costs depend on size, weight allowance, and rental length. Knowing these factors
            makes it easier to budget and avoid surprises.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Key cost factors</h2>
          <p>
            Larger sizes cost more, heavy debris can trigger overage fees, and longer rentals
            can add daily charges. Ask about weight limits and rental terms before booking.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a project specific estimate, call TNT Dumpsters and we will recommend
            the right size and pricing option.
          </p>
        </div>
      </section>
    </main>
  );
}
