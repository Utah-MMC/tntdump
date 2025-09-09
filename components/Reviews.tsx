import { Star } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent service! T&T Dumpsters delivered our dumpster right on time and picked it up when we were done. Very professional and competitive pricing.',
      location: 'West Jordan, UT'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Great experience with T&T Dumpsters. They helped us with our home renovation project and made the waste disposal process so easy.',
      location: 'Salt Lake City, UT'
    },
    {
      name: 'Mike Davis',
      rating: 5,
      text: 'Highly recommend! Fast delivery, great customer service, and fair prices. Will definitely use them again for our next project.',
      location: 'Murray, UT'
    },
    {
      name: 'Lisa Wilson',
      rating: 5,
      text: 'Professional, reliable, and affordable. T&T Dumpsters exceeded our expectations for our commercial project.',
      location: 'Sandy, UT'
    },
    {
      name: 'Robert Brown',
      rating: 5,
      text: 'Outstanding service from start to finish. The team was helpful, punctual, and made our estate cleanout much easier.',
      location: 'Draper, UT'
    },
    {
      name: 'Jennifer Garcia',
      rating: 5,
      text: 'Best dumpster rental company in the area! Quick turnaround, excellent communication, and very reasonable rates.',
      location: 'Riverton, UT'
    }
  ]

  return (
    <section className="section-padding bg-[#0003d5]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Here's what our satisfied customers are saying...
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            At T&T Dumpsters, we take pride in providing exceptional dumpster services to our customers. We would be grateful if you could share your thoughts about our business with others. Your feedback helps us improve and helps others make informed decisions.
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
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-blue-100 mb-6">
            Please take a moment to leave a review of T&T Dumpsters and let others know what you think.
          </p>
          <a href="/reviews" className="btn-primary">
            Learn More About T&T Dumpsters
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews









