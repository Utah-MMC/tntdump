import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Layton', 'UT')

export default function LaytonPage() {
  return <CityPageTemplate city="Layton" state="UT" />
}
