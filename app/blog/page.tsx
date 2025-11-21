import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Rental Blog | TNT Dumpsters | Tips, Guides & News',
  description: 'Expert tips, guides, and news about dumpster rental services. Learn about waste management, project planning, and get the latest updates from TNT Dumpsters.',
  keywords: 'dumpster rental blog, waste management tips, project planning, dumpster rental guides, utah dumpster rental news',
}

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Dumpster Size for Your Project',
    excerpt: 'Learn how to select the perfect dumpster size for your home renovation, construction project, or cleanout. Our comprehensive guide covers all dumpster sizes and their best uses.',
    image: '/images/dumpster2-500x500-2.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2025-01-15',
    category: 'Project Planning',
    readTime: '5 min read',
    slug: 'choose-right-dumpster-size'
  },
  {
    id: 2,
    title: 'What Can and Cannot Go in a Dumpster Rental',
    excerpt: 'Understanding what materials are allowed in dumpster rentals is crucial for a smooth project. Learn about prohibited items and how to dispose of them properly.',
    image: '/images/dumpster3-500x500-1.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2025-01-10',
    category: 'Waste Management',
    readTime: '4 min read',
    slug: 'dumpster-prohibited-items'
  },
  {
    id: 3,
    title: 'Estate Cleanout: A Complete Guide for Families',
    excerpt: 'Navigating estate cleanouts can be overwhelming. Our guide provides step-by-step instructions, tips for organization, and how to handle sensitive situations with care.',
    image: '/images/dumpster2-500x500-2.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2025-01-05',
    category: 'Estate Services',
    readTime: '7 min read',
    slug: 'estate-cleanout-complete-guide'
  },
  {
    id: 4,
    title: 'Commercial Dumpster Rental: What Businesses Need to Know',
    excerpt: 'Businesses have unique waste management needs. Learn about commercial dumpster rental options, compliance requirements, and cost-effective solutions.',
    image: '/images/dumpster2-500x500-2.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2024-12-28',
    category: 'Commercial Services',
    readTime: '6 min read',
    slug: 'commercial-dumpster-rental-guide'
  },
  {
    id: 5,
    title: 'Winter Dumpster Rental: Tips for Cold Weather Projects',
    excerpt: 'Winter projects come with unique challenges. Learn how to plan dumpster rentals during cold weather, including scheduling, placement, and safety considerations.',
    image: '/images/dumpster3-500x500-1.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2024-12-20',
    category: 'Seasonal Tips',
    readTime: '5 min read',
    slug: 'winter-dumpster-rental-tips'
  },
  {
    id: 6,
    title: 'Construction Waste Management: Best Practices',
    excerpt: 'Proper construction waste management is essential for project success. Learn about waste reduction, recycling opportunities, and efficient disposal methods.',
    image: '/images/dumpster2-500x500-2.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2024-12-15',
    category: 'Construction',
    readTime: '8 min read',
    slug: 'construction-waste-management'
  }
  ,{
    id: 7,
    title: 'Dumpster Rentals: The Complete 2025 Guide to Sizes, Prices & Permits',
    excerpt: 'Comprehensive 2025 guide covering sizes, pricing, permits, weight limits, and pro tips to avoid fees.',
    image: '/images/dumpster2-500x500-2.jpeg',
    author: 'TNT Dumpsters Team',
    date: '2025-10-09',
    category: 'Project Planning',
    readTime: '10 min read',
    slug: 'dumpster-rentals-2025-guide'
  }
]

const categories = [
  'All Posts',
  'Project Planning',
  'Waste Management',
  'Estate Services',
  'Commercial Services',
  'Seasonal Tips',
  'Construction'
]

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dumpster Rental Blog
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert tips, guides, and insights for all your waste management needs. From project planning to disposal best practices, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with TNT Dumpsters
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest tips, guides, and updates delivered to your inbox. No spam, just valuable content for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
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
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the perfect dumpster size</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free quote</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Home dumpster rental</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Rentals</h3>
              <p className="text-sm text-gray-600">Business dumpster rental</p>
            </a>
            <a href="/estate-cleanouts" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Estate Cleanouts</h3>
              <p className="text-sm text-gray-600">Professional cleanout services</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find service in your city</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free quote for your dumpster rental needs. Our team is here to help you choose the right solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8012099013" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <a 
                href="/quote" 
                className="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

