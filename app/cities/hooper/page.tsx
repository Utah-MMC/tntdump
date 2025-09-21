import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Hooper', 'UT')

export default function HooperPage() {
  return <CityPageTemplate city="Hooper" state="UT" />
}
