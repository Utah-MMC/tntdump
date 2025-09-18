import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('West Valley City', 'UT')

export default function WestValleyCityPage() {
  return <CityPageTemplate city="West Valley City" state="UT" />
}
