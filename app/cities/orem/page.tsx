import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Orem', 'UT')

export default function OremPage() {
  return <CityPageTemplate city="Orem" state="UT" />
}
