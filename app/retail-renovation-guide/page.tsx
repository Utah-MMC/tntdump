import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Renovation Guide: Waste Planning Tips | TNT Dumpsters',
  description: 'A retail renovation waste planning guide with dumpster sizing and scheduling tips for smooth remodels.',
  keywords: 'retail renovation guide, retail remodel dumpster, commercial renovation waste, dumpster rental retail',
  alternates: { canonical: 'https://tntdump.com/retail-renovation-guide' },
  openGraph: {
    title: 'Retail Renovation Guide: Waste Planning Tips | TNT Dumpsters',
    description: 'A retail renovation waste planning guide with dumpster sizing and scheduling tips for smooth remodels.',
    url: 'https://tntdump.com/retail-renovation-guide',
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
            Retail Renovation Guide: Waste Planning Tips
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Retail remodels move fast. Planning dumpster size and swaps keeps the site clean
            and reduces downtime.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Plan size and swaps</h2>
          <p>
            Use larger sizes for demo phases and schedule swaps early to avoid debris
            buildup. This keeps crews working and stores looking professional.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you need a retail renovation plan, call TNT Dumpsters and we will recommend
            a size and swap schedule.
          </p>
        </div>
      </section>
    </main>
  );
}
