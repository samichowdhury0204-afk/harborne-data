'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'
import { StatBlock } from './ui/stat-block'

export function CaseStudySection() {
  return (
    <section className="bg-canvas section-padding border-b border-line">
      <div className="container-base max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionLabel>FEATURED ENGAGEMENT</SectionLabel>

          <h2 className="h2-display mb-8">
            12 qualified meetings in 6 weeks for a London-based manufacturing group.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-12 border-y border-line">
            <StatBlock number="12" label="Qualified meetings" />
            <StatBlock number="8,400+" label="Verified contacts built" />
            <StatBlock number="6 wks" label="From brief to first reply" />
            <StatBlock number="3" label="New verticals unlocked" />
          </div>

          <p className="body-lg text-ink">
            The client had a strong delivery track record but a thin outbound pipeline. We built a segmented contact database across aerospace, defence, and automotive procurement teams — then ran a sequenced campaign with founder-tone copy. The first replies came in week three.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
