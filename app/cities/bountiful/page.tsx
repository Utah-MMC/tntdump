import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Bountiful', 'UT')

export default function BountifulPage() {
  return <CityPageTemplate city="Bountiful" state="UT" />
}
