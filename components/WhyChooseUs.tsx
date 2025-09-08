import { CheckCircle, Clock, DollarSign, MapPin, Truck, Users } from 'lucide-react'

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Over 55 Years of Experience',
      description: 'Decades of expertise in waste management and dumpster rental services.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Prices',
      description: 'Best value for your money without compromising on service quality.'
    },
    {
      icon: CheckCircle,
      title: 'Free Same-Day Estimates',
      description: 'Get quick, accurate quotes to make informed decisions fast.'
    },
    {
      icon: MapPin,
      title: 'Locally Owned',
      description: 'Family-owned business that understands and serves our community.'
    },
    {
      icon: Truck,
      title: 'Quick Turnaround Times',
      description: 'Fast delivery and pickup to keep your project on schedule.'
    },
    {
      icon: Users,
      title: 'Fast Delivery',
      description: 'Reliable and prompt service when you need it most.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            Why T&T Dumpsters is Your Best Choice for Waste Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choosing T&T Dumpsters for your waste management needs means choosing a company with a proven track record of reliability and excellence. Our 55 years of experience in the industry, coupled with our commitment to fast delivery and quick turnaround times, ensures that we can handle any job, big or small.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-primary-50 transition-colors duration-200 card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            We offer free same-day estimates, allowing you to make informed decisions quickly. Our competitive pricing ensures value for money without compromising on service quality. As a family-owned, locally owned business, we understand the needs of our community and are committed to providing personalized service.
          </p>
          <a href="tel:+18012099013" className="btn-primary">
            Request Call Back
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs








