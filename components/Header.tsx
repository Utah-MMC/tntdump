'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone, Menu, X, ChevronDown, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDumpstersOpen, setIsDumpstersOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  // Timeout refs for dropdown delays
  const dumpstersTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: false },
    { name: 'Cities', href: '/cities', hasDropdown: false },
    { name: 'Dumpsters', href: '/dumpsters', hasDropdown: true },
    { name: 'Estate Cleanouts', href: '/estate-cleanouts', hasDropdown: false },
    { name: 'Reviews', href: '/reviews', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'FAQs', href: '/faqs', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: true },
  ]

  const dumpsterServices = [
    { name: 'Residential Dumpster Service', href: '/dumpsters/residential' },
    { name: 'Commercial Dumpster Service', href: '/dumpsters/commercial' },
    { name: 'Industrial Dumpster Service', href: '/dumpsters/industrial' },
    { name: 'Short-Term Dumpster Service', href: '/dumpsters/short-term' },
    { name: 'Long-Term Dumpster Service', href: '/dumpsters/long-term' },
    { name: 'Vendor Dumpster Rental Service', href: '/dumpsters/vendor' },
    { name: 'Concrete Dumpsters', href: '/dumpsters/concrete' },
  ]

  const contactServices = [
    { name: 'Request Quote', href: '/contact' },
    { name: 'Schedule Pickup', href: '/contact' },
    { name: 'Emergency Service', href: '/contact' },
  ]

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (dumpstersTimeoutRef.current) clearTimeout(dumpstersTimeoutRef.current)
      if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current)
    }
  }, [])

  // Helper functions for dropdown management
  const handleDumpstersMouseEnter = () => {
    if (dumpstersTimeoutRef.current) clearTimeout(dumpstersTimeoutRef.current)
    setIsDumpstersOpen(true)
  }

  const handleDumpstersMouseLeave = () => {
    dumpstersTimeoutRef.current = setTimeout(() => {
      setIsDumpstersOpen(false)
    }, 150) // 150ms delay
  }

  const handleContactMouseEnter = () => {
    if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current)
    setIsContactOpen(true)
  }

  const handleContactMouseLeave = () => {
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false)
    }, 150) // 150ms delay
  }

        return (
     <>
       {/* Single Blue Header */}
       <header className="bg-[#0003d5] text-white shadow-lg sticky top-0 z-50">
         <div className="container-custom">
                       <div className="flex items-center justify-between h-[130px]">
              {/* Left Side - Contact Info */}
              <div className="flex items-center space-x-8">
                <div className="text-white">
                  <p className="text-sm">Serving the Wasatch Front Area</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">Call or Text</span>
                                         <a href="tel:+18012099013" className="text-lg font-bold hover:text-yellow-400 transition-colors">
                       (801) 209-9013
                     </a>
                  </div>
                </div>
              </div>

              {/* Logo - Centered */}
              <div className="flex items-center justify-center flex-1">
                <Link href="/" className="flex items-center">
                                   <Image
                   src="/images/t-and-t-dumpsters-logo-176w.webp"
                   alt="T&T Dumpsters Logo - Professional dumpster rental services in Utah"
                   width={176}
                   height={50}
                   style={{ width: 'auto', height: 'auto' }}
                   priority
                 />
                </Link>
              </div>

              {/* Navigation - Right */}
              <nav className="hidden lg:flex items-center space-x-8">
               {navigation.map((item) => (
                 <div key={item.name} className="relative">
                                       <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-white hover:text-yellow-400 font-medium transition-colors ${item.name === 'Home' ? 'underline' : ''}`}
                      onMouseEnter={() => {
                        if (item.hasDropdown) {
                          if (item.name === 'Dumpsters') handleDumpstersMouseEnter()
                          if (item.name === 'Contact') handleContactMouseEnter()
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Dumpsters') handleDumpstersMouseLeave()
                        if (item.name === 'Contact') handleContactMouseLeave()
                      }}
                    >
                     <span>{item.name}</span>
                     {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                   </Link>

                  {/* Dropdown Menus */}
                  {item.name === 'Dumpsters' && isDumpstersOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                      onMouseEnter={handleDumpstersMouseEnter}
                      onMouseLeave={handleDumpstersMouseLeave}
                    >
                      {dumpsterServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.name === 'Contact' && isContactOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                      onMouseEnter={handleContactMouseEnter}
                      onMouseLeave={handleContactMouseLeave}
                    >
                      {contactServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                                 </div>
               ))}
             </nav>

             {/* Mobile menu button */}
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="lg:hidden p-2 text-white"
               aria-label="Toggle mobile menu"
             >
               {isMenuOpen ? (
                 <X className="h-5 w-5 sm:h-6 sm:w-6" />
               ) : (
                 <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
               )}
             </button>
          </div>

                     {/* Mobile Navigation */}
           {isMenuOpen && (
             <div className="lg:hidden py-4 border-t border-[#0003d5]/50">
               <nav className="space-y-2">
                 {navigation.map((item) => (
                   <Link
                     key={item.name}
                     href={item.href}
                     className="block py-3 px-4 text-white hover:text-yellow-400 font-medium hover:bg-primary-600/50 rounded-lg transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {item.name}
                   </Link>
                 ))}
                                    <div className="pt-4 border-t border-[#0003d5]/50 mt-4">
                   <div className="px-4">
                     <p className="text-sm text-gray-200 mb-2">Call or Text</p>
                     <a href="tel:+18012099013" className="text-lg font-bold text-yellow-400 hover:text-yellow-300 block">
                       (801) 209-9013
                     </a>
                   </div>
                 </div>
               </nav>
             </div>
           )}
        </div>
      </header>
    </>
  )
}

export default Header

