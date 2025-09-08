import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Woods Cross', 'UT')

export default function WoodsCrossPage() {
  return <CityPageTemplate city="Woods Cross" state="UT" />
}
