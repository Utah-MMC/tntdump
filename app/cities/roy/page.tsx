import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Roy', 'UT')

export default function RoyPage() {
  return <CityPageTemplate city="Roy" state="UT" />
}
