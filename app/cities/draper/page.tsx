import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Draper', 'UT')

export default function DraperPage() {
  return <CityPageTemplate city="Draper" state="UT" />
}
