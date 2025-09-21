import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Layton', 'UT')

export default function LaytonPage() {
  return <CityPageTemplate city="Layton" state="UT" />
}
