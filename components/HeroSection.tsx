import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  showPhoneButton?: boolean
  backgroundImage?: string
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  showPhoneButton = true,
  backgroundImage = "/images/tand-t-dumpsters-hero-home-1920w.webp"
}: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Dumpster rental services hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl lg:text-2xl mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showPhoneButton && (
            <a href="tel:+18012099013" className="btn-primary text-lg px-8 py-4">
              Call (801) 209-9013
            </a>
          )}
          {primaryButton && (
            <a href={primaryButton.href} className="btn-primary text-lg px-8 py-4">
              {primaryButton.text}
            </a>
          )}
          {secondaryButton && (
            <a href={secondaryButton.href} className="btn-secondary text-lg px-8 py-4">
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
