import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('American Fork', 'UT')

export default function AmericanForkPage() {
  return <CityPageTemplate city="American Fork" state="UT" />
}
