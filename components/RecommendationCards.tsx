"use client"

import { analytics } from '@/lib/analytics'
import { useFinder } from './FinderContext'

type Recommendation = {
  sizeYd: number
  bestFor: string
  capacityLoads: number
  weightTons: number
  priceMin: number
  priceMax: number
  drivewayFriendly: boolean
  etaText: string
}

export default function RecommendationCards({ recommendations = [], zip = '' }: { recommendations?: Recommendation[]; zip?: string }) {
  const { recommendations: recFromCtx, zip: zipFromCtx } = useFinder()
  const recs = (recommendations.length ? recommendations : recFromCtx) as Recommendation[]
  const zipVal = zip || zipFromCtx
  if (!recs.length) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[15,20,30].map((size) => (
          <div key={size} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="h-5 w-24 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-40 bg-gray-100 rounded" />
            <div className="h-4 w-32 bg-gray-100 rounded mt-4" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recs.map((rec) => (
        <article key={rec.sizeYd} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{rec.sizeYd}-yard Dumpster</h3>
              <p className="text-gray-600">{rec.bestFor}</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200">Same-day delivery</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">SMS updates</span>
            </div>
          </div>
          <ul className="text-sm text-gray-700 mt-3 space-y-1">
            <li>~{rec.capacityLoads} pickup loads • {rec.weightTons} tons included • {rec.drivewayFriendly ? 'Driveway-friendly' : 'Requires street placement'}</li>
          </ul>
          <div className="mt-4 font-semibold">From ${rec.priceMin}–${rec.priceMax} <span className="font-normal text-gray-600">(7 days, delivery included)</span></div>
          <div className="text-xs text-gray-500">{rec.etaText}</div>
          <div className="mt-5 flex gap-3">
            <a
              href={`/quote?size=${rec.sizeYd}&zip=${encodeURIComponent(zipVal)}`}
              className="btn-primary"
              onClick={() => analytics.event('recommendation_book_click', { size: rec.sizeYd, zip: zipVal })}
            >Book now</a>
            <a href="tel:+18012099013" className="btn-secondary" onClick={() => analytics.event('phone_click')}>Talk to a pro</a>
          </div>
        </article>
      ))}
    </div>
  )
}


