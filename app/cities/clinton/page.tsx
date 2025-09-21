import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('Clinton', 'UT')

export default function ClintonPage() {
  return <CityPageTemplate city="Clinton" state="UT" />
}
