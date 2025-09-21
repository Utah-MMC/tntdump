import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Clearfield', 'UT')

export default function ClearfieldPage() {
  return <CityPageTemplate city="Clearfield" state="UT" />
}
