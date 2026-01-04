import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Users, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'About TNT Dumpsters | Local Dumpster Rental in Utah',
  description:
    'Family-owned dumpster rental serving Salt Lake & Utah County. Learn our story, service values, and what to expect from delivery to pickup.',
  alternates: { canonical: 'https://tntdump.com/about' },
    openGraph: {
      title: 'About TNT Dumpsters | Local Dumpster Rental in Utah',
      description: 'Family-owned dumpster rental serving Salt Lake & Utah County. Learn our story, service values, and what to expect from delivery to pickup.',
      url: 'https://tntdump.com/about',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function AboutPage() {
  const values = [
    {
      title: 'Family Values',
      description: 'As a family-owned business, we treat every customer like family and prioritize personal relationships.'
    },
    {
      title: 'Environmental Responsibility',
      description: 'We are committed to environmentally responsible waste disposal and recycling practices.'
    },
    {
      title: 'Community Focus',
      description: 'We are proud to serve our local community and give back through charitable donations and support.'
    },
    {
      title: 'Quality Service',
      description: 'We maintain the highest standards of service quality and customer satisfaction.'
    }
  ]

  const milestones = [
    {
      year: '1965',
      title: 'Company Founded',
      description: 'TNT Dumpsters was established as a family-owned waste management business.'
    },
    {
      year: '1980',
      title: 'Expansion',
      description: 'Expanded services to include commercial and industrial dumpster rentals.'
    },
    {
      year: '1995',
      title: 'Modernization',
      description: 'Invested in modern equipment and technology to improve service efficiency.'
    },
    {
      year: '2010',
      title: 'Community Recognition',
      description: 'Received recognition for outstanding service and community contributions.'
    },
    {
      year: '2020',
      title: '55+ Years',
      description: 'Celebrated over 55 years of serving the Wasatch Front community.'
    }
  ]

  const team = [
    {
      name: 'Jeremy',
      role: 'Manager',
      description: 'Leading our team with over 20 years of experience in waste management.'
    },
    {
      name: 'Our Team',
      role: 'Dedicated Professionals',
      description: 'Experienced professionals committed to providing exceptional service to every customer.'
    }
  ]

  return (
    <main className="min-h-screen">
      <HeroSection
        title="About TNT Dumpsters"
        description="A family-owned business with over 55 years of experience serving the Wasatch Front. We are committed to providing reliable, affordable, and environmentally responsible waste management solutions."
        primaryButton={{
          text: "Call Now: +1 (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        showPhoneButton={false}
        backgroundImage="/images/img-3190.jpg"
      />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h1>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  TNT Dumpsters was founded in 1965 as a family-owned waste management business in West Jordan, Utah. 
                  What started as a small local operation has grown into a trusted name in dumpster rental services 
                  throughout the Wasatch Front area.
                </p>
                <p>
                  Over the past 55+ years, we have maintained our commitment to providing exceptional service, 
                  competitive pricing, and environmentally responsible waste disposal. Our family values guide 
                  everything we do, from how we treat our customers to how we handle waste management.
                </p>
                <p>
                  We are proud to be locally owned and operated, which allows us to understand and serve the unique 
                  needs of our community. Our deep roots in the area mean we're not just a service provider – 
                  we're your neighbors, committed to keeping our community clean and beautiful.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/img-3190.jpg"
                  alt="TNT Dumpsters serving the Wasatch Front community with reliable waste management services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from how we serve our customers to how we manage waste. 
              These principles have been the foundation of our business for over 55 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through the Years
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our founding in 1965 to today, TNT Dumpsters has been a constant presence in the Wasatch Front, 
              evolving and growing while maintaining our commitment to quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing exceptional service to every customer. 
              We take pride in our work and in serving our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TNT Dumpsters?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Over 55 Years of Experience</h3>
                    <p className="text-gray-600">Decades of expertise in waste management and dumpster rental services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Family-Owned Business</h3>
                    <p className="text-gray-600">Personal service and attention to detail that only a family business can provide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Locally Owned</h3>
                    <p className="text-gray-600">We understand and serve the unique needs of our community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for your money without compromising on service quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmental Responsibility</h3>
                    <p className="text-gray-600">We prioritize environmentally responsible waste disposal and recycling practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/img-0350.jpg"
                  alt="TNT Dumpsters professional team providing reliable waste management services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work with TNT Dumpsters?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Experience the difference that 55+ years of experience and family values can make. 
            Contact us today for reliable, affordable waste management solutions.
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


