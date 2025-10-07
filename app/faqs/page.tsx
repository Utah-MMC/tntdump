'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, Clock, MapPin } from 'lucide-react'
import HeroSection from '@/components/HeroSection'

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What sizes of dumpsters do you offer?',
      answer: 'We offer a range of dumpster sizes including 10-yard, 15-yard, 20-yard, and 30-yard dumpsters. Our team can help you choose the right size based on your project needs and the amount of waste you expect to generate.'
    },
    {
      question: 'How much do dumpster rentals cost?',
      answer: 'Our dumpster rental prices start at $299 for a 10-yard dumpster. Pricing varies based on size, rental duration, and location. We offer free same-day estimates, so call us for an accurate quote for your specific project.'
    },
    {
      question: 'How long can I keep the dumpster?',
      answer: 'Our standard rental period is 7 days, but we offer flexible rental periods to accommodate your project timeline. We can arrange for longer rentals if needed. Contact us to discuss your specific requirements.'
    },
    {
      question: 'What can I put in the dumpster?',
      answer: 'You can put most construction debris, household items, furniture, appliances (without refrigerants), yard waste, and general household waste. We cannot accept hazardous materials, tires, appliances with refrigerants, or medical waste. Contact us for a complete list of prohibited items.'
    },
    {
      question: 'Do you deliver to my area?',
      answer: 'We serve the entire Wasatch Front area including West Jordan, Salt Lake City, Murray, Sandy, Draper, Riverton, and surrounding areas. Contact us to confirm delivery availability to your specific location.'
    },
    {
      question: 'How quickly can you deliver a dumpster?',
      answer: 'We typically deliver dumpsters within 24-48 hours of your order. For urgent needs, we can often arrange same-day delivery depending on availability and location. Call us to check current availability.'
    },
    {
      question: 'Do you pick up the dumpster when I\'m done?',
      answer: 'Yes, we will pick up the dumpster when you\'re finished with your project. Simply call us to schedule the pickup, and we\'ll remove it promptly. There\'s no additional charge for pickup within the rental period.'
    },
    {
      question: 'What if I need the dumpster longer than expected?',
      answer: 'We understand that projects can take longer than anticipated. We offer flexible rental periods and can extend your rental if needed. Contact us to discuss your situation and we\'ll work with you to find a solution.'
    },
    {
      question: 'Do you offer commercial dumpster services?',
      answer: 'Yes, we provide comprehensive commercial dumpster services for businesses of all sizes. We offer regular pickup schedules, larger dumpster sizes, and specialized services for different industries. Contact us for a consultation.'
    },
    {
      question: 'What makes TNT Dumpsters different from other companies?',
      answer: 'With over 55 years of experience, we are a family-owned, locally operated business that understands the needs of our community. We offer competitive pricing, reliable service, and personalized attention to every customer. Our commitment to quality and customer satisfaction sets us apart.'
    },
    {
      question: 'Do you handle estate cleanouts?',
      answer: 'Yes, we specialize in estate cleanouts and provide compassionate, professional service for these sensitive situations. We can help with sorting items, coordinating donations, and ensuring the property is properly cleaned and prepared.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday through Friday, 7:00 am to 9:00 pm. We are closed on weekends, but we can arrange for after-hours or weekend service for urgent needs. Contact us to discuss your specific requirements.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our dumpster rental services. If you don't see what you're looking for, don't hesitate to contact us directly."
        primaryButton={{
          text: "Call Now: +1 (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        showPhoneButton={false}
        backgroundImage="/images/pexels-rodrigo-eder-1347087-2846205.jpg"
      />

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Common Questions About Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600">
                We've compiled answers to the most frequently asked questions about our dumpster rental services. 
                If you have additional questions, please don't hesitate to contact us.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-600" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Contact us directly for personalized assistance with your dumpster rental needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                              <a href="tel:+18012099013" className="text-lg text-primary-600 hover:text-primary-700 font-semibold">
                  +1 (801) 209-9013
                </a>
              <p className="text-sm text-gray-600 mt-2">Call or Text</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">7:00 am - 9:00 pm</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Area</h3>
              <p className="text-gray-600">Wasatch Front</p>
              <p className="text-gray-600">Utah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Tips for Dumpster Rentals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make the most of your dumpster rental with these helpful tips and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose the Right Size</h3>
              <p className="text-gray-600">
                Consider the scope of your project and the type of waste you'll be generating. 
                It's better to go slightly larger than to need a second dumpster.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Your Timeline</h3>
              <p className="text-gray-600">
                Schedule your dumpster delivery to arrive when you're ready to start your project. 
                This maximizes your rental period and efficiency.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Know What's Prohibited</h3>
              <p className="text-gray-600">
                Review our list of prohibited items before loading your dumpster. 
                This helps avoid issues and ensures proper disposal.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Load Efficiently</h3>
              <p className="text-gray-600">
                Break down large items and distribute weight evenly. 
                This maximizes space and ensures safe transport.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Don't Overfill</h3>
              <p className="text-gray-600">
                Keep waste level with the top of the dumpster. 
                Overfilling can create safety hazards and additional charges.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call for Pickup</h3>
              <p className="text-gray-600">
                Contact us as soon as you're finished to schedule pickup. 
                This helps keep your project area clean and organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Have more questions or ready to rent a dumpster? Contact us today for a free estimate 
            and professional service you can count on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+18012099013" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Call Now: +1 (801) 209-9013
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Contact Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-100">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call or Text</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Mon - Fri: 7:00 am - 9:00 pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Serving the Wasatch Front</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

