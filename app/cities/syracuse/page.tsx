import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Syracuse', 'UT')

export default function SyracusePage() {
  return <CityPageTemplate city="Syracuse" state="UT" />
}
