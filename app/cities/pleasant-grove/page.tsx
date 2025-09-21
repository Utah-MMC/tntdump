import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Pleasant Grove', 'UT')

export default function PleasantGrovePage() {
  return <CityPageTemplate city="Pleasant Grove" state="UT" />
}
