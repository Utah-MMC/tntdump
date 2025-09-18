import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Herriman', 'UT')

export default function HerrimanPage() {
  return <CityPageTemplate city="Herriman" state="UT" />
}
