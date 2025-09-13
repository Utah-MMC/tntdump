import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Under Construction Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Construction Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-400 rounded-full mb-6">
                <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Under Construction
            </h1>
            
            {/* Subheading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-200 mb-8">
              T&T Dumpsters
            </h2>
            
            {/* Description */}
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              We're working hard to improve your experience. Our website is currently under construction, 
              but we're still here to serve you with over 55 years of reliable dumpster rental services.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Still Need a Dumpster?</h3>
              
              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-white font-semibold">Call or Text: (801) 209-9013</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-white">Mon - Fri: 7:00 am - 9:00 pm</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white">Serving the Wasatch Front Area</span>
                </div>
              </div>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8012099013" 
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:info@tntdump.com" 
                className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Email Us
              </a>
            </div>
            
            {/* Coming Soon Message */}
            <div className="mt-12 text-blue-200">
              <p className="text-lg">We'll be back online soon with an improved experience!</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keep Contact Section for Additional Contact Options */}
      <Contact />
    </main>
  )
}
