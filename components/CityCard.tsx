import Link from 'next/link'
import Image from 'next/image'

interface CityCardProps {
  city: string
  state: string
  description: string
  image: string
  slug: string
  services?: string[]
}

const CityCard = ({ city, state, description, image, slug, services = [] }: CityCardProps) => {
  return (
    <Link href={`/dumpster-rental-${slug}-ut`} className="group block h-full">
      <div className="bg-white h-full flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={`Dumpster rental services in ${city}, ${state}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={70}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">
              {city}, {state}
            </h3>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          
          {services.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Services:</h4>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {service}
                  </span>
                ))}
                {services.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{services.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Learn More →
            </span>
            <div className="text-sm text-gray-500">
              Dumpster Rental
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CityCard
