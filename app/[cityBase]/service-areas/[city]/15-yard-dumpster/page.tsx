import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCityData, getAllCities, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'
import { SizesTable, PermitBlock, DisposalBlock, Neighborhoods, Testimonials, FAQ, CTA, NearbyCities } from '@/components/city'

// Generate static params for all cities with /15-yard-dumpster routes
export async function generateStaticParams() {
  const allCities = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === 'UT')
  return allCities.map((c) => ({
    cityBase: `${c.slug}-dumpster-rentals`,
    city: c.slug,
  }))
}

type PageProps = { params: { cityBase: string; city: string } }

const BRAND = { name: 'TNT Dumpsters', url: 'https://tntdump.com', telephone: '(801) 209-9013' }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getCityData(params.city)
  if (!data) return {}
  const title = `15 Yard Dumpster Rental in ${data.city}, Utah | ${BRAND.name}`
  const description = `Rent a 15 yard dumpster in ${data.city}, UT. Perfect for bathroom remodels, flooring projects, and small cleanouts. Dimensions: 16'L × 7.5'W × 4.5'H. Fast delivery, transparent pricing.`
  const canonical = `${BRAND.url}/${data.slug}-dumpster-rentals/service-areas/${data.slug}/15-yard-dumpster`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND.name,
      type: 'article',
      locale: 'en_US',
      images: [{ url: '/images/dumpster1-500x500-1.jpeg', width: 1200, height: 800, alt: `15 yard dumpster rental in ${data.city}` }],
    },
  }
}

