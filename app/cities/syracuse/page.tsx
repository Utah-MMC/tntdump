import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Syracuse', 'UT')

export default function SyracusePage() {
  return <CityPageTemplate city="Syracuse" state="UT" />
}
