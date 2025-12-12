import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Moving Cleanout Dumpster Guide: Size, Cost & Tips | TNT Dumpsters',
  description: 'Moving cleanout dumpster guide: choose a size, what fits, cost expectations, and tips to declutter fast before moving day.',
  keywords: 'moving cleanout dumpster, moving dumpster rental, relocation dumpster, moving waste disposal, moving cleanup dumpster, utah dumpster rental',
}

export default function MovingCleanoutDumpsterGuidePage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Moving Cleanout Dumpster Guide: Size, Cost & Tips</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guide to choosing the right dumpster for moving cleanouts. Learn which size fits your move, what items you can dispose of, cost estimates, timeline planning, and tips for efficient moving cleanout.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 28, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/pexels-olly-3760529.jpg" alt="Moving cleanout dumpster rental guide" fill className="object-cover" />
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
                "headline": "Moving Cleanout Dumpster Guide: Size, Cost & Tips",
                "description": metadata.description,
                "datePublished": "2025-01-28", "dateModified": "2025-01-28",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/moving-cleanout-dumpster-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Most moving cleanouts need a <strong>15-yard or 20-yard dumpster</strong> ($350-$500). Small moves use 15-yard containers. Large moves or whole-house cleanouts need 20-yard dumpsters. Schedule delivery 1-2 weeks before your move date.
                </p>
              </div>

              <h2>Choosing the Right Dumpster Size for Moving Cleanouts</h2>
              <p>Moving cleanouts generate moderate amounts of debris from items you're not taking with you. The size you need depends on your home size, how much you're disposing of, and whether you're doing a full cleanout or selective removal.</p>

              <h3>15-Yard Dumpster for Small to Medium Moves</h3>
              <p>A 15-yard dumpster fits small to medium moving cleanouts. This size works for:</p>
              <ul>
                <li>Apartment or small home moves</li>
                <li>Selective item removal before moving</li>
                <li>Minimal furniture disposal</li>
                <li>Small to medium cleanout projects</li>
              </ul>

              <h3>20-Yard Dumpster for Large Moves</h3>
              <p>A 20-yard dumpster is ideal for large moves or whole-house cleanouts. This size fits:</p>
              <ul>
                <li>Large home moves</li>
                <li>Complete house cleanouts before moving</li>
                <li>Furniture and appliance disposal</li>
                <li>Major decluttering before relocation</li>
              </ul>

              <h2>What Goes in Your Moving Cleanout Dumpster</h2>
              <p>Most items you're not taking with you can go in your dumpster:</p>
              <ul>
                <li><strong>Furniture:</strong> Old couches, tables, chairs, mattresses</li>
                <li><strong>Appliances:</strong> Old washers, dryers, refrigerators (if allowed)</li>
                <li><strong>Household items:</strong> Boxes, storage items, unwanted belongings</li>
                <li><strong>Construction debris:</strong> If doing minor repairs before moving</li>
                <li><strong>General waste:</strong> Items you're not taking to your new home</li>
              </ul>

              <h2>Timeline Planning for Moving Cleanouts</h2>
              <p>Moving cleanouts require careful timing. Plan your dumpster rental:</p>
              <ul>
                <li><strong>1-2 weeks before move:</strong> Schedule dumpster delivery</li>
                <li><strong>During packing:</strong> Fill dumpster as you pack and declutter</li>
                <li><strong>Before move date:</strong> Schedule pickup before movers arrive</li>
                <li><strong>Flexible scheduling:</strong> Coordinate with your moving timeline</li>
              </ul>

              <h2>Cost Estimates for Moving Cleanout Dumpsters</h2>
              <p>Moving cleanout dumpster costs vary by size:</p>
              <ul>
                <li><strong>15-yard dumpster:</strong> $350-$450 (small to medium moves)</li>
                <li><strong>20-yard dumpster:</strong> $400-$500 (large moves or whole-house cleanouts)</li>
              </ul>
              <p>Costs include delivery, pickup, and disposal. Standard rental periods (7-14 days) are usually sufficient for moving cleanouts.</p>

              <h2>Moving Cleanout Tips</h2>
              <ul>
                <li><strong>Start early:</strong> Begin decluttering 2-3 weeks before your move</li>
                <li><strong>Donate usable items:</strong> Coordinate donations for items in good condition</li>
                <li><strong>Separate materials:</strong> Recycle metals and electronics when possible</li>
                <li><strong>Plan placement:</strong> Ensure dumpster doesn't block moving truck access</li>
                <li><strong>Coordinate timing:</strong> Schedule pickup before movers arrive</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to start your moving cleanout? Get the right dumpster size for your move. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/dumpsters/residential" className="text-blue-600 hover:underline font-semibold">residential dumpster rentals</a> or learn more about <a href="/services" className="text-blue-600 hover:underline font-semibold">our services</a> for moving cleanouts.</p>

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
              <li><Link href="/blog/estate-cleanout-complete-guide" className="text-blue-600 hover:text-blue-700">Estate Cleanout: A Complete Guide for Families</Link></li>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your Moving Cleanout?</h2>
            <p className="text-blue-100 mb-8">Get the right dumpster size for your move. Flexible scheduling to coordinate with your moving timeline.</p>
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

