import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Farmington', 'UT')

export default function FarmingtonPage() {
  return <CityPageTemplate city="Farmington" state="UT" />
}
