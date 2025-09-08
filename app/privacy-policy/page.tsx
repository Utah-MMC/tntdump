import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | T&T Dumpsters',
  description: 'Privacy policy for T&T Dumpsters. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            This privacy policy describes how T&T Dumpsters collects, uses, and protects your personal information.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information you provide directly to us, such as when you request a quote, contact us, or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and process transactions.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this privacy policy, please contact us at (801) 209-9013.
          </p>
        </div>
      </div>
    </div>
  )
}
