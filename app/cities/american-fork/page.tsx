import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('American Fork', 'UT')

export default function AmericanForkPage() {
  return <CityPageTemplate city="American Fork" state="UT" />
}
