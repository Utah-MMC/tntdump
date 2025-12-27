import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Renovation Guide: Dumpster Planning Basics | TNT Dumpsters',
  description: 'A home renovation guide focused on dumpster sizing, placement, and debris loading tips.',
  keywords: 'home renovation guide, dumpster planning, remodel waste, dumpster rental',
  alternates: { canonical: 'https://tntdump.com/home-renovation-guide' },
  openGraph: {
    title: 'Home Renovation Guide: Dumpster Planning Basics | TNT Dumpsters',
    description: 'A home renovation guide focused on dumpster sizing, placement, and debris loading tips.',
    url: 'https://tntdump.com/home-renovation-guide',
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
            Home Renovation Guide: Dumpster Planning Basics
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Renovations create bulky debris. Planning the right dumpster size and placement
            keeps the project clean and on schedule.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Size and placement</h2>
          <p>
            Match size to scope and choose a flat, accessible placement. If you need street
            placement, check permits early.
          </p>

          <h2>Conclusion</h2>
          <p>
            For a detailed plan, call TNT Dumpsters and we will recommend the right size.
          </p>
        </div>
      </section>
    </main>
  );
}
