import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('West Point', 'UT')

export default function WestPointPage() {
  return <CityPageTemplate city="West Point" state="UT" />
}
