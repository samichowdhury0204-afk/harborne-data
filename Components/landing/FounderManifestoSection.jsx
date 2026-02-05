import React from 'react';
import { motion } from 'framer-motion';

export default function FounderManifestoSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 bg-[#E4E4DE] w-full overflow-hidden scroll-mt-20">
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
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
          backgroundImage: `linear-gradient(rgba(74,80,94,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74,80,94,0.3) 1px, transparent 1px)`,
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
              FOUNDER BACKGROUND
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#4A505E] mb-6 leading-tight tracking-tight"
          >
            Why I Built This
          </motion.h2>
        </motion.div>

        <div className="space-y-16">
          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-2 border-[#94A378]/30 bg-[#94A378]/5 pl-6 md:pl-8 py-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs font-mono text-[#94A378] mb-3 tracking-wider"
            >
              MANIFESTO
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="text-lg md:text-xl font-canela text-[#4A505E] leading-relaxed mb-4"
            >
              Technical companies shouldn't divert engineering resources to cold email infrastructure. You build sophisticated systems—outbound should operate with the same reliability.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.5 }}
              className="text-base font-sans text-[#4A505E]/70 leading-relaxed"
            >
              I spent nearly 3 years engineering automated systems for UK defence—pipeline analytics, decision intelligence, data infrastructure at scale. Harborne Data applies that same engineering discipline to B2B outreach: systematic, measurable, reliable.
            </motion.p>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-2 border-[#4A505E]/30 pl-6 md:pl-8 py-6"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="text-base md:text-lg font-sans text-[#4A505E] leading-relaxed italic"
            >
              "I manage the technical complexity—deliverability engineering, data infrastructure, sequencing logic—so you concentrate on what you do best: serving clients and closing qualified opportunities."
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm font-mono text-[#4A505E]/60 mt-4"
            >
              — Sami Chowdhury, Founder
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
