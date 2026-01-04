"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { analytics } from '@/lib/analytics'
import { DumpsterSize, getEtaText, getPriceRangeForSize, isDrivewayFriendly } from '@/lib/pricing'
import { useFinder } from './FinderContext'

type ProjectType = 'Home' | 'Contractor' | 'Business'
type MaterialType = 'Mixed debris' | 'Concrete (clean)' | 'Roofing' | 'Yard waste'
type AmountType = 'Pickup load' | 'Small room' | 'Whole house' | 'Major remodel'
type DurationType = '1–3 days' | '4–7 days' | '8–14 days'

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

function computeRecommendedSizes(project: ProjectType, material: MaterialType, amount: AmountType): Array<DumpsterSize> {
  if (material === 'Concrete (clean)') return ['15', '20']
  if (amount === 'Pickup load') return ['15', '20']
  if (amount === 'Small room') return ['20', '30']
  if (amount === 'Whole house') return ['30']
  return ['20', '30']
}

export default function DumpsterFinder() {
  const { setZip: setZipCtx, setRecommendations: setRecommendationsCtx, setSelectedMaterial } = useFinder()
  const [projectType, setProjectType] = useState<ProjectType>('Home')
  const [material, setMaterial] = useState<MaterialType>('Mixed debris')
  const [amount, setAmount] = useState<AmountType>('Pickup load')
  const [duration, setDuration] = useState<DurationType>('4–7 days')
  const [zip, setZip] = useState('')
  const [error, setError] = useState<string | null>(null)

  const recSizes = useMemo(() => computeRecommendedSizes(projectType, material, amount), [projectType, material, amount])

  const recommendations = useMemo<Recommendation[]>(() => {
    return recSizes.map((s) => {
      const [min, max] = getPriceRangeForSize(zip, s)
      const friendly = isDrivewayFriendly(zip, s)
      const eta = getEtaText(zip)
      const bestFor =
        s === '15'
          ? 'Kitchen/bath demo'
          : s === '20'
          ? 'Garage cleanout'
          : s === '30'
          ? 'Larger remodels'
          : 'Major projects'
      const capacityLoads = s === '15' ? 6 : s === '20' ? 8 : s === '30' ? 12 : 16
      const weightTons = s === '15' ? 2 : s === '20' ? 3 : s === '30' ? 4 : 5
      return {
        sizeYd: Number(s),
        bestFor,
        capacityLoads,
        weightTons,
        priceMin: min,
        priceMax: max,
        drivewayFriendly: friendly,
        etaText: eta,
      }
    })
  }, [recSizes, zip])

  useEffect(() => {
    if (material === 'Concrete (clean)') {
      const el = document.getElementById('material-rules')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [material])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^\d{5}$/.test(zip)) {
      setError('Please enter a valid 5-digit ZIP code')
      return
    }
    setError(null)
    setZipCtx(zip)
    setRecommendationsCtx(recommendations)
    analytics.event('finder_submit', { projectType, material, amount, duration, zip })
    const recEl = document.getElementById('recommendations')
    if (recEl) recEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const primaryCtaRef = useRef<HTMLButtonElement | null>(null)

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Find the right dumpster in 60 seconds</h1>
      <p className="text-gray-600 mt-2">Answer a few questions and get instant size recommendations, ZIP-based pricing, and earliest delivery times.</p>

      <div className="mt-4 text-sm text-gray-700 flex items-center gap-2 flex-wrap">
        <span>Same-day delivery*</span>
        <span className="text-gray-100">•</span>
        <span>Driveway protection</span>
        <span className="text-gray-100">•</span>
        <span>SMS updates</span>
      </div>
      <div className="text-xs text-gray-600 mt-1">*Order by 10am for most ZIP codes.</div>

      <form onSubmit={onSubmit} className="mt-6 space-y-6" aria-labelledby="dumpster-finder">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-12">
            <label className="block text-sm font-medium mb-2">Project type</label>
            <div role="tablist" aria-label="Project type" className="flex flex-wrap gap-2">
              {(['Home','Contractor','Business'] as ProjectType[]).map((pt) => (
                <button
                  key={pt}
                  type="button"
                  role="tab"
                  aria-selected={projectType === pt}
                  onClick={() => setProjectType(pt)}
                  className={`min-h-11 px-4 py-2 rounded-full border ${projectType===pt?'bg-primary-600 text-white border-primary-600':'bg-white text-gray-700 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >{pt}</button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium mb-2">Material</label>
            <select
              aria-label="Material"
              value={material}
              onChange={(e) => { const m = e.target.value as MaterialType; setMaterial(m); setSelectedMaterial(m) }}
              className="w-full min-h-11 rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            >
              {(['Mixed debris','Concrete (clean)','Roofing','Yard waste'] as MaterialType[]).map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <div className="flex flex-col gap-2" role="group" aria-label="Amount">
              {(['Pickup load','Small room','Whole house','Major remodel'] as AmountType[]).map((a) => (
                <label key={a} className={`flex items-center gap-2 p-2 rounded-lg border ${amount===a?'border-primary-500':'border-gray-300'}`}>
                  <input type="radio" name="amount" value={a} checked={amount===a} aria-label={`Select ${a} amount`} onChange={() => setAmount(a)} className="h-4 w-4" />
                  <span>{a}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium mb-2">Duration</label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Duration">
              {(['1–3 days','4–7 days','8–14 days'] as DurationType[]).map((d) => (
                <button key={d} type="button" onClick={() => setDuration(d)} className={`min-h-11 px-3 py-2 rounded-full border ${duration===d?'bg-gray-900 text-white border-gray-900':'bg-white text-gray-700 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}>{d}</button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <label htmlFor="zip" className="block text-sm font-medium mb-2">ZIP code</label>
            <input
              id="zip"
              inputMode="numeric"
              pattern="[0-9]{5}"
              aria-invalid={!!error}
              aria-describedby={error ? 'zip-error' : undefined}
              placeholder="e.g., 84015"
              value={zip}
              onChange={(e) => { setZip(e.target.value); setZipCtx(e.target.value) }}
              className="w-full min-h-11 rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            />
            {error && <p id="zip-error" className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button ref={primaryCtaRef} type="submit" className="btn-primary min-h-11">See recommendations</button>
          <a href="tel:+18012099013" className="btn-secondary min-h-11" onClick={() => analytics.event('phone_click')}>Call or text (801) 209-9013</a>
        </div>
      </form>

      {/* Preview of recommendations inline */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.slice(0,3).map((r) => (
          <div key={r.sizeYd} className="rounded-2xl border border-gray-200 p-4">
            <div className="font-semibold">{r.sizeYd}-yard Dumpster</div>
            <div className="text-sm text-gray-600">{r.bestFor}</div>
            <div className="text-sm mt-2">From ${r.priceMin === r.priceMax ? r.priceMin : `${r.priceMin}–${r.priceMax}`}</div>
            <div className="text-xs text-gray-600">{r.etaText}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


