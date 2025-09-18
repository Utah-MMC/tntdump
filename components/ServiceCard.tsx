'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  slug: string
  features?: string[]
  price?: string
}

const ServiceCard = ({ title, description, image, slug, features = [], price }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <Link href={`/services/${slug}`} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          {!imageError ? (
            <Image
              src={image}
              alt={`${title} dumpster rental services`}
              fill
              className={`object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center text-blue-600">
                <div className="text-4xl mb-2">🚛</div>
                <div className="text-sm font-semibold">{title}</div>
              </div>
            </div>
          )}
          {imageLoading && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>
            {price && (
              <p className="text-yellow-400 font-semibold text-sm">
                Starting at {price}
              </p>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          
          {features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Learn More →
            </span>
            <div className="text-sm text-gray-500">
              Get Quote
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
