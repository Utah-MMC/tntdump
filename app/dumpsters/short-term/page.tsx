import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Dumpster Rental | Dumpster Rental | TNT Dump',
  description: 'Short-term roll off dumpster rental for events and quick projects. Fast delivery in Salt Lake & Utah County. See pricing basics and availability.',
}

export default function ShortTermDumpsters() {
  const sizes = [
    {
      size: '15 Yard',
      description: 'Ideal for medium-sized projects',
      capacity: '5-6 pickup truck loads',
      dimensions: '12\' x 8\' x 6\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '20 Yard',
      description: 'Great for larger projects and cleanouts',
      capacity: '7-8 pickup truck loads',
      dimensions: '22\' x 8\' x 6\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '30 Yard',
      description: 'Perfect for major projects with quick turnarounds',
      capacity: '10-12 pickup truck loads',
      dimensions: '22\' x 8\' x 8\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: 'Concrete Dumpster',
      description: 'Concrete, brick, or asphalt only (no mixed waste)',
      capacity: 'Heavy material only',
      dimensions: 'Contact for available sizes',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Short-Term Dumpster Rental Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Professional short-term dumpster rental solutions for temporary projects and cleanouts.
        </p>
        {/* SEO SWEEP START [/dumpsters/short-term] */}
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-700 space-y-2">
          <p>
            Need fast turnaround? Check <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> options. For numbers, review <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a>.
          </p>
        </div>
        {/* SEO SWEEP END [/dumpsters/short-term] */}
        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      {/* Short-Term Dumpster Sizes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Short-Term Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our most popular sizes. Pricing shown includes 1-day and 7-day options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-6">{size.description}</p>
                <div className="space-y-2 text-base text-gray-700 mb-4">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                  <p><strong>Rental Period:</strong> {size.duration}</p>
                </div>
                <div className="mt-2 text-left inline-block">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Pricing</p>
                  <ul className="text-base text-gray-700">
                    {size.pricing.map((p, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-1">
                        <span className="font-medium">{p.label}</span>
                        <span className="font-bold text-blue-600">{p.value}</span>
                      </li>
                    ))}
                  </ul>
                  {size.pricing.some(p => p.note) && (
                    <p className="text-xs text-gray-500 mt-2 text-center">Notes: {size.pricing.filter(p => p.note).map(p => `${p.label} ${p.note}`).join(' Â· ')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SEO SWEEP START [/dumpsters/short-term-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Short-Term Dumpster Rental',
          areaServed: 'Salt Lake & Utah County',
          provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' }
        }) }}
      />
      {/* SEO SWEEP END [/dumpsters/short-term-schema] */}
    </div>
  )
}

