import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Farmington', 'UT')

export default function FarmingtonPage() {
  return <CityPageTemplate city="Farmington" state="UT" />
}
