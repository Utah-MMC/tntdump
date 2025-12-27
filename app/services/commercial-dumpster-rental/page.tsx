import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Services | TNT Dumpsters',
  description:
    'Commercial dumpster rental services for retail, offices, and property managers. Flexible scheduling and clear pricing in Utah.',
  keywords:
    'commercial dumpster rental services, business roll off dumpsters, commercial dumpster service, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/commercial-dumpster-rental' },
  openGraph: {
    title: 'Commercial Dumpster Rental Services | TNT Dumpsters',
    description:
      'Commercial dumpster rental services for retail, offices, and property managers. Flexible scheduling and clear pricing in Utah.',
    url: 'https://tntdump.com/services/commercial-dumpster-rental',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Commercial Dumpster Rental Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We support commercial projects with reliable delivery windows, fast swaps, and clear
            communication. From retail remodels to office cleanouts, we keep your timeline moving.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom prose max-w-4xl">
          <h2>Flexible scheduling for business needs</h2>
          <p>
            We coordinate delivery and pickup around your crew, with options for phased projects and
            multi-location scheduling.
          </p>

          <h2>Size and pricing help</h2>
          <p>
            Compare sizes on our <Link href="/dumpster-sizes">dumpster sizes</Link> page or use the
            <Link href="/dumpster-size-calculator"> size calculator</Link> for quick guidance. For
            pricing, see <Link href="/pricing">pricing</Link> and <Link href="/fees">fees</Link>.
          </p>

          <h2>Related pages</h2>
          <p>
            Learn more on the <Link href="/commercial-dumpster-rental">commercial dumpster rental</Link> page
            or request a quote today.
          </p>
        </div>
      </section>
    </main>
  );
}
