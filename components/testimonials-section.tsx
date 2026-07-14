'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './ui/section-label'
import { TestimonialCard } from './ui/testimonial-card'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Harborne Data transformed how we approach enterprise pipeline. The contact quality alone reduced our outreach waste by two-thirds.",
      attribution: 'Operations Director, UK Manufacturing Group',
    },
    {
      quote: "We'd tried agencies before. This was different — the data infrastructure was genuinely robust, and the outreach felt like it came from us.",
      attribution: 'CEO, Professional Services Firm',
    },
    {
      quote: "From kickoff to first qualified meetings in under 8 weeks. The segmentation was more precise than anything we'd built internally.",
      attribution: 'Head of BD, SaaS Company',
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
    <section id="testimonials" className="bg-canvas section-padding border-b border-line">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <SectionLabel>CLIENT RESULTS</SectionLabel>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard
                quote={testimonial.quote}
                attribution={testimonial.attribution}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
