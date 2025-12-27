import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Process: How It Works Step by Step | TNT Dumpsters',
  description: 'A simple dumpster rental process guide from choosing a size to scheduling pickup, with tips to keep your project smooth.',
  keywords: 'dumpster rental process, how to rent a dumpster, roll off dumpster delivery, dumpster pickup scheduling, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-process' },
  openGraph: {
    title: 'Dumpster Rental Process: How It Works Step by Step | TNT Dumpsters',
    description: 'A simple dumpster rental process guide from choosing a size to scheduling pickup, with tips to keep your project smooth.',
    url: 'https://tntdump.com/dumpster-rental-process',
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
            Dumpster Rental Process: How It Works Step by Step
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The dumpster rental process is simple when you know the steps. I walk people
            through this all the time, and it usually comes down to four things: size,
            placement, loading, and pickup. This guide breaks it down so you know what to
            expect and how to avoid common problems.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Step 1: Choose the right size for your project</h2>
          <p>
            Start with the scope. A small room cleanout might fit a 10 yard dumpster, while
            a kitchen remodel or large cleanout often needs 20 yards. If you are unsure,
            it is safer to size up than to run out of space.
          </p>
          <p>
            If the debris is heavy, like concrete or tile, ask about weight limits before
            choosing a size. Smaller dumpsters can be better for heavy loads. For an overview
            of sizes, see our <Link href="/dumpsters">dumpster sizes page</Link>.
          </p>

          <h2>Step 2: Schedule delivery and prepare the placement</h2>
          <p>
            Pick a flat, accessible spot for delivery. Clear vehicles and obstacles, and
            check for overhead clearance. If you need to place the dumpster on the street,
            check permit rules first. Our <Link href="/utah-dumpster-permit-checklist">permit checklist</Link>
            can help.
          </p>
          <p>
            Mark the placement area with cones or tape so the driver knows where to set the
            dumpster. A clear, marked spot makes delivery smoother.
          </p>

          <h2>Step 3: Load safely and efficiently</h2>
          <p>
            Load bulky items first and keep the load level. Break down large items to save
            space. Avoid prohibited items like paint, batteries, and chemicals. If you are
            unsure, check our <Link href="/dumpster-prohibited-items">prohibited items guide</Link>.
          </p>
          <p>
            Keep the area around the dumpster clear so loading is safe and fast. A clean
            loading zone prevents trips and delays.
          </p>

          <h2>Step 4: Schedule pickup and finish strong</h2>
          <p>
            Once your project is done, schedule pickup. Make sure the dumpster is accessible
            and the load is level. Overfilled dumpsters can delay pickup, so keep debris below
            the side walls.
          </p>
          <p>
            If you need another haul, let us know early. Planning swaps avoids downtime and
            keeps your project on schedule.
          </p>

          <h2>Conclusion</h2>
          <p>
            The dumpster rental process is straightforward when you plan size, placement,
            loading, and pickup. If you want help choosing a size or scheduling delivery,
            call TNT Dumpsters. We will walk you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
