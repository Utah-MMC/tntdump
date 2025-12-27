import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Renovation Waste Disposal Guide | TNT Dumpsters',
  description: 'A home renovation waste disposal guide covering size selection, loading tips, and safe handling for remodel debris.',
  keywords: 'home renovation waste disposal, remodel dumpster, renovation debris removal, dumpster rental guide',
  alternates: { canonical: 'https://tntdump.com/home-renovation-waste-disposal-guide' },
  openGraph: {
    title: 'Home Renovation Waste Disposal Guide | TNT Dumpsters',
    description: 'A home renovation waste disposal guide covering size selection, loading tips, and safe handling for remodel debris.',
    url: 'https://tntdump.com/home-renovation-waste-disposal-guide',
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
            Home Renovation Waste Disposal Guide
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Renovations create bulky, messy debris. This guide explains how to plan the
            dumpster, load efficiently, and dispose of materials safely so your remodel
            stays clean and on schedule.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Size selection and common remodel debris</h2>
          <p>
            Bathrooms often fit 10 to 15 yards, kitchens usually need 20 yards, and full
            home remodels can require 30 yards. See our <Link href="/home-renovation-dumpster-guide">renovation dumpster guide</Link>
            for detailed size matches.
          </p>

          <h2>Load safely and avoid prohibited items</h2>
          <p>
            Load bulky items first, break down large pieces, and keep the load level. Avoid
            paint, chemicals, and batteries. See <Link href="/dumpster-prohibited-items">prohibited items</Link>
            for the full list.
          </p>

          <h2>Conclusion</h2>
          <p>
            Renovation waste disposal is simple with the right size and a smart loading plan.
            If you want help choosing a dumpster, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
