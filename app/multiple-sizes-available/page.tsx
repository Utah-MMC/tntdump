import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiple Dumpster Sizes Available | TNT Dumpsters',
  description: 'We offer multiple dumpster sizes to match cleanouts, remodels, and construction projects across Utah.',
  keywords: 'multiple dumpster sizes, roll off sizes, dumpster options, utah dumpster rental sizes',
  alternates: { canonical: 'https://tntdump.com/multiple-sizes-available' },
  openGraph: {
    title: 'Multiple Dumpster Sizes Available | TNT Dumpsters',
    description: 'We offer multiple dumpster sizes to match cleanouts, remodels, and construction projects across Utah.',
    url: 'https://tntdump.com/multiple-sizes-available',
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
            Multiple Dumpster Sizes Available
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We stock a full range of dumpster sizes to fit small cleanouts and large
            construction projects. If you are unsure, we can recommend the best fit.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Size options</h2>
          <p>
            10, 15, 20, 30, and 40 yard dumpsters are available. See <a href="/dumpster-sizes">dumpster sizes</a>
            for quick comparisons.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you need help choosing a size, call TNT Dumpsters and we will recommend the
            right option for your project.
          </p>
        </div>
      </section>
    </main>
  );
}
