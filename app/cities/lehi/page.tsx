import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Lehi', 'UT')

export default function LehiPage() {
  return <CityPageTemplate city="Lehi" state="UT" />
}
