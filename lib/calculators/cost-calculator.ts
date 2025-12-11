/**
 * Dumpster Rental Cost Calculator Logic
 * Calculates estimated costs based on size, location, duration, and options
 */

export type DumpsterSize = 10 | 15 | 20 | 30

export interface CostCalculatorInputs {
  size: DumpsterSize
  city: string
  duration: number // days
  options: {
    sameDayDelivery?: boolean
    permitAssistance?: boolean
    heavyDebris?: boolean
  }
}

export interface CostBreakdown {
  basePrice: number
  basePriceRange: { min: number; max: number }
  deliveryFee: number
  rentalPeriod: {
    daysIncluded: number
    extraDays: number
    extraDayFee: number
    extraDayTotal: number
  }
  disposal: {
    tonsIncluded: number
    description: string
  }
  addOns: {
    sameDayDelivery: number
    permitAssistance: number
    heavyDebris: number
  }
  subtotal: number
  estimatedTotal: number
  estimatedRange: { min: number; max: number }
}

/**
 * Base pricing by dumpster size
 * These are average ranges for Utah locations
 */
const BASE_PRICING: Record<DumpsterSize, { min: number; max: number; tonsIncluded: number }> = {
  10: { min: 300, max: 400, tonsIncluded: 1 },
  15: { min: 350, max: 450, tonsIncluded: 2 },
  20: { min: 400, max: 500, tonsIncluded: 2 },
  30: { min: 500, max: 600, tonsIncluded: 3 },
}

/**
 * Additional fee structure
 */
const FEES = {
  extraDayRate: 15, // per day
  sameDayDelivery: { min: 50, max: 75 },
  permitAssistance: 75,
  heavyDebrisUpcharge: 0.10, // 10% of base price
  standardRentalDays: 7, // Days included in base price
}

/**
 * Calculate location-based price adjustment
 * Some cities may have slightly different pricing due to distance
 */
function getLocationMultiplier(city: string): number {
  const lowerCity = city.toLowerCase()

  // Cities further from transfer stations may have slight upcharge
  const farCities = ['herriman', 'hooper', 'west point', 'draper', 'lehi']
  if (farCities.some(c => lowerCity.includes(c))) {
    return 1.05 // 5% upcharge
  }

  return 1.0 // Standard pricing
}

/**
 * Main cost calculation function
 */
export function calculateDumpsterCost(inputs: CostCalculatorInputs): CostBreakdown {
  const { size, city, duration, options } = inputs

  // Get base pricing for selected size
  const basePricing = BASE_PRICING[size]
  const locationMultiplier = getLocationMultiplier(city)

  // Calculate adjusted base price (using midpoint of range)
  const basePrice = Math.round(
    ((basePricing.min + basePricing.max) / 2) * locationMultiplier
  )

  // Adjust range for location
  const basePriceRange = {
    min: Math.round(basePricing.min * locationMultiplier),
    max: Math.round(basePricing.max * locationMultiplier),
  }

  // Delivery is included in base price
  const deliveryFee = 0

  // Calculate rental period costs
  const extraDays = Math.max(0, duration - FEES.standardRentalDays)
  const extraDayTotal = extraDays * FEES.extraDayRate

  const rentalPeriod = {
    daysIncluded: FEES.standardRentalDays,
    extraDays,
    extraDayFee: FEES.extraDayRate,
    extraDayTotal,
  }

  // Disposal information
  const disposal = {
    tonsIncluded: basePricing.tonsIncluded,
    description: `Up to ${basePricing.tonsIncluded} ton${basePricing.tonsIncluded > 1 ? 's' : ''} included`,
  }

  // Calculate add-on costs
  const sameDayDeliveryFee = options.sameDayDelivery
    ? (FEES.sameDayDelivery.min + FEES.sameDayDelivery.max) / 2
    : 0

  const permitAssistanceFee = options.permitAssistance
    ? FEES.permitAssistance
    : 0

  const heavyDebrisFee = options.heavyDebris
    ? Math.round(basePrice * FEES.heavyDebrisUpcharge)
    : 0

  const addOns = {
    sameDayDelivery: sameDayDeliveryFee,
    permitAssistance: permitAssistanceFee,
    heavyDebris: heavyDebrisFee,
  }

  // Calculate totals
  const subtotal = basePrice + extraDayTotal
  const estimatedTotal = Math.round(
    subtotal + sameDayDeliveryFee + permitAssistanceFee + heavyDebrisFee
  )

  // Calculate estimated range (base range + add-ons + extra days)
  const addOnsTotal = sameDayDeliveryFee + permitAssistanceFee + heavyDebrisFee
  const estimatedRange = {
    min: basePriceRange.min + extraDayTotal + addOnsTotal,
    max: basePriceRange.max + extraDayTotal + addOnsTotal,
  }

  return {
    basePrice,
    basePriceRange,
    deliveryFee,
    rentalPeriod,
    disposal,
    addOns,
    subtotal,
    estimatedTotal,
    estimatedRange,
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Generate quote URL with pre-filled parameters
 */
export function generateQuoteUrl(inputs: CostCalculatorInputs): string {
  const params = new URLSearchParams({
    size: inputs.size.toString(),
    city: inputs.city,
    duration: inputs.duration.toString(),
  })

  if (inputs.options.sameDayDelivery) {
    params.append('sameDay', 'true')
  }

  if (inputs.options.permitAssistance) {
    params.append('permit', 'true')
  }

  if (inputs.options.heavyDebris) {
    params.append('heavyDebris', 'true')
  }

  return `/quote?${params.toString()}`
}
