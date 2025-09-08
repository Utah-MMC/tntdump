import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Draper', 'UT')

export default function DraperPage() {
  return <CityPageTemplate city="Draper" state="UT" />
}
