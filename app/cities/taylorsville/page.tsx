import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Taylorsville', 'UT')

export default function TaylorsvillePage() {
  return <CityPageTemplate city="Taylorsville" state="UT" />
}
