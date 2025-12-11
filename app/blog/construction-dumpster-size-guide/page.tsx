import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Building, CheckCircle } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Construction Dumpster Size Guide: Choosing the Right Size | TNT Dumpsters',
  description: 'Complete guide to choosing construction dumpster sizes. Learn which size fits your construction project, weight considerations, cost estimates, and tips for construction waste management in Utah.',
  keywords: 'construction dumpster size, construction waste dumpster, contractor dumpster rental, construction debris disposal, commercial dumpster rental, utah dumpster rental',
}

export default function ConstructionDumpsterSizeGuidePage() {
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Size Guide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Construction Dumpster Size Guide: Choosing the Right Size</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive guide to choosing the right dumpster size for construction projects. Learn which size fits your project scope, weight considerations, cost estimates, and strategies for efficient construction waste management.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 26, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Construction dumpster size guide" fill className="object-cover" />
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
                "headline": "Construction Dumpster Size Guide: Choosing the Right Size",
                "description": metadata.description,
                "datePublished": "2025-01-26", "dateModified": "2025-01-26",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/construction-dumpster-size-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Construction projects typically need <strong>30-yard to 40-yard dumpsters</strong> ($500-$750). Small construction projects use 30-yard containers. Large construction or commercial projects need 40-yard dumpsters. Weight limits are critical for construction debris.
                </p>
              </div>

              <h2>Understanding Construction Dumpster Sizes</h2>
              <p>Construction projects generate significant amounts of heavy debris, making proper dumpster sizing essential. The size you need depends on your project scope, construction type, and debris weight.</p>

              <h3>30-Yard Dumpster for Small to Medium Construction</h3>
              <p>A 30-yard dumpster fits small to medium construction projects. This size works for:</p>
              <ul>
                <li>Small commercial renovations</li>
                <li>Residential construction projects</li>
                <li>Partial building demolition</li>
                <li>Medium-scale construction waste</li>
              </ul>

              <h3>40-Yard Dumpster for Large Construction Projects</h3>
              <p>A 40-yard dumpster is ideal for large construction or commercial projects. This size fits:</p>
              <ul>
                <li>Large commercial construction</li>
                <li>Full building demolition</li>
                <li>Major renovation projects</li>
                <li>Heavy construction debris</li>
              </ul>

              <h2>Construction Materials and Weight Considerations</h2>
              <p>Construction debris is typically heavy. Weight limits are critical:</p>
              <ul>
                <li><strong>Concrete and masonry:</strong> Very heavy, affects weight limits significantly</li>
                <li><strong>Metal and steel:</strong> Heavy materials requiring larger containers</li>
                <li><strong>Wood and lumber:</strong> Moderate weight, takes up space</li>
                <li><strong>Drywall and insulation:</strong> Light but bulky</li>
                <li><strong>Mixed debris:</strong> Combination of materials affects weight calculations</li>
              </ul>

              <h2>Cost Estimates for Construction Dumpsters</h2>
              <p>Construction dumpster costs vary by size and weight:</p>
              <ul>
                <li><strong>30-yard dumpster:</strong> $500-$650 (small to medium projects)</li>
                <li><strong>40-yard dumpster:</strong> $600-$750 (large or commercial projects)</li>
              </ul>
              <p>Weight overages are common with construction debris, so factor in potential additional costs.</p>

              <h2>Construction Waste Management Tips</h2>
              <ul>
                <li><strong>Separate materials:</strong> Sort recyclable materials to reduce disposal costs</li>
                <li><strong>Plan for weight:</strong> Account for heavy materials in size selection</li>
                <li><strong>Multiple pickups:</strong> Schedule regular pickups for extended projects</li>
                <li><strong>Coordinate timing:</strong> Have dumpster on-site when construction begins</li>
                <li><strong>Check permits:</strong> Ensure proper permits for construction dumpster placement</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to start your construction project? Get the right dumpster size for your construction waste. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/dumpsters/commercial" className="text-blue-600 hover:underline font-semibold">commercial dumpster rentals</a>, <a href="/dumpsters/industrial" className="text-blue-600 hover:underline font-semibold">industrial dumpster rentals</a>, or learn more about <a href="/blog/construction-waste-management" className="text-blue-600 hover:underline font-semibold">construction waste management</a>.</p>

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
              <li><Link href="/blog/construction-waste-management" className="text-blue-600 hover:text-blue-700">Construction Waste Management: Best Practices for Contractors</Link></li>
              <li><Link href="/blog/commercial-dumpster-rental-guide" className="text-blue-600 hover:text-blue-700">Commercial Dumpster Rental: Business Guide</Link></li>
              <li><Link href="/blog/20-vs-30-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">20 vs 30 Yard Dumpster: Which Size for Your Project?</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Construction Dumpster?</h2>
            <p className="text-blue-100 mb-8">Get the right dumpster size for your construction project. Flexible scheduling and competitive pricing for contractors.</p>
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

