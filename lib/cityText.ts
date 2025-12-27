export function summarizeNeighborhoods(neighborhoods?: string[], maxItems = 3): string {
  const list = (neighborhoods || []).map((n) => n.trim()).filter(Boolean)
  if (list.length === 0) return 'local neighborhoods'
  return list.slice(0, maxItems).join(', ')
}

export function getNeighborhoodPair(neighborhoods?: string[]): { first: string; second: string } {
  const list = (neighborhoods || []).map((n) => n.trim()).filter(Boolean)
  if (list.length >= 2) return { first: list[0], second: list[1] }
  if (list.length === 1) return { first: list[0], second: 'surrounding areas' }
  return { first: 'downtown', second: 'surrounding areas' }
}

export function summarizeZipCodes(zips?: string[]): string {
  const list = (zips || []).map((z) => z.trim()).filter(Boolean)
  if (list.length === 0) return 'local ZIP codes'
  return list.join(', ')
}
