import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Taylorsville', 'UT')

export default function TaylorsvillePage() {
  return <CityPageTemplate city="Taylorsville" state="UT" />
}
