"use client"

import { useEffect, useState } from 'react'
import { getEtaText } from '@/lib/pricing'
import { useFinder } from './FinderContext'

const TABS = ['Mixed', 'Concrete', 'Roofing', 'Yard'] as const
type Tab = typeof TABS[number]

export default function MaterialRules() {
  const { zip, selectedMaterial } = useFinder()
  const [active, setActive] = useState<Tab>('Mixed')

  useEffect(() => {
    if (selectedMaterial.includes('Concrete')) setActive('Concrete')
  }, [selectedMaterial])

  return (
    <section id="material-rules" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <h2 className="text-2xl font-bold">Material rules</h2>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Material rules tabs">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={active===t} onClick={() => setActive(t)} className={`min-h-11 px-4 py-2 rounded-full border ${active===t?'bg-primary-600 text-white border-primary-600':'bg-white text-gray-700 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}>{t}</button>
        ))}
      </div>

      <div className="mt-6">
        {active === 'Mixed' && (
          <div className="space-y-2 text-gray-700">
            <div className="font-semibold">Mixed debris</div>
            <p>Most household debris, wood, drywall, flooring, and roofing. No hazardous waste or liquids.</p>
          </div>
        )}
        {active === 'Concrete' && (
          <div className="space-y-3 text-gray-700">
            <h3 className="text-xl font-semibold">Concrete dumpsters (clean load only)</h3>
            <p><span className="font-semibold">Allowed:</span> Concrete only. No rebar, dirt, trash, or mixed debris.</p>
            <p>Tip: Keeping the load clean avoids contamination fees.</p>
            <p className="text-sm text-gray-600">{getEtaText(zip)}</p>
            <a href="#finder" className="btn-primary inline-block">Check price and availability</a>
          </div>
        )}
        {active === 'Roofing' && (
          <div className="space-y-2 text-gray-700">
            <div className="font-semibold">Roofing shingles and materials</div>
            <p>Bundle shingles. Avoid mixing with household trash where possible.</p>
          </div>
        )}
        {active === 'Yard' && (
          <div className="space-y-2 text-gray-700">
            <div className="font-semibold">Yard waste</div>
            <p>Brush, branches, leaves. No dirt or sod unless arranged.</p>
          </div>
        )}
      </div>
    </section>
  )
}



