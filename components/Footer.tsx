import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Residential Dumpster Service', href: '/dumpsters/residential' },
      { name: 'Commercial Dumpster Service', href: '/dumpsters/commercial' },
      { name: 'Industrial Dumpster Service', href: '/dumpsters/industrial' },
      { name: 'Short-Term Dumpster Service', href: '/dumpsters/short-term' },
      { name: 'Long-Term Dumpster Service', href: '/dumpsters/long-term' },
      { name: 'Vendor Dumpster Rental Service', href: '/dumpsters/vendor' },
      { name: 'Concrete Dumpsters', href: '/dumpsters/concrete' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Contact', href: '/contact' },
      { name: 'Estate Cleanouts', href: '/estate-cleanouts' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Accessibility Policy', href: '/accessibility-policy' },
    ],
  }

     return (
     <footer className="bg-gray-900 text-white">
       <div className="container-custom py-8 sm:py-12">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                     {/* Company Info */}
           <div className="space-y-4">

            <div className="flex items-center space-x-2">
              <div className="relative h-8 sm:h-10 w-[160px] sm:w-[176px]">
                <Image
                  src="/images/t-and-t-dumpsters-logo-176w.webp"
                  alt="T&T Dumpsters Logo - Professional dumpster rental services in Utah"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
             <h3 className="text-lg sm:text-xl font-bold text-primary-400">T&T Dumpsters</h3>
            <p className="text-gray-300">
              Over 55 years of experience in dumpster rental services. Serving the Wasatch Front area with reliable, affordable waste management solutions.
            </p>
            <div className="space-y-2">
                             <div className="flex items-center space-x-2">
                 <Phone className="h-4 w-4 text-primary-400" />
                                <a href="tel:+18012099013" className="text-gray-300 hover:text-white">
                 (801) 209-9013
               </a>
               </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <a href="mailto:admin@tntdump.com" className="text-gray-300 hover:text-white">
                  admin@tntdump.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">Wasatch Front, UT</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Monday - Friday:</strong></p>
              <p>7:00 am - 9:00 pm</p>
              <p className="mt-4"><strong>Saturday - Sunday:</strong></p>
              <p>Closed</p>
              <p className="text-sm mt-4">
                Call for after-hours or weekend availability.
              </p>
            </div>
          </div>
        </div>

                 {/* Bottom Section */}
         <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
             <div className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
               © {currentYear} T&T Dumpsters. All rights reserved.
             </div>
             <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
               {navigation.legal.map((item) => (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
                 >
                   {item.name}
                 </Link>
               ))}
             </div>
           </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer








