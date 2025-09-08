import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Murray', 'UT')

export default function MurrayPage() {
  return <CityPageTemplate city="Murray" state="UT" />
}
