import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Bountiful', 'UT')

export default function BountifulPage() {
  return <CityPageTemplate city="Bountiful" state="UT" />
}
