import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Provo', 'UT')

export default function ProvoPage() {
  return <CityPageTemplate city="Provo" state="UT" />
}
