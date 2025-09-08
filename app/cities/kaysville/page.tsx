import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Kaysville', 'UT')

export default function KaysvillePage() {
  return <CityPageTemplate city="Kaysville" state="UT" />
}
