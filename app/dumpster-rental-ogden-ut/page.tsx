import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Ogden', 'UT')

export default function OgdenPage() {
  return <CityPageTemplate city="Ogden" state="UT" />
}
