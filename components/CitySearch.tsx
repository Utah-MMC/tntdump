'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface City {
  name: string
  slug: string
  description: string
  features: string[]
  image: string
}

interface CitySearchProps {
  cities: City[]
}

export default function CitySearch({ cities }: CitySearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                Found {filteredCities.length} city{filteredCities.length !== 1 ? 'ies' : 'y'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      {filteredCities.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No cities found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search terms</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="btn-primary"
          >
            Show All Cities
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCities.map((city, index) => (
            <Link 
              key={city.slug} 
              href={`/dumpster-rental-${city.slug}-ut`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
            <div className="relative h-48 overflow-hidden">
                <Image
                  src={city.image}
                  alt={`Dumpster rental services in ${city.name}`}
                  fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                quality={70}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{city.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {city.description}
                </p>
                <div className="space-y-2">
                  {city.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  View Services →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
