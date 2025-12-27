import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ultimate Guide to Dumpster Rental in Utah | TNT Dumpsters',
  description: 'A complete Utah dumpster rental guide with sizing, pricing, permits, and loading best practices.',
  keywords: 'ultimate guide dumpster rental utah, utah dumpster guide, roll off dumpster utah, dumpster rental tips',
  alternates: { canonical: 'https://tntdump.com/ultimate-guide-dumpster-rental-utah' },
  openGraph: {
    title: 'Ultimate Guide to Dumpster Rental in Utah | TNT Dumpsters',
    description: 'A complete Utah dumpster rental guide with sizing, pricing, permits, and loading best practices.',
    url: 'https://tntdump.com/ultimate-guide-dumpster-rental-utah',
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
            Ultimate Guide to Dumpster Rental in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This guide brings together the core steps for renting a dumpster in Utah:
            size selection, pricing, permits, and safe loading.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Start with size and scope</h2>
          <p>
            Match the size to your project to avoid extra hauls. Smaller sizes work for
            cleanouts, while large remodels need 20 to 30 yards.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a custom plan, call TNT Dumpsters and we will help you choose the
            right size and schedule.
          </p>
        </div>
      </section>
    </main>
  );
}