function Intro({ city }: { city: CityData }) {
  const to12h = (t?: string) => {
    if (!t) return '3:00 PM'
    if (/\b(am|pm)\b/i.test(t)) {
      const m = t.match(/^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i)
      if (m) return `${Number(m[1])}:${m[2]} ${m[3].toUpperCase()}`
      return t.replace(/\b(am|pm)\b/i, (s) => s.toUpperCase())
    }
    const m = t.match(/^(\d{1,2}):(\d{2})$/)
    if (!m) return t
    let h = parseInt(m[1], 10)
    const min = m[2]
    const suffix = h >= 12 ? 'PM' : 'AM'
    if (h === 0) h = 12
    else if (h > 12) h -= 12
    return `${h}:${min} ${suffix}`
  }
  return (
    <section className="py-14 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">15 Yard Dumpster Rental in {city.city}, Utah</h1>
          <p className="mt-4 text-gray-700">
            Need a mid-sized dumpster for your {city.city} project? Our 15 yard roll-off containers are the perfect choice
            for bathroom remodels, flooring removal, garage cleanouts, and small deck teardowns. With dimensions of 16 feet
            long by 7.5 feet wide by 4.5 feet high, a 15 yard dumpster holds approximately 6-7 pickup truck loads of material.
          </p>
          <p className="mt-3 text-gray-700">
            {BRAND.name} delivers 15 yard dumpsters to {city.city} homes and jobsites with the same fast, professional service
            you expect. Most orders placed before {to12h(city.cutoff_time)} arrive the same day, typically within{' '}
            {city.avg_delivery_eta_hours || 4} hours. Our drivers place protective boards to safeguard your driveway and will
            help you choose the best spot for safe, convenient access.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a href={city.quote_url || '/quote'} className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get a Quote</a>
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Call ({city.phone_cta?.slice(0,3)}) {city.phone_cta?.slice(4)}</a>
          </div>
        </div>
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={city.gallery?.[0]?.src || '/images/dumpster1-500x500-1.jpeg'}
            alt={`15 yard dumpster rental in ${city.city}, Utah`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            quality={70}
          />
        </div>
      </div>
    </section>
  )
}

function SpecsBlock({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">15 Yard Dumpster Specifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 font-semibold text-sm uppercase mb-2">Dimensions</div>
            <div className="text-2xl font-bold text-gray-900">16' × 7.5' × 4.5'</div>
            <div className="text-sm text-gray-600 mt-1">Length × Width × Height</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 font-semibold text-sm uppercase mb-2">Capacity</div>
            <div className="text-2xl font-bold text-gray-900">15 Cubic Yards</div>
            <div className="text-sm text-gray-600 mt-1">≈ 6-7 pickup truck loads</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 font-semibold text-sm uppercase mb-2">Weight Limit</div>
            <div className="text-2xl font-bold text-gray-900">2-3 Tons</div>
            <div className="text-sm text-gray-600 mt-1">Included in base price</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 font-semibold text-sm uppercase mb-2">Cost Range</div>
            <div className="text-2xl font-bold text-gray-900">$350-$450</div>
            <div className="text-sm text-gray-600 mt-1">Typical price in {city.city}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BestProjectsBlock({ city }: { city: CityData }) {
  const projects = [
    {
      title: 'Bathroom Remodels',
      description: 'Perfect for removing old vanities, tile, fixtures, and demolition debris from a full bathroom renovation.',
      icon: '🛁'
    },
    {
      title: 'Flooring Removal',
      description: 'Handles carpet, hardwood, tile, or laminate removal from 500-1,000 square feet of space.',
      icon: '🏠'
    },
    {
      title: 'Small Deck Removal',
      description: 'Ideal for teardown of 200-300 sq ft decks or small outdoor structures.',
      icon: '🔨'
    },
    {
      title: 'Garage Cleanouts',
      description: 'Great for clearing accumulated junk, old furniture, boxes, and miscellaneous items from a single-car garage.',
      icon: '🚗'
    },
    {
      title: 'Kitchen Remodels (Partial)',
      description: 'Suitable for cabinet removal, countertop demo, and appliance disposal in partial kitchen updates.',
      icon: '🍳'
    },
    {
      title: 'Yard Debris',
      description: 'Handles branches, shrub removal, and moderate landscaping cleanup projects.',
      icon: '🌳'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Projects for a 15 Yard Dumpster in {city.city}</h2>
        <p className="text-gray-700 mb-8">
          A 15 yard dumpster strikes the perfect balance between capacity and footprint. Here are the most common uses
          we see from {city.city} homeowners and contractors:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-3">{proj.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{proj.title}</h3>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatFitsBlock({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>What Fits in a 15 Yard Dumpster?</h2>
        <p>
          To help you visualize capacity, here's what typically fits in a 15 yard container for {city.city} projects:
        </p>
        <ul>
          <li><strong>Bathroom remodel debris:</strong> Complete tear-out including tub, vanity, toilet, tile, drywall, and fixtures</li>
          <li><strong>Flooring materials:</strong> 800-1,000 square feet of carpet, tile, hardwood, or vinyl</li>
          <li><strong>Furniture and junk:</strong> 6-8 large furniture pieces plus boxes and miscellaneous household items</li>
          <li><strong>Deck/fence material:</strong> Approximately 200-300 square feet of decking or 150 linear feet of fence</li>
          <li><strong>Yard waste:</strong> Brush, branches (under 6" diameter), and debris from moderate landscaping</li>
          <li><strong>Roofing shingles:</strong> About 15-20 squares (1,500-2,000 sq ft) of asphalt shingles, single layer</li>
        </ul>
        <h3>Loading Tips for {city.city} Residents</h3>
        <p>
          Maximize your 15 yard dumpster efficiency by breaking down large items, loading heavy materials first, and
          distributing weight evenly. Fill to the top rail but never above—overloaded containers cannot be legally transported
          on {city.city} roads. If you're working with heavy materials like concrete, tile, or dirt, ask us about weight limits
          to avoid overage fees.
        </p>
      </div>
    </section>
  )
}

function LocalContext({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>Renting a 15 Yard Dumpster in {city.city}: What to Expect</h2>
        <p>
          We've streamlined 15 yard dumpster delivery across {city.city} to make your mid-sized project as smooth as possible.
          Our service area includes {city.neighborhoods_served?.slice(0, 3).join(', ')}, and throughout {city.county} County.
          Most deliveries arrive within {city.avg_delivery_eta_hours || 4} hours when ordered before our {to12h(city.cutoff_time)} cutoff,
          and same-day service is frequently available.
        </p>
        <p>
          Your debris will be disposed of at approved facilities such as {city.transfer_station_name || 'the local transfer station'}
          {city.transfer_station_address ? ` located at ${city.transfer_station_address}` : ''}. {city.disallowed_items_deltas || 'We cannot accept liquids, hazardous waste, electronics, or tires in mixed loads.'} If you have specialty materials,
          call us before booking—we can often arrange separate disposal or direct you to appropriate recycling centers.
        </p>

        <h3>15 Yard Placement & Access in {city.city}</h3>
        <p>
          A 15 yard dumpster requires approximately 35-40 feet of linear space and 20-25 feet of overhead clearance for safe
          delivery and pickup. Driveways, side yards, and front curbs are all common placements in {city.city}.
          {city.permit_required ? ' Street placement may require a right-of-way permit from the city. ' : ' Driveway placements typically do not require permits. '}
          {city.permit_url ? (
            <>
              Review the latest guidance on the{' '}
              <a href={city.permit_url} rel="nofollow" target="_blank">
                official {city.city} permit page
              </a>
              .
            </>
          ) : (
            'Always confirm permit requirements with the city before delivery.'
          )}
        </p>

        <h3>Seasonal Considerations for {city.city}</h3>
        <p>
          {city.busy_seasons_events || 'Spring cleanups, summer remodels, and fall yard work drive peak demand in the area.'}
          {' '}Booking a day ahead during busy seasons ensures you get your preferred delivery window. In winter, we monitor
          weather and coordinate safe placement and pickup. {city.winter_notes || 'We use plywood boards under the wheels to prevent damage on cold, brittle asphalt or when snow is present.'}
        </p>

        <h3>HOA Guidelines</h3>
        <p>
          {city.hoa_common_rule || 'Many HOAs in the area ask for advance notice when a dumpster will be visible from the street. We can help suggest placements that minimize visual impact and comply with community rules.'}
          {' '}If your HOA has specific requirements, let us know—we're experienced working within community guidelines.
        </p>
      </div>
    </section>
  )
}

function SizeComparisonBlock({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">15 Yard vs. Other Dumpster Sizes</h2>
        <p className="text-gray-700 mb-8">
          Not sure if 15 yards is right for your {city.city} project? Here's how it compares to our other sizes:
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Dimensions</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Capacity</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr className="bg-blue-50">
                <td className="px-4 py-4 text-gray-900 font-bold">15 Yard</td>
                <td className="px-4 py-4 text-gray-700">16' × 7.5' × 4.5'</td>
                <td className="px-4 py-4 text-gray-700">6-7 truck loads</td>
                <td className="px-4 py-4 text-gray-700">Bathroom remodels, flooring, garage cleanouts</td>
                <td className="px-4 py-4 text-right">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    You're here
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-gray-900 font-medium">
                  <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/20-yard-dumpster`} className="text-blue-600 hover:underline">
                    20 Yard
                  </Link>
                </td>
                <td className="px-4 py-4 text-gray-700">17.08' × 7.54' × 5'</td>
                <td className="px-4 py-4 text-gray-700">8-10 truck loads</td>
                <td className="px-4 py-4 text-gray-700">Kitchen remodels, roofing, medium construction</td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/20-yard-dumpster`}
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    View 20 Yard
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-gray-900 font-medium">
                  <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/30-yard-dumpster`} className="text-blue-600 hover:underline">
                    30 Yard
                  </Link>
                </td>
                <td className="px-4 py-4 text-gray-700">18.25' × 7.25' × 6.63'</td>
                <td className="px-4 py-4 text-gray-700">12-15 truck loads</td>
                <td className="px-4 py-4 text-gray-700">Whole-home cleanouts, large construction projects</td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/30-yard-dumpster`}
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    View 30 Yard
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Need help choosing?</strong> Call us at{' '}
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="text-blue-600 hover:underline">
              {city.phone_cta || BRAND.telephone}
            </a>
            {' '}or try our{' '}
            <Link href="/calculator/volume" className="text-blue-600 hover:underline">
              volume calculator
            </Link>
            {' '}to estimate which size fits your project best.
          </p>
        </div>
      </div>
    </section>
  )
}

function ResourcesBlock({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources for {city.city} Residents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/blog/15-yard-dumpster-complete-guide"
            className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="text-blue-600 font-semibold mb-2">Complete Guide</div>
            <h3 className="font-bold text-gray-900 mb-2">15 Yard Dumpster Guide</h3>
            <p className="text-sm text-gray-700">
              Everything you need to know about 15 yard dumpsters: sizing, pricing, projects, and tips.
            </p>
          </a>
          <a
            href="/calculator/volume"
            className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="text-blue-600 font-semibold mb-2">Volume Calculator</div>
            <h3 className="font-bold text-gray-900 mb-2">Estimate Your Needs</h3>
            <p className="text-sm text-gray-700">
              Enter your project details to calculate the right dumpster size for your {city.city} job.
            </p>
          </a>
          <Link
            href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}`}
            className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="text-blue-600 font-semibold mb-2">Main City Page</div>
            <h3 className="font-bold text-gray-900 mb-2">{city.city} Dumpster Rentals</h3>
            <p className="text-sm text-gray-700">
              View all dumpster sizes, local pricing, and service details for {city.city}.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

function to12h(t?: string) {
  if (!t) return '3:00 PM'
  if (/\b(am|pm)\b/i.test(t)) {
    const m = t.match(/^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i)
    if (m) return `${Number(m[1])}:${m[2]} ${m[3].toUpperCase()}`
    return t.replace(/\b(am|pm)\b/i, (s) => s.toUpperCase())
  }
  const m = t.match(/^(\d{1,2}):(\d{2})$/)
  if (!m) return t
  let h = parseInt(m[1], 10)
  const min = m[2]
  const suffix = h >= 12 ? 'PM' : 'AM'
  if (h === 0) h = 12
  else if (h > 12) h -= 12
  return `${h}:${min} ${suffix}`
}

function buildFaq(city: CityData) {
  const base: { question: string; answer: string }[] = []
  const q = (question: string, answer: string) => base.push({ question, answer })

  // 15-yard specific FAQs
  q(`How much does a 15 yard dumpster cost in ${city.city}?`, `A 15 yard dumpster typically costs $350-$450 in ${city.city}, including delivery, pickup, disposal, and 2-3 tons of weight. Final pricing depends on your location, debris type, and rental duration.`)
  q('What are the dimensions of a 15 yard dumpster?', 'A 15 yard dumpster measures approximately 16 feet long × 7.5 feet wide × 4.5 feet high. It holds about 6-7 pickup truck loads of material.')
  q('Is a 15 yard dumpster big enough for a bathroom remodel?', 'Yes, a 15 yard dumpster is ideal for a full bathroom remodel including tub, vanity, toilet, tile, and all demolition debris.')
  q(`How quickly can I get a 15 yard dumpster in ${city.city}?`, `Most 15 yard dumpster deliveries in ${city.city} arrive within ${city.avg_delivery_eta_hours || 4} hours when ordered before ${to12h(city.cutoff_time)}. Same-day service is often available.`)
  q('How much flooring can fit in a 15 yard dumpster?', 'A 15 yard dumpster can typically hold 800-1,000 square feet of carpet, tile, hardwood, or vinyl flooring material.')
  q('Can I use a 15 yard dumpster for roofing shingles?', 'Yes, but with limitations. A 15 yard dumpster can hold approximately 15-20 squares (1,500-2,000 sq ft) of single-layer asphalt shingles. Watch weight limits carefully.')
  q('What cannot go in a 15 yard dumpster?', city.disallowed_items_deltas || 'No liquids, paints, oils, hazardous waste, electronics, tires, or batteries. Concrete and dirt require special containers.')
  q('How much space do I need for a 15 yard dumpster?', 'You need approximately 35-40 feet of linear space and 20-25 feet of overhead clearance for safe delivery and pickup of a 15 yard dumpster.')
  q(`Do I need a permit for a 15 yard dumpster in ${city.city}?`, city.permit_required ? `Street placement may require a right-of-way permit from ${city.city}. Driveway placements typically do not require permits.` : `Driveway placements usually do not require permits in ${city.city}. Check local rules for street placements.`)
  q('How long can I keep a 15 yard dumpster?', 'Standard rental includes several days; extensions are available for a daily fee. Let us know your timeline when booking.')
  q('Can I fit kitchen cabinets in a 15 yard dumpster?', 'Yes, a 15 yard dumpster can handle a full set of kitchen cabinets plus countertops. Break down larger pieces to maximize space.')
  q('What if my 15 yard dumpster is too small?', 'Call us for a swap. We can deliver a larger 20 or 30 yard dumpster and remove the full 15 yard container.')
  q('Can I load a 15 yard dumpster with concrete?', 'Heavy materials like concrete should go in dedicated containers with lower fill heights. A 15 yard bin would exceed road weight limits if filled with concrete.')
  q('How high can I fill a 15 yard dumpster?', 'Load to the top rail but never above. Materials sticking above the rim cannot be safely tarped and transported.')
  q('Will a 15 yard dumpster fit in my driveway?', 'Most driveways can accommodate a 15 yard dumpster (16 ft long). Send us a photo if you have concerns about tight access.')
  q(`Where does debris from ${city.city} go?`, `We use approved facilities such as ${city.transfer_station_name || 'the local transfer station'}${city.transfer_station_address ? ` at ${city.transfer_station_address}` : ''}. Restrictions may apply to certain materials.`)
  q('Can I share a 15 yard dumpster with my neighbor?', 'Yes, as long as you stay within weight and volume limits and agree on placement location.')
  q('Do you deliver 15 yard dumpsters on weekends?', 'Yes, Saturday deliveries are available. Sunday service is limited to special circumstances.')
  q('Can you place a 15 yard dumpster on the street?', 'Often yes, but it may require a city right-of-way permit and adequate traffic visibility.')
  q('Will the 15 yard dumpster damage my driveway?', 'We place protective boards to distribute weight and prevent damage to asphalt or concrete driveways.')

  // General city FAQs
  q(`What areas do you serve in ${city.city}?`, `We deliver 15 yard dumpsters throughout ${city.city}, including ${city.neighborhoods_served?.slice(0,3).join(', ')} and all ${city.primary_zips?.join(', ')} ZIP codes.`)
  q('What payment methods do you accept?', 'We accept major credit cards and offer business accounts upon approval. Invoicing available for contractors.')
  q('How do I schedule a pickup?', 'Text or call when you\'re ready for pickup. We often retrieve the same day or next morning.')
  q('Do you recycle materials?', 'Where facilities allow, we route clean loads such as green waste or metal to suitable recyclers.')
  q('Can I move the dumpster after it\'s delivered?', 'Please do not move containers yourself. Call us to reposition safely.')
  q('What if I finish my project early?', 'Contact us for early pickup—we often retrieve same day or next morning.')
  q('Do you offer contractor pricing?', 'Yes, frequent users can get negotiated rates. Ask our team about contractor accounts.')
  q('What if it snows during my rental?', city.winter_notes || 'We coordinate around storms, use chocks on inclines, and may adjust pickup windows for safety.')
  q('Can I put appliances in a 15 yard dumpster?', 'Yes, but surcharges may apply depending on disposal facility fees.')
  q('Can I put mattresses in the dumpster?', 'Most facilities accept mattresses with a handling fee; mention them when booking.')
  q('Will the driver call before arrival?', 'We can call or text before arrival—note your preference when booking.')
  q('How do I prepare for dumpster delivery?', 'Clear vehicles, move bins/cans, and mark any sprinklers or utilities in the placement zone.')
  q('What if my HOA complains?', city.hoa_common_rule || 'We can relocate promptly or schedule pickups to comply. Ask us for HOA-friendly placement ideas.')
  q('Is weight included in the price?', 'Yes, each 15 yard dumpster includes 2-3 tons of weight allowance. We\'ll quote included tonnage up front.')
  q('How do I avoid overweight fees?', 'Choose the right size, keep out prohibited/soaked materials, and avoid overloading with heavy debris like tile or concrete.')
  q('Can you place a dumpster on gravel?', 'Yes, packed gravel is generally fine. We avoid soft lawns without protection.')
  q('What about narrow alley placements?', 'Case-by-case: width, overhead, and turning radius matter. Send a photo—we can advise.')
  q('Can I lock the 15 yard dumpster?', 'Locking lids are not standard on roll-offs; however, location choices can reduce unauthorized use.')
  q('Do you place boards under the dumpster?', 'Yes, we use boards to protect driveways where appropriate. Rubber pads available by request.')
  q('Can I book online?', 'Yes, request a quote online or call us to confirm details and delivery window.')
  q('What time do you pick up dumpsters?', 'We route pickups by area. If you have a gate or access window, let us know to coordinate.')
  q('Do you serve businesses and contractors?', 'Yes—retail fit-outs, office cleanouts, light industrial, and residential construction.')
  q('How far in advance should I book?', 'Same-day is often available, but booking a day ahead during busy seasons guarantees your preferred window.')
  q('Can I extend my rental period?', 'Yes, daily extensions are available. Let us know early to reserve the slot.')
  q('What happens if I overload the dumpster?', 'Overloaded containers cannot be legally transported. We may need to remove excess before hauling.')
  q('Are there height restrictions?', 'Avoid low tree branches and carports. 20-25 feet of vertical clearance is recommended.')
  q('Can I get a discount for multiple dumpsters?', 'Ask about project pricing if you need multiple containers or expect several swap-outs.')

  // Ensure at least 46 FAQs
  while (base.length < 46) {
    base.push({ question: `15 yard dumpster question ${base.length + 1}?`, answer: 'Contact us for details—we are happy to help with your specific situation.' })
  }
  return base
}

export default async function FifteenYardPage({ params }: PageProps) {
  const city = getCityData(params.city)
  if (!city) return null
  const faq = buildFaq(city)
  const ld = buildAllLD(BRAND, city, faq)

  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      {ld.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}

      <Intro city={city} />
      <SpecsBlock city={city} />
      <BestProjectsBlock city={city} />
      <WhatFitsBlock city={city} />
      <LocalContext city={city} />
      <SizeComparisonBlock city={city} />
      <PermitBlock city={city} />
      <DisposalBlock city={city} />
      <Neighborhoods city={city} />
      <ResourcesBlock city={city} />
      <Testimonials city={city} />
      <FAQ items={faq} />
      <NearbyCities city={city} />
      <section className="py-10 bg-white">
        <div className="container-custom text-sm text-gray-600">
          Looking for more sizes? View our{' '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}`} className="text-blue-600 hover:underline">
            main {city.city} dumpster rental page
          </Link>
          {' '}or explore all{' '}
          <a href="/ut/service-areas" className="text-blue-600 hover:underline">
            Utah service areas
          </a>
          .
        </div>
      </section>
      <CTA city={city} />
    </main>
  )
}
