import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Roy', 'UT')

export default function RoyPage() {
  return <CityPageTemplate city="Roy" state="UT" />
}
