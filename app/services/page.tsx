import { Metadata } from 'next'
import DumpsterFinder from '@/components/DumpsterFinder'
import RecommendationCards from '@/components/RecommendationCards'
import SizeComparison from '@/components/SizeComparison'
import MaterialRules from '@/components/MaterialRules'
import ZipStickyBar from '@/components/ZipStickyBar'
import { FinderProvider } from '@/components/FinderContext'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services - TNT Dumpsters | Utah',
  description: 'Find the right dumpster in 60 seconds. Get instant recommendations, ZIP-based pricing, and earliest delivery times.',
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <FinderProvider>
        <section id="finder">
          <DumpsterFinder />
        </section>
        <div id="recommendations" className="mt-10">
          <RecommendationCards />
        </div>
        <section className="mt-16">
          <SizeComparison />
        </section>
        <section id="material-rules" className="mt-16">
          <MaterialRules />
        </section>
        <ZipStickyBar />
      </FinderProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(require('@/public/schema/services.json')) }}
      />
      <div className="sr-only">
        <a href="/services/all">View all services</a>
      </div>
    </main>
  )
}

