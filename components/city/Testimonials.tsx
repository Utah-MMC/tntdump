import React from 'react'
import type { CityData } from '@/lib/cities'

export default function Testimonials({ city }: { city: CityData }) {
  const items = city.local_testimonials || []
  if (items.length === 0) return null
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <blockquote key={i} className="p-5 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-800">“{t.quote}”</p>
              <footer className="mt-2 text-sm text-gray-600">{t.author ? `— ${t.author}` : ''} {t.locality ? `(${t.locality})` : ''}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

