import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('South Jordan', 'UT')

export default function SouthJordanPage() {
  return <CityPageTemplate city="South Jordan" state="UT" />
}
