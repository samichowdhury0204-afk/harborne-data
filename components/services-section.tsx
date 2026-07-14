'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'
import { ServiceCard } from './ui/service-card'

export function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Market Intelligence & ICP Mapping',
      description: 'We identify your ideal buyers across firmographic and signals-based dimensions — verified account lists before a single message is sent.',
    },
    {
      number: '02',
      title: 'Data Build & Contact Enrichment',
      description: 'Multi-source ingestion, waterfall enrichment, email verification, AI role classification. 10,000+ records at 95%+ accuracy.',
    },
    {
      number: '03',
      title: 'Outbound Campaign Infrastructure',
      description: 'Domain configuration, inbox warming, copy testing, sequencing. Founder-tone copy that reads like a conversation, not a broadcast.',
    },
    {
      number: '04',
      title: 'Pipeline Reporting & Maintenance',
      description: 'Live dashboards tracking reply rates and pipeline value. Monthly data refreshes so your ICP never goes stale.',
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
    <section id="services" className="bg-canvas section-padding border-b border-line">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <SectionLabel>OUR SERVICES</SectionLabel>
          <h2 className="h2-display">Four capabilities. One coherent system.</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.number} variants={itemVariants}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
