import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same Day Dumpster Delivery in Utah | TNT Dumpsters',
  description: 'Same day dumpster delivery options for Utah projects, including scheduling tips and availability guidance.',
  keywords: 'same day dumpster delivery, same day dumpster rental, fast dumpster delivery, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/same-day-delivery' },
  openGraph: {
    title: 'Same Day Dumpster Delivery in Utah | TNT Dumpsters',
    description: 'Same day dumpster delivery options for Utah projects, including scheduling tips and availability guidance.',
    url: 'https://tntdump.com/same-day-delivery',
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
            Same Day Dumpster Delivery in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer same day delivery when availability allows. Call early, confirm access,
            and we will do our best to fit you into the schedule.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>How to improve same day availability</h2>
          <p>
            Call in the morning, confirm placement details, and keep the delivery area clear.
            Flexible size options also help us match availability faster.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you need same day delivery, call TNT Dumpsters and we will check availability
            for your area.
          </p>
        </div>
      </section>
    </main>
  );
}
