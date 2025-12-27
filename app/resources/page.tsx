import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dumpster Rental Resources | Guides, Tools, and Calculators | TNT Dumpsters',
  description:
    'Helpful dumpster rental resources including size guides, calculators, pricing info, and permit tips for Utah projects.',
  keywords:
    'dumpster rental resources, dumpster guides, dumpster calculators, utah dumpster rental tips',
  alternates: { canonical: 'https://tntdump.com/resources' },
  openGraph: {
    title: 'Dumpster Rental Resources | Guides, Tools, and Calculators | TNT Dumpsters',
    description:
      'Helpful dumpster rental resources including size guides, calculators, pricing info, and permit tips for Utah projects.',
    url: 'https://tntdump.com/resources',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
};

const resourceSections = [
  {
    title: 'Guides',
    links: [
      { href: '/dumpster-rental-guide', label: 'Dumpster Rental Guide' },
      { href: '/dumpster-size-guide-utah', label: 'Dumpster Size Guide Utah' },
      { href: '/dumpster-rental-process', label: 'Dumpster Rental Process' },
      { href: '/dumpster-rental-permits', label: 'Dumpster Rental Permits' },
    ],
  },
  {
    title: 'Calculators',
    links: [
      { href: '/dumpster-size-calculator', label: 'Dumpster Size Calculator' },
      { href: '/dumpster-rental-cost-calculator', label: 'Rental Cost Calculator' },
      { href: '/tonnage-calculator', label: 'Tonnage Calculator' },
      { href: '/roofing-calculator', label: 'Roofing Calculator' },
    ],
  },
  {
    title: 'Pricing',
    links: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/fees', label: 'Fees & Surcharges' },
      { href: '/transparent-pricing', label: 'Transparent Pricing' },
      { href: '/no-hidden-fees', label: 'No Hidden Fees' },
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Resources</h1>
          <p className="mt-4 text-lg text-gray-600">
            Use these guides and tools to pick the right dumpster size, understand pricing, and stay
            compliant with local rules.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-3">
          {resourceSections.map((section) => (
            <div key={section.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link className="font-semibold text-teal-700 hover:text-teal-800" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
