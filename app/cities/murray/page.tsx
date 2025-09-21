import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Murray', 'UT')

export default function MurrayPage() {
  return <CityPageTemplate city="Murray" state="UT" />
}
