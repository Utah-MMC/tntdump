import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Pros We Work With: Contractors and Partners | TNT Dumpsters',
  description: 'Learn how TNT Dumpsters supports local pros with reliable delivery, fast swaps, and project friendly service.',
  keywords: 'local pros, contractor partners, dumpster rental for contractors, hauling partners, utah contractors',
  alternates: { canonical: 'https://tntdump.com/local-pros' },
  openGraph: {
    title: 'Local Pros We Work With: Contractors and Partners | TNT Dumpsters',
    description: 'Learn how TNT Dumpsters supports local pros with reliable delivery, fast swaps, and project friendly service.',
    url: 'https://tntdump.com/local-pros',
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
            Local Pros We Work With: Contractors and Partners
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We support local pros across Utah with dependable delivery, quick swaps, and
            clear communication. If you run a construction, roofing, remodeling, or property
            management business, we can help you keep jobs moving without waste delays.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Who we support</h2>
          <p>
            Our partners include contractors, roofers, remodelers, property managers, and
            small business owners. We provide reliable dumpsters for jobs that need clean
            sites and predictable scheduling.
          </p>

          <h2>How we help keep projects on schedule</h2>
          <p>
            We focus on fast delivery, clear placement guidance, and swap scheduling that
            reduces downtime. If your job needs frequent swaps, we can plan the schedule in
            advance.
          </p>

          <h2>Get started</h2>
          <p>
            If you want to work with TNT Dumpsters, call us or request a quote. We can tailor
            a plan that fits your job volume and timeline.
          </p>

          <h2>Conclusion</h2>
          <p>
            Local pros keep Utah moving, and we are proud to support your projects. Reach out
            to discuss service options and scheduling.
          </p>
        </div>
      </section>
    </main>
  );
}
