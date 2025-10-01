'use client'

import { useState } from 'react'
import { Calculator, Home, Building, Wrench, Trash2, Info } from 'lucide-react'

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
    id: 'cleanout',
    name: 'Estate Cleanout',
    icon: Trash2,
    description: 'Moving, estate cleanouts, large cleanups',
    recommendedSizes: ['15-yard', '20-yard', '30-yard']
  }
]

const dumpsterSizes: DumpsterSize[] = [
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
    dimensions: '20\' x 8\' x 3.5\'',
    price1Day: '$335',
    price7Day: '$375',
    tons1Day: 'No tons included',
    tons7Day: '2 tons included',
    overagePerTon: '$55/ton',
    description: 'Most popular size for most projects',
    suitableFor: ['Large renovations', 'Estate cleanouts', 'Construction debris', 'Commercial projects']
  },
  {
    size: '30-yard',
    capacity: '30 cubic yards',
    dimensions: '20\' x 8\' x 6\'',
    price1Day: '$345',
    price7Day: '$400',
    tons1Day: 'No tons included',
    tons7Day: '2 tons included',
    overagePerTon: '$55/ton',
    description: 'Ideal for large construction projects',
    suitableFor: ['Large construction', 'Commercial cleanouts', 'Industrial projects', 'Major renovations']
  }
]

const DumpsterCalculator = () => {
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
  const recommendedSizes = selectedProjectData?.recommendedSizes || []

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Dumpster Size Calculator
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not sure what size dumpster you need? Use our calculator to find the perfect size for your project. 
            Get instant recommendations and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Project Type Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Step 1: What type of project are you working on?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectTypes.map((project) => {
                const Icon = project.icon
                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedProject === project.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <Icon className={`h-6 w-6 mr-2 ${
                        selectedProject === project.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <h4 className="font-semibold text-gray-900">{project.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{project.description}</p>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dumpsterSizes
                  .filter(size => recommendedSizes.includes(size.size))
                  .map((size) => (
                    <button
                      key={size.size}
                      onClick={() => handleSizeSelect(size.size)}
                      className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedSize === size.size
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg text-gray-900">{size.size}</h4>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">1 day</div>
                          <div className="text-xl font-bold text-blue-600">{size.price1Day}</div>
                          <div className="text-[11px] text-gray-500">{size.tons1Day}</div>
                        </div>
                      </div>
                      <div className="flex justify-end items-center -mt-2 mb-2">
                        <div className="text-right">
                          <div className="text-xs text-gray-600">7 days</div>
                          <div className="text-lg font-semibold text-blue-600">{size.price7Day}</div>
                          <div className="text-[11px] text-gray-500">{size.tons7Day}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2">Overage: {size.overagePerTon}</p>
                      <p className="text-sm text-gray-600 mb-2">{size.capacity}</p>
                      <p className="text-xs text-gray-500 mb-3">{size.dimensions}</p>
                      <p className="text-sm text-gray-700">{size.description}</p>
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
                        <span className="font-semibold">{selectedSizeData.tons1Day}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price (7 days):</span>
                        <span className="font-semibold text-blue-600">{selectedSizeData.price7Day}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tons (7 days):</span>
                        <span className="font-semibold">{selectedSizeData.tons7Day}</span>
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
                    href="/quote"
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

          {/* Help Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Need Help Choosing?</h4>
                <p className="text-gray-700 mb-4">
                  Our experienced team can help you choose the right dumpster size for your specific project. 
                  We offer free consultations and same-day estimates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+18012099013"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    📞 Call (801) 209-9013
                  </a>
                  <a
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    💬 Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DumpsterCalculator
