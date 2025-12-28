import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trusted Partners | TNT Dumpsters',
  description:
    'Meet trusted local partners we recommend for dumpster rental and waste management services across Utah. Reliable professionals who align with TNT Dumpsters quality.',
  alternates: { canonical: 'https://tntdump.com/partners' },
  openGraph: {
    title: 'Trusted Partners | TNT Dumpsters',
    description: 'Meet trusted local partners we recommend for dumpster rental and waste management services across Utah. Reliable professionals who align with TNT Dumpsters quality.',
    url: 'https://tntdump.com/partners',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'TNT Dumpsters Trusted Partners',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Partners
          </h1>
          <p className="text-lg text-gray-600">
            We collaborate with local specialists whose values align with reliable service, transparent pricing, and keeping Utah communities running smoothly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Icon Dumpsters - Sister Company */}
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                Sister Company - Dumpster Rental Partner
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Icon Dumpsters
              </h2>
              <p className="text-gray-600">
                Icon Dumpsters provides modern, residential-friendly dumpster rental services with same-day delivery and transparent pricing for homeowners and contractors across Utah.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Modern, residential-friendly dumpster rental service</li>
              <li>&bull; Same-day delivery options with flexible scheduling</li>
              <li>&bull; Transparent pricing with no hidden fees</li>
              <li>&bull; Specialized in home cleanouts, renovations, and small construction projects</li>
              <li>&bull; Contact: <a className="text-teal-600 hover:underline" href="tel:+18012099013">(801) 209-9013</a> &middot; <span className="text-gray-600">info@icondumpsters.com</span></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://icondumpsters.com"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
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

          {/* Utah Water Gardens */}
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                Pond &amp; Water Feature Partner
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Utah Water Gardens
              </h2>
              <p className="text-gray-600">
                Utah Water Gardens delivers complete pond and water feature solutions throughout the Wasatch Front—from custom construction to routine maintenance and water quality care.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Established in 1989 and still family operated in Salt Lake City</li>
              <li>&bull; Utah&apos;s largest selection of aquatic pond plants, koi, and supplies</li>
              <li>&bull; Professional service team featuring aquatic biologists, engineers, and horticulturists</li>
              <li>&bull; Contact: <a className="text-teal-600 hover:underline" href="tel:+18015908516">(801) 590-8516</a> &middot; <span className="text-gray-600">5911 S 1300 E, Salt Lake City, UT 84121</span></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://utahwatergardens.com"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
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

          {/* WaterRaptor */}
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                  Aquatic Management Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  WaterRaptor
                </h2>
                <p className="text-gray-600">
                  WaterRaptor provides professional pond, lake, river, and canal maintenance services—harvesting weeds, dredging sediment, and restoring shorelines to keep waterways healthy.
                </p>
              </div>
              <img
                src="/images/waterraptor-logo.png"
                alt="WaterRaptor logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Aquatic weed harvesting &amp; invasive plant removal</li>
              <li>&bull; Dredging, sediment, and muck removal</li>
              <li>&bull; Shoreline restoration &amp; habitat installation</li>
              <li>&bull; Contact: <a className="text-teal-600 hover:underline" href="tel:+18015908516">(801) 590-8516</a> &middot; <a className="text-teal-600 hover:underline" href="mailto:info@waterraptor.com">info@waterraptor.com</a></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://waterraptor.com"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit waterraptor.com
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* DredgeUtah */}
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                  Dredging &amp; Water Restoration Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  DredgeUtah
                </h2>
                <p className="text-gray-600">
                  DredgeUtah is Utah&apos;s premier pond and lake dredging company, specializing in professional water restoration services. Serving Salt Lake City, Provo, Ogden, and all of Utah with comprehensive sediment removal and aquatic management solutions.
                </p>
              </div>
              <img
                src="/images/dredgeutah-logo.png"
                alt="DredgeUtah logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Professional pond &amp; lake dredging throughout Utah</li>
              <li>&bull; Sediment removal &amp; water quality restoration</li>
              <li>&bull; Aquatic weed control &amp; ecosystem management</li>
              <li>&bull; Emergency response &amp; ongoing maintenance services</li>
              <li>&bull; Contact: <a className="text-teal-600 hover:underline" href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://dredgeutah.com"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit dredgeutah.com
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>

          {/* Outdoor Escapes & Design */}
          <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                  Landscape Design Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Outdoor Escapes &amp; Design
                </h2>
                <p className="text-gray-600">
                  Outdoor Escapes &amp; Design plans, installs, and maintains outdoor environments that are tailored to each property with an emphasis on communication and craftsmanship.
                </p>
              </div>
              <img
                src="/images/oed-logo.png"
                alt="Outdoor Escapes & Design logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Full-service design, installation, and maintenance for Utah landscapes</li>
              <li>&bull; Mission-focused team delivering high-quality work for each project&apos;s needs</li>
              <li>&bull; Free estimates with responsive project planning support</li>
              <li>&bull; Contact: <a className="text-teal-600 hover:underline" href="tel:+13852752377">(385) 275-2377</a></li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.oedlandscape.com"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
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

          {/* Partnership Opportunities */}
          <article className="h-full rounded-2xl border border-dashed border-teal-200 bg-teal-50/30 p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                Partnership Opportunities
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Partner With TNT Dumpsters
              </h2>
              <p className="text-gray-600">
                We welcome Utah-based teams that bring specialized expertise to construction, renovation, and property improvement projects.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 flex-1">
              <li>&bull; Partner with 55+ years of trusted dumpster rental experience</li>
              <li>&bull; Collaborate on comprehensive waste management solutions</li>
              <li>&bull; Full range of dumpster sizes with reliable delivery</li>
              <li>&bull; Transparent pricing and professional service your clients can trust</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
              >
                Start a partnership conversation
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>

        {/* Why Partner With Us Section */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Our Partners Choose TNT Dumpsters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">55+ Years Experience</h3>
              <p className="text-gray-600">
                Decades of trusted service in Utah with deep understanding of local regulations and customer needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                Full range of dumpster sizes and specialized services for any project type or scale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">
                Dependable delivery and pickup with professional support throughout your project timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}