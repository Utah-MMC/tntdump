import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import DumpsterCalculator from '@/components/DumpsterCalculator'
import Link from 'next/link'
import { Phone, FileText, Truck, Calculator, Box, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Size Calculator | Find the Right Size | TNT Dumpsters',
  description: 'Use our free dumpster size calculator to find the perfect dumpster for your project. Get instant recommendations, pricing, and free quotes. Call (801) 209-9013.',
  keywords: 'dumpster size calculator, dumpster rental calculator, dumpster size guide, dumpster pricing, utah dumpster rental',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Dumpster Size Calculator"
        description="Find the perfect dumpster size for your project with our free calculator. Get instant recommendations, pricing, and free quotes."
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

      <DumpsterCalculator />

      {/* Specialized Calculators Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Specialized Dumpster Calculators
              </h2>
              <p className="text-lg text-gray-600">
                Need more detailed estimates? Try our specialized calculators for accurate cost and volume calculations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Size Calculator Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Size Calculator</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Find the perfect dumpster size based on your project type and debris amount. Get instant size recommendations.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Currently Active
                  </span>
                  <p className="text-sm text-gray-500">You're using this calculator above</p>
                </div>
              </div>

              {/* Cost Calculator Card */}
              <Link href="/calculator/cost" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow block group">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-green-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                  Cost Calculator
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Estimate your total dumpster rental cost by size, location, rental duration, and additional services.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold group-hover:bg-green-700 transition-colors">
                    Calculate Cost →
                  </span>
                </div>
              </Link>

              {/* Volume Calculator Card */}
              <Link href="/calculator/volume" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow block group">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Box className="w-8 h-8 text-purple-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                  Volume Calculator
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Calculate debris volume room-by-room or by material type to determine the exact dumpster size you need.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold group-hover:bg-purple-700 transition-colors">
                    Calculate Volume →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Still Not Sure? We're Here to Help!
              </h2>
              <p className="text-lg text-gray-600">
                Our experienced team can help you choose the right dumpster size for your specific project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Call us for a free consultation and we'll help you choose the perfect dumpster size.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Estimates</h3>
                <p className="text-gray-600 mb-4">
                  Get a free same-day estimate with no obligation. We provide transparent pricing.
                </p>
                <a 
                  href="/quote" 
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Same-day delivery available in most areas. Quick turnaround times guaranteed.
                </p>
                <a 
                  href="/contact" 
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Contact Us
                </a>
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about dumpster sizes and rentals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What if I choose the wrong size?
                </h3>
                <p className="text-gray-600">
                  No problem! We can exchange your dumpster for a different size if needed. 
                  We want to make sure you have the right size for your project.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long can I keep the dumpster?
                </h3>
                <p className="text-gray-600">
                  Most rentals include 7-14 days of rental time. We can extend the rental period 
                  if needed for an additional fee.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the price?
                </h3>
                <p className="text-gray-600">
                  The price includes delivery, pickup, disposal fees, and the rental period. 
                  There are no hidden fees or surprises.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you deliver on weekends?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer weekend delivery for an additional fee. Call us to schedule 
                  weekend delivery for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Explore Our Dumpster Rental Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Browse our comprehensive dumpster rental resources</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Types</h3>
              <p className="text-sm text-gray-600">Residential, commercial, and specialty dumpsters</p>
            </a>
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Comprehensive dumpster rental services</p>
            </a>
            <a href="/blog/choose-right-dumpster-size" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Guide</h3>
              <p className="text-sm text-gray-600">Detailed guide to choosing dumpster sizes</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free dumpster rental quote</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Home dumpster rental</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Rentals</h3>
              <p className="text-sm text-gray-600">Business dumpster rental</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find service in your city</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Use our calculator above or call us directly for a free consultation. 
            We're here to help you find the perfect dumpster for your project.
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
        </div>
      </section>
    </main>
  )
}

