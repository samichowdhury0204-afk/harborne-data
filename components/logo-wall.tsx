'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'

export function LogoWall() {
  const partners = [
    'Aerospace & Defence',
    'Manufacturing Groups',
    'Professional Services',
    'SaaS & Technology',
    'Financial Services',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-canvas section-padding border-b border-line">
      <div className="container-base">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionLabel>TRUSTED BY FIRMS ACROSS</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {partners.map((partner) => (
              <motion.div key={partner} variants={itemVariants} className="py-6">
                <p className="text-ink-muted font-medium text-sm md:text-base leading-tight">
                  {partner}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
