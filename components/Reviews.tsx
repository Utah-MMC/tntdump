import { Star } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent service! TNT Dumpsters delivered our dumpster right on time and picked it up when we were done. Very professional and competitive pricing.',
      location: 'West Jordan, UT',
      service: 'Residential Renovation'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Great experience with TNT Dumpsters. They helped us with our home renovation project and made the waste disposal process so easy.',
      location: 'Salt Lake City, UT',
      service: 'Home Renovation'
    },
    {
      name: 'Mike Davis',
      rating: 5,
      text: 'Highly recommend! Fast delivery, great customer service, and fair prices. Will definitely use them again for our next project.',
      location: 'Murray, UT',
      service: 'Garage Cleanout'
    },
    {
      name: 'Lisa Wilson',
      rating: 5,
      text: 'Professional, reliable, and affordable. TNT Dumpsters exceeded our expectations for our commercial project.',
      location: 'Sandy, UT',
      service: 'Commercial Project'
    },
    {
      name: 'Robert Brown',
      rating: 5,
      text: 'Outstanding service from start to finish. The team was helpful, punctual, and made our estate cleanout much easier.',
      location: 'Draper, UT',
      service: 'Estate Cleanout'
    },
    {
      name: 'Jennifer Garcia',
      rating: 5,
      text: 'Best dumpster rental company in the area! Quick turnaround, excellent communication, and very reasonable rates.',
      location: 'Riverton, UT',
      service: 'Construction Project'
    },
    {
      name: 'David Martinez',
      rating: 5,
      text: 'TNT Dumpsters made our office renovation so much easier. Professional service, on-time delivery, and great pricing.',
      location: 'South Jordan, UT',
      service: 'Office Renovation'
    },
    {
      name: 'Amanda Thompson',
      rating: 5,
      text: 'Used TNT Dumpsters for our restaurant remodel. They were flexible with scheduling and handled everything professionally.',
      location: 'Taylorsville, UT',
      service: 'Restaurant Renovation'
    },
    {
      name: 'Mark Anderson',
      rating: 5,
      text: 'Family-owned business with excellent customer service. They helped us choose the right size dumpster for our project.',
      location: 'Midvale, UT',
      service: 'Home Improvement'
    }
  ]

  return (
    <section className="section-padding bg-[#0003d5]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Here's what our satisfied customers are saying...
          </h2>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto">
            At TNT Dumpsters, we take pride in providing exceptional dumpster services to our customers. We would be grateful if you could share your thoughts about our business with others. Your feedback helps us improve and helps others make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                  <p className="text-xs text-blue-600 mt-1">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Short testimonials */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white rounded-lg p-4 text-gray-700 italic">“Fast drop-off, careful placement, and fair rate. Exactly what I needed for a roof replacement in Lehi.” — Megan, Lehi (roof replacement)</blockquote>
          <blockquote className="bg-white rounded-lg p-4 text-gray-700 italic">“Friendly team and quick pick-up. This was the easiest local dumpster rental I’ve used.” — Brian, West Jordan (local dumpster rental)</blockquote>
          <blockquote className="bg-white rounded-lg p-4 text-gray-700 italic">“Clean truck, on-time delivery, and perfect size for our bathroom remodel.” — Alice, Sandy (bathroom remodel)</blockquote>
          <blockquote className="bg-white rounded-lg p-4 text-gray-700 italic">“We booked a roll off dumpster and finished ahead of schedule thanks to their reliable service.” — Omar, Provo (roll off dumpster)</blockquote>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-blue-50 mb-6">
            Please take a moment to leave a review of TNT Dumpsters and let others know what you think.
          </p>
          <a href="/reviews" className="btn-primary">
            Learn More About TNT Dumpsters
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews













