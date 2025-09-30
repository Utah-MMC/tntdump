import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SizeComparison from '@/components/SizeComparison'

describe('SizeComparison', () => {
  it('renders four size rows', () => {
    render(<SizeComparison zip="84015" /> as any)
    const rows = screen.getAllByText(/yd/)
    expect(rows.length).toBeGreaterThanOrEqual(4)
  })
})


