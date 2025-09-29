import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Riverton', 'UT')

export default function RivertonPage() {
  return <CityPageTemplate city="Riverton" state="UT" />
}
