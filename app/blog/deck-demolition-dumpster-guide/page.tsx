import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Hammer, CheckCircle } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Deck Demolition Dumpster Guide: Size, Cost & Disposal | TNT Dumpsters',
  description: 'Complete guide to dumpster rental for deck demolition. Learn which size you need, what materials fit, cost estimates, weight considerations, and tips for deck removal projects in Utah.',
  keywords: 'deck demolition dumpster, deck removal dumpster, deck tear-down dumpster, wood disposal dumpster, utah dumpster rental',
}

export default function DeckDemolitionDumpsterGuidePage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Deck Demolition Dumpster Guide: Size, Cost & Disposal</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guide to choosing the right dumpster for deck demolition. Learn which size fits your deck size, what materials you can dispose of, cost estimates, and pro tips for efficient deck removal.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 23, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Deck demolition dumpster rental guide" fill className="object-cover" />
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
                "headline": "Deck Demolition Dumpster Guide: Size, Cost & Disposal",
                "description": metadata.description,
                "datePublished": "2025-01-23", "dateModified": "2025-01-23",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/deck-demolition-dumpster-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Most deck demolitions need a <strong>15-yard or 20-yard dumpster</strong> ($350-$500). Small decks (under 200 sq ft) fit in 15-yard containers. Medium to large decks (200+ sq ft) need 20-yard dumpsters. Wood is bulky but relatively light, so volume matters more than weight.
                </p>
              </div>

              <h2>Choosing the Right Dumpster Size for Deck Demolition</h2>
              <p>Deck demolition generates bulky wood debris that takes up significant space. The size you need depends on your deck size, construction materials, and whether you're removing railings and stairs.</p>

              <h3>15-Yard Dumpster for Small Decks</h3>
              <p>A 15-yard dumpster fits small deck demolitions (under 200 square feet). This size works for:</p>
              <ul>
                <li>Small ground-level decks (10x10 to 12x16 feet)</li>
                <li>Minimal railings and stairs</li>
                <li>Standard wood construction</li>
                <li>Single-level decks</li>
              </ul>

              <h3>20-Yard Dumpster for Medium to Large Decks</h3>
              <p>A 20-yard dumpster is ideal for most deck demolitions (200+ square feet). This size fits:</p>
              <ul>
                <li>Medium to large decks (200-400 square feet)</li>
                <li>Multi-level decks with railings</li>
                <li>Decks with stairs and landings</li>
                <li>Composite or treated wood materials</li>
              </ul>

              <h2>What Goes in Your Deck Demolition Dumpster</h2>
              <p>Most deck materials can go in your dumpster. Here's what fits:</p>
              <ul>
                <li><strong>Wood decking:</strong> Planks, boards, railings, stairs</li>
                <li><strong>Support structures:</strong> Joists, beams, posts, footings</li>
                <li><strong>Hardware:</strong> Screws, nails, brackets, connectors</li>
                <li><strong>Composite materials:</strong> Composite decking, railings</li>
                <li><strong>Concrete footings:</strong> If broken into manageable pieces</li>
              </ul>

              <h2>Weight Considerations</h2>
              <p>Wood is relatively light but bulky. Deck demolition debris typically:</p>
              <ul>
                <li><strong>Volume matters more:</strong> Wood takes up space but isn't heavy</li>
                <li><strong>15-yard dumpster:</strong> 2-3 ton limit (usually sufficient)</li>
                <li><strong>20-yard dumpster:</strong> 2-3 ton limit (plenty for most decks)</li>
                <li><strong>Concrete footings:</strong> Heavy if included, may affect weight limits</li>
              </ul>

              <h2>Cost Estimates for Deck Demolition Dumpsters</h2>
              <p>Deck demolition dumpster costs vary by size:</p>
              <ul>
                <li><strong>15-yard dumpster:</strong> $350-$450 (small decks, minimal debris)</li>
                <li><strong>20-yard dumpster:</strong> $400-$500 (medium to large decks)</li>
              </ul>
              <p>Costs include delivery, pickup, and disposal. Additional charges may apply for extended rental periods or weight overages.</p>

              <h2>Deck Demolition Tips</h2>
              <ul>
                <li><strong>Disassemble carefully:</strong> Remove railings and stairs first to maximize space</li>
                <li><strong>Cut large pieces:</strong> Break down large boards to fit better</li>
                <li><strong>Remove hardware:</strong> Separate metal hardware if possible (may be recyclable)</li>
                <li><strong>Plan access:</strong> Ensure dumpster placement allows easy loading</li>
                <li><strong>Check for permits:</strong> Some areas require permits for deck demolition</li>
              </ul>

              <h2>Timeline Planning</h2>
              <p>Most deck demolitions take 1-3 days, making standard rental periods perfect. Schedule your dumpster:</p>
              <ul>
                <li><strong>Before demolition:</strong> Have dumpster on-site when you start</li>
                <li><strong>During removal:</strong> Fill as you work to keep the area clean</li>
                <li><strong>After completion:</strong> Schedule pickup when demolition is complete</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to remove your deck? Get the right dumpster size for your project. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Learn more about <a href="/dumpsters/residential" className="text-blue-600 hover:underline font-semibold">residential dumpster rentals</a> or explore our <a href="/services" className="text-blue-600 hover:underline font-semibold">complete service offerings</a>.</p>

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
              <li><Link href="/blog/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-700">Home Renovation Dumpster Guide: Complete Planning Guide</Link></li>
              <li><Link href="/blog/20-vs-30-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">20 vs 30 Yard Dumpster: Which Size for Your Project?</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/dumpster-prohibited-items" className="text-blue-600 hover:text-blue-700">What Can and Cannot Go in a Dumpster</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Remove Your Deck?</h2>
            <p className="text-blue-100 mb-8">Get the right dumpster size for your deck demolition. Fast delivery and competitive pricing throughout Utah.</p>
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

