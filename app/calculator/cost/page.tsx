import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CostCalculator from '@/components/calculators/CostCalculator'
import { DollarSign, FileText, Calculator, TrendingDown, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Rental Cost Calculator | Estimate Pricing | TNT Dumpsters',
  description: 'Calculate your dumpster rental costs instantly with our free pricing calculator. Get accurate estimates for 10, 15, 20, and 30 yard dumpsters in Utah. Transparent pricing with no hidden fees. Call (801) 209-9013.',
  keywords: 'dumpster rental cost calculator, estimate dumpster cost, dumpster pricing calculator, dumpster rental price estimator, utah dumpster cost, dumpster rental rates',
}

export default function CostCalculatorPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Dumpster Rental Cost Calculator"
        description="Get instant pricing estimates for your dumpster rental. Calculate costs based on size, location, and rental duration with our transparent pricing calculator."
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

      <CostCalculator />

      {/* Why Use Our Cost Calculator */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Use Our Cost Calculator?
              </h2>
              <p className="text-lg text-gray-600">
                Make informed decisions with transparent, instant pricing estimates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. See exactly what you'll pay with a detailed breakdown of all costs.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Estimates</h3>
                <p className="text-gray-600">
                  Get real-time pricing as you adjust your options. No waiting for callbacks or email quotes.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Options</h3>
                <p className="text-gray-600">
                  Customize your rental with add-on services and see how each option affects your total cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Affects Dumpster Rental Pricing?
              </h2>
              <p className="text-lg text-gray-600">
                Understanding the factors that influence your rental cost.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dumpster Size</h3>
                  <p className="text-gray-600">
                    Larger dumpsters have higher base prices. A 10-yard dumpster starts around $300-$400,
                    while a 30-yard can cost $500-$600. Choose the right size to avoid paying for unused capacity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Calculator className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Rental Duration</h3>
                  <p className="text-gray-600">
                    Most rentals include 7 days. Additional days are typically $15/day. Plan your project
                    timeline to stay within the included rental period when possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Material Type</h3>
                  <p className="text-gray-600">
                    Heavy materials like concrete, asphalt, or dirt may have additional fees due to weight
                    and disposal requirements. Standard mixed debris is included in the base price.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Location & Delivery</h3>
                  <p className="text-gray-600">
                    Delivery is included in our pricing. Some areas further from transfer stations may have
                    slight adjustments. Same-day delivery is available for an additional $50-75.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Pricing Questions & Answers
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about dumpster rental costs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the base price?
                </h3>
                <p className="text-gray-600">
                  Our base price includes delivery, pickup, a 7-day rental period, and disposal fees for
                  standard materials up to the weight limit for your dumpster size. There are no hidden fees.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are there any additional fees I should know about?
                </h3>
                <p className="text-gray-600">
                  Additional fees may apply for extended rental periods ($15/day after 7 days), same-day
                  delivery ($50-75), permit assistance ($75), or heavy debris like concrete (10% upcharge).
                  Overage fees apply if you exceed the included weight limit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How accurate is the calculator estimate?
                </h3>
                <p className="text-gray-600">
                  Our calculator provides a close estimate based on typical scenarios. Final pricing depends
                  on actual weight, exact location, and material type. For the most accurate quote, contact
                  us at (801) 209-9013 or submit a quote request.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer discounts or promotions?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer discounts for multiple dumpsters, long-term rentals, and repeat customers.
                  Contact us to learn about current promotions and how we can save you money on your project.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How much weight is included?
                </h3>
                <p className="text-gray-600">
                  10-yard dumpsters include 1 ton, 15-yard and 20-yard include 2 tons, and 30-yard dumpsters
                  include 3 tons of disposal. Additional tonnage is billed separately at market rates.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get a price match or better deal?
                </h3>
                <p className="text-gray-600">
                  We strive to offer competitive pricing and exceptional service. If you have a written quote
                  from another provider, contact us and we'll do our best to match or beat it while providing
                  superior service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore more tools and information to help plan your rental</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the right dumpster size for your project</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request an accurate quote for your rental</p>
            </a>
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Sizes</h3>
              <p className="text-sm text-gray-600">Learn about our dumpster size options</p>
            </a>
            <a href="/blog/dumpster-rental-costs" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Pricing Guide</h3>
              <p className="text-sm text-gray-600">Complete guide to dumpster rental costs</p>
            </a>
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Comprehensive dumpster rental services</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Service Areas</h3>
              <p className="text-sm text-gray-600">Cities we serve throughout Utah</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Dumpsters for home projects</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Rentals</h3>
              <p className="text-sm text-gray-600">Business dumpster solutions</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Book Your Dumpster Rental?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Use our calculator above to estimate your costs, or contact us directly for a personalized
            quote. Our team is ready to help you find the perfect dumpster at the best price.
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

          <p className="text-blue-100 mt-6">
            Fast delivery • Transparent pricing • Exceptional service
          </p>
        </div>
      </section>
    </main>
  )
}
