import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('West Jordan', 'UT')

export default function WestJordanPage() {
  return <CityPageTemplate city="West Jordan" state="UT" />
}
