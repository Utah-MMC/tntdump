import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Permits: When You Need One | TNT Dumpsters',
  description: 'A clear guide to dumpster rental permits, when they are required, and how to stay compliant with city rules. Get fast de',
  keywords: 'dumpster rental permits, street dumpster permit, roll off dumpster permit, dumpster permit utah, dumpster placement rules',
  alternates: { canonical: 'https://tntdump.com/dumpster-rental-permits' },
  openGraph: {
    title: 'Dumpster Rental Permits: When You Need One | TNT Dumpsters',
    description: 'A clear guide to dumpster rental permits, when they are required, and how to stay compliant with city rules.',
    url: 'https://tntdump.com/dumpster-rental-permits',
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
            Dumpster Rental Permits: When You Need One
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dumpster permits can feel confusing, but the rules are usually simple. If the
            dumpster sits on public property, a permit is often required. If it sits fully
            on your driveway, most cities do not require a permit. This page explains the
            general rules and how to stay compliant.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>When a permit is typically required</h2>
          <p>
            You usually need a permit when the dumpster blocks a public street, sidewalk,
            or alley. Cities want to keep these areas safe for traffic and pedestrians.
            If any part of the dumpster sits in a public right of way, check local rules
            before delivery.
          </p>
          <p>
            Placement on a private driveway or private lot often does not require a permit.
            That is the simplest option if you have space. If not, a permit is usually the
            next step.
          </p>

          <h2>How to get a permit without delays</h2>
          <p>
            Call your city public works or building department. Ask if a dumpster permit is
            required and what rules apply. Some cities require reflective markers, cones, or
            time limits for placement. Knowing these details early prevents delays.
          </p>
          <p>
            For Utah specific guidance, see our <Link href="/utah-dumpster-permit-checklist">Utah permit checklist</Link>.
            It includes practical steps for common cities in our service area.
          </p>

          <h2>Common rules and best practices</h2>
          <p>
            Most cities require dumpsters to be placed away from intersections, fire hydrants,
            and driveways. They may also require reflective tape or cones for visibility.
            Keep the area around the dumpster clear and follow the permit conditions.
          </p>
          <p>
            If the rental period extends beyond the permit window, you may need a renewal.
            Plan for this early so you are not forced to move the dumpster mid project.
          </p>

          <h2>Conclusion</h2>
          <p>
            Dumpster permits are simple when you plan ahead. If you need street placement,
            check local rules, apply early, and follow the conditions. If you have questions,
            call TNT Dumpsters and we will help you plan.
          </p>
        </div>
      </section>
    </main>
  );
}
