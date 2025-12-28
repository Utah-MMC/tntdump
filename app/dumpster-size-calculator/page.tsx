import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Size Calculator: Estimate the Right Fit | TNT...',
  description: 'Use this dumpster size calculator guide to estimate the right size based on project type, room count, and debris volume.',
  keywords: 'dumpster size calculator, size estimate, choose dumpster size, roll off size guide, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/dumpster-size-calculator' },
  openGraph: {
    title: 'Dumpster Size Calculator: Estimate the Right Fit | TNT Dumpsters',
    description: 'Use this dumpster size calculator guide to estimate the right size based on project type, room count, and debris volume.',
    url: 'https://tntdump.com/dumpster-size-calculator',
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
            Dumpster Size Calculator: Estimate the Right Fit
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This calculator guide helps you estimate the right dumpster size based on the
            project scope and debris type. If you want a quick visual, see our
            <Link href="/choose-right-dumpster-size">size selection guide</Link>.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Quick size estimates</h2>
          <p>
            Small room cleanout: 10 yards. Bathroom remodel: 10 to 15 yards. Kitchen remodel:
            15 to 20 yards. Basement cleanout: 20 yards. Whole home cleanout: 30 yards.
          </p>

          <h2>Debris type matters</h2>
          <p>
            Heavy debris like concrete and tile can exceed weight limits fast. If your
            project is heavy, ask about weight limits and consider a smaller dumpster.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a tailored size recommendation, call TNT Dumpsters with your project
            details and we will recommend the right fit.
          </p>
        </div>
      </section>
    </main>
  );
}
