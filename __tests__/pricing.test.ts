import { describe, it, expect } from 'vitest'
import { getPriceRangeForSize, getZipPrefix } from '@/lib/pricing'

describe('pricing helper', () => {
  it('extracts zip prefix', () => {
    expect(getZipPrefix('84015')).toBe('840')
    expect(getZipPrefix('abcde')).toBeNull()
  })

  it('returns default range for unknown zip', () => {
    const [min, max] = getPriceRangeForSize('99999', '20')
    expect(min).toBeGreaterThan(0)
    expect(max).toBeGreaterThan(min)
  })
})



