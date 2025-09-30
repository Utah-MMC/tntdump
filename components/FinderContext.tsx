"use client"

import { createContext, useContext, useMemo, useState } from 'react'
import type { DumpsterSize } from '@/lib/pricing'

export type Recommendation = {
  sizeYd: number
  bestFor: string
  capacityLoads: number
  weightTons: number
  priceMin: number
  priceMax: number
  drivewayFriendly: boolean
  etaText: string
}

type FinderState = {
  zip: string
  setZip: (z: string) => void
  recommendations: Recommendation[]
  setRecommendations: (r: Recommendation[]) => void
  selectedMaterial: string
  setSelectedMaterial: (m: string) => void
  preferredSize?: DumpsterSize
  setPreferredSize: (s?: DumpsterSize) => void
}

const Ctx = createContext<FinderState | null>(null)

export function FinderProvider({ children }: { children: React.ReactNode }) {
  const [zip, setZip] = useState('')
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Mixed debris')
  const [preferredSize, setPreferredSize] = useState<DumpsterSize | undefined>(undefined)

  const value = useMemo<FinderState>(() => ({ zip, setZip, recommendations, setRecommendations, selectedMaterial, setSelectedMaterial, preferredSize, setPreferredSize }), [zip, recommendations, selectedMaterial, preferredSize])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useFinder() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useFinder must be used within FinderProvider')
  return ctx
}



