'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'

export function ProblemSection() {
  return (
    <section className="bg-canvas section-padding border-b border-line">
      <div className="container-base max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionLabel>THE CHALLENGE</SectionLabel>

          <h2 className="h2-display mb-10">
            Most firms have a pipeline gap, not a product gap.
          </h2>

          <div className="space-y-6">
            <p className="body-lg text-ink">
              You have a strong offer. Your delivery is proven. But your outbound pipeline is too thin, too slow, or too dependent on referrals to sustain the growth you need.
            </p>

            <p className="body-lg text-ink">
              The real issue is data infrastructure. Bad data means wasted outreach. No segmentation means generic messaging. Without a systematic process, the pipeline dries up the moment you take your eye off it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
