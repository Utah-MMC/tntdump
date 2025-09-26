'use client'

import { useMemo, useState } from 'react'
import { Calculator, Info } from 'lucide-react'

type Duration = '1-day' | '7-day'
type DumpsterType = 'general' | 'concrete'
type GeneralSize = '15-yard' | '20-yard' | '30-yard'

interface GeneralPricing {
	size: GeneralSize
	prices: { '1-day': number; '7-day': number }
	includedTons: { '1-day': number; '7-day': number }
}

const GENERAL_TON_OVERAGE = 55

const GENERAL_PRICING: GeneralPricing[] = [
	{
		size: '15-yard',
		prices: { '1-day': 300, '7-day': 325 },
		includedTons: { '1-day': 0, '7-day': 2 }
	},
	{
		size: '20-yard',
		prices: { '1-day': 335, '7-day': 375 },
		includedTons: { '1-day': 0, '7-day': 2 }
	},
	{
		size: '30-yard',
		prices: { '1-day': 345, '7-day': 400 },
		includedTons: { '1-day': 0, '7-day': 2 }
	}
]

const CONCRETE_PRICING: Record<Duration, number> = { '1-day': 325, '7-day': 425 }

const formatCurrency = (amount: number) => `$${amount.toFixed(0)}`

const DumpsterCalculator = () => {
	const [type, setType] = useState<DumpsterType>('general')
	const [size, setSize] = useState<GeneralSize>('20-yard')
	const [duration, setDuration] = useState<Duration>('7-day')
	const [extraTons, setExtraTons] = useState<number>(0)

	const selectedGeneral = useMemo(
		() => GENERAL_PRICING.find(s => s.size === size)!,
		[size]
	)

	const basePrice = useMemo(() => {
		if (type === 'general') {
			return selectedGeneral.prices[duration]
		}
		return CONCRETE_PRICING[duration]
	}, [type, selectedGeneral, duration])

	const tonsIncluded = useMemo(() => {
		return type === 'general' ? selectedGeneral.includedTons[duration] : 0
	}, [type, selectedGeneral, duration])

	const overageCost = useMemo(() => {
		if (type !== 'general') return 0
		const extra = Math.max(0, extraTons)
		return extra * GENERAL_TON_OVERAGE
	}, [type, extraTons])

	const total = basePrice + overageCost

	return (
		<section className="py-8 bg-gray-50">
			<div className="container-custom">
				<div className="text-center mb-6">
					<div className="flex items-center justify-center mb-4">
						<Calculator className="h-7 w-7 text-blue-600 mr-2" />
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
							Dumpster Pricing Calculator
						</h2>
					</div>
					<p className="text-sm text-gray-600 max-w-3xl mx-auto">
						Select dumpster type, duration, and optional extra tons to see pricing.
					</p>
				</div>

				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
					{/* Controls */}
					<div>
						{/* Type */}
						<div className="mb-4">
						<h3 className="text-xl font-semibold text-gray-900 mb-3">Dumpster Type</h3>
							<div className="grid grid-cols-2 gap-3">
							<button
								onClick={() => setType('general')}
									className={`p-3 rounded-lg border-2 ${type === 'general' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
							>
								General Debris
							</button>
							<button
								onClick={() => setType('concrete')}
									className={`p-3 rounded-lg border-2 ${type === 'concrete' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
							>
								Concrete Dumpster
							</button>
						</div>
					</div>

						{/* Size (general only) */}
						{type === 'general' && (
							<div className="mb-4">
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Size</h3>
							<div className="grid md:grid-cols-3 gap-3">
								{GENERAL_PRICING.map(s => (
									<button
										key={s.size}
										onClick={() => setSize(s.size)}
										className={`p-4 rounded-lg border-2 text-left ${size === s.size ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
									>
										<div className="flex items-center justify-between">
											<span className="font-semibold text-gray-900 text-sm">{s.size}</span>
											<span className="font-bold text-blue-600 text-base">{formatCurrency(s.prices[duration])}</span>
										</div>
										<p className="text-xs text-gray-600 mt-1">{s.includedTons[duration]} tons included</p>
									</button>
								))}
							</div>
						</div>
						)}

						{/* Duration */}
						<div className="mb-4">
						<h3 className="text-xl font-semibold text-gray-900 mb-3">Duration</h3>
						<div className="grid grid-cols-2 gap-3">
							<button
								onClick={() => setDuration('1-day')}
									className={`p-3 rounded-lg border-2 ${duration === '1-day' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
							>
								1 Day
							</button>
							<button
								onClick={() => setDuration('7-day')}
									className={`p-3 rounded-lg border-2 ${duration === '7-day' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
							>
								7 Days
							</button>
						</div>
					</div>

						{/* Extra tons (general only) */}
						{type === 'general' && (
							<div className="mb-4">
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Extra Tons (optional)</h3>
							<div className="flex items-center gap-3">
								<input
									type="number"
									min={0}
									step={0.5}
									value={extraTons}
									onChange={(e) => setExtraTons(Number(e.target.value))}
									className="w-24 px-3 py-2 border border-gray-300 rounded-lg"
								/>
								<span className="text-gray-600 text-sm">x {formatCurrency(GENERAL_TON_OVERAGE)}/ton over included</span>
							</div>
							<p className="text-xs text-gray-500 mt-2">{tonsIncluded} tons included with selected option.</p>
						</div>
						)}
					</div>

					{/* Summary */}
					<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
						<h3 className="text-xl font-bold text-gray-900 mb-4">Your Estimate</h3>
						<div className="space-y-2 text-sm">
							<div className="flex justify-between">
								<span className="text-gray-600">Base price</span>
								<span className="font-semibold">{formatCurrency(basePrice)}</span>
							</div>
							{type === 'general' && (
								<>
									<div className="flex justify-between">
										<span className="text-gray-600">Included tons</span>
										<span className="font-semibold">{tonsIncluded}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Extra tons</span>
										<span className="font-semibold">{extraTons}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Overage cost</span>
										<span className="font-semibold">{formatCurrency(overageCost)}</span>
									</div>
								</>
							)}
						</div>
						<div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
							<span className="text-lg font-bold">Total</span>
							<span className="text-2xl font-extrabold text-blue-600">{formatCurrency(total)}</span>
						</div>

						<div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
							<a href="/quote" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors">Get Free Quote</a>
							<a href="tel:+18012099013" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors">Call (801) 209-9013</a>
						</div>
						<p className="text-center text-xs text-gray-500 mt-3">7-day rentals include 2 tons. 1-day rentals include 0 tons. Overage billed at {formatCurrency(GENERAL_TON_OVERAGE)}/ton. Concrete dumpsters are flat-rate (no tons included).</p>
					</div>

				</div>
			</div>
		</section>
	)
}

export default DumpsterCalculator
