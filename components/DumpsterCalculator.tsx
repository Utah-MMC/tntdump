'use client'

import { useState } from 'react'
import { Calculator, Home, Building, Wrench, Info, HardHat } from 'lucide-react'

interface ProjectType {
  id: string
  name: string
  icon: React.ComponentType<any>
  description: string
  recommendedSizes: string[]
}

interface DumpsterSize {
  size: string
  capacity: string
  dimensions: string
  price1Day: string
  price7Day: string
  tons1Day: string
  tons7Day: string
  overagePerTon: string
  description: string
  suitableFor: string[]
}

const projectTypes: ProjectType[] = [
  {
    id: 'residential',
    name: 'Residential',
    icon: Home,
    description: 'Home renovations, cleanouts, and DIY projects',
    recommendedSizes: ['15-yard', '20-yard', '30-yard']
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building,
    description: 'Business renovations, office cleanouts',
    recommendedSizes: ['20-yard', '30-yard']
  },
  {
    id: 'construction',
    name: 'Construction',
    icon: Wrench,
    description: 'Construction debris, demolition projects',
    recommendedSizes: ['20-yard', '30-yard']
  },
  {
    id: 'concrete',
    name: 'Concrete',
    icon: HardHat,
    description: 'Driveways, slabs, footings (clean loads only)',
    recommendedSizes: ['12-yard']
  }
]

const dumpsterSizes: DumpsterSize[] = [
  {
    size: '12-yard',
    capacity: '12 cubic yards',
    dimensions: '16.46\' x 8.00\' x 2.67\'',
    price1Day: '$325',
    price7Day: '$425',
    tons1Day: 'No tons included - billed by actual weight',
    tons7Day: 'No tons included - billed by actual weight',
    overagePerTon: '$55/ton',
    description: 'Purpose-built for dense materials like concrete and brick',
    suitableFor: ['Driveways and patios', 'Flatwork demo', 'Footings and slabs', 'Clean masonry loads']
  },
  {
    size: '15-yard',
    capacity: '15 cubic yards',
    dimensions: '16\' x 8\' x 3.5\'',
    price1Day: '$300',
    price7Day: '$325',
    tons1Day: 'No tons included',
    tons7Day: '2 tons included',
    overagePerTon: '$55/ton',
    description: 'Great for medium-sized projects',
    suitableFor: ['Home renovations', 'Kitchen remodels', 'Bathroom updates', 'Basement cleanouts']
  },
  {
    size: '20-yard',
    capacity: '20 cubic yards',
    dimensions: '17.08\' x 7.54\' x 5.00\'',
    price1Day: '$335',
    price7Day: '$375',
    tons1Day: 'No tons included',
    tons7Day: '2 tons included',
    overagePerTon: '$55/ton',
    description: 'Most popular size for most projects',
    suitableFor: ['Large renovations', 'Construction debris', 'Commercial projects']
  },
  {
    size: '30-yard',
    capacity: '30 cubic yards',
    dimensions: '18.25\' x 7.25\' x 6.63\'',
    price1Day: '$345',
    price7Day: '$400',
    tons1Day: 'No tons included',
    tons7Day: '2 tons included',
    overagePerTon: '$55/ton',
    description: 'Ideal for large construction projects',
    suitableFor: ['Large construction', 'Commercial cleanouts', 'Industrial projects', 'Major renovations']
  }
]

const concreteNotes: Record<string, { title: string; points: string[] }> = {
  '12-yard': {
    title: 'Concrete load guidance',
    points: [
      'Designed for clean concrete, brick, or asphalt only—no dirt or trash.',
      'Keep pieces under 2-3 feet so they sit flat and level with the top rail.',
      'Limit weight to roughly 10-12 tons to avoid overweight tickets.',
      'Weight is billed at $55 per ton—no included tonnage on concrete loads.'
    ]
  }
}

const concreteTonnage: Record<string, { tons1Day: string; tons7Day: string }> = {
  '12-yard': {
    tons1Day: 'No tons included - billed by actual weight',
    tons7Day: 'No tons included - billed by actual weight'
  }
}

interface DumpsterCalculatorProps {
  embedded?: boolean
}

