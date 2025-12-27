import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Load Your Dumpster and Schedule Pickup | TNT Dumpsters',
  description:
    'Tips for loading your dumpster safely and scheduling pickup on time. Avoid trip fees and keep your project moving.',
  keywords:
    'dumpster pickup scheduling, how to load a dumpster, roll off pickup tips, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/load-dumpster-and-schedule-pickup' },
  openGraph: {
    title: 'Load Your Dumpster and Schedule Pickup | TNT Dumpsters',
    description:
      'Tips for loading your dumpster safely and scheduling pickup on time. Avoid trip fees and keep your project moving.',
    url: 'https://tntdump.com/load-dumpster-and-schedule-pickup',
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
            Load Your Dumpster and Schedule Pickup
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A smooth pickup starts with safe loading and a clear path for the driver. Follow these
            simple steps to avoid delays and extra fees.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Load evenly and keep debris below the rim</h2>
          <p>
            Distribute weight across the dumpster and keep everything level with the side walls.
            Overfilled dumpsters can cause delays and may require on-site adjustments.
          </p>

          <h2>Keep access clear</h2>
          <p>
            Make sure vehicles, gates, and debris are out of the way before pickup. A clear approach
            prevents trip fees and keeps the schedule on track.
          </p>

          <h2>Plan ahead for swaps</h2>
          <p>
            If you need another haul, schedule it early. That keeps your project moving and avoids
            downtime. For more details, see our <Link href="/dumpster-rental-process">rental process guide</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
