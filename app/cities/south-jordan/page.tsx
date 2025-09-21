import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('South Jordan', 'UT')

export default function SouthJordanPage() {
  return <CityPageTemplate city="South Jordan" state="UT" />
}
