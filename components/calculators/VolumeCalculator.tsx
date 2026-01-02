'use client'

import { useState } from 'react'
import {
  Calculator,
  Home,
  Package,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Trash2,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react'
import {
  calculateRoomDebrisVolume,
  calculateMaterialDebrisVolume,
  convertCubicYards,
  getDumpsterSizeDescription,
  type RoomInput,
  type MaterialInput,
  type MaterialCheckbox,
  type VolumeCalculationResult
} from '@/lib/calculators/volume-calculator'

type CalculationMode = 'room' | 'material'

export default function VolumeCalculator() {
  const [mode, setMode] = useState<CalculationMode>('room')
  const [result, setResult] = useState<VolumeCalculationResult | null>(null)

  // Room mode state
  const [rooms, setRooms] = useState<RoomInput>({
    kitchen: null,
    bathrooms: 0,
    bedrooms: 0,
    livingAreas: false,
    garage: false,
    basement: false,
    yardOutdoor: false
  })

  const [roomMaterials, setRoomMaterials] = useState<MaterialCheckbox>({
    drywall: false,
    flooring: false,
    cabinets: false,
    appliances: false,
    furniture: false,
    roofing: false,
    concrete: false,
    yardWaste: false
  })

  // Material mode state
  const [materials, setMaterials] = useState<MaterialInput[]>([
    { type: 'mixed', amount: 0 }
  ])

  const handleCalculate = () => {
    if (mode === 'room') {
      const calculationResult = calculateRoomDebrisVolume(rooms, roomMaterials)
      setResult(calculationResult)
    } else {
      const validMaterials = materials.filter(m => m.amount > 0)
      if (validMaterials.length > 0) {
        const calculationResult = calculateMaterialDebrisVolume(validMaterials)
        setResult(calculationResult)
      }
    }
  }

  const handleReset = () => {
    setRooms({
      kitchen: null,
      bathrooms: 0,
      bedrooms: 0,
      livingAreas: false,
      garage: false,
      basement: false,
      yardOutdoor: false
    })
    setRoomMaterials({
      drywall: false,
      flooring: false,
      cabinets: false,
      appliances: false,
      furniture: false,
      roofing: false,
      concrete: false,
      yardWaste: false
    })
    setMaterials([{ type: 'mixed', amount: 0 }])
    setResult(null)
  }

  const updateMaterial = (index: number, field: 'type' | 'amount', value: string | number) => {
    const updated = [...materials]
    updated[index] = { ...updated[index], [field]: value }
    setMaterials(updated)
  }

  const addMaterial = () => {
    setMaterials([...materials, { type: 'mixed', amount: 0 }])
  }

  const removeMaterial = (index: number) => {
    if (materials.length > 1) {
      setMaterials(materials.filter((_, i) => i !== index))
    }
  }

  // Check if calculation is possible
  const canCalculateRoom = Object.values(rooms).some(v => v !== null && v !== false && v !== 0)
  const canCalculateMaterial = materials.some(m => m.amount > 0)
  const canCalculate = mode === 'room' ? canCalculateRoom : canCalculateMaterial

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-10 w-10 text-blue-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Volume Calculator
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Calculate how much debris you'll have and get the perfect dumpster size recommendation.
              Choose between room-by-room estimation or material-specific calculation.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => {
                  setMode('room')
                  setResult(null)
                }}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  mode === 'room'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Home className="inline-block w-5 h-5 mr-2" />
                Room-by-Room
              </button>
              <button
                onClick={() => {
                  setMode('material')
                  setResult(null)
                }}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  mode === 'material'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Package className="inline-block w-5 h-5 mr-2" />
                Material Type
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
                {mode === 'room' ? (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Select Rooms & Areas</h3>

                    {/* Kitchen */}
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Kitchen
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          onClick={() => setRooms({ ...rooms, kitchen: null })}
                          className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            rooms.kitchen === null
                              ? 'bg-gray-200 text-gray-700'
                              : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          None
                        </button>
                        <button
                          onClick={() => setRooms({ ...rooms, kitchen: 'small' })}
                          className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            rooms.kitchen === 'small'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Small
                        </button>
                        <button
                          onClick={() => setRooms({ ...rooms, kitchen: 'medium' })}
                          className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            rooms.kitchen === 'medium'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Medium
                        </button>
                        <button
                          onClick={() => setRooms({ ...rooms, kitchen: 'large' })}
                          className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            rooms.kitchen === 'large'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Large
                        </button>
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Bathrooms
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={rooms.bathrooms || 0}
                        onChange={(e) => setRooms({ ...rooms, bathrooms: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Bedrooms */}
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={rooms.bedrooms || 0}
                        onChange={(e) => setRooms({ ...rooms, bedrooms: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Other Areas */}
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Additional Areas
                      </label>
                      <div className="space-y-2">
                        {[
                          { key: 'livingAreas' as const, label: 'Living Areas' },
                          { key: 'garage' as const, label: 'Garage' },
                          { key: 'basement' as const, label: 'Basement' },
                          { key: 'yardOutdoor' as const, label: 'Yard/Outdoor' }
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={rooms[key] || false}
                              onChange={(e) => setRooms({ ...rooms, [key]: e.target.checked })}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-3 text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Materials */}
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Material Types (optional - helps with weight estimation)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { key: 'drywall' as const, label: 'Drywall' },
                          { key: 'flooring' as const, label: 'Flooring' },
                          { key: 'cabinets' as const, label: 'Cabinets' },
                          { key: 'appliances' as const, label: 'Appliances' },
                          { key: 'furniture' as const, label: 'Furniture' },
                          { key: 'roofing' as const, label: 'Roofing' },
                          { key: 'concrete' as const, label: 'Concrete' },
                          { key: 'yardWaste' as const, label: 'Yard Waste' }
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={roomMaterials[key] || false}
                              onChange={(e) =>
                                setRoomMaterials({ ...roomMaterials, [key]: e.target.checked })
                              }
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Specify Materials</h3>

                    {materials.map((material, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 flex gap-3 items-start">
                        <div className="flex-1">
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Material Type
                          </label>
                          <select
                            value={material.type}
                            onChange={(e) => updateMaterial(index, 'type', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="mixed">Mixed Debris (cu. yards)</option>
                            <option value="drywall">Drywall (sq. ft)</option>
                            <option value="flooring">Flooring (sq. ft)</option>
                            <option value="roofing">Roofing Shingles (squares)</option>
                            <option value="concrete">Concrete (cu. yards)</option>
                            <option value="furniture">Furniture (items)</option>
                            <option value="yardWaste">Yard Waste (bags)</option>
                            <option value="appliances">Appliances (items)</option>
                            <option value="cabinets">Cabinets (units)</option>
                          </select>
                        </div>

                        <div className="flex-1">
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Amount
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.1"
                            value={material.amount || ''}
                            onChange={(e) => updateMaterial(index, 'amount', parseFloat(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0"
                          />
                        </div>

                        {materials.length > 1 && (
                          <button
                            onClick={() => removeMaterial(index)}
                            className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            aria-label="Remove material"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      onClick={addMaterial}
                      className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors font-medium"
                    >
                      + Add Another Material
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleCalculate}
                    disabled={!canCalculate}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      canCalculate
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Calculator className="inline-block w-5 h-5 mr-2" />
                    Calculate Volume
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Tips Section */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Helpful Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Estimates include a 10% buffer for safety</li>
                      <li>• Heavy materials like concrete may require special dumpsters</li>
                      <li>• When in doubt, size up to avoid overfilling</li>
                      <li>• Call us at (801) 209-9013 for personalized recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-1">
              {result ? (
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white sticky top-4">
                  <div className="text-center mb-6">
                    <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">Your Estimate</h3>
                    <div className="text-4xl font-bold mb-1">
                      {result.totalCubicYards}
                      <span className="text-lg font-normal ml-1">cu. yds</span>
                    </div>
                    <p className="text-blue-50 text-sm">
                      ({convertCubicYards(result.totalCubicYards).cubicFeet} cubic feet)
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-50">Recommended Size</span>
                      <CheckCircle className="w-5 h-5 text-green-200" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{result.recommendedSize}-Yard</div>
                    {result.sizeRange && (
                      <p className="text-sm text-blue-50">Range: {result.sizeRange}</p>
                    )}
                    <p className="text-xs text-blue-50 mt-2">
                      {getDumpsterSizeDescription(result.recommendedSize)}
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-50">Equivalent:</span>
                      <span className="font-semibold">
                        {result.pickupTruckLoads} pickup truck loads
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-50">Est. Weight:</span>
                      <span className="font-semibold">{result.estimatedWeight} tons</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-50">Material Density:</span>
                      <span className="font-semibold capitalize">{result.materialDensity}</span>
                    </div>
                  </div>

                  {result.warnings.length > 0 && (
                    <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 mb-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-200 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Important Warnings</h4>
                          <ul className="text-xs space-y-1">
                            {result.warnings.map((warning, idx) => (
                              <li key={idx}>• {warning}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {result.reasoning.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Layers className="w-4 h-4 mr-2" />
                        Calculation Breakdown
                      </h4>
                      <ul className="text-xs space-y-1 text-blue-50">
                        {result.reasoning.map((reason, idx) => (
                          <li key={idx}>• {reason}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-2">
                    <a
                      href="/quote"
                      className="block w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Get Quote for {result.recommendedSize}-Yard
                      <ChevronRight className="inline-block w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="tel:+18012099013"
                      className="block w-full border-2 border-white/30 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Call (801) 209-9013
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-xl p-6 text-center sticky top-4">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to Calculate?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the form on the left and click "Calculate Volume" to get your personalized
                    dumpster size recommendation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
