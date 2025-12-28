import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Environmental Impact Report: Responsible Disposal | TNT...',
  description: 'Our approach to responsible disposal, recycling, and safe handling to reduce environmental impact. Get fast delivery and',
  keywords: 'environmental impact report, responsible disposal, recycling, dumpster rental sustainability',
  alternates: { canonical: 'https://tntdump.com/environmental-impact-report' },
  openGraph: {
    title: 'Environmental Impact Report: Responsible Disposal | TNT Dumpsters',
    description: 'Our approach to responsible disposal, recycling, and safe handling to reduce environmental impact.',
    url: 'https://tntdump.com/environmental-impact-report',
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
            Environmental Impact Report: Responsible Disposal
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Our focus is responsible disposal, safe handling, and smart recycling whenever
            possible. This report outlines the practical steps we recommend to reduce waste.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Responsible disposal</h2>
          <p>
            We follow local disposal rules, keep prohibited items out of loads, and guide
            customers toward safe handling options for hazardous materials.
          </p>

          <h2>Recycling and reuse</h2>
          <p>
            Clean cardboard, metal, and some appliances can often be recycled. We encourage
            separation when it makes sense and share local options on request.
          </p>

          <h2>Conclusion</h2>
          <p>
            Responsible disposal is part of every rental. If you want help with recycling
            or disposal questions, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
