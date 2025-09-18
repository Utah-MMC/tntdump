import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Ogden', 'UT')

export default function OgdenPage() {
  return <CityPageTemplate city="Ogden" state="UT" />
}
