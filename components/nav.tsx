'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CTAButton } from './ui/cta-button'

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-canvas border-b border-line">
      <div className="container-base flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/logo-rounded.webp"
            alt="Harborne Data"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#services" className="text-ink font-medium hover:text-gold transition-colors">
            What We Do
          </a>
          <a href="#process" className="text-ink font-medium hover:text-gold transition-colors">
            Process
          </a>
          <a href="#testimonials" className="text-ink font-medium hover:text-gold transition-colors">
            Results
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton href="#booking">Start a Conversation</CTAButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-canvas">
          <div className="container-base py-6 flex flex-col gap-6">
            <a href="#services" className="text-ink font-medium">
              What We Do
            </a>
            <a href="#process" className="text-ink font-medium">
              Process
            </a>
            <a href="#testimonials" className="text-ink font-medium">
              Results
            </a>
            <CTAButton href="#booking" className="w-full justify-center">
              Start a Conversation
            </CTAButton>
          </div>
        </div>
      )}
    </nav>
  )
}
