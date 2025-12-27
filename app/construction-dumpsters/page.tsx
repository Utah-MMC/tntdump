import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Dumpsters | Jobsite Roll-Offs | TNT Dumpsters',
  description:
    'Construction dumpsters for remodels, new builds, and demo work. Compare sizes, weight limits, and jobsite delivery details.',
  keywords:
    'construction dumpsters, jobsite dumpster rental, roll off for construction, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/construction-dumpsters' },
  openGraph: {
    title: 'Construction Dumpsters | Jobsite Roll-Offs | TNT Dumpsters',
    description:
      'Construction dumpsters for remodels, new builds, and demo work. Compare sizes, weight limits, and jobsite delivery details.',
    url: 'https://tntdump.com/construction-dumpsters',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Construction Dumpsters</h1>
          <p className="mt-4 text-lg text-gray-600">
            Jobsite dumpsters need reliable delivery windows, safe placement, and clear weight
            rules. We help contractors keep projects moving with the right size and quick swaps.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Right size for the phase of work</h2>
          <p>
            A 10 or 15 yard dumpster is great for heavy materials like concrete or tile. Larger
            framing and demolition projects usually need 20 to 40 yards. See the
            <Link href="/dumpster-sizes"> size chart</Link> for a quick overview.
          </p>

          <h2>Placement and safety reminders</h2>
          <p>
            Keep the delivery area clear and plan for 60 feet of straight access. If the bin
            needs to sit on the street, check your local permit rules.
          </p>

          <h2>Construction rental options</h2>
          <p>
            Visit our <Link href="/services/construction-dumpster-rental">construction rental service</Link> page
            or request a quote for project-specific pricing.
          </p>
        </div>
      </section>
    </main>
  );
}
