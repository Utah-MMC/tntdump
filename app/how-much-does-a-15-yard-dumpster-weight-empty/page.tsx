import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a 15 Yard Dumpster Weigh Empty? | TNT Dumpsters',
  description: 'Typical empty weight guidance for a 15 yard dumpster and how weight limits affect rentals.',
  keywords: '15 yard dumpster weight empty, empty dumpster weight, dumpster weight limits',
  alternates: { canonical: 'https://tntdump.com/how-much-does-a-15-yard-dumpster-weight-empty' },
  openGraph: {
    title: 'How Much Does a 15 Yard Dumpster Weigh Empty? | TNT Dumpsters',
    description: 'Typical empty weight guidance for a 15 yard dumpster and how weight limits affect rentals.',
    url: 'https://tntdump.com/how-much-does-a-15-yard-dumpster-weight-empty',
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
            How Much Does a 15 Yard Dumpster Weigh Empty?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empty weight varies by container and manufacturer, but the important factor for
            renters is the included weight allowance. Ask about limits before loading heavy
            debris.
          </p>
        </div>
      </section>
    </main>
  );
}
