import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Waste Management 2025 | TNT Dumpsters',
  description: 'A 2025 update on construction waste planning, dumpster sizing, and swap scheduling for job sites.',
  keywords: 'construction waste management 2025, job site waste, dumpster planning, construction dumpsters',
  alternates: { canonical: 'https://tntdump.com/construction-waste-management-2025' },
  openGraph: {
    title: 'Construction Waste Management 2025 | TNT Dumpsters',
    description: 'A 2025 update on construction waste planning, dumpster sizing, and swap scheduling for job sites.',
    url: 'https://tntdump.com/construction-waste-management-2025',
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
            Construction Waste Management 2025
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Updated guidance for 2025 focuses on planning size, scheduling swaps, and
            keeping sites clean to reduce downtime.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Plan by phase</h2>
          <p>
            Demo phases create the most debris. Size up and schedule swaps early to keep
            crews working.
          </p>

          <h2>Conclusion</h2>
          <p>
            If you want a waste plan for your project, call TNT Dumpsters and we will help.
          </p>
        </div>
      </section>
    </main>
  );
}
