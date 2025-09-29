import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Herriman', 'UT')

export default function HerrimanPage() {
  return <CityPageTemplate city="Herriman" state="UT" />
}
