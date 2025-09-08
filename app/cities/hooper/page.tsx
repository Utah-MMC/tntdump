import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Hooper', 'UT')

export default function HooperPage() {
  return <CityPageTemplate city="Hooper" state="UT" />
}
