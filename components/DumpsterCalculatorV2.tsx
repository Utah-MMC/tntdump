'use client'

import { useMemo, useState } from 'react'
import { Calculator, Phone } from 'lucide-react'

type SimpleSize = 'Small (10 yd)' | 'Medium (15–20 yd)' | 'Large (30–40 yd)'

const sizeData: Record<SimpleSize, { sizes: string[]; priceFrom: string; bestFor: string[] }> = {
	'Small (10 yd)': {
		sizes: ['10-yard'],
		priceFrom: '$299',
		bestFor: ['Garage cleanouts', 'Single-room remodels', 'Yard waste'],
	},
	'Medium (15–20 yd)': {
		sizes: ['15-yard', '20-yard'],
		priceFrom: '$399',
		bestFor: ['Kitchen/bath remodels', 'Roofing projects', 'Multi-room cleanouts'],
	},
	'Large (30–40 yd)': {
		sizes: ['30-yard', '40-yard'],
		priceFrom: '$699',
		bestFor: ['Major renovations', 'Construction debris', 'Estate cleanouts'],
	},
}

export default function DumpsterCalculatorV2() {
	const [selected, setSelected] = useState<SimpleSize | null>(null)

	const details = useMemo(() => (selected ? sizeData[selected] : null), [selected])

	return (
		<section className="py-12 bg-gray-50">
			<div className="container-custom">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center mb-3">
						<Calculator className="h-7 w-7 text-blue-600 mr-2" />
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Find your dumpster size</h2>
					</div>
					<p className="text-gray-600">Three simple choices. Pick what fits your project.</p>
				</div>

			{/* Step: pick size group */}
			<div className="max-w-3xl mx-auto">
				<div className="grid md:grid-cols-3 gap-4">
					{(Object.keys(sizeData) as SimpleSize[]).map((label) => (
						<button
							key={label}
							onClick={() => setSelected(label)}
							className={`p-5 rounded-lg border-2 text-left transition-all ${
								selected === label
									? 'border-blue-500 bg-blue-50 shadow'
									: 'border-gray-200 bg-white hover:border-blue-300'
							}`}
						>
							<div className="flex items-baseline justify-between mb-2">
								<h3 className="font-semibold text-gray-900">{label}</h3>
								<span className="text-blue-600 font-bold">from {sizeData[label].priceFrom}</span>
							</div>
							<ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
								{sizeData[label].bestFor.slice(0, 3).map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</button>
					))}
				</div>

				{/* Result */}
				{details && (
					<div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
						<p className="text-gray-700 mb-4">
							<strong>Recommendation:</strong> {details.sizes.join(' or ')} — best for {details.bestFor[0].toLowerCase()} and more.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a href="/quote" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700">Get Free Quote</a>
							<a href="tel:+18012099013" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 flex items-center justify-center gap-2">
								<Phone className="h-5 w-5" /> Call (801) 209-9013
							</a>
						</div>
						<p className="text-xs text-gray-500 mt-3">Fast delivery • Same-day estimates • Competitive pricing</p>
					</div>
				)}
			</div>
		</div>
		</section>
	)
}



