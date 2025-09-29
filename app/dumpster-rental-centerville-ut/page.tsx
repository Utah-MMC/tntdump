import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Centerville', 'UT')

export default function CentervillePage() {
  return <CityPageTemplate city="Centerville" state="UT" />
}
