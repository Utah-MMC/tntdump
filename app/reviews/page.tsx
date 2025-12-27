import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import Image from 'next/image'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'TNT Dumpsters Reviews | Dumpster Rental in Utah',
  description:
    'Read reviews for TNT Dumpsters. Local roll-off dumpster rentals with fast delivery, clear pricing, and friendly support across Salt Lake & Utah County.',
  alternates: { canonical: 'https://tntdump.com/reviews' },
    openGraph: {
      title: 'TNT Dumpsters Reviews | Dumpster Rental in Utah',
      description: 'Read reviews for TNT Dumpsters. Local roll-off dumpster rentals with fast delivery, clear pricing, and friendly support across Salt Lake & Utah County.',
      url: 'https://tntdump.com/reviews',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent service! TNT Dumpsters delivered our dumpster right on time and picked it up when we were done. Very professional and competitive pricing. Will definitely use them again for our next project.',
      location: 'West Jordan, UT',
      service: 'Residential Dumpster Rental'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Great experience with TNT Dumpsters. They helped us with our home renovation project and made the waste disposal process so easy. The team was helpful, punctual, and made our project much smoother.',
      location: 'Salt Lake City, UT',
      service: 'Home Renovation Project'
    },
    {
      name: 'Mike Davis',
      rating: 5,
      text: 'Highly recommend! Fast delivery, great customer service, and fair prices. The dumpster was perfect for our garage cleanout project. Will definitely use them again for our next project.',
      location: 'Murray, UT',
      service: 'Garage Cleanout'
    },
    {
      name: 'Lisa Wilson',
      rating: 5,
      text: 'Professional, reliable, and affordable. TNT Dumpsters exceeded our expectations for our commercial project. The team was professional and the service was exactly what we needed.',
      location: 'Sandy, UT',
      service: 'Commercial Dumpster Rental'
    },
    {
      name: 'Robert Brown',
      rating: 5,
      text: 'Outstanding service from start to finish. The team was helpful, punctual, and made our estate cleanout much easier. They handled everything professionally and with care.',
      location: 'Draper, UT',
      service: 'Estate Cleanout'
    },
    {
      name: 'Jennifer Garcia',
      rating: 5,
      text: 'Best dumpster rental company in the area! Quick turnaround, excellent communication, and very reasonable rates. They made our construction project much more manageable.',
      location: 'Riverton, UT',
      service: 'Construction Project'
    },
    {
      name: 'David Miller',
      rating: 5,
      text: 'Fantastic service! TNT Dumpsters provided exactly what we needed for our industrial cleanout. Professional, efficient, and cost-effective. Highly recommend for any waste management needs.',
      location: 'West Jordan, UT',
      service: 'Industrial Cleanout'
    },
    {
      name: 'Amanda Taylor',
      rating: 5,
      text: 'Excellent experience with TNT Dumpsters. They helped us with our restaurant renovation and the service was impeccable. Fast delivery, great communication, and fair pricing.',
      location: 'Salt Lake City, UT',
      service: 'Restaurant Renovation'
    },
    {
      name: 'Chris Anderson',
      rating: 5,
      text: 'Great company to work with! They provided reliable service for our long-term dumpster rental needs. Professional, responsive, and always on time. Highly recommend!',
      location: 'Murray, UT',
      service: 'Long-Term Dumpster Rental'
    }
  ]

  const stats = [
    {
      number: '500+',
      label: 'Happy Customers'
    },
    {
      number: '55+',
      label: 'Years of Experience'
    },
    {
      number: '5.0',
      label: 'Average Rating'
    },
    {
      number: '100%',
      label: 'Satisfaction Rate'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              TNT Dumpsters{' '}
              <span className="text-primary-600">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              See what our satisfied customers are saying about TNT Dumpsters. 
              We take pride in providing exceptional service and building lasting relationships with our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18012099013" className="btn-primary text-center">
                Call Now: +1 (801) 209-9013
              </a>
              <a href="/contact" className="btn-secondary text-center">
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At TNT Dumpsters, we take pride in providing exceptional dumpster services to our customers. 
              Here's what our satisfied clients have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-primary-600 mt-2">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Customers Choose TNT Dumpsters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Service</h3>
                    <p className="text-gray-600">We go above and beyond to ensure every customer receives the best possible service experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reliable & Punctual</h3>
                    <p className="text-gray-600">Our customers can count on us to deliver and pick up dumpsters on time, every time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">We offer fair, transparent pricing without hidden fees or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">With over 55 years serving the Wasatch Front, we understand local needs and regulations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Team</h3>
                    <p className="text-gray-600">Our experienced team provides knowledgeable, friendly service on every project.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="TNT Dumpsters customer reviews and testimonials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Share Your Experience
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We would be grateful if you could share your thoughts about our business with others. 
            Your feedback helps us improve and helps others make informed decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18012099013" className="btn-primary text-center">
              Call to Leave a Review
            </a>
            <a href="/contact" className="btn-secondary text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join our satisfied customers and experience the TNT Dumpsters difference. 
            Contact us today for a free estimate and professional service you can count on.
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
              <Star className="h-5 w-5" />
              <span>5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>55+ Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm 
              serviceType="General Inquiry"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}


