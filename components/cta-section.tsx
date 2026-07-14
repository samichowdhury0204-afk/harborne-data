'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'
import { CTAButton } from './ui/cta-button'

export function CTASection() {
  return (
    <section id="booking" className="bg-deep text-canvas section-padding border-b border-line-dark">
      <div className="container-base max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionLabel className="justify-center text-gold mb-8">GET STARTED</SectionLabel>

          <h2 className="h2-display mb-6">
            Let's find your next client.
          </h2>

          <p className="body-lg text-canvas mb-12">
            30-minute discovery call. No pitch deck.
          </p>

          <CTAButton
            href="https://calendly.com/samichowdhury1708/30min"
            variant="dark"
            className="bg-canvas text-ink hover:bg-line mx-auto"
          >
            Start a Conversation
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
