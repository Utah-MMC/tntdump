import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('West Point', 'UT')

export default function WestPointPage() {
  return <CityPageTemplate city="West Point" state="UT" />
}
