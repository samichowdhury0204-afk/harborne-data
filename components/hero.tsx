'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'
import { StatBlock } from './ui/stat-block'
import { CTAButton } from './ui/cta-button'

export function Hero() {
  return (
    <section className="bg-deep text-canvas section-padding overflow-hidden">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="text-gold mb-8">B2B DATA & PIPELINE GROWTH</SectionLabel>

          <h1 className="h1-display mb-12 leading-[1.1]">
            Your next client<br />
            is already in the data.<br />
            You just haven't<br />
            reached them yet.
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 py-12 border-y border-line-dark">
            <StatBlock number="15+" label="Data sources ingested" />
            <StatBlock number="95%+" label="Contact accuracy" />
            <StatBlock number="8 wks" label="From brief to first qualified lead" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <CTAButton
              href="#booking"
              variant="dark"
              className="bg-canvas text-ink hover:bg-line"
            >
              Start a Conversation
            </CTAButton>
            <a
              href="#process"
              className="text-canvas font-medium hover:text-gold transition-colors underline underline-offset-4"
            >
              See how it works ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
