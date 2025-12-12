import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

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
      { name: 'Partners', href: '/partners' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {/* Company Info */}
           <div className="space-y-4">
             <h3 className="text-lg sm:text-xl font-bold text-yellow-400">TNT Dumpsters</h3>
            <p className="text-gray-300">
              Over 55 years of experience in dumpster rental services. Serving the Wasatch Front area with reliable, affordable waste management solutions.
            </p>
            <p className="text-gray-300 text-sm">
              Sister company:{' '}
              <a
                href="https://icondumpsters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Icon Dumpsters
              </a>
            </p>
            <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                               <a href="tel:+18012099013" className="text-yellow-400 hover:text-yellow-300">
                 (801) 209-9013
               </a>
               </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <a href="mailto:sales@tntdump.com" className="text-yellow-400 hover:text-yellow-300">
                  sales@tntdump.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">Wasatch Front, UT</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Links</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Business Hours</h3>
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
               &copy; {currentYear} TNT Dumpsters. All rights reserved.
             </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
               {navigation.legal.map((item) => (
                 <Link
                   key={item.name}
                   href={item.href}
                  className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm transition-colors"
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









