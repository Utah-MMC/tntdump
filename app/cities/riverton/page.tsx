import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Riverton', 'UT')

export default function RivertonPage() {
  return <CityPageTemplate city="Riverton" state="UT" />
}
