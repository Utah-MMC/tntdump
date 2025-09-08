import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Get Free Dumpster Rental Quote | T&T Dumpsters | (801) 209-9013',
  description: 'Get a free same-day dumpster rental quote from T&T Dumpsters. Fast, competitive pricing for all dumpster sizes. Call (801) 209-9013 or fill out our quote form.',
  keywords: 'dumpster rental quote, free dumpster quote, dumpster pricing, dumpster rental estimate, utah dumpster rental',
}

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Get Your Free Quote"
        description="Get a free same-day estimate for your dumpster rental needs. No obligation, competitive pricing guaranteed."
        primaryButton={{
          text: "Call (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Fill Out Form",
          href: "#quote-form"
        }}
        showPhoneButton={false}
        backgroundImage="/images/dumpsterSmallBanner.jpeg"
      />

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Dumpster Rental</option>
                    <option value="commercial">Commercial Dumpster Rental</option>
                    <option value="industrial">Industrial Dumpster Rental</option>
                    <option value="short-term">Short-Term Dumpster Rental</option>
                    <option value="long-term">Long-Term Dumpster Rental</option>
                    <option value="vendor">Vendor Dumpster Rental</option>
                    <option value="concrete">Concrete Dumpsters</option>
                    <option value="estate-cleanout">Estate Cleanout Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dumpster Size</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select size (optional)</option>
                    <option value="10-yard">10 Yard - Small projects</option>
                    <option value="15-yard">15 Yard - Renovations</option>
                    <option value="20-yard">20 Yard - Most popular</option>
                    <option value="30-yard">30 Yard - Large projects</option>
                    <option value="40-yard">40 Yard - Commercial</option>
                    <option value="not-sure">Not sure - Need recommendation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any special requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Get Free Quote
                </button>
              </form>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose T&T Dumpsters?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Same-Day Estimates</h4>
                      <p className="text-gray-600">Get your quote within hours, not days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-600">Best rates guaranteed with no hidden fees</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600">Same-day delivery available in most areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Service</h4>
                      <p className="text-gray-600">Family-owned business serving Utah since 1965</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h4>
                <p className="text-gray-600 mb-4">
                  For urgent requests or immediate pricing, call us directly:
                </p>
                <a 
                  href="tel:+18012099013" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <span className="text-2xl mr-2">📞</span>
                  (801) 209-9013
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included in Your Quote?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dumpster delivery and pickup</li>
                  <li>• Rental period (typically 7-14 days)</li>
                  <li>• Weight allowance</li>
                  <li>• Disposal fees</li>
                  <li>• Customer service support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Size Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure what size dumpster you need? Use our guide to help determine the right size for your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">10 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$299</p>
              <p className="text-sm text-gray-600 mb-4">Perfect for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small home cleanouts</li>
                <li>• Garage organization</li>
                <li>• Small renovations</li>
                <li>• Yard waste removal</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$399</p>
              <p className="text-sm text-gray-600 mb-4">Great for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Home renovations</li>
                <li>• Kitchen remodels</li>
                <li>• Bathroom updates</li>
                <li>• Basement cleanouts</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$499</p>
              <p className="text-sm text-gray-600 mb-4">Most popular for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large renovations</li>
                <li>• Estate cleanouts</li>
                <li>• Construction debris</li>
                <li>• Commercial projects</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$699</p>
              <p className="text-sm text-gray-600 mb-4">Ideal for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large construction</li>
                <li>• Commercial cleanouts</li>
                <li>• Industrial projects</li>
                <li>• Major renovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
