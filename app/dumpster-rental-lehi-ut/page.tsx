import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Lehi', 'UT')

export default function LehiPage() {
  return <CityPageTemplate city="Lehi" state="UT" />
}
