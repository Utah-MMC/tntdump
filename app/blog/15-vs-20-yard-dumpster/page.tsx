import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Scale, DollarSign, CheckCircle, XCircle, TrendingUp } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'

export const metadata: Metadata = {
  title: '15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025',
  description: '15 yard vs 20 yard dumpster comparison: 15-yard holds 6-7 truck loads ($350-$450), 20-yard holds 8-10 loads ($400-$500). Learn capacity differences, cost analysis, and when to choose each size for maximum ROI on your renovation project.',
  keywords: '15 vs 20 yard dumpster, 15 yard or 20 yard dumpster, dumpster size comparison, 15 yard dumpster vs 20 yard, which dumpster size, dumpster rental comparison',
}

export default function FifteenVsTwentyYardDumpsterPage() {
  return (
    <main className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Size Guide
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              15 Yard vs 20 Yard Dumpster: Which Size Do You Need?
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Side-by-side comparison of 15 yard vs 20 yard dumpsters including capacity differences, cost analysis, weight limits, best projects for each size, and ROI calculations to help you choose the right dumpster for maximum value.
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>TNT Dumpsters Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 17, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/pexels-tomfisk-3181031.jpg"
                alt="15 yard vs 20 yard dumpster size comparison for home projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* BlogPosting JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "15 Yard vs 20 Yard Dumpster: Which Size Do You Need? 2025",
                    "description": metadata.description,
                    "datePublished": "2025-01-17",
                    "dateModified": "2025-01-17",
                    "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "TNT Dumpsters",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp",
                        "width": 176,
                        "height": 176
                      }
                    },
                    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/15-vs-20-yard-dumpster" },
                    "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
                  })
                }}
              />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  A <strong>15 yard dumpster</strong> holds 6-7 pickup truck loads and costs $350-$450 (ideal for bathrooms, flooring, small decks). A <strong>20 yard dumpster</strong> holds 8-10 truck loads and costs $400-$500 (ideal for kitchens, roofing, multi-room projects). The $50 difference makes a 20-yard the better value for projects with uncertain debris volume.
                </p>
              </div>

              <h2>15 Yard vs 20 Yard Dumpster: Side-by-Side Comparison</h2>
              <p>The choice between a 15 yard and 20 yard dumpster comes down to capacity needs and cost vs. convenience. Both sizes handle typical residential projects, but the differences matter when you're budgeting and planning. Here's the complete breakdown:</p>

              <div className="bg-gray-50 p-6 rounded-lg my-6 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Comparison Table</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600">15 Yard Dumpster</th>
                      <th className="text-left py-3 px-4 font-semibold text-green-600">20 Yard Dumpster</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Capacity</td>
                      <td className="py-3 px-4">15 cubic yards</td>
                      <td className="py-3 px-4">20 cubic yards</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Truck Loads</td>
                      <td className="py-3 px-4">6-7 pickup loads</td>
                      <td className="py-3 px-4">8-10 pickup loads</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Dimensions</td>
                      <td className="py-3 px-4">16\'L × 7.5\'W × 4.5\'H</td>
                      <td className="py-3 px-4">20\'L × 8\'W × 4.5\'H</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Weight Limit</td>
                      <td className="py-3 px-4">2-3 tons typical</td>
                      <td className="py-3 px-4">2-3 tons typical</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Rental Cost</td>
                      <td className="py-3 px-4 text-blue-600 font-bold">$350 - $450</td>
                      <td className="py-3 px-4 text-green-600 font-bold">$400 - $500</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Cost Difference</td>
                      <td className="py-3 px-4" colSpan={2}>~$50 more for 20-yard (33% more capacity)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Best For</td>
                      <td className="py-3 px-4">Bathrooms, flooring, small decks, minor cleanouts</td>
                      <td className="py-3 px-4">Kitchens, roofing, multi-room renos, medium cleanouts</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Driveway Fit</td>
                      <td className="py-3 px-4">Fits most driveways easily</td>
                      <td className="py-3 px-4">Fits most driveways, needs 20+ feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Rental Period</td>
                      <td className="py-3 px-4">7-14 days standard</td>
                      <td className="py-3 px-4">7-14 days standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Capacity Differences: What You Actually Get</h2>
              <p>The 5 cubic yard difference translates to real-world capacity that matters during your project. Here's what that extra space means:</p>

              <h3>15 Yard Dumpster Capacity</h3>
              <ul>
                <li><strong>6-7 pickup truck loads</strong> of debris (standard full-size truck bed)</li>
                <li><strong>Bathroom renovation:</strong> Full gut including tub, toilet, vanity, tile, drywall, and flooring</li>
                <li><strong>Flooring project:</strong> 800-1,000 sq ft of flooring removal (carpet, hardwood, or tile with underlayment)</li>
                <li><strong>Small deck removal:</strong> 200-300 sq ft deck with railings and posts</li>
                <li><strong>Minor cleanout:</strong> Garage, basement, or attic cleanout with moderate amount of items</li>
                <li><strong>Small roofing job:</strong> 15-20 roofing squares (single layer asphalt shingles)</li>
              </ul>

              <h3>20 Yard Dumpster Capacity</h3>
              <ul>
                <li><strong>8-10 pickup truck loads</strong> of debris</li>
                <li><strong>Kitchen renovation:</strong> Complete kitchen gut with cabinets, counters, appliances, flooring, drywall</li>
                <li><strong>Flooring project:</strong> 1,200-1,500 sq ft of flooring removal</li>
                <li><strong>Medium deck removal:</strong> 400-500 sq ft deck</li>
                <li><strong>Multi-room renovation:</strong> 2-3 room gut (bathroom + bedroom, or kitchen + dining room)</li>
                <li><strong>Standard roofing job:</strong> 25-35 roofing squares (single layer)</li>
                <li><strong>Estate cleanout:</strong> Medium-sized home cleanout with furniture, boxes, and miscellaneous items</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">Real Capacity Example: Kitchen Renovation</h3>
                <p className="text-gray-700 mb-3">A client was renovating their 12×15 kitchen. They estimated debris:</p>
                <ul className="text-gray-700 mb-3 space-y-1">
                  <li>• 12 base cabinets + 10 wall cabinets</li>
                  <li>• Laminate countertops (20 linear feet)</li>
                  <li>• Old appliances (dishwasher, range)</li>
                  <li>• 180 sq ft of vinyl flooring and underlayment</li>
                  <li>• Partial drywall and trim removal</li>
                </ul>
                <p className="text-gray-700"><strong>Verdict:</strong> We recommended a 20-yard. They filled it to 85%, avoiding the hassle of a second dumpster. A 15-yard would have been tight and risked overfilling. The extra $50 was worth the peace of mind.</p>
              </div>

              <h2>Cost Comparison: Is the Extra $50 Worth It?</h2>
              <p>The pricing difference between these sizes is minimal—typically <strong>$50</strong>, sometimes as little as $30-40 depending on your hauler and location. Here's the ROI analysis:</p>

              <h3>When the 20 Yard is Worth the Extra Cost:</h3>
              <ul>
                <li><strong>Project uncertainty:</strong> If you're unsure about final debris volume, the extra $50 is insurance against needing a second dumpster ($350-450 for another rental).</li>
                <li><strong>Aggressive timelines:</strong> Running out of space mid-project delays work while you wait for a swap. The $50 upcharge beats lost time.</li>
                <li><strong>Mixed materials:</strong> Projects with bulky items (cabinets, furniture) plus dense materials (tile, fixtures) fill up fast. Extra space helps you layer efficiently.</li>
                <li><strong>Multiple project phases:</strong> If you're tackling demo over several days or weekends, the larger dumpster accommodates incremental loading without stress.</li>
              </ul>

              <h3>When the 15 Yard Saves Money Without Sacrifice:</h3>
              <ul>
                <li><strong>Well-defined projects:</strong> Single bathroom, flooring-only job, or small deck removal with clear scope and volume estimates.</li>
                <li><strong>Heavy materials:</strong> If your debris is dense (tile, concrete, shingles), you'll hit weight limits before filling either size. Save $50 on the smaller dumpster.</li>
                <li><strong>Space constraints:</strong> Tight driveways or limited placement areas might favor the more compact 15-yard (16 feet vs 20 feet).</li>
                <li><strong>Budget priority:</strong> Every dollar counts on tight budgets. If you're confident in your estimate, the 15-yard delivers excellent value.</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  ROI Calculation: When Bigger Saves Money
                </h3>
                <p className="text-gray-700 mb-3">Let's say you rent a 15-yard for $400, but your project generates 18 cubic yards of debris. Your options:</p>
                <ol className="text-gray-700 mb-3 space-y-2">
                  <li><strong>Option A:</strong> Overfill the 15-yard (not recommended, driver may refuse pickup) = delays, stress, potential extra fees</li>
                  <li><strong>Option B:</strong> Rent a second 15-yard for the overflow = $400 + $400 = $800 total</li>
                  <li><strong>Option C:</strong> Had you rented a 20-yard from the start = $450 total (accommodates 20 cubic yards easily)</li>
                </ol>
                <p className="text-gray-700 mb-0"><strong>Result:</strong> The 20-yard saves $350 compared to two 15-yard rentals, and saves days of project delay. For an extra $50 upfront, you avoid a $350 mistake. That's a 700% ROI on the size upgrade.</p>
              </div>

              <h2>When to Choose a 15 Yard Dumpster</h2>
              <p>A 15 yard dumpster excels in specific scenarios where the project scope is clear and capacity is sufficient. Choose a 15-yard when:</p>

              <h3>Bathroom Renovations</h3>
              <p>Full bathroom gut including tub, toilet, vanity, tile, drywall, and flooring. A 15-yard handles standard 5×8 bathrooms with room to spare. Even master bathrooms (8×10) fit comfortably if you break down bulky items.</p>

              <h3>Flooring-Only Projects</h3>
              <p>Removing 800-1,000 sq ft of carpet, hardwood, tile, or laminate with underlayment. Flooring debris is relatively flat and stacks well, making a 15-yard efficient for this type of work.</p>

              <h3>Small Deck or Shed Removal</h3>
              <p>Tearing down a 200-300 sq ft deck or small shed. Cut lumber into manageable pieces (under 4 feet) and you'll fit everything without issue.</p>

              <h3>Minor Cleanouts</h3>
              <p>Garage, basement, or attic cleanouts with a moderate amount of boxes, old furniture, and miscellaneous items. If you're not clearing an entire estate, a 15-yard is sufficient and cost-effective.</p>

              <h3>Small Roofing Jobs</h3>
              <p>15-20 roofing squares (single layer asphalt shingles). This is the upper limit for a 15-yard, so if your roof is larger or multi-layer, size up to a 20-yard.</p>

              <h2>When to Choose a 20 Yard Dumpster</h2>
              <p>A 20 yard dumpster is the most popular residential size for good reason. It strikes the perfect balance of capacity and cost. Choose a 20-yard when:</p>

              <h3>Kitchen Renovations</h3>
              <p>Complete kitchen gut with cabinets, countertops, appliances, flooring, and drywall. Kitchens generate significant volume, and a 20-yard ensures you won't run out of space halfway through demolition.</p>

              <h3>Roofing Projects (25-35 Squares)</h3>
              <p>Standard residential roof tear-offs fit perfectly in a 20-yard. Shingles are heavy, so the 2-3 ton weight limit is a consideration, but volume-wise, a 20-yard is the sweet spot for most homes.</p>

              <h3>Multi-Room Renovations</h3>
              <p>Renovating 2-3 rooms simultaneously (bathroom + bedroom, kitchen + dining room, etc.). The extra capacity accommodates debris from multiple spaces without the stress of running out of room.</p>

              <h3>Medium Estate Cleanouts</h3>
              <p>Clearing out a 2-3 bedroom home with furniture, appliances, boxes, clothing, and accumulated belongings. Estate cleanouts are unpredictable in volume, so the 20-yard provides buffer space.</p>

              <h3>Large Flooring Projects</h3>
              <p>Removing flooring from 1,200-1,500 sq ft (whole-home flooring replacement). The additional volume handles larger square footage without requiring a second dumpster.</p>

              <h3>Medium Deck or Patio Removal</h3>
              <p>400-500 sq ft deck or concrete patio removal. This includes posts, railings, and foundation materials, which add up quickly in volume.</p>

              <h2>Weight Limits: The Great Equalizer</h2>
              <p>Here's an important note: both 15 yard and 20 yard dumpsters typically have the <strong>same weight limits</strong>—2 to 3 tons (4,000-6,000 lbs) included in the rental price. This means if your debris is heavy, the extra volume of a 20-yard doesn't necessarily help.</p>

              <h3>Heavy Material Projects</h3>
              <p>For projects with heavy materials like concrete, brick, tile, or dirt, you'll hit weight limits before you fill the dumpster by volume. In these cases:</p>
              <ul>
                <li><strong>Save money with a 15-yard:</strong> If you're going to hit the tonnage cap anyway, pay less for the smaller dumpster.</li>
                <li><strong>Or rent a 10-yard for heavy debris:</strong> 10-yard dumpsters often have lower tonnage caps (1-2 tons) but cost less ($300-$400). For pure heavy material, this might be the most cost-effective choice.</li>
                <li><strong>Mix light and heavy:</strong> If you have both heavy (tile) and light (drywall, wood) materials, layer them strategically in a 20-yard to maximize both volume and weight capacity.</li>
              </ul>

              <h2>Decision Flowchart: 15 or 20 Yard?</h2>
              <p>Still torn? Use this quick decision guide:</p>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Decision Guide</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Estimate your debris volume:</strong> Use our volume calculator or multiply room dimensions by debris type.</li>
                  <li><strong>2. Is your project under 15 cubic yards?</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>✓ Yes → Choose 15 yard and save $50</li>
                      <li>✗ No or unsure → Continue to step 3</li>
                    </ul>
                  </li>
                  <li><strong>3. Can you accurately predict final volume?</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>✓ Yes and it's 15-17 yards → 15 yard (tight but doable)</li>
                      <li>✗ No or it's 18+ yards → Choose 20 yard for safety</li>
                    </ul>
                  </li>
                  <li><strong>4. Is your debris heavy (concrete, tile, shingles)?</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>✓ Yes → Consider 10 or 15 yard (weight limits apply equally)</li>
                      <li>✗ No → 20 yard gives you volume flexibility</li>
                    </ul>
                  </li>
                  <li><strong>5. Is this a kitchen, roofing, or multi-room project?</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>✓ Yes → 20 yard is the standard for these projects</li>
                      <li>✗ No (bathroom, flooring, small cleanout) → 15 yard works great</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What's the main difference between 15 and 20 yard dumpsters?</h3>
              <p>The main difference is <strong>capacity</strong>: a 15 yard holds 6-7 truck loads (15 cubic yards), while a 20 yard holds 8-10 truck loads (20 cubic yards). The 20-yard costs about $50 more but provides 33% additional space. Weight limits are typically the same (2-3 tons).</p>

              <h3>How much more does a 20 yard dumpster cost than a 15 yard?</h3>
              <p>Typically <strong>$50</strong> more, though this varies by location and hauler. A 15-yard costs $350-$450, while a 20-yard costs $400-$500. For 33% more capacity, the price premium is minimal—making the 20-yard excellent value for uncertain project volumes.</p>

              <h3>Can a 15 yard dumpster fit a kitchen renovation?</h3>
              <p>It depends on kitchen size. A small galley kitchen (10×10) might fit in a 15-yard if you break down cabinets and load efficiently. However, most kitchens (12×15+) generate enough debris to justify a 20-yard. The risk of overfilling a 15-yard and needing a second rental ($350-450 extra) outweighs the $50 savings.</p>

              <h3>Which dumpster size is better for a roof tear-off?</h3>
              <p>For roofs 15-20 squares (single layer), a <strong>15 yard</strong> works. For 25-35 squares, a <strong>20 yard</strong> is standard. For 40+ squares or multi-layer roofs, consider a 30 yard. Always check weight limits—shingles are heavy (~250 lbs per square), so a 30-square roof weighs about 3.75 tons, which may incur overage fees.</p>

              <h3>Do 15 and 20 yard dumpsters have the same weight limits?</h3>
              <p>Yes, typically both have <strong>2-3 ton</strong> (4,000-6,000 lb) weight limits included in the rental price. This is why heavy debris projects don't always benefit from larger dumpsters—you'll hit tonnage caps before filling the volume. Always confirm included tonnage with your hauler.</p>

              <h3>What size dumpster for a bathroom remodel?</h3>
              <p>A <strong>15 yard dumpster</strong> is perfect for a standard bathroom remodel. It handles tubs, toilets, vanities, tile, drywall, flooring, and fixtures with room to spare. Even master bathrooms fit comfortably. Only size up to a 20-yard if you're renovating multiple bathrooms simultaneously.</p>

              <h3>Should I rent a 15 or 20 yard dumpster for flooring?</h3>
              <p>For flooring projects under 1,000 sq ft, a <strong>15 yard</strong> is sufficient. For whole-home flooring (1,200-1,500 sq ft), a <strong>20 yard</strong> is safer. Flooring debris stacks well, but underlayment, tack strips, and trim add volume quickly. When in doubt, size up—the $50 difference is negligible.</p>

              <h3>Can I save money by choosing a 15 yard over a 20 yard?</h3>
              <p>Yes, if your project genuinely fits in 15 cubic yards and you're confident in your estimate. You'll save <strong>$50</strong> by choosing the smaller size. However, if you underestimate and need a second dumpster, you'll spend $350-450 more—a net loss of $300-400. The savings only make sense when your project scope is clear and volume is certain.</p>

              <h3>How do I know which size dumpster I need?</h3>
              <p>Use a <strong>volume calculator</strong> to estimate cubic yards based on your project type and dimensions, or describe your project to a dumpster rental company for a recommendation. As a rule of thumb: bathrooms and flooring = 15 yard; kitchens and roofing = 20 yard; whole-home renos = 30 yard.</p>

              <h3>What happens if I overfill my dumpster?</h3>
              <p>Overfilled dumpsters (debris above the fill line) create safety hazards during transport. The driver may refuse pickup until you remove excess material, delaying your project and potentially incurring failed pickup fees ($75-150). Always load to the fill line and call for a second dumpster if needed—it's cheaper than delays and extra fees.</p>

              <h2>Conclusion: Making the Right Choice</h2>
              <p>The decision between a 15 yard and 20 yard dumpster comes down to project scope, budget, and risk tolerance. For well-defined projects like bathrooms, small decks, or partial flooring, a 15 yard saves $50 without sacrifice. For kitchens, roofing, or multi-room renovations, a 20 yard provides peace of mind and flexibility for just $50 more.</p>
              <p>Given the minimal cost difference and the high cost of needing a second dumpster ($350-450), most homeowners find the 20 yard to be the better value when project volume is uncertain. The extra capacity acts as insurance, ensuring your project stays on schedule without costly interruptions.</p>
              <p>Ready to choose the right size for your project? Use our cost calculator to compare pricing, or contact TNT Dumpsters for expert guidance and transparent quotes with no hidden fees.</p>
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
              <li><Link href="/blog/15-yard-dumpster-complete-guide" className="text-blue-600 hover:text-blue-700">15 Yard Dumpster: Complete Guide</Link></li>
              <li><Link href="/blog/20-yard-dumpster-complete-guide" className="text-blue-600 hover:text-blue-700">20 Yard Dumpster: Complete Guide</Link></li>
              <li><Link href="/calculator/cost" className="text-blue-600 hover:text-blue-700">Cost Calculator: Compare Dumpster Pricing</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Dumpster Rental Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/dumpsters" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">All Dumpster Sizes</h3>
                <p className="text-sm text-gray-600">Browse all available sizes and pricing</p>
              </a>
              <a href="/calculator/cost" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Cost Calculator</h3>
                <p className="text-sm text-gray-600">Compare pricing for different sizes</p>
              </a>
              <a href="/quote" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
                <p className="text-sm text-gray-600">Request transparent pricing with no hidden fees</p>
              </a>
              <a href="/dumpsters/residential" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Residential Dumpsters</h3>
                <p className="text-sm text-gray-600">Home renovation and cleanout services</p>
              </a>
              <a href="/blog/choose-right-dumpster-size" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Dumpster Size Guide</h3>
                <p className="text-sm text-gray-600">Learn how to choose the right size</p>
              </a>
              <a href="/cities" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
                <p className="text-sm text-gray-600">Find pricing for your area</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ServingCityEnhancer */}
      <section className="py-8 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <ServingCityEnhancer />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Still Unsure Which Size You Need?
            </h2>
            <p className="text-blue-100 mb-8">
              Our team helps you choose the right dumpster size based on your specific project.
              Get expert advice and accurate pricing with no pressure, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8012099013"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <a
                href="/quote"
                className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
