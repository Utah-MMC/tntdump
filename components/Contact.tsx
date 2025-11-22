"use client"
import { Phone, Clock, MapPin, Mail } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600">
                Ready to get started with your dumpster rental? Contact us today for a free estimate and professional service.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                                  <a href="tel:+18012099013" className="text-lg text-primary-600 hover:text-primary-700 font-semibold">
                  +1 (801) 209-9013
                </a>
                  <p className="text-sm text-gray-600">Call or Text</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600">
                    <p><strong>Mon - Fri:</strong> 7:00 am - 9:00 pm</p>
                    <p><strong>Sat - Sun:</strong> Closed</p>
                    <p className="text-sm mt-2">Call for after-hours or weekend availability.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Serving Area</h3>
                  <p className="text-gray-600">Wasatch Front</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:sales@tntdump.com" className="text-primary-600 hover:text-primary-700">
                    sales@tntdump.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-600">
                By selecting TNT Dumpsters for your waste management requirements, you are opting for a firm with a demonstrated history of dependability and high performance. Call or text our family-owned and locally operated enterprise today!
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/tntvideo.mp4"
                controls
                playsInline
                preload="metadata"
                aria-label="TNT Dumpsters truck video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact













