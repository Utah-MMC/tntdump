import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Orem', 'UT')

export default function OremPage() {
  return <CityPageTemplate city="Orem" state="UT" />
}
