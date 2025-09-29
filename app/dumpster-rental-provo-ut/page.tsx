import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Provo', 'UT')

export default function ProvoPage() {
  return <CityPageTemplate city="Provo" state="UT" />
}
