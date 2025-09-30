"use client"

import { useState } from 'react'
import { analytics } from '@/lib/analytics'
import { useFinder } from './FinderContext'

const SIZE_CHIPS = [15, 20, 30, 40] as const

export default function ZipStickyBar() {
  const { setZip, setPreferredSize } = useFinder()
  const [zipLocal, setZipLocal] = useState('')
  const [size, setSize] = useState<number | null>(null)

  const onClick = () => {
    setZip(zipLocal)
    setPreferredSize(size ? String(size) as any : undefined)
    analytics.event('zipsticky_price_click', { zip: zipLocal, size })
    const el = document.getElementById('finder') || document.querySelector('section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden bg-white/95 backdrop-blur border-t border-gray-200 p-3 z-40">
      <div className="flex items-center gap-2">
        <input
          aria-label="ZIP code"
          inputMode="numeric"
          pattern="[0-9]{5}"
          placeholder="ZIP"
          className="flex-1 min-h-11 rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500 px-3"
          value={zipLocal}
          onChange={(e) => setZipLocal(e.target.value)}
        />
        <div className="flex items-center gap-1">
          {SIZE_CHIPS.map((s) => (
            <button key={s} aria-label={`${s} yard`} onClick={() => setSize(s)} className={`min-h-11 px-3 rounded-full border ${size===s?'bg-gray-900 text-white border-gray-900':'bg-white text-gray-700 border-gray-300'}`}>{s}</button>
          ))}
        </div>
        <button onClick={onClick} className="btn-primary min-h-11">Get Price</button>
      </div>
    </div>
  )
}



