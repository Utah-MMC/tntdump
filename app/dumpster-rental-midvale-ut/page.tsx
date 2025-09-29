import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Midvale', 'UT')

export default function MidvalePage() {
  return <CityPageTemplate city="Midvale" state="UT" />
}
