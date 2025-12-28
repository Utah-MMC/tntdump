import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Choose the Right Dumpster Size | TNT Dumpsters',
  description:
    'Simple steps for choosing the right dumpster size based on project type, debris weight, and space constraints. Get fast ',
  keywords:
    'how to choose dumpster size, dumpster sizing tips, roll off size guide, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/how-to-choose-dumpster-size-3' },
  openGraph: {
    title: 'How to Choose the Right Dumpster Size | TNT Dumpsters',
    description:
      'Simple steps for choosing the right dumpster size based on project type, debris weight, and space constraints.',
    url: 'https://tntdump.com/how-to-choose-dumpster-size-3',
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
            How to Choose the Right Dumpster Size
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Picking the right size saves money and prevents delays. This quick guide breaks the
            decision into a few easy steps.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Match the size to the project scope</h2>
          <p>
            Small cleanouts and heavy debris often fit a 10 yard dumpster. Remodels and roofing
            jobs usually need 15 to 20 yards. Large construction or estate cleanouts can require
            30 to 40 yards.
          </p>

          <h2>Check weight limits</h2>
          <p>
            Dense materials like concrete and dirt hit weight limits quickly. If your debris is
            heavy, a smaller dumpster may be safer and more cost effective.
          </p>

          <h2>Use tools for fast guidance</h2>
          <p>
            Our <Link href="/dumpster-size-calculator">size calculator</Link> gives a fast estimate.
            You can also compare sizes on the <Link href="/dumpster-sizes">dumpster sizes page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
