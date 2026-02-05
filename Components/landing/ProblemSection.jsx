import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    problem: 'Outbound requires specialised infrastructure',
    reality: 'Engineering reliable systems is your expertise. Cold outreach requires deliverability optimisation, data engineering, and sequencing logic—a distinct technical discipline.'
  },
  {
    problem: 'Pipeline gaps compound over time',
    reality: 'Without systematic outbound infrastructure, qualified conversations don\'t materialise—regardless of your service quality or technical capability.'
  },
  {
    problem: 'Ad-hoc campaigns yield inconsistent results',
    reality: 'Sending emails is straightforward. Building a system that reliably reaches inboxes, generates meaningful responses, and qualifies interest is engineering work.'
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-[#4A505E] w-full overflow-hidden">
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Technical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(228,228,222,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(228,228,222,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] bg-[#94A378]" 
            />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#94A378] tracking-wider"
            >
              THE PROBLEM
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Technical Companies Don't Lack Expertise—
            <br />They Lack Outbound Infrastructure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            You engineer complex systems with precision. But structured outbound is a separate discipline—and building it in-house diverts resources from your core competencies.
          </motion.p>
        </motion.div>

        {/* Pain Points */}
        <div className="space-y-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="border-l-2 border-[#E4E4DE]/10 pl-6 md:pl-8"
            >
              <div className="flex items-start gap-4 mb-3">
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="text-[#E4E4DE]/30 font-mono text-2xl leading-none shrink-0"
                >
                  —
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-xl md:text-2xl font-canela font-medium text-[#E4E4DE]"
                >
                  {point.problem}
                </motion.h3>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-sm md:text-base font-sans text-[#E4E4DE]/60 leading-relaxed ml-10"
              >
                {point.reality}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 p-8 border border-[#94A378]/30 bg-[#94A378]/5 rounded-lg"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="text-base md:text-lg font-canela text-[#E4E4DE] mb-2"
          >
            The solution isn't working harder—it's deploying better infrastructure.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-sm font-sans text-[#E4E4DE]/60"
          >
            A system that manages data sourcing, enrichment, deliverability, and sequencing—so you focus on qualified conversations, not campaign troubleshooting.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
