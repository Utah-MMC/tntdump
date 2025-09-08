import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Sandy', 'UT')

export default function SandyPage() {
  return <CityPageTemplate city="Sandy" state="UT" />
}
