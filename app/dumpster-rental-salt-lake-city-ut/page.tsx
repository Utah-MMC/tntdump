import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Salt Lake City', 'UT')

export default function SaltLakeCityPage() {
  return <CityPageTemplate city="Salt Lake City" state="UT" />
}
