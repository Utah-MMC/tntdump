/**
 * Volume Calculator - Calculation Logic
 * Provides functions to calculate debris volume and recommend dumpster sizes
 */

// Types
export interface RoomInput {
  kitchen?: 'small' | 'medium' | 'large' | null
  bathrooms?: number
  bedrooms?: number
  livingAreas?: boolean
  garage?: boolean
  basement?: boolean
  yardOutdoor?: boolean
}

export interface MaterialInput {
  type: string
  amount: number
}

export interface MaterialCheckbox {
  drywall?: boolean
  flooring?: boolean
  cabinets?: boolean
  appliances?: boolean
  furniture?: boolean
  roofing?: boolean
  concrete?: boolean
  yardWaste?: boolean
}

export type MaterialDensity = 'light' | 'medium' | 'heavy'

export interface VolumeCalculationResult {
  totalCubicYards: number
  recommendedSize: 10 | 15 | 20 | 30
  sizeRange?: string
  pickupTruckLoads: number
  estimatedWeight: number // in tons
  materialDensity: MaterialDensity
  reasoning: string[]
  warnings: string[]
}

// Volume estimates by room type (in cubic yards)
const ROOM_VOLUMES = {
  kitchen: {
    small: 4,
    medium: 6,
    large: 8
  },
  bathroom: 3,
  bedroom: 4,
  livingArea: 5,
  garage: 8,
  basement: 12,
  yardOutdoor: 6
}

// Material volume estimates
const MATERIAL_VOLUMES = {
  drywall: 0.0037, // per sq ft (assumes 1/2" thickness)
  flooring: 0.0031, // per sq ft (average thickness)
  roofingShingle: 0.33, // per square (100 sq ft)
  concrete: 1, // already in cubic yards
  furnitureItem: 3, // average per piece
  yardWasteBag: 0.037, // per 30-gallon bag
  appliance: 2, // average per appliance
  cabinet: 1.5 // average per cabinet
}

// Material density factors (lbs per cubic yard)
const MATERIAL_DENSITIES = {
  drywall: 500,
  flooring: 400,
  roofing: 800,
  concrete: 3400,
  furniture: 150,
  yardWaste: 250,
  appliances: 400,
  cabinets: 300,
  mixed: 350
}

/**
 * Calculate debris volume from room-by-room input
 */
export function calculateRoomDebrisVolume(
  rooms: RoomInput,
  materials: MaterialCheckbox
): VolumeCalculationResult {
  let totalVolume = 0
  const reasoning: string[] = []
  const warnings: string[] = []
  let weightedDensitySum = 0
  let totalWeight = 0

  // Calculate volume from rooms
  if (rooms.kitchen) {
    const volume = ROOM_VOLUMES.kitchen[rooms.kitchen]
    totalVolume += volume
    reasoning.push(`Kitchen (${rooms.kitchen}): ${volume} cubic yards`)
  }

  if (rooms.bathrooms && rooms.bathrooms > 0) {
    const volume = rooms.bathrooms * ROOM_VOLUMES.bathroom
    totalVolume += volume
    reasoning.push(`${rooms.bathrooms} Bathroom(s): ${volume} cubic yards`)
  }

  if (rooms.bedrooms && rooms.bedrooms > 0) {
    const volume = rooms.bedrooms * ROOM_VOLUMES.bedroom
    totalVolume += volume
    reasoning.push(`${rooms.bedrooms} Bedroom(s): ${volume} cubic yards`)
  }

  if (rooms.livingAreas) {
    const volume = ROOM_VOLUMES.livingArea
    totalVolume += volume
    reasoning.push(`Living areas: ${volume} cubic yards`)
  }

  if (rooms.garage) {
    const volume = ROOM_VOLUMES.garage
    totalVolume += volume
    reasoning.push(`Garage: ${volume} cubic yards`)
  }

  if (rooms.basement) {
    const volume = ROOM_VOLUMES.basement
    totalVolume += volume
    reasoning.push(`Basement: ${volume} cubic yards`)
  }

  if (rooms.yardOutdoor) {
    const volume = ROOM_VOLUMES.yardOutdoor
    totalVolume += volume
    reasoning.push(`Yard/outdoor: ${volume} cubic yards`)
  }

  // Adjust based on material types selected
  const materialTypes: string[] = []
  if (materials.drywall) {
    materialTypes.push('drywall')
    weightedDensitySum += MATERIAL_DENSITIES.drywall * 0.25
  }
  if (materials.flooring) {
    materialTypes.push('flooring')
    weightedDensitySum += MATERIAL_DENSITIES.flooring * 0.25
  }
  if (materials.cabinets) {
    materialTypes.push('cabinets')
    weightedDensitySum += MATERIAL_DENSITIES.cabinets * 0.15
  }
  if (materials.appliances) {
    materialTypes.push('appliances')
    weightedDensitySum += MATERIAL_DENSITIES.appliances * 0.15
  }
  if (materials.furniture) {
    materialTypes.push('furniture')
    weightedDensitySum += MATERIAL_DENSITIES.furniture * 0.1
  }
  if (materials.roofing) {
    materialTypes.push('roofing')
    weightedDensitySum += MATERIAL_DENSITIES.roofing * 0.2
    warnings.push('Roofing materials are heavy - watch weight limits')
  }
  if (materials.concrete) {
    materialTypes.push('concrete')
    weightedDensitySum += MATERIAL_DENSITIES.concrete * 0.3
    warnings.push('Concrete is extremely heavy - consider a dedicated concrete dumpster')
  }
  if (materials.yardWaste) {
    materialTypes.push('yard waste')
    weightedDensitySum += MATERIAL_DENSITIES.yardWaste * 0.1
  }

  // If no materials selected, use mixed density
  const avgDensity = materialTypes.length > 0 ? weightedDensitySum : MATERIAL_DENSITIES.mixed

  // Calculate weight in tons
  totalWeight = (totalVolume * avgDensity) / 2000

  // Determine material density category
  let densityCategory: MaterialDensity = 'medium'
  if (avgDensity < 300) densityCategory = 'light'
  else if (avgDensity > 600) densityCategory = 'heavy'

  // Add 10% buffer for estimation error
  const bufferedVolume = totalVolume * 1.1

  const recommendation = recommendDumpsterSize(bufferedVolume, totalWeight, densityCategory)

  return {
    totalCubicYards: Math.round(bufferedVolume * 10) / 10,
    ...recommendation,
    estimatedWeight: Math.round(totalWeight * 10) / 10,
    materialDensity: densityCategory,
    reasoning,
    warnings
  }
}

