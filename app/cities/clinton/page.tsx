import { Metadata } from 'next'
import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export const metadata: Metadata = generateCityMetadata('Clinton', 'UT')

export default function ClintonPage() {
  return <CityPageTemplate city="Clinton" state="UT" />
}
