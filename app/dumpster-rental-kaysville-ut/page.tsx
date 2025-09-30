import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Kaysville', 'UT')

export default function KaysvillePage() {
  return <CityPageTemplate city="Kaysville" state="UT" />
}
