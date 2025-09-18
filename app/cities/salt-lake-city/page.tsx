import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Salt Lake City', 'UT')

export default function SaltLakeCityPage() {
  return <CityPageTemplate city="Salt Lake City" state="UT" />
}
