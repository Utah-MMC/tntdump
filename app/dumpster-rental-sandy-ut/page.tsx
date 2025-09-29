import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Sandy', 'UT')

export default function SandyPage() {
  return <CityPageTemplate city="Sandy" state="UT" />
}
