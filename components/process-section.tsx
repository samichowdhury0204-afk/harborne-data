'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Scoping',
      description: 'We map your ICP, competitive landscape, and outbound infrastructure. You get a clear picture of where pipeline is being left on the table.',
    },
    {
      number: '02',
      title: 'Build & Deploy',
      description: 'Data engineering first. We build the list, configure infrastructure, write copy, and run the first campaign. No guesswork, no generic templates.',
    },
    {
      number: '03',
      title: 'Optimise & Scale',
      description: 'Campaigns are tuned monthly. As reply and conversion data compound, we expand the ICP or open new verticals — always following what the data shows.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="process" className="bg-deep text-canvas section-padding border-b border-line-dark">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <SectionLabel className="text-gold mb-8">OUR PROCESS</SectionLabel>
          <h2 className="h2-display">From brief to booked meetings.</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`pb-8 ${index !== steps.length - 1 ? 'md:border-r border-line-dark' : ''}`}
            >
              <div className="text-gold font-black text-4xl md:text-5xl mb-6">
                {step.number}
              </div>
              <h3 className="h3-display mb-4 text-canvas">
                {step.title}
              </h3>
              <p className="body-lg text-canvas">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