const DumpsterCalculator = ({ embedded = false }: DumpsterCalculatorProps) => {
  const [selectedProject, setSelectedProject] = useState<string>('residential')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [showResults, setShowResults] = useState(false)

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    setSelectedSize('')
    setShowResults(false)
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
    setShowResults(true)
  }

  const selectedProjectData = projectTypes.find(p => p.id === selectedProject)
  const selectedSizeData = dumpsterSizes.find(s => s.size === selectedSize)
  const selectedConcreteTonnage =
    selectedProject === 'concrete' && selectedSizeData ? concreteTonnage[selectedSizeData.size] : undefined
  const recommendedSizes = selectedProjectData?.recommendedSizes || []

  return (
    <section className={embedded ? '' : 'py-16'}>
      <div className={embedded ? '' : 'container-custom'}>
        <div
          className={
            embedded ? '' : 'max-w-4xl mx-auto bg-yellow-50 rounded-2xl shadow-md px-6 sm:px-8 py-10'
          }
        >
          <div className={`text-center ${embedded ? 'mb-6' : 'mb-8'}`}>
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className={`${embedded ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'} font-bold text-gray-900`}>
                Dumpster Size Calculator
              </h2>
            </div>
            <p className={`${embedded ? 'text-base' : 'text-lg'} text-gray-600 max-w-3xl mx-auto`}>
              Not sure what size dumpster you need? Use our calculator to find the perfect size for your project. 
              Get instant recommendations and pricing.
            </p>
          </div>

          <div>
          {/* Step 1: Project Type Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Step 1: What type of project are you working on?</h3>
            <div className={`${embedded ? 'grid grid-cols-2 gap-3' : 'grid md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
              {projectTypes.map((project) => {
                const Icon = project.icon
                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`group relative ${embedded ? 'p-4' : 'p-6'} rounded-lg border-2 transition-all duration-200 text-left overflow-hidden ${
                      selectedProject === project.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="absolute inset-0 bg-[#111827] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none z-10"></div>
                    <div className="relative z-20 flex items-center mb-3">
                      <Icon className={`h-6 w-6 mr-2 ${
                        selectedProject === project.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <h4 className={`font-semibold text-gray-900 ${embedded ? 'text-sm' : ''}`}>{project.name}</h4>
                    </div>
                    <p className={`relative z-20 ${embedded ? 'text-xs' : 'text-sm'} text-gray-600`}>{project.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Size Selection */}
          {selectedProject && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Step 2: Choose your dumpster size
              </h3>
              <div className={`${embedded ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-4'}`}>
                {dumpsterSizes
                  .filter(size => recommendedSizes.includes(size.size))
                  .map((size) => (
                    <button
                      key={size.size}
                      onClick={() => handleSizeSelect(size.size)}
                      className={`group relative ${embedded ? 'p-4' : 'p-6'} rounded-lg border-2 transition-all duration-200 text-left overflow-hidden ${
                        selectedSize === size.size
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="absolute inset-0 bg-[#111827] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none z-10"></div>
                      <div className="relative z-20 flex justify-between items-start mb-3">
                        <h4 className={`font-bold ${embedded ? 'text-base' : 'text-lg'} text-gray-900`}>{size.size}</h4>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">1 day</div>
                          <div className={`${embedded ? 'text-lg' : 'text-xl'} font-bold text-blue-600`}>{size.price1Day}</div>
                          <div className="text-[11px] text-gray-500">
                            {selectedProject === 'concrete' && concreteTonnage[size.size]
                              ? concreteTonnage[size.size].tons1Day
                              : size.tons1Day}
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 flex justify-end items-center -mt-2 mb-2">
                        <div className="text-right">
                          <div className="text-xs text-gray-600">7 days</div>
                          <div className={`${embedded ? 'text-base' : 'text-lg'} font-semibold text-blue-600`}>{size.price7Day}</div>
                          <div className="text-[11px] text-gray-500">
                            {selectedProject === 'concrete' && concreteTonnage[size.size]
                              ? concreteTonnage[size.size].tons7Day
                              : size.tons7Day}
                          </div>
                        </div>
                      </div>
                      <p className="relative z-20 text-[11px] text-gray-500 mb-2">Overage: {size.overagePerTon}</p>
                      <p className={`relative z-20 ${embedded ? 'text-xs' : 'text-sm'} text-gray-600 mb-2`}>{size.capacity}</p>
                      <p className="relative z-20 text-xs text-gray-500 mb-3">{size.dimensions}</p>
                      <p className={`relative z-20 ${embedded ? 'text-xs' : 'text-sm'} text-gray-700`}>{size.description}</p>
                      {selectedProject === 'concrete' && concreteNotes[size.size] && (
                        <div className="relative z-20 mt-3 pt-3 border-t border-blue-100">
                          <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide">
                            {concreteNotes[size.size].title}
                          </p>
                          <ul className="mt-2 text-xs text-gray-600 space-y-1 list-disc pl-4">
                            {concreteNotes[size.size].points.map((note, index) => (
                              <li key={index}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && selectedSizeData && (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Perfect! Here's your recommendation:
                </h3>
                <p className="text-gray-600">
                  Based on your {selectedProjectData?.name.toLowerCase()} project, we recommend the {selectedSizeData.size} dumpster.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Dumpster Details */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Dumpster Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Size:</span>
                      <span className="font-semibold">{selectedSizeData.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-semibold">{selectedSizeData.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="font-semibold">{selectedSizeData.dimensions}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price (1 day):</span>
                        <span className="font-semibold text-blue-600">{selectedSizeData.price1Day}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tons (1 day):</span>
                        <span className="font-semibold">
                          {selectedConcreteTonnage ? selectedConcreteTonnage.tons1Day : selectedSizeData.tons1Day}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price (7 days):</span>
                        <span className="font-semibold text-blue-600">{selectedSizeData.price7Day}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tons (7 days):</span>
                        <span className="font-semibold">
                          {selectedConcreteTonnage ? selectedConcreteTonnage.tons7Day : selectedSizeData.tons7Day}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Overage per ton:</span>
                        <span className="font-semibold">{selectedSizeData.overagePerTon}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suitable For */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h4>
                  <ul className="space-y-2">
                    {selectedSizeData.suitableFor.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={embedded ? '#quote-form' : '/quote'}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="tel:+18012099013"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                  >
                    Call (801) 209-9013
                  </a>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Free same-day estimates • Fast delivery • Competitive pricing
                </p>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DumpsterCalculator
