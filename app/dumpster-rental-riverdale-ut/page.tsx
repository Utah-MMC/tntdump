import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Riverdale', 'UT')

export default function RiverdalePage() {
  return <CityPageTemplate city="Riverdale" state="UT" />
}
