import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export const metadata: Metadata = {
  title: 'Dumpster Size Calculator | Find the Right Size | T&T Dumpsters',
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
                  <span className="text-2xl">📞</span>
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
                  <span className="text-2xl">💰</span>
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
                  <span className="text-2xl">🚚</span>
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
