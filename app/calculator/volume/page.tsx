import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import VolumeCalculator from '@/components/calculators/VolumeCalculator'
import { Phone, FileText, Ruler, Scale, TrendingUp, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Volume Calculator | Calculate Debris Size | TNT Dumpsters',
  description: 'Estimate your debris volume with our free calculator. Get accurate dumpster size recommendations based on your project materials and room-by-room measurements. Call (801) 209-9013.',
  keywords: 'dumpster volume calculator, how much fits in dumpster, debris volume calculator, cubic yard calculator, construction debris calculator, renovation volume estimator',
}

export default function VolumeCalculatorPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Dumpster Volume Calculator"
        description="Calculate exactly how much debris you'll have and get the perfect dumpster size recommendation. Our intelligent calculator helps you estimate volume based on rooms, materials, or project type."
        primaryButton={{
          text: "Call (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Get Free Quote",
          href: "/quote"
        }}
        showPhoneButton={false}
        backgroundImage="/images/dumpsterSmallBanner.jpeg"
      />

      <VolumeCalculator />

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How the Volume Calculator Works
              </h2>
              <p className="text-lg text-gray-600">
                Our calculator uses industry-standard formulas to estimate debris volume accurately.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Room-by-Room</h3>
                <p className="text-gray-600">
                  Select the rooms you're working on, and we'll calculate the typical debris volume
                  for each space based on renovation standards.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Material-Specific</h3>
                <p className="text-gray-600">
                  Enter exact measurements for materials like drywall, flooring, or roofing, and we'll
                  calculate precise volume requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Weight Estimation</h3>
                <p className="text-gray-600">
                  We calculate weight based on material density to help you avoid overage charges
                  and choose the right dumpster type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Volume Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Understanding Cubic Yards
              </h2>
              <p className="text-lg text-gray-600">
                Learn how dumpster capacity is measured and what it means for your project.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What is a Cubic Yard?</h3>
                  <p className="text-gray-700 mb-4">
                    A cubic yard is a measurement of volume that equals 3 feet by 3 feet by 3 feet,
                    or 27 cubic feet total. This is the standard unit for measuring dumpster capacity.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>1 cubic yard = 27 cubic feet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>1 cubic yard = approximately 2 pickup truck loads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>1 cubic yard = about 13-15 contractor bags</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Volume vs. Weight</h3>
                  <p className="text-gray-700 mb-4">
                    It's important to consider both volume and weight. Different materials have
                    different densities, which affects the total weight of your debris.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Light Materials</div>
                      <div className="text-sm text-gray-600">Furniture, yard waste, packaging</div>
                      <div className="text-xs text-gray-500 mt-1">150-300 lbs/cubic yard</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Medium Materials</div>
                      <div className="text-sm text-gray-600">Drywall, flooring, general debris</div>
                      <div className="text-xs text-gray-500 mt-1">400-600 lbs/cubic yard</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Heavy Materials</div>
                      <div className="text-sm text-gray-600">Concrete, brick, roofing, dirt</div>
                      <div className="text-xs text-gray-500 mt-1">800-3,400 lbs/cubic yard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Always Round Up
                </h4>
                <p className="text-gray-600 text-sm">
                  When estimating volume, it's better to slightly overestimate than underestimate.
                  Running out of space means additional rental costs and delays.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <Scale className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Watch the Weight
                </h4>
                <p className="text-gray-600 text-sm">
                  Heavy materials like concrete, brick, or dirt may exceed weight limits even if
                  they don't fill the dumpster. Use our 12-yard concrete dumpster for heavy loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Volume Calculator FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about calculating debris volume and choosing dumpster sizes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How accurate is the volume calculator?
                </h3>
                <p className="text-gray-600">
                  Our calculator provides estimates based on industry-standard measurements and includes
                  a 10% safety buffer. For the most accurate results, enter as much detail as possible
                  about your materials and measurements. For large or complex projects, call us at (801) 209-9013
                  for a personalized assessment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What if my debris volume exceeds the dumpster capacity?
                </h3>
                <p className="text-gray-600">
                  If you exceed the capacity, we can exchange your dumpster for a larger size or schedule
                  an additional pickup. We recommend sizing up if you're uncertain. It's more cost-effective
                  to have extra space than to need a second dumpster.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How do I convert square feet to cubic yards?
                </h3>
                <p className="text-gray-600">
                  For materials like drywall or flooring, you need to account for thickness. For example,
                  1 square foot of 1/2" drywall equals about 0.0037 cubic yards. Our calculator handles
                  these conversions automatically when you select the material type and enter square footage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why does weight matter if I'm not filling the dumpster?
                </h3>
                <p className="text-gray-600">
                  Dumpster rentals include a weight limit (typically 2 tons for 7-day rentals). Heavy
                  materials like concrete, brick, or roofing can exceed this limit even with partial loads.
                  Overage is charged at $55 per ton. For heavy materials, consider our 12-yard concrete
                  dumpster with weight-based pricing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I mix different types of materials in one dumpster?
                </h3>
                <p className="text-gray-600">
                  Yes, you can mix most construction and household debris. However, concrete, brick, and
                  asphalt should go in a dedicated concrete dumpster for the best pricing. Hazardous
                  materials, liquids, and certain items are prohibited. Contact us if you're unsure
                  about specific materials.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Should I use room-by-room or material-specific calculation?
                </h3>
                <p className="text-gray-600">
                  Use room-by-room for general renovations or cleanouts when you don't have exact
                  measurements. Use material-specific when you know precise quantities (like 500 sq ft
                  of drywall or 10 roofing squares). Material-specific calculations provide more accurate
                  weight estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Need Help Calculating Your Volume?
              </h2>
              <p className="text-lg text-gray-600">
                Our team is here to help you get the perfect size for your project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call for Guidance</h3>
                <p className="text-gray-600 mb-4">
                  Not sure about your calculations? Call us for expert advice on sizing.
                </p>
                <a
                  href="tel:+18012099013"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  (801) 209-9013
                </a>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get a Free Quote</h3>
                <p className="text-gray-600 mb-4">
                  Submit your project details and we'll provide a customized recommendation.
                </p>
                <a
                  href="/quote"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Request Quote
                </a>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Size Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Use our dumpster size calculator for project-based recommendations.
                </p>
                <a
                  href="/calculator"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Size Calculator
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore more tools and information to help with your project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Choose dumpster size by project type</p>
            </a>
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Sizes</h3>
              <p className="text-sm text-gray-600">View our complete dumpster lineup</p>
            </a>
            <a href="/blog/choose-right-dumpster-size" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Sizing Guide</h3>
              <p className="text-sm text-gray-600">Detailed guide to choosing sizes</p>
            </a>
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">All dumpster rental services</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Dumpsters</h3>
              <p className="text-sm text-gray-600">Home renovation and cleanout rentals</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Dumpsters</h3>
              <p className="text-sm text-gray-600">Business and construction rentals</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request pricing for your project</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and advice</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Order Your Dumpster?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Use the calculator above to get your size recommendation, then give us a call or request
            a free quote. We'll help you get the perfect dumpster for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18012099013"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Call Now: (801) 209-9013
            </a>
            <a
              href="/quote"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Get Free Quote
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Same-day delivery available • Competitive pricing • Expert guidance
          </p>
        </div>
      </section>
    </main>
  )
}
