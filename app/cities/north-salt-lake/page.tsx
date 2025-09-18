import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('North Salt Lake', 'UT')

export default function NorthSaltLakePage() {
  return <CityPageTemplate city="North Salt Lake" state="UT" />
}
