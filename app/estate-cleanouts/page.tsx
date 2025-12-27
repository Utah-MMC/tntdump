import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Heart } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Estate Cleanouts in Utah | Compassionate Cleanout Help |...',
  description:
    'Compassionate estate cleanout help in Utah. We sort, donate, haul away, and prepare properties for sale with clear pricing and flexible scheduling.',
  alternates: { canonical: 'https://tntdump.com/estate-cleanouts' },
}

export default function EstateCleanoutsPage() {
  const services = [
    'Complete estate cleanouts and property preparation',
    'Furniture and appliance removal',
    'Personal belongings sorting and disposal',
    'Document and paperwork organization',
    'Antique and valuable item identification',
    'Donation coordination for usable items',
    'Property sale preparation',
    'Hoarder home cleanouts'
  ]

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We meet with you to understand the scope of the cleanout and create a customized plan.',
      icon: Phone
    },
    {
      step: '2',
      title: 'Assessment & Planning',
      description: 'We assess the property, identify valuable items, and create a detailed cleanup strategy.',
      icon: CheckCircle
    },
    {
      step: '3',
      title: 'Sorting & Organization',
      description: 'We carefully sort through belongings, separating items for donation, disposal, or keeping.',
      icon: Heart
    },
    {
      step: '4',
      title: 'Cleanup & Disposal',
      description: 'We remove all unwanted items and clean the property thoroughly for its next use.',
      icon: Truck
    }
  ]

  const benefits = [
    {
      title: 'Compassionate Service',
      description: 'We understand the emotional nature of estate cleanouts and provide caring, respectful service.'
    },
    {
      title: 'Professional Expertise',
      description: 'Over 55 years of experience handling estate cleanouts with attention to detail and care.'
    },
    {
      title: 'Valuable Item Protection',
      description: 'We carefully identify and protect valuable items, antiques, and family heirlooms.'
    },
    {
      title: 'Donation Coordination',
      description: 'We work with local charities to donate usable items to those in need.'
    },
    {
      title: 'Complete Cleanup',
      description: 'We ensure the property is thoroughly cleaned and ready for its next chapter.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule and timeline to make the process as convenient as possible.'
    }
  ]

  const whatWeHandle = [
    'Furniture and household items',
    'Appliances and electronics',
    'Clothing and personal belongings',
    'Books, documents, and paperwork',
    'Kitchen items and cookware',
    'Bedding and linens',
    'Tools and equipment',
    'Yard and garden items',
    'Construction and renovation debris',
    'General household waste'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Estate Cleanout{' '}
                <span className="text-primary-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Compassionate and professional estate cleanout services for inherited properties, 
                downsizing, and property preparation. We handle the entire process with care and respect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">
                  Call Now: +1 (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Get Free Estimate
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Compassionate Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Valuable Item Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Complete Cleanup</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/dumpster-rental-contact.jpg"
                  alt="Estate cleanout services for inherited properties and property preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Estate Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that estate cleanouts can be emotionally challenging. Our compassionate team 
              provides professional, respectful service to help you through this difficult process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Estate Cleanout Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your estate cleanout is handled efficiently, 
              respectfully, and with attention to every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Estate Cleanout Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our estate cleanout service is designed to provide compassionate, professional care 
              during what can be a difficult and emotional time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What We Handle During Estate Cleanouts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive estate cleanout service handles all types of items and materials. 
                We carefully sort through everything to ensure valuable items are protected and usable items are donated.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {whatWeHandle.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  <strong>Special Care:</strong> We pay special attention to identifying valuable items, 
                  antiques, and family heirlooms to ensure they are properly protected and preserved.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexels-triemli-33520761.jpg"
                  alt="Estate cleanout services handling all types of household items and belongings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexels-wendelinjacober-1411392.jpg"
                  alt="Estate cleanout services with donation coordination for usable items"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Donation Coordination
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in giving back to the community. During estate cleanouts, we carefully identify 
                usable items and coordinate donations with local charities and organizations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Charitable Donations</h3>
                    <p className="text-gray-600">We work with local charities to donate furniture, clothing, and household items to those in need.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmental Responsibility</h3>
                    <p className="text-gray-600">We ensure items are reused when possible, reducing waste and helping the environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600">Your donations help support local families and organizations in our community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Help with an Estate Cleanout?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a compassionate consultation about your estate cleanout needs. 
            Our team is here to help you through this process with care and professionalism.
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

      {/* Quick Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm 
              serviceType="Estate Cleanout"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore more dumpster rental services and information</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters/residential" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Dumpsters</h3>
              <p className="text-sm text-gray-600">Home dumpster rental for cleanouts</p>
            </a>
            <a href="/blog/estate-cleanout-complete-guide" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Estate Cleanout Guide</h3>
              <p className="text-sm text-gray-600">Complete guide to estate cleanouts</p>
            </a>
            <a href="/dumpsters" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Types</h3>
              <p className="text-sm text-gray-600">Browse all dumpster sizes</p>
            </a>
            <a href="/calculator" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the right dumpster size</p>
            </a>
            <a href="/quote" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free quote</p>
            </a>
            <a href="/services" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Services</h3>
              <p className="text-sm text-gray-600">Browse all services</p>
            </a>
            <a href="/cities" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find service in your city</p>
            </a>
            <a href="/blog" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Blog</h3>
              <p className="text-sm text-gray-600">Tips and guides</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
