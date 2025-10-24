'use client'

import { useState } from 'react'
import { Phone, MessageSquare, Star, Clock, Mail, MapPin, Share2, Calculator } from 'lucide-react'

const StickySidebar = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const buttons = [
    {
      id: 'call',
      icon: Phone,
      label: 'Call Us',
      action: () => window.location.href = 'tel:+18012099013',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'text',
      icon: MessageSquare,
      label: 'Text Us',
      action: () => window.location.href = 'sms:+18012099013',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'reviews',
      icon: Star,
      label: 'Read Reviews',
      action: () => window.location.href = '/reviews',
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      id: 'calculator',
      icon: Calculator,
      label: 'Size Calculator',
      action: () => window.location.href = '/calculator',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'callback',
      icon: Clock,
      label: 'Request Call Back',
      action: () => window.location.href = '/quote',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email Us',
      action: () => window.location.href = 'mailto:sales@tntdump.com',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      id: 'directions',
      icon: MapPin,
      label: 'Get Directions',
      action: () => window.open('https://maps.google.com/?q=Wasatch+Front+Utah', '_blank'),
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      id: 'share',
      icon: Share2,
      label: 'Share Us',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'TNT Dumpsters',
            text: 'Professional dumpster rental services in Utah',
            url: window.location.href
          })
        } else {
          navigator.clipboard.writeText(window.location.href)
          alert('Link copied to clipboard!')
        }
      },
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ]

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-1 sm:space-y-2 p-1 sm:p-2 bg-gray-800/90 backdrop-blur-sm rounded-l-lg shadow-lg">
        {buttons.map((button) => {
          const IconComponent = button.icon
          return (
            <div key={button.id} className="relative">
              <button
                onClick={button.action}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`w-10 h-10 sm:w-12 sm:h-12 ${button.color} text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
                             {/* Hover Label */}
               {hoveredButton === button.id && (
                 <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 sm:px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-xs sm:text-sm font-medium">
                   {button.label}
                   <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                 </div>
               )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StickySidebar

