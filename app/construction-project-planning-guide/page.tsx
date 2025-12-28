import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Project Planning Guide: Waste and...',
  description: 'A construction project planning guide focused on waste staging, dumpster sizing, and swap scheduling to reduce downtime.',
  keywords: 'construction project planning, dumpster planning, job site waste plan, swap scheduling, construction waste management',
  alternates: { canonical: 'https://tntdump.com/construction-project-planning-guide' },
  openGraph: {
    title: 'Construction Project Planning Guide: Waste and Scheduling | TNT Dumpsters',
    description: 'A construction project planning guide focused on waste staging, dumpster sizing, and swap scheduling to reduce downtime.',
    url: 'https://tntdump.com/construction-project-planning-guide',
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
            Construction Project Planning Guide: Waste and Scheduling
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A clean job site keeps crews productive. This planning guide focuses on waste
            staging, dumpster sizing, and swap scheduling so your project stays on track.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Match dumpster size to project phases</h2>
          <p>
            Demo phases create the most debris. Plan larger sizes or swaps during those
            phases to avoid downtime. See our <Link href="/construction-dumpster-size-guide">size guide</Link>
            for project matches.
          </p>

          <h2>Schedule swaps early</h2>
          <p>
            If the job will fill dumpsters quickly, schedule swaps ahead of time. This keeps
            crews working and prevents debris buildup. Our <Link href="/contractor-swap-scheduling-tips">swap tips</Link>
            cover the details.
          </p>

          <h2>Keep the site safe and clear</h2>
          <p>
            Place dumpsters in accessible locations, keep paths clear, and load evenly. A
            clean perimeter improves safety and speeds up loading.
          </p>

          <h2>Conclusion</h2>
          <p>
            Planning your waste flow is one of the easiest ways to keep construction on schedule.
            If you want a custom plan, call TNT Dumpsters and we will help you map out sizes
            and swaps.
          </p>
        </div>
      </section>
    </main>
  );
}
