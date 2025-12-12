'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone, Menu, X, ChevronDown, Star } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDumpstersOpen, setIsDumpstersOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Timeout refs for dropdown delays
  const dumpstersTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const toolsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Cities', href: '/cities', hasDropdown: false },
    { name: 'Dumpsters', href: '/dumpsters', hasDropdown: true },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Tools', href: '#', hasDropdown: true },
    { name: 'About', href: '/about', hasDropdown: true },
    { name: 'Contact', href: '/contact', hasDropdown: true },
  ]

  const dumpsterServices = [
    { name: 'All Dumpster Types', href: '/dumpsters' },
    { name: 'Residential Dumpster Rental', href: '/dumpsters/residential' },
    { name: 'Commercial Dumpster Rental', href: '/dumpsters/commercial' },
    { name: 'Industrial Dumpster Rental', href: '/dumpsters/industrial' },
    { name: 'Short-Term Dumpster Rental', href: '/dumpsters/short-term' },
    { name: 'Long-Term Dumpster Rental', href: '/dumpsters/long-term' },
    { name: 'Vendor Dumpster Rental', href: '/dumpsters/vendor' },
    { name: 'Concrete Dumpsters', href: '/dumpsters/concrete' },
  ]

  const toolsServices = [
    { name: 'Size Calculator', href: '/calculator' },
    { name: 'Get Free Quote', href: '/quote' },
    { name: 'Order Online', href: '/cart' },
    { name: 'Request Call Back', href: '/quote' },
    { name: 'Schedule Pickup', href: '/contact' },
  ]

  const aboutServices = [
    { name: 'About Us', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Partners', href: '/partners' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Our Story', href: '/about' },
  ]

  const contactServices = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request Quote', href: '/quote' },
    { name: 'Emergency Service', href: '/contact' },
    { name: 'Schedule Pickup', href: '/contact' },
  ]

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (dumpstersTimeoutRef.current) clearTimeout(dumpstersTimeoutRef.current)
      if (toolsTimeoutRef.current) clearTimeout(toolsTimeoutRef.current)
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
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
    }, 150)
  }

  const handleToolsMouseEnter = () => {
    if (toolsTimeoutRef.current) clearTimeout(toolsTimeoutRef.current)
    setIsToolsOpen(true)
  }

  const handleToolsMouseLeave = () => {
    toolsTimeoutRef.current = setTimeout(() => {
      setIsToolsOpen(false)
    }, 150)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
    setIsAboutOpen(true)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false)
    }, 150)
  }

  const handleContactMouseEnter = () => {
    if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current)
    setIsContactOpen(true)
  }

  const handleContactMouseLeave = () => {
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false)
    }, 150)
  }

        return (
     <>
       {/* Single Blue Header */}
      <header id="site-header" className="bg-gray-900 text-yellow-400 shadow-lg sticky top-0 z-50">
         <div className="container-custom">
                      <div className="flex items-center justify-between h-[80px]">
              {/* Left Side - Contact Info */}
              <div className="flex items-center space-x-8">
                <div className="text-yellow-400">
                  <p className="text-sm">Serving the Wasatch Front Area</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">Call or Text</span>
                                         <a href="tel:+18012099013" className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                       (801) 209-9013
                     </a>
                  </div>
                </div>
              </div>

              {/* Center spacer to balance layout after removing logo */}
              <div className="flex-1" />

              {/* Navigation - Right */}
              <nav className="hidden lg:flex items-center space-x-8">
               {navigation.map((item) => (
                 <div key={item.name} className="relative">
                                       <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 font-medium transition-colors ${item.name === 'Home' ? 'underline' : ''}`}
                      onMouseEnter={() => {
                        if (item.hasDropdown) {
                          if (item.name === 'Dumpsters') handleDumpstersMouseEnter()
                          if (item.name === 'Tools') handleToolsMouseEnter()
                          if (item.name === 'About') handleAboutMouseEnter()
                          if (item.name === 'Contact') handleContactMouseEnter()
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Dumpsters') handleDumpstersMouseLeave()
                        if (item.name === 'Tools') handleToolsMouseLeave()
                        if (item.name === 'About') handleAboutMouseLeave()
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

                  {item.name === 'Tools' && isToolsOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                      onMouseEnter={handleToolsMouseEnter}
                      onMouseLeave={handleToolsMouseLeave}
                    >
                      {toolsServices.map((service) => (
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

                  {item.name === 'About' && isAboutOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                      onMouseEnter={handleAboutMouseEnter}
                      onMouseLeave={handleAboutMouseLeave}
                    >
                      {aboutServices.map((service) => (
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
              className="lg:hidden p-2 text-yellow-400"
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
                     className="block py-3 px-4 text-yellow-400 hover:text-yellow-300 font-medium hover:bg-primary-600/50 rounded-lg transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {item.name}
                   </Link>
                 ))}
                                   <div className="pt-4 border-t border-[#0003d5]/50 mt-4">
                   <div className="px-4">
                     <p className="text-sm text-yellow-400 mb-2">Call or Text</p>
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

