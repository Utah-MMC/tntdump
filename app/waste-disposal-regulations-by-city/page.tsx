import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waste Disposal Regulations by City in Utah | TNT Dumpsters',
  description: 'Learn how local waste disposal regulations vary by city, including permits, placement rules, and common restrictions.',
  keywords: 'waste disposal regulations by city, utah dumpster rules, local disposal rules, dumpster permit rules',
  alternates: { canonical: 'https://tntdump.com/waste-disposal-regulations-by-city' },
  openGraph: {
    title: 'Waste Disposal Regulations by City in Utah | TNT Dumpsters',
    description: 'Learn how local waste disposal regulations vary by city, including permits, placement rules, and common restrictions.',
    url: 'https://tntdump.com/waste-disposal-regulations-by-city',
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
            Waste Disposal Regulations by City in Utah
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Disposal rules can vary by city. Most regulations focus on permits for street
            placement, access rules, and prohibited items. This page highlights the common
            patterns we see across Utah and how to plan ahead.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Permits and street placement</h2>
          <p>
            Many cities require a permit if a dumpster sits on the street or sidewalk. If the
            dumpster is fully on a driveway, a permit is usually not required. See our
            <Link href="/dumpster-rental-permits">permit guide</Link> for the general rule.
          </p>

          <h2>Common placement rules</h2>
          <p>
            Cities often require dumpsters to be a set distance from intersections, fire
            hydrants, and driveways. Some require reflective tape or cones for visibility.
            Check local rules before delivery if street placement is needed.
          </p>

          <h2>Prohibited items and disposal limits</h2>
          <p>
            Prohibited items are consistent across most cities. Paint, batteries, tires, and
            chemicals are commonly restricted. Review our
            <Link href="/dumpster-prohibited-items">prohibited items guide</Link> for details.
          </p>

          <h2>How to plan by city</h2>
          <p>
            If you are unsure about your city's rules, call the local public works or building
            department. We can also help you plan based on your city and project scope.
          </p>

          <h2>Conclusion</h2>
          <p>
            Local rules can vary, but the best approach is to plan early. If you need help
            confirming rules or permits, call TNT Dumpsters and we will guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
