import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('West Valley City', 'UT')

export default function WestValleyCityPage() {
  return <CityPageTemplate city="West Valley City" state="UT" />
}
