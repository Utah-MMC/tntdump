import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trusted Partners | TNT Dumpsters',
  description:
    'Meet trusted local partners we recommend for project planning and home services across Utah. Reliable pros who align with TNT Dumpsters quality.',
  alternates: { canonical: 'https://tntdump.com/partners' },
    openGraph: {
      title: 'Trusted Partners | TNT Dumpsters',
      description: 'Meet trusted local partners we recommend for project planning and home services across Utah. Reliable pros who align with TNT Dumpsters quality.',
      url: 'https://tntdump.com/partners',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function PartnersPage() {
  return (
    <main className="min-h-screen section-padding">
      <div className="container-custom py-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Partners
          </h1>
          <p className="text-lg text-gray-600">
            We collaborate with local specialists whose values align with reliable service, smart project planning, and keeping Utah communities running smoothly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Pond &amp; Water Feature Partner
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Utah Water Gardens
              </h2>
              <p className="text-gray-600">
                Utah Water Gardens delivers complete pond and water feature solutions throughout the Wasatch Front&mdash;from custom construction to routine maintenance and water quality care.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Established in 1989 and still family operated in Salt Lake City</li>
              <li>&bull; Utah&apos;s largest selection of aquatic pond plants, koi, and supplies</li>
              <li>&bull; Professional service team featuring aquatic biologists, engineers, and horticulturists</li>
              <li>&bull; Contact: <a className="text-blue-600 hover:underline" href="tel:+18015908516">(801) 590-8516</a> &middot; <span className="text-gray-600">5911 S 1300 E, Salt Lake City, UT 84121</span></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://utahwatergardens.com"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit utahwatergardens.com
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Roll-off Dumpster Partner
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Icon Dumpsters
              </h2>
              <p className="text-gray-600">
                Icon Dumpsters provides residential-friendly roll-off rentals across Utah with same-day delivery, transparent pricing, and support for projects that need extra hauling capacity.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Fast 15, 20, and 30 yard roll-offs for contractors and homeowners</li>
              <li>&bull; Focus on tidy driveway placements and careful material hauling</li>
              <li>&bull; Service coverage throughout the Wasatch Front with on-call dispatch</li>
              <li>&bull; Contact: <a className="text-blue-600 hover:underline" href="tel:+18019186000">(801) 918-6000</a> &middot; <span className="text-gray-600">Based in Salt Lake City, UT</span></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://icondumpsters.com"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit icondumpsters.com
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Landscape Design Partner
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Outdoor Escapes &amp; Design
              </h2>
              <p className="text-gray-600">
                Outdoor Escapes &amp; Design plans, installs, and maintains outdoor environments that are tailored to each property with an emphasis on communication and craftsmanship.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Full-service design, installation, and maintenance for Utah landscapes</li>
              <li>&bull; Mission-focused team delivering high-quality work for each project&apos;s needs</li>
              <li>&bull; Free estimates with responsive project planning support</li>
              <li>&bull; Contact: <a className="text-blue-600 hover:underline" href="tel:+13852752377">(385) 275-2377</a></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.oedlandscape.com"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit oedlandscape.com
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          <article className="h-full rounded-2xl border border-dashed border-blue-200 bg-blue-50/30 p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Partnership Opportunities
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Partner With TNT Dump
              </h2>
              <p className="text-gray-600">
                We welcome Utah-based teams that bring specialized expertise to construction, renovation, and property improvement projects.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Align with a responsive hauling partner serving Salt Lake and Utah counties</li>
              <li>&bull; Collaborate on streamlined jobsite logistics and shared customer communication</li>
              <li>&bull; Extend project support with flexible dumpster scheduling and swaps</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
              >
                Start a partnership conversation
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

