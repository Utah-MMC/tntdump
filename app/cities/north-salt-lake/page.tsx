import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('North Salt Lake', 'UT')

export default function NorthSaltLakePage() {
  return <CityPageTemplate city="North Salt Lake" state="UT" />
}
