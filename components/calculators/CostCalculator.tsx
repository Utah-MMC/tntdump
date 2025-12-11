'use client'

import { useState } from 'react'
import { Calculator, Truck, Calendar, HelpCircle, DollarSign, ArrowRight } from 'lucide-react'
import {
  calculateDumpsterCost,
  formatCurrency,
  generateQuoteUrl,
  type DumpsterSize,
  type CostCalculatorInputs,
} from '@/lib/calculators/cost-calculator'

// Major Utah cities for the dropdown
const UTAH_CITIES = [
  'Salt Lake City',
  'Sandy',
  'South Jordan',
  'West Jordan',
  'Murray',
  'Midvale',
  'Taylorsville',
  'West Valley City',
  'Draper',
  'Herriman',
  'Riverton',
  'Bountiful',
  'Centerville',
  'Clearfield',
  'Clinton',
  'Farmington',
  'Kaysville',
  'Layton',
  'North Salt Lake',
  'Syracuse',
  'West Point',
  'Woods Cross',
  'Ogden',
  'Roy',
  'Hooper',
  'American Fork',
  'Lehi',
  'Orem',
  'Pleasant Grove',
  'Provo',
].sort()

const DUMPSTER_SIZES: { value: DumpsterSize; label: string; description: string }[] = [
  { value: 10, label: '10 Yard', description: 'Small cleanouts' },
  { value: 15, label: '15 Yard', description: 'Medium projects' },
  { value: 20, label: '20 Yard', description: 'Large remodels' },
  { value: 30, label: '30 Yard', description: 'Major construction' },
]

