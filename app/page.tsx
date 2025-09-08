export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          T&T Dumpsters - Dumpster Rental Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Over 55 years of experience providing reliable, affordable dumpster rental services.
        </p>
        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </main>
  )
}
