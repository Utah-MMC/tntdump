import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Leaf, CheckCircle } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Yard Waste Dumpster Guide: Size, Cost & Disposal Tips | TNT Dumpsters',
  description: 'Complete guide to dumpster rental for yard waste removal. Learn which size you need, what yard materials fit, cost estimates, seasonal tips, and disposal guidelines for yard cleanup in Utah.',
  keywords: 'yard waste dumpster, yard cleanup dumpster, yard debris removal, landscaping waste dumpster, yard waste disposal, utah dumpster rental',
}

export default function YardWasteDumpsterGuidePage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Yard Waste Dumpster Guide: Size, Cost & Disposal Tips</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guide to choosing the right dumpster for yard waste removal. Learn which size fits your yard cleanup, what materials you can dispose of, cost estimates, and seasonal tips for efficient yard waste disposal.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 25, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Yard waste dumpster rental guide" fill className="object-cover" />
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
                "headline": "Yard Waste Dumpster Guide: Size, Cost & Disposal Tips",
                "description": metadata.description,
                "datePublished": "2025-01-25", "dateModified": "2025-01-25",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/yard-waste-dumpster-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Most yard waste cleanups need a <strong>15-yard or 20-yard dumpster</strong> ($350-$500). Small yards use 15-yard containers. Large yards or major landscaping projects need 20-yard dumpsters. Yard waste is light but bulky, so volume matters more than weight.
                </p>
              </div>

              <h2>Choosing the Right Dumpster Size for Yard Waste</h2>
              <p>Yard waste removal requires dumpsters that can handle bulky but lightweight materials. The size you need depends on your yard size, cleanup scope, and whether you're doing seasonal cleanup or major landscaping.</p>

              <h3>15-Yard Dumpster for Small to Medium Yards</h3>
              <p>A 15-yard dumpster fits small to medium yard cleanups. This size works for:</p>
              <ul>
                <li>Seasonal yard cleanup (spring or fall)</li>
                <li>Small to medium yard sizes (under 0.5 acres)</li>
                <li>Tree trimming and branch removal</li>
                <li>Garden bed cleanup and preparation</li>
              </ul>

              <h3>20-Yard Dumpster for Large Yards or Major Projects</h3>
              <p>A 20-yard dumpster is ideal for large yards or major landscaping projects. This size fits:</p>
              <ul>
                <li>Large yard cleanups (0.5+ acres)</li>
                <li>Major landscaping projects</li>
                <li>Tree removal and disposal</li>
                <li>Multiple yard cleanup projects</li>
              </ul>

              <h2>What Goes in Your Yard Waste Dumpster</h2>
              <p>Most yard waste materials can go in your dumpster. Here's what fits:</p>
              <ul>
                <li><strong>Leaves and grass:</strong> Raked leaves, grass clippings, yard trimmings</li>
                <li><strong>Branches and twigs:</strong> Tree branches, shrub trimmings, small logs</li>
                <li><strong>Garden waste:</strong> Dead plants, weeds, garden debris</li>
                <li><strong>Dirt and soil:</strong> Small amounts of clean dirt (check weight limits)</li>
                <li><strong>Mulch and bark:</strong> Old mulch, bark chips, wood chips</li>
              </ul>

              <h2>What Cannot Go in Your Yard Waste Dumpster</h2>
              <p>Some yard materials require special disposal:</p>
              <ul>
                <li><strong>Large tree stumps:</strong> May require special disposal or additional fees</li>
                <li><strong>Rocks and concrete:</strong> Heavy materials may affect weight limits</li>
                <li><strong>Chemicals:</strong> Pesticides, fertilizers, treated wood</li>
                <li><strong>Animal waste:</strong> Pet waste, manure (if in large quantities)</li>
              </ul>

              <h2>Cost Estimates for Yard Waste Dumpsters</h2>
              <p>Yard waste dumpster costs vary by size:</p>
              <ul>
                <li><strong>15-yard dumpster:</strong> $350-$450 (small to medium yards)</li>
                <li><strong>20-yard dumpster:</strong> $400-$500 (large yards or major projects)</li>
              </ul>
              <p>Costs include delivery, pickup, and disposal. Yard waste is typically light, so weight overages are rare.</p>

              <h2>Seasonal Yard Waste Tips</h2>
              <ul>
                <li><strong>Spring cleanup:</strong> Schedule dumpster for major spring yard preparation</li>
                <li><strong>Fall cleanup:</strong> Plan for leaf removal and winter preparation</li>
                <li><strong>Summer projects:</strong> Coordinate with landscaping or tree removal projects</li>
                <li><strong>Bundle branches:</strong> Tie branches together to maximize space</li>
                <li><strong>Fill efficiently:</strong> Pack leaves and grass to maximize capacity</li>
              </ul>

              <h2>Weight Considerations</h2>
              <p>Yard waste is typically light but bulky. Most yard waste projects stay well within weight limits:</p>
              <ul>
                <li><strong>15-yard dumpster:</strong> 2-3 ton limit (plenty for yard waste)</li>
                <li><strong>20-yard dumpster:</strong> 2-3 ton limit (sufficient for most projects)</li>
                <li><strong>Volume matters:</strong> Yard waste takes up space but isn't heavy</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to clean up your yard? Get the right dumpster size for your project. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/dumpsters/residential" className="text-blue-600 hover:underline font-semibold">residential dumpster rentals</a> or learn more about <a href="/services" className="text-blue-600 hover:underline font-semibold">our services</a> for yard cleanup projects.</p>

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
              <li><Link href="/blog/10-vs-15-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">10 vs 15 Yard Dumpster: Which Size Do You Need?</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/winter-dumpster-rental-tips" className="text-blue-600 hover:text-blue-700">Winter Dumpster Rental Tips for Cold Weather</Link></li>
              <li><Link href="/blog/dumpster-prohibited-items" className="text-blue-600 hover:text-blue-700">What Can and Cannot Go in a Dumpster</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Clean Up Your Yard?</h2>
            <p className="text-blue-100 mb-8">Get the right dumpster size for your yard waste removal. Fast delivery and competitive pricing throughout Utah.</p>
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

