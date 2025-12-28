import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utah Waste Management Regulations | TNT Dumpsters',
  description: 'A simple overview of Utah waste management regulations that affect dumpster rentals and disposal. Get fast delivery and ',
  keywords: 'utah waste management regulations, utah disposal rules, dumpster rules utah',
  alternates: { canonical: 'https://tntdump.com/utah-waste-management-regulations' },
  openGraph: {
    title: 'Utah Waste Management Regulations | TNT Dumpsters',
    description: 'A simple overview of Utah waste management regulations that affect dumpster rentals and disposal.',
    url: 'https://tntdump.com/utah-waste-management-regulations',
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
            Utah Waste Management Regulations
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Utah regulations focus on placement rules, permitted materials, and safe
            disposal practices. Check local rules if you need street placement.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Permits and placement</h2>
          <p>
            Street placement often requires a permit. Driveway placement usually does not.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you need help confirming rules, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
