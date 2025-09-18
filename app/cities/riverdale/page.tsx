import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Riverdale', 'UT')

export default function RiverdalePage() {
  return <CityPageTemplate city="Riverdale" state="UT" />
}
