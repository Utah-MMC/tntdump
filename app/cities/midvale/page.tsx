import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Midvale', 'UT')

export default function MidvalePage() {
  return <CityPageTemplate city="Midvale" state="UT" />
}
