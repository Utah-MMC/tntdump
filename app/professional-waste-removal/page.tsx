import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Waste Removal Services | TNT Dumpsters',
  description: 'Professional waste removal for cleanouts, remodels, and construction projects across Utah. Get fast delivery and clear p',
  keywords: 'professional waste removal, dumpster rental service, debris removal, utah waste removal',
  alternates: { canonical: 'https://tntdump.com/professional-waste-removal' },
  openGraph: {
    title: 'Professional Waste Removal Services | TNT Dumpsters',
    description: 'Professional waste removal for cleanouts, remodels, and construction projects across Utah.',
    url: 'https://tntdump.com/professional-waste-removal',
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
            Professional Waste Removal Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide reliable waste removal for residential and commercial projects. From
            small cleanouts to large construction jobs, we help keep your site clean.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Service coverage</h2>
          <p>
            We serve the Wasatch Front and surrounding Utah cities with roll off dumpsters
            sized for every project.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you need professional waste removal, call TNT Dumpsters and we will help you
            plan the right service.
          </p>
        </div>
      </section>
    </main>
  );
}
