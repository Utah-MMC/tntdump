import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Wrench, CheckCircle } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Bathroom Remodel Dumpster Guide: Size, Cost & What Fits | TNT Dumpsters',
  description: 'Complete guide to dumpster rental for bathroom remodels. Learn which size you need, what debris fits, cost estimates, weight considerations, and money-saving tips for your bathroom renovation in Utah.',
  keywords: 'bathroom remodel dumpster, bathroom renovation dumpster, bathroom demolition dumpster, small dumpster rental, utah dumpster rental',
}

export default function BathroomRemodelDumpsterGuidePage() {
  return (
    <main className="min-h-screen">
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Project Guide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bathroom Remodel Dumpster Guide: Size, Cost & What Fits</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guide to choosing the right dumpster for your bathroom remodel. Learn which size fits your project, what materials you can dispose of, cost estimates, and pro tips to save money on your bathroom renovation.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 22, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Bathroom remodel dumpster rental guide" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "BlogPosting",
                "headline": "Bathroom Remodel Dumpster Guide: Size, Cost & What Fits",
                "description": metadata.description,
                "datePublished": "2025-01-22", "dateModified": "2025-01-22",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/bathroom-remodel-dumpster-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Most bathroom remodels need a <strong>10-yard or 15-yard dumpster</strong> ($300-$450). A 10-yard fits single bathroom remodels with minimal debris. A 15-yard fits larger bathrooms or full gut renovations. Typical debris includes toilets, vanities, tile, drywall, and fixtures.
                </p>
              </div>

              <h2>Choosing the Right Dumpster Size for Your Bathroom Remodel</h2>
              <p>Bathroom remodels generate moderate amounts of debris, making them perfect for smaller dumpster sizes. The size you need depends on your bathroom size, renovation scope, and whether you're doing a full gut or partial update.</p>

              <h3>10-Yard Dumpster for Small Bathrooms</h3>
              <p>A 10-yard dumpster is perfect for small bathroom remodels (under 50 square feet) with minimal demolition. This size fits:</p>
              <ul>
                <li>Single bathroom updates (toilet, vanity, mirror replacement)</li>
                <li>Tile removal from floor or shower</li>
                <li>Minimal drywall removal</li>
                <li>Fixture and hardware disposal</li>
              </ul>

              <h3>15-Yard Dumpster for Medium to Large Bathrooms</h3>
              <p>A 15-yard dumpster is ideal for larger bathrooms or full gut renovations. This size fits:</p>
              <ul>
                <li>Full bathroom gut renovations</li>
                <li>Large bathroom remodels (50+ square feet)</li>
                <li>Multiple fixture replacements</li>
                <li>Extensive tile and drywall removal</li>
                <li>Subfloor replacement debris</li>
              </ul>

              <h2>What Goes in Your Bathroom Remodel Dumpster</h2>
              <p>Most bathroom renovation materials can go in your dumpster. Here's what fits:</p>
              <ul>
                <li><strong>Fixtures:</strong> Toilets, vanities, sinks, bathtubs, showers</li>
                <li><strong>Tile and flooring:</strong> Ceramic tile, vinyl flooring, subfloor materials</li>
                <li><strong>Drywall:</strong> Removed walls, damaged drywall, backing materials</li>
                <li><strong>Plumbing:</strong> Old pipes, fittings, water heaters (if applicable)</li>
                <li><strong>Construction debris:</strong> Wood framing, insulation, backing materials</li>
              </ul>

              <h2>What Cannot Go in Your Dumpster</h2>
              <p>Some bathroom materials require special disposal:</p>
              <ul>
                <li><strong>Hazardous materials:</strong> Paint, chemicals, solvents, adhesives</li>
                <li><strong>Asbestos:</strong> If your home was built before 1980, test for asbestos</li>
                <li><strong>Medical waste:</strong> Medications, sharps, medical equipment</li>
                <li><strong>Electronics:</strong> Light fixtures with ballasts, smart mirrors</li>
              </ul>

              <h2>Cost Estimates for Bathroom Remodel Dumpsters</h2>
              <p>Bathroom remodel dumpster costs vary by size and location:</p>
              <ul>
                <li><strong>10-yard dumpster:</strong> $300-$400 (small bathrooms, minimal debris)</li>
                <li><strong>15-yard dumpster:</strong> $350-$450 (medium to large bathrooms, full gut)</li>
              </ul>
              <p>Costs include delivery, pickup, and disposal fees. Additional charges may apply for weight overages or extended rental periods.</p>

              <h2>Weight Considerations</h2>
              <p>Bathroom debris is typically moderate weight. Toilets and tile can be heavy, but most bathroom remodels stay within standard weight limits:</p>
              <ul>
                <li><strong>10-yard dumpster:</strong> 2-ton weight limit (usually sufficient)</li>
                <li><strong>15-yard dumpster:</strong> 2-3 ton weight limit (plenty for most projects)</li>
              </ul>

              <h2>Money-Saving Tips</h2>
              <ul>
                <li><strong>Choose the right size:</strong> Don't over-size for small bathrooms</li>
                <li><strong>Plan your timeline:</strong> Standard rental periods (7-14 days) are most cost-effective</li>
                <li><strong>Separate recyclables:</strong> Some materials may be recyclable, reducing disposal costs</li>
                <li><strong>Schedule efficiently:</strong> Have dumpster delivered when demolition begins</li>
              </ul>

              <h2>Timeline Planning</h2>
              <p>Most bathroom remodels take 1-2 weeks, making standard rental periods perfect. Schedule your dumpster delivery:</p>
              <ul>
                <li><strong>Before demolition:</strong> Have dumpster on-site when you start</li>
                <li><strong>During renovation:</strong> Fill as you work to keep the job site clean</li>
                <li><strong>Before completion:</strong> Schedule pickup when renovation is complete</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to start your bathroom remodel? Get the right dumpster size for your project. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/dumpsters/residential" className="text-blue-600 hover:underline font-semibold">residential dumpster rentals</a> or learn more about <a href="/services" className="text-blue-600 hover:underline font-semibold">our services</a> for your bathroom renovation.</p>

              <ServingCityEnhancer />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li><Link href="/blog/kitchen-remodel-dumpster-guide" className="text-blue-600 hover:text-blue-700">Kitchen Remodel Dumpster: Size Guide, Costs & What Fits</Link></li>
              <li><Link href="/blog/10-vs-15-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">10 vs 15 Yard Dumpster: Which Size Do You Need?</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-700">Home Renovation Dumpster Guide: Complete Planning Guide</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Bathroom Remodel?</h2>
            <p className="text-blue-100 mb-8">Get the perfect dumpster size for your bathroom renovation. Same-day delivery available throughout Utah.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8012099013" className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">Call (801) 209-9013</a>
              <a href="/quote" className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

