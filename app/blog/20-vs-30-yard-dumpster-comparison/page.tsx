import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Scale, CheckCircle } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: '20 vs 30 Yard Dumpster: Which Size for Your Project? | TNT Dumpsters',
  description: 'Compare 20 vs 30 yard dumpsters: dimensions, capacity, cost, and best uses. Learn which size fits kitchen remodels, roof tear-offs, and large renovations. Expert comparison for Utah projects.',
  keywords: '20 vs 30 yard dumpster, 20 yard vs 30 yard, medium dumpster comparison, kitchen remodel dumpster, roof tear-off dumpster, utah dumpster rental',
}

export default function TwentyVsThirtyYardComparisonPage() {
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Size Comparison
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              20 vs 30 Yard Dumpster: Which Size for Your Project?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive comparison of 20-yard and 30-yard dumpsters: dimensions, capacity, cost differences, weight limits, and project recommendations for medium to large renovations and cleanouts.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 21, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="20 vs 30 yard dumpster comparison for medium to large projects" fill className="object-cover" />
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
                "headline": "20 vs 30 Yard Dumpster: Which Size for Your Project?",
                "description": metadata.description,
                "datePublished": "2025-01-21", "dateModified": "2025-01-21",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/20-vs-30-yard-dumpster-comparison" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Choose a <strong>20-yard dumpster</strong> for kitchen remodels, medium roof tear-offs, or multi-room renovations (8-10 truck loads). Choose a <strong>30-yard dumpster</strong> for large roof replacements, whole-house cleanouts, or major renovations (12-15 truck loads). The 30-yard costs about $100-$150 more but provides 50% more capacity.
                </p>
              </div>

              <h2>20 vs 30 Yard: Understanding the Capacity Difference</h2>
              <p>The 20-yard and 30-yard dumpsters are the two most popular sizes for medium to large residential projects. The 20-yard is Utah's most popular size, handling most kitchen remodels and medium roof projects. The 30-yard provides 50% more capacity, making it ideal for large roof replacements, whole-house cleanouts, or major renovations.</p>

              <h2>Side-by-Side Comparison</h2>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">20 Yard</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">30 Yard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-semibold">Length</td><td className="border border-gray-300 px-4 py-3 text-center">22 feet</td><td className="border border-gray-300 px-4 py-3 text-center">22 feet</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-semibold">Width</td><td className="border border-gray-300 px-4 py-3 text-center">7.5 feet</td><td className="border border-gray-300 px-4 py-3 text-center">7.5 feet</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-semibold">Height</td><td className="border border-gray-300 px-4 py-3 text-center">4.5 feet</td><td className="border border-gray-300 px-4 py-3 text-center">6 feet</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-semibold">Capacity</td><td className="border border-gray-300 px-4 py-3 text-center">8-10 truck loads</td><td className="border border-gray-300 px-4 py-3 text-center">12-15 truck loads</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-semibold">Weight Limit</td><td className="border border-gray-300 px-4 py-3 text-center">2-3 tons</td><td className="border border-gray-300 px-4 py-3 text-center">4-5 tons</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-semibold">Cost Range</td><td className="border border-gray-300 px-4 py-3 text-center">$400-$500</td><td className="border border-gray-300 px-4 py-3 text-center">$500-$650</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>When to Choose a 20-Yard Dumpster</h2>
              <p>The 20-yard dumpster is perfect for medium-sized projects. Best use cases include:</p>
              <ul>
                <li><strong>Kitchen remodels:</strong> Cabinet removal, countertop disposal, appliance removal</li>
                <li><strong>Medium roof tear-offs:</strong> 20-30 square roofs, single-story homes</li>
                <li><strong>Multi-room renovations:</strong> 2-3 room updates or whole-house painting prep</li>
                <li><strong>Medium cleanouts:</strong> Full garage, basement, or estate preparation</li>
                <li><strong>Moderate debris:</strong> Projects generating 8-10 pickup truck loads</li>
              </ul>

              <h2>When to Choose a 30-Yard Dumpster</h2>
              <p>The 30-yard dumpster offers maximum capacity for large residential projects. Choose this size for:</p>
              <ul>
                <li><strong>Large roof replacements:</strong> 30+ square roofs, two-story homes, commercial roofs</li>
                <li><strong>Whole-house cleanouts:</strong> Complete estate cleanouts or major decluttering</li>
                <li><strong>Major renovations:</strong> Whole-house remodels or multiple room gut renovations</li>
                <li><strong>Heavy debris:</strong> Projects with significant construction materials or demolition</li>
                <li><strong>Large capacity needs:</strong> Projects generating 12-15 pickup truck loads</li>
              </ul>

              <h2>Cost Comparison: Value Analysis</h2>
              <p>The 30-yard dumpster typically costs $100-$150 more than a 20-yard, but provides 50% more capacity and higher weight limits. This makes it a smart investment for large projects because:</p>
              <ul>
                <li><strong>Higher weight capacity:</strong> Handles heavy roofing materials without overage fees</li>
                <li><strong>Better value:</strong> More capacity per dollar for large projects</li>
                <li><strong>Project flexibility:</strong> Extra space for unexpected debris or project extensions</li>
                <li><strong>Single container:</strong> Avoid multiple pickups or additional dumpster rentals</li>
              </ul>

              <h2>Real-World Project Examples</h2>
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">20-Yard Success Stories</h3>
                <ul className="space-y-2">
                  <li>✓ Full kitchen remodel (cabinets, countertops, appliances)</li>
                  <li>✓ 25-square roof tear-off on single-story home</li>
                  <li>✓ Three-room renovation (bedroom, bathroom, office)</li>
                  <li>✓ Complete garage and basement cleanout</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">30-Yard Success Stories</h3>
                <ul className="space-y-2">
                  <li>✓ 40-square roof replacement on two-story home</li>
                  <li>✓ Whole-house estate cleanout (furniture, appliances, debris)</li>
                  <li>✓ Major home renovation (multiple rooms gut renovation)</li>
                  <li>✓ Large commercial roof tear-off project</li>
                </ul>
              </div>

              <h2>Making the Right Choice</h2>
              <p>When deciding between a 20-yard and 30-yard dumpster, consider your project scope, debris volume, and weight requirements. For roof projects, the 30-yard is often necessary due to weight limits. For kitchen remodels and medium cleanouts, the 20-yard is usually sufficient. When in doubt, size up to avoid overage fees.</p>
              <p>For expert guidance on choosing the right dumpster size for your specific project, use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/services/roofing-dumpster-rental" className="text-blue-600 hover:underline font-semibold">roofing dumpster rental service</a> or <a href="/services/kitchen-remodel-dumpster" className="text-blue-600 hover:underline font-semibold">kitchen remodel dumpster service</a> for project-specific guidance.</p>

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
              <li><Link href="/blog/20-yard-dumpster-complete-guide" className="text-blue-600 hover:text-blue-700">20 Yard Dumpster: The Complete Guide to Utah's Most Popular Size</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/dumpster-rental-prices-by-size" className="text-blue-600 hover:text-blue-700">Dumpster Rental Prices by Size: Complete Cost Comparison 2025</Link></li>
              <li><Link href="/blog/10-vs-15-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">10 vs 15 Yard Dumpster: Which Size Do You Need?</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing Between 20 and 30 Yards?</h2>
            <p className="text-blue-100 mb-8">Get expert guidance on selecting the right dumpster size for your kitchen remodel, roof replacement, or large renovation project.</p>
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

