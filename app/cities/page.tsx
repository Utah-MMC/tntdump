import { Metadata } from 'next'
import Image from 'next/image'
import CitySearch from '@/components/CitySearch'

export const metadata: Metadata = {
  title: 'Dumpster Rental Cities We Serve | T&T Dumpsters | Utah',
  description: 'Professional dumpster rental services across Utah. Serving Salt Lake City, Provo, Orem, Sandy, West Jordan, Ogden, and many more cities with fast delivery and competitive pricing.',
  keywords: 'dumpster rental cities, utah dumpster rental, salt lake city dumpster rental, provo dumpster rental, orem dumpster rental, sandy dumpster rental, west jordan dumpster rental, ogden dumpster rental',
}

const cities = [
  {
    name: 'Salt Lake City',
    slug: 'salt-lake-city',
    description: 'Utah\'s capital city with diverse neighborhoods from downtown to the Avenues',
    features: ['Downtown office cleanouts', 'Sugar House renovations', 'Avenues residential projects'],
    image: '/images/bigstock-Salt-Lake-City-Utah-USA-down-360462808-1536x1025.webp'
  },
  {
    name: 'West Jordan',
    slug: 'west-jordan',
    description: 'Growing community with new construction and established neighborhoods',
    features: ['New construction projects', 'Residential cleanouts', 'Commercial developments'],
    image: '/images/construction-site-3688252_1280.jpg'
  },
  {
    name: 'Provo',
    slug: 'provo',
    description: 'Home of BYU and vibrant Utah Valley community',
    features: ['BYU area projects', 'Student housing cleanouts', 'University area services'],
    image: '/images/pexels-cottonbro-4551310.jpg'
  },
  {
    name: 'Orem',
    slug: 'orem',
    description: 'Family-friendly heart of Utah Valley',
    features: ['Family home renovations', 'Commercial developments', 'Utah Valley services'],
    image: '/images/pexels-pamelamariephoto-2625896.jpg'
  },
  {
    name: 'Sandy',
    slug: 'sandy',
    description: 'Gateway to Little Cottonwood Canyon and outdoor recreation',
    features: ['Mountain community projects', 'Outdoor recreation support', 'Gateway area services'],
    image: '/images/pexels-jplenio-2566826.jpg'
  },
  {
    name: 'West Valley City',
    slug: 'west-valley-city',
    description: 'Utah\'s second-largest city with diverse community',
    features: ['Diverse community projects', 'Commercial developments', 'Multi-cultural services'],
    image: '/images/pexels-rodrigo-eder-1347087-2846205.jpg'
  },
  {
    name: 'Ogden',
    slug: 'ogden',
    description: 'Historic railroad city and northern Utah gateway',
    features: ['Historic district projects', 'Railroad area services', 'Northern Utah support'],
    image: '/images/pexels-olly-3760529.jpg'
  },
  {
    name: 'Layton',
    slug: 'layton',
    description: 'Davis County gateway and military community',
    features: ['Military community projects', 'Davis County developments', 'Northern Utah support'],
    image: '/images/pexels-olly-3771111.jpg'
  },
  {
    name: 'Taylorsville',
    slug: 'taylorsville',
    description: 'Salt Lake Valley crossroads and family community',
    features: ['Family community projects', 'Salt Lake Valley services', 'Community center support'],
    image: '/images/pexels-cottonbro-4888489.jpg'
  },
  {
    name: 'South Jordan',
    slug: 'south-jordan',
    description: 'Growing southern Salt Lake Valley community',
    features: ['New development projects', 'Southern Salt Lake Valley services', 'Growing community support'],
    image: '/images/pexels-cristian-rojas-8447756.jpg'
  },
  {
    name: 'Lehi',
    slug: 'lehi',
    description: 'Heart of Utah\'s tech corridor and Silicon Slopes',
    features: ['Tech corridor projects', 'Utah tech hub support', 'Commercial developments'],
    image: '/images/pexels-emmet-35167-128421.jpg'
  },
  {
    name: 'Murray',
    slug: 'murray',
    description: 'Central Salt Lake Valley crossroads',
    features: ['Central valley projects', 'Crossroads services', 'Salt Lake Valley support'],
    image: '/images/pexels-ihsanaditya-28196491.jpg'
  },
  {
    name: 'Draper',
    slug: 'draper',
    description: 'Mountain gateway to Utah County',
    features: ['Mountain community projects', 'Mountain area services', 'Utah County support'],
    image: '/images/pexels-llucams-2002142.jpg'
  },
  {
    name: 'Riverton',
    slug: 'riverton',
    description: 'Family community in southern Salt Lake Valley',
    features: ['Family community projects', 'Southern Salt Lake Valley services', 'Growing community support'],
    image: '/images/pexels-matreding-9669805.jpg'
  },
  {
    name: 'Herriman',
    slug: 'herriman',
    description: 'Beautiful mountain community setting',
    features: ['Mountain community projects', 'Mountain area services', 'Beautiful community support'],
    image: '/images/pexels-paggiarofrancesco-938044.jpg'
  },
  {
    name: 'Bountiful',
    slug: 'bountiful',
    description: 'Family community in Davis County',
    features: ['Family community projects', 'Davis County services', 'Family-oriented support'],
    image: '/images/pexels-rstephens-33501308.jpg'
  },
  {
    name: 'Clearfield',
    slug: 'clearfield',
    description: 'Northern Utah military community',
    features: ['Military community projects', 'Northern Utah services', 'Military family support'],
    image: '/images/pexels-stijn-dijkstra-1306815-2583836.jpg'
  },
  {
    name: 'Midvale',
    slug: 'midvale',
    description: 'Central Salt Lake Valley community',
    features: ['Central valley projects', 'Central Salt Lake Valley services', 'Community support'],
    image: '/images/pexels-tomfisk-3181031.jpg'
  },
  {
    name: 'American Fork',
    slug: 'american-fork',
    description: 'Family community in Utah Valley',
    features: ['Family community projects', 'Utah Valley services', 'Family-oriented support'],
    image: '/images/pexels-triemli-33520761.jpg'
  },
  {
    name: 'Kaysville',
    slug: 'kaysville',
    description: 'Davis County family area',
    features: ['Family community projects', 'Davis County services', 'Family-oriented support'],
    image: '/images/pexels-wendelinjacober-1411392.jpg'
  },
  {
    name: 'Pleasant Grove',
    slug: 'pleasant-grove',
    description: 'Utah Valley family community',
    features: ['Family community projects', 'Utah Valley services', 'Family-oriented support'],
    image: '/images/roof-truss-3339206_1280.jpg'
  },
  {
    name: 'Roy',
    slug: 'roy',
    description: 'Northern Utah community',
    features: ['Residential projects', 'Northern Utah services', 'Local community support'],
    image: '/images/debris-5590900_1280.jpg'
  },
  {
    name: 'Centerville',
    slug: 'centerville',
    description: 'Davis County family community',
    features: ['Family community projects', 'Davis County services', 'Family-oriented support'],
    image: '/images/debris-6957869_1280.jpg'
  },
  {
    name: 'Farmington',
    slug: 'farmington',
    description: 'Historic Davis County community',
    features: ['Historic community projects', 'Davis County services', 'Historic preservation support'],
    image: '/images/demolition-167738_1280.jpg'
  },
  {
    name: 'North Salt Lake',
    slug: 'north-salt-lake',
    description: 'Gateway to Davis County',
    features: ['Gateway community projects', 'Davis County services', 'Gateway area support'],
    image: '/images/IMG_0336.jpg'
  },
  {
    name: 'Woods Cross',
    slug: 'woods-cross',
    description: 'Davis County family community',
    features: ['Family community projects', 'Davis County services', 'Family-oriented support'],
    image: '/images/IMG_0350.jpg'
  },
  {
    name: 'Syracuse',
    slug: 'syracuse',
    description: 'Growing Davis County community',
    features: ['Growing community projects', 'Davis County services', 'Expanding community support'],
    image: '/images/IMG_3190.jpg'
  },
  {
    name: 'Clinton',
    slug: 'clinton',
    description: 'Northern Davis County community',
    features: ['Northern community projects', 'Davis County services', 'Northern area support'],
    image: '/images/Construction-Rental-480x480.jpg'
  },
  {
    name: 'West Point',
    slug: 'west-point',
    description: 'Northern Utah community',
    features: ['Northern community projects', 'Northern Utah services', 'Local community support'],
    image: '/images/Lawn-Mower-Square-480x480.jpg'
  },
  {
    name: 'Hooper',
    slug: 'hooper',
    description: 'Rural Weber County community',
    features: ['Rural community projects', 'Weber County services', 'Rural area support'],
    image: '/images/15-NEW-01.png'
  },
  {
    name: 'Riverdale',
    slug: 'riverdale',
    description: 'Weber County community',
    features: ['Community projects', 'Weber County services', 'Local community support'],
    image: '/images/20-yard-roll-off-dumpster-rental-graphic-labeled.jpg'
  }
]

export default function CitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tand-t-dumpsters-hero-home-1920w.webp"
            alt="Utah Cities We Serve"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Cities We Serve
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Professional dumpster rental services across Utah with local expertise and fast delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18012099013" className="btn-primary text-lg px-8 py-3">
              Call (801) 209-9013
            </a>
            <a href="#cities" className="btn-secondary text-lg px-8 py-3">
              View All Cities
            </a>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Dumpster Rental Across Utah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve over 30 cities across Utah with local expertise, fast delivery, and competitive pricing. 
              Each city has unique characteristics and we tailor our services to meet local needs.
            </p>
          </div>

          <CitySearch cities={cities} />

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See Your City?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We serve many more cities and areas throughout Utah. Contact us to see if we can help with your dumpster rental needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+18012099013" className="btn-primary text-lg px-8 py-3">
                  Call (801) 209-9013
                </a>
                <a href="/contact" className="btn-secondary text-lg px-8 py-3">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#0003d5] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose T&T Dumpsters?
            </h2>
            <p className="text-xl text-blue-100">
              Local expertise serving Utah communities for over 55 years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day delivery available across Utah</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Best rates in Utah with free estimates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-blue-100">Family-owned business serving Utah since 1965</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here to help Utah residents</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
