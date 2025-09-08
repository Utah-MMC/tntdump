import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Centerville', 'UT')

export default function CentervillePage() {
  return <CityPageTemplate city="Centerville" state="UT" />
}
