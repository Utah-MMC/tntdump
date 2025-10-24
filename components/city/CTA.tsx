"use client"
import React from 'react'
import type { CityData } from '@/lib/cities'
import { fireContactEvent } from '@/lib/ga'

export default function CTA({ city }: { city: CityData }) {
  const tel = city.phone_cta ? `tel:${city.phone_cta}` : undefined
  const sms = city.sms_cta ? `sms:${city.sms_cta}` : undefined
  const quote = city.quote_url
  return (
    <aside className="sticky bottom-0 z-20 border-t bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom py-3 flex items-center gap-3">
        {tel && (
          <a
            href={tel}
            onClick={() => fireContactEvent({ city: city.city, state: city.state_code, page_path: `/ut/${city.slug}/dumpster-rental`, cta_type: 'tel' })}
            className="flex-1 text-center rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700"
          >
            Call {city.phone_cta}
          </a>
        )}
        {sms && (
          <a
            href={sms}
            onClick={() => fireContactEvent({ city: city.city, state: city.state_code, page_path: `/ut/${city.slug}/dumpster-rental`, cta_type: 'sms' })}
            className="flex-1 text-center rounded-md bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600"
          >
            Text Us
          </a>
        )}
        {quote && (
          <a
            href={quote}
            onClick={() => fireContactEvent({ city: city.city, state: city.state_code, page_path: `/ut/${city.slug}/dumpster-rental`, cta_type: 'quote' })}
            className="flex-1 text-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
          >
            Get Instant Quote
          </a>
        )}
      </div>
    </aside>
  )
}

