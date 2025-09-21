import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('West Jordan', 'UT')

export default function WestJordanPage() {
  return <CityPageTemplate city="West Jordan" state="UT" />
}