/**
 * Calculate debris volume from material-specific input
 */
export function calculateMaterialDebrisVolume(
  materials: MaterialInput[]
): VolumeCalculationResult {
  let totalVolume = 0
  const reasoning: string[] = []
  const warnings: string[] = []
  let weightedDensitySum = 0
  let totalDensityWeight = 0

  materials.forEach(material => {
    let volume = 0
    let density = MATERIAL_DENSITIES.mixed

    switch (material.type) {
      case 'drywall':
        volume = material.amount * MATERIAL_VOLUMES.drywall
        density = MATERIAL_DENSITIES.drywall
        reasoning.push(`Drywall (${material.amount} sq ft): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'flooring':
        volume = material.amount * MATERIAL_VOLUMES.flooring
        density = MATERIAL_DENSITIES.flooring
        reasoning.push(`Flooring (${material.amount} sq ft): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'roofing':
        volume = material.amount * MATERIAL_VOLUMES.roofingShingle
        density = MATERIAL_DENSITIES.roofing
        reasoning.push(`Roofing (${material.amount} squares): ${Math.round(volume * 10) / 10} cubic yards`)
        warnings.push('Roofing shingles are heavy - watch weight limits')
        break
      case 'concrete':
        volume = material.amount
        density = MATERIAL_DENSITIES.concrete
        reasoning.push(`Concrete: ${material.amount} cubic yards`)
        warnings.push('Concrete is extremely heavy - use a dedicated 12-yard concrete dumpster')
        break
      case 'furniture':
        volume = material.amount * MATERIAL_VOLUMES.furnitureItem
        density = MATERIAL_DENSITIES.furniture
        reasoning.push(`Furniture (${material.amount} items): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'yardWaste':
        volume = material.amount * MATERIAL_VOLUMES.yardWasteBag
        density = MATERIAL_DENSITIES.yardWaste
        reasoning.push(`Yard waste (${material.amount} bags): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'appliances':
        volume = material.amount * MATERIAL_VOLUMES.appliance
        density = MATERIAL_DENSITIES.appliances
        reasoning.push(`Appliances (${material.amount} items): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'cabinets':
        volume = material.amount * MATERIAL_VOLUMES.cabinet
        density = MATERIAL_DENSITIES.cabinets
        reasoning.push(`Cabinets (${material.amount} units): ${Math.round(volume * 10) / 10} cubic yards`)
        break
      case 'mixed':
        volume = material.amount
        density = MATERIAL_DENSITIES.mixed
        reasoning.push(`Mixed debris: ${material.amount} cubic yards (estimated)`)
        break
    }

    totalVolume += volume
    weightedDensitySum += density * volume
    totalDensityWeight += volume
  })

  // Calculate average weighted density
  const avgDensity = totalDensityWeight > 0
    ? weightedDensitySum / totalDensityWeight
    : MATERIAL_DENSITIES.mixed

  // Calculate weight in tons
  const totalWeight = (totalVolume * avgDensity) / 2000

  // Determine material density category
  let densityCategory: MaterialDensity = 'medium'
  if (avgDensity < 300) densityCategory = 'light'
  else if (avgDensity > 600) densityCategory = 'heavy'

  const recommendation = recommendDumpsterSize(totalVolume, totalWeight, densityCategory)

  return {
    totalCubicYards: Math.round(totalVolume * 10) / 10,
    ...recommendation,
    estimatedWeight: Math.round(totalWeight * 10) / 10,
    materialDensity: densityCategory,
    reasoning,
    warnings
  }
}

/**
 * Recommend dumpster size based on volume and weight
 */
function recommendDumpsterSize(
  volume: number,
  weight: number,
  density: MaterialDensity
): Pick<VolumeCalculationResult, 'recommendedSize' | 'sizeRange' | 'pickupTruckLoads' | 'reasoning' | 'warnings'> {
  const reasoning: string[] = []
  const warnings: string[] = []
  let recommendedSize: 10 | 15 | 20 | 30 = 15
  let sizeRange = ''

  // Pickup truck equivalent (average truck bed is ~2 cubic yards)
  const pickupTruckLoads = Math.ceil(volume / 2)

  // Weight limits for standard dumpsters (tons)
  const WEIGHT_LIMITS = {
    15: 2,
    20: 2,
    30: 2
  }

  // Recommend based on volume first
  if (volume <= 12) {
    recommendedSize = 15
    sizeRange = '10-15 yard'
    reasoning.push('Volume fits comfortably in a 15-yard dumpster')
  } else if (volume <= 18) {
    recommendedSize = 20
    sizeRange = '15-20 yard'
    reasoning.push('Volume requires a 20-yard dumpster')
  } else if (volume <= 28) {
    recommendedSize = 30
    sizeRange = '20-30 yard'
    reasoning.push('Volume requires a 30-yard dumpster')
  } else {
    recommendedSize = 30
    sizeRange = '30 yard or multiple'
    reasoning.push('Large volume - may need a 30-yard or multiple dumpsters')
    warnings.push('Very large project - consider multiple trips or containers')
  }

  // Check weight constraints
  if (weight > WEIGHT_LIMITS[recommendedSize]) {
    const overweight = weight - WEIGHT_LIMITS[recommendedSize]
    warnings.push(
      `Estimated weight (${Math.round(weight * 10) / 10} tons) exceeds included tonnage (${WEIGHT_LIMITS[recommendedSize]} tons). ` +
      `Expect overage charges of approximately $${Math.round(overweight * 55)}.`
    )
  }

  // Special case for heavy materials
  if (density === 'heavy' && weight > 4) {
    warnings.push('Heavy materials detected - consider using a 12-yard concrete dumpster to avoid weight fees')
  }

  // Add reasoning based on density
  if (density === 'light') {
    reasoning.push('Light materials - volume is the main constraint')
  } else if (density === 'heavy') {
    reasoning.push('Heavy materials - watch for weight limits')
  }

  return {
    recommendedSize,
    sizeRange,
    pickupTruckLoads,
    reasoning,
    warnings
  }
}

/**
 * Helper function to get size description
 */
export function getDumpsterSizeDescription(size: number): string {
  const descriptions: Record<number, string> = {
    10: 'Small projects, minor cleanouts',
    12: 'Heavy materials only (concrete, brick, asphalt)',
    15: 'Medium renovations, kitchen/bathroom remodels',
    20: 'Large renovations, construction debris',
    30: 'Major construction, commercial projects'
  }
  return descriptions[size] || 'General purpose dumpster'
}

/**
 * Convert cubic yards to other units for context
 */
export function convertCubicYards(cubicYards: number) {
  return {
    cubicFeet: Math.round(cubicYards * 27),
    pickupTruckLoads: Math.ceil(cubicYards / 2),
    garbageBags: Math.ceil(cubicYards / 0.037) // 30-gallon bags
  }
}
