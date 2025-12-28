import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On Time Dumpster Delivery: What to Expect | TNT Dumpsters',
  description: 'How TNT Dumpsters plans deliveries to keep your project on schedule, with simple prep steps for smooth drop off. Get fas',
  keywords: 'on time dumpster delivery, dumpster delivery schedule, roll off delivery, dumpster drop off',
  alternates: { canonical: 'https://tntdump.com/on-time-delivery' },
  openGraph: {
    title: 'On Time Dumpster Delivery: What to Expect | TNT Dumpsters',
    description: 'How TNT Dumpsters plans deliveries to keep your project on schedule, with simple prep steps for smooth drop off.',
    url: 'https://tntdump.com/on-time-delivery',
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
            On Time Dumpster Delivery: What to Expect
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Reliable delivery keeps your project moving. We plan delivery windows, confirm
            placement details, and coordinate access so your dumpster arrives on schedule.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Prepare the placement</h2>
          <p>
            Clear vehicles, mark the placement area, and check overhead clearance. A clean
            access path makes delivery faster and safer.
          </p>

          <h2>Confirm timing</h2>
          <p>
            We confirm delivery windows and keep you updated if schedules change. If you have
            time sensitive work, let us know so we can plan around your timeline.
          </p>

          <h2>Conclusion</h2>
          <p>
            On time delivery is a team effort. If you need a specific delivery window, call
            TNT Dumpsters and we will plan it with you.
          </p>
        </div>
      </section>
    </main>
  );
}
