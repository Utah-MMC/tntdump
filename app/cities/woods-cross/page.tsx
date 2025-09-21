import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Woods Cross', 'UT')

export default function WoodsCrossPage() {
  return <CityPageTemplate city="Woods Cross" state="UT" />
}
