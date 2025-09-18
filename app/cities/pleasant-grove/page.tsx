import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Pleasant Grove', 'UT')

export default function PleasantGrovePage() {
  return <CityPageTemplate city="Pleasant Grove" state="UT" />
}
