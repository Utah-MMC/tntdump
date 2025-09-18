import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Clearfield', 'UT')

export default function ClearfieldPage() {
  return <CityPageTemplate city="Clearfield" state="UT" />
}
