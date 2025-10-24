import React from 'react'
import Image from 'next/image'
import type { CityData } from '@/lib/cities'

export default function LocalGallery({ city }: { city: CityData }) {
  const items = city.gallery || []
  if (items.length === 0) return null
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Project Photos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.slice(0, 6).map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt || `${city.city} dumpster rental photo`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

