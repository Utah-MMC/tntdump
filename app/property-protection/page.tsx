import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Protection Tips for Dumpster Rentals | TNT...',
  description: 'Property protection tips for dumpster placement, driveway safety, and preventing surface damage during rentals. Get fast',
  keywords: 'property protection dumpster, driveway protection, dumpster placement tips, prevent driveway damage',
  alternates: { canonical: 'https://tntdump.com/property-protection' },
  openGraph: {
    title: 'Property Protection Tips for Dumpster Rentals | TNT Dumpsters',
    description: 'Property protection tips for dumpster placement, driveway safety, and preventing surface damage during rentals.',
    url: 'https://tntdump.com/property-protection',
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
            Property Protection Tips for Dumpster Rentals
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A few small steps can protect your driveway and landscaping during a dumpster
            rental. The goal is to choose a safe placement spot, spread the weight, and keep
            the area clear for pickup. This page covers the basics we recommend to every
            customer.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Use plywood to protect surfaces</h2>
          <p>
            Place plywood under the dumpster rails to spread the weight and reduce surface
            marks. This is especially important for decorative concrete or asphalt driveways.
          </p>

          <h2>Choose a flat, accessible spot</h2>
          <p>
            Place the dumpster on a level surface with clear access for delivery and pickup.
            Avoid slopes and tight turns when possible. See our
            <Link href="/dumpster-placement-driveway-protection">placement guide</Link> for
            a full walkthrough.
          </p>

          <h2>Keep the area clear</h2>
          <p>
            Maintain a clean perimeter around the dumpster so the driver can access it for
            pickup. Avoid blocking it with vehicles, debris piles, or tools.
          </p>

          <h2>Plan for weather</h2>
          <p>
            Snow, ice, and heavy rain can make surfaces slick. Clear and salt access paths
            during winter and keep the load covered when needed to avoid water weight.
          </p>

          <h2>Conclusion</h2>
          <p>
            Property protection is simple: choose a good spot, use plywood, and keep access
            clear. If you need help deciding on placement, call TNT Dumpsters and we will
            guide you through it.
          </p>
        </div>
      </section>
    </main>
  );
}
