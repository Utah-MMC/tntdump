"use client"

import React from 'react'
import { DumpsterSize, getPriceRangeForSize, isDrivewayFriendly } from '@/lib/pricing'
import { useMemo, useState } from 'react'

export default function SizeComparison({ zip = '' }: { zip?: string }) {
  const [showWhatFits, setShowWhatFits] = useState(false)

  const rows = useMemo(() => {
    const sizes: Array<{ size: DumpsterSize; bestFor: string; capacity: string; loads: number; weight: number }> = [
      { size: '15', bestFor: 'Kitchen/bath demo', capacity: '15', loads: 6, weight: 2 },
      { size: '20', bestFor: 'Garage cleanout', capacity: '20', loads: 8, weight: 3 },
      { size: '30', bestFor: 'Larger remodels', capacity: '30', loads: 12, weight: 4 },
      { size: '40', bestFor: 'Major projects', capacity: '40', loads: 16, weight: 5 },
    ]
    return sizes.map((s) => {
      const [min, max] = getPriceRangeForSize(zip, s.size)
      const fits = isDrivewayFriendly(zip, s.size)
      return { ...s, price: `$${min}–$${max}`, fits }
    })
  }, [zip])

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Compare dumpster sizes</h2>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" checked={showWhatFits} onChange={() => setShowWhatFits((v) => !v)} />
          Show what fits
        </label>
      </div>
      <p className="text-sm text-gray-600 mt-1">*Price ranges vary by ZIP; overage fees may apply.</p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 pr-6">Size</th>
              <th className="py-3 pr-6">Best for</th>
              <th className="py-3 pr-6">Capacity (yd³ / pickup loads)</th>
              <th className="py-3 pr-6">Weight included (tons)</th>
              <th className="py-3 pr-6">Typical price*</th>
              <th className="py-3 pr-6">Fits in driveway?</th>
              <th className="py-3">Book</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.size} className="border-b">
                <td className="py-3 pr-6 font-medium">{r.size} yd</td>
                <td className="py-3 pr-6">{r.bestFor}</td>
                <td className="py-3 pr-6">{r.capacity} / ~{r.loads}</td>
                <td className="py-3 pr-6">{r.weight} tons</td>
                <td className="py-3 pr-6">{r.price}</td>
                <td className="py-3 pr-6">{r.fits ? 'Yes' : 'No'}</td>
                <td className="py-3">
                  <a className="btn-primary" href={`/quote?size=${r.size}&zip=${encodeURIComponent(zip)}`}>Book</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showWhatFits && (
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="rounded-xl border p-3">
            <div className="font-semibold mb-1">Illustrations</div>
            <div className="text-gray-600">Visual size guides for 15/20/30/40 yd dumpsters.</div>
          </div>
          <div className="rounded-xl border p-3">
            <div className="font-semibold mb-1">Common items</div>
            <ul className="list-disc pl-5">
              <li>Furniture, drywall, flooring, roofing bundles</li>
              <li>Clean concrete in dedicated concrete dumpsters</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}


