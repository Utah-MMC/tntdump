import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Calculator: Plan Size and Cost | TNT Dumpsters',
  description: 'A simple dumpster calculator guide for planning size and budget based on project type and debris volume. Get fast delive',
  keywords: 'dumpster calculator, size estimate, dumpster cost estimate, roll off calculator',
  alternates: { canonical: 'https://tntdump.com/dumpster-calculator' },
  openGraph: {
    title: 'Dumpster Calculator: Plan Size and Cost | TNT Dumpsters',
    description: 'A simple dumpster calculator guide for planning size and budget based on project type and debris volume.',
    url: 'https://tntdump.com/dumpster-calculator',
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
            Dumpster Calculator: Plan Size and Cost
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Use this guide to estimate dumpster size and cost based on your project scope.
            If you want a quick estimate, call TNT Dumpsters and we will walk you through it.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Estimate by project</h2>
          <p>
            Small cleanouts often fit 10 yards, kitchens fit 20 yards, and large cleanouts
            fit 30 yards. Heavy debris may require smaller sizes to stay within limits.
          </p>

          <h2>Conclusion</h2>
          <p>
            For a tailored recommendation, call TNT Dumpsters with your project details.
          </p>
        </div>
      </section>
    </main>
  );
}