export default function CostCalculator() {
  const [inputs, setInputs] = useState<CostCalculatorInputs>({
    size: 20,
    city: 'Salt Lake City',
    duration: 7,
    options: {
      sameDayDelivery: false,
      permitAssistance: false,
      heavyDebris: false,
    },
  })

  const costBreakdown = calculateDumpsterCost(inputs)
  const quoteUrl = generateQuoteUrl(inputs)

  const updateSize = (size: DumpsterSize) => {
    setInputs({ ...inputs, size })
  }

  const updateCity = (city: string) => {
    setInputs({ ...inputs, city })
  }

  const updateDuration = (duration: number) => {
    setInputs({ ...inputs, duration })
  }

  const updateOption = (option: keyof CostCalculatorInputs['options'], value: boolean) => {
    setInputs({
      ...inputs,
      options: {
        ...inputs.options,
        [option]: value,
      },
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Rental Cost Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate for your dumpster rental. Customize your options and see real-time pricing breakdown.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 text-blue-600 mr-2" aria-hidden="true" />
                Configure Your Rental
              </h3>

              {/* Dumpster Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Dumpster Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {DUMPSTER_SIZES.map((sizeOption) => (
                    <button
                      key={sizeOption.value}
                      type="button"
                      onClick={() => updateSize(sizeOption.value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        inputs.size === sizeOption.value
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="font-bold text-gray-900">{sizeOption.label}</div>
                      <div className="text-sm text-gray-600">{sizeOption.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* City Selector */}
              <div className="mb-6">
                <label htmlFor="city-select" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Truck className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  Delivery Location
                </label>
                <select
                  id="city-select"
                  value={inputs.city}
                  onChange={(e) => updateCity(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                >
                  {UTAH_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rental Duration Slider */}
              <div className="mb-6">
                <label htmlFor="duration-slider" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  Rental Duration: {inputs.duration} {inputs.duration === 1 ? 'day' : 'days'}
                </label>
                <input
                  id="duration-slider"
                  type="range"
                  min="1"
                  max="14"
                  value={inputs.duration}
                  onChange={(e) => updateDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 day</span>
                  <span>14 days</span>
                </div>
                {inputs.duration <= 7 && (
                  <p className="text-sm text-gray-600 mt-2">
                    Standard 7-day rental included in base price
                  </p>
                )}
                {inputs.duration > 7 && (
                  <p className="text-sm text-blue-600 mt-2">
                    Extra {inputs.duration - 7} day{inputs.duration - 7 > 1 ? 's' : ''} at $15/day
                  </p>
                )}
              </div>

              {/* Additional Options */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Additional Services
                </label>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={inputs.options.sameDayDelivery || false}
                      onChange={(e) => updateOption('sameDayDelivery', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        Same-Day Delivery
                      </div>
                      <div className="text-sm text-gray-600">
                        Get your dumpster delivered today ($50-75)
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={inputs.options.permitAssistance || false}
                      onChange={(e) => updateOption('permitAssistance', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        Permit Assistance
                      </div>
                      <div className="text-sm text-gray-600">
                        We'll help you obtain necessary permits ($75)
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={inputs.options.heavyDebris || false}
                      onChange={(e) => updateOption('heavyDebris', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        Concrete/Heavy Debris
                      </div>
                      <div className="text-sm text-gray-600">
                        For concrete, asphalt, or heavy materials (10% upcharge)
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Cost Breakdown Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Cost Breakdown
              </h3>

              <div className="space-y-4 mb-6">
                {/* Base Rental */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {inputs.size} Yard Dumpster Rental
                      </div>
                      <div className="text-sm text-gray-600">
                        Includes delivery, pickup, and {costBreakdown.disposal.tonsIncluded} ton
                        {costBreakdown.disposal.tonsIncluded > 1 ? 's' : ''} disposal
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        {formatCurrency(costBreakdown.basePrice)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatCurrency(costBreakdown.basePriceRange.min)}-
                        {formatCurrency(costBreakdown.basePriceRange.max)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rental Period */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">Rental Period</div>
                    <div className="text-sm text-gray-600">
                      {costBreakdown.rentalPeriod.daysIncluded} days included
                      {costBreakdown.rentalPeriod.extraDays > 0 && (
                        <span className="text-blue-600">
                          {' '}+ {costBreakdown.rentalPeriod.extraDays} extra day
                          {costBreakdown.rentalPeriod.extraDays > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {costBreakdown.rentalPeriod.extraDayTotal > 0
                        ? `+${formatCurrency(costBreakdown.rentalPeriod.extraDayTotal)}`
                        : 'Included'}
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                {(inputs.options.sameDayDelivery ||
                  inputs.options.permitAssistance ||
                  inputs.options.heavyDebris) && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-medium text-gray-900 mb-2">Additional Services</div>
                    <div className="space-y-2">
                      {inputs.options.sameDayDelivery && costBreakdown.addOns.sameDayDelivery > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Same-Day Delivery</span>
                          <span className="font-semibold text-gray-900">
                            +{formatCurrency(costBreakdown.addOns.sameDayDelivery)}
                          </span>
                        </div>
                      )}
                      {inputs.options.permitAssistance &&
                        costBreakdown.addOns.permitAssistance > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Permit Assistance</span>
                            <span className="font-semibold text-gray-900">
                              +{formatCurrency(costBreakdown.addOns.permitAssistance)}
                            </span>
                          </div>
                        )}
                      {inputs.options.heavyDebris && costBreakdown.addOns.heavyDebris > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Heavy Debris Upcharge</span>
                          <span className="font-semibold text-gray-900">
                            +{formatCurrency(costBreakdown.addOns.heavyDebris)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Total Estimate */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-bold text-gray-900">Estimated Total</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {formatCurrency(costBreakdown.estimatedTotal)}
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  Range: {formatCurrency(costBreakdown.estimatedRange.min)} -{' '}
                  {formatCurrency(costBreakdown.estimatedRange.max)}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <HelpCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="ml-3">
                    <p className="text-sm text-yellow-800">
                      This is an estimate only. Final pricing may vary based on actual weight, location,
                      and material type. Contact us for an accurate quote.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={quoteUrl}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group shadow-lg"
              >
                Get Accurate Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <p className="text-center text-sm text-gray-600 mt-4">
                Or call us at{' '}
                <a href="tel:+18012099013" className="text-blue-600 hover:text-blue-700 font-semibold">
                  (801) 209-9013
                </a>
              </p>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included in Your Rental
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Delivery & Pickup</h4>
                <p className="text-gray-600 text-sm">
                  Fast delivery to your location and prompt pickup when you're done. No hidden fees.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Disposal Fees</h4>
                <p className="text-gray-600 text-sm">
                  Included disposal fees for standard materials up to the weight limit for your size.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-700" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Flexible Rental</h4>
                <p className="text-gray-600 text-sm">
                  7-day rental period included. Need more time? Extend for just $15/day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
