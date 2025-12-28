import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Friendly Live Help: Talk to a Local Expert | TNT Dumpsters',
  description: 'Call or text for friendly local help with dumpster sizing, scheduling, and project questions. Get fast delivery and clea',
  keywords: 'friendly live help, dumpster support, local dumpster help, call for dumpster rental',
  alternates: { canonical: 'https://tntdump.com/friendly-live-help' },
  openGraph: {
    title: 'Friendly Live Help: Talk to a Local Expert | TNT Dumpsters',
    description: 'Call or text for friendly local help with dumpster sizing, scheduling, and project questions.',
    url: 'https://tntdump.com/friendly-live-help',
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
            Friendly Live Help: Talk to a Local Expert
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Not sure what size you need or how permits work? Call or text our local team
            for fast, friendly help. We will walk you through the options and schedule the
            right dumpster for your project.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>What we help with</h2>
          <p>
            Size selection, delivery timing, placement tips, and questions about prohibited
            items. If you are unsure about anything, ask.
          </p>

          <h2>Conclusion</h2>
          <p>
            Call TNT Dumpsters and we will help you plan a smooth rental. Friendly help is
            part of the service.
          </p>
        </div>
      </section>
    </main>
  );
}
