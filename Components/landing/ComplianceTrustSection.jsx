import React from 'react';
import { motion } from 'framer-motion';

const trustFactors = [
  {
    number: '01',
    title: 'GDPR Compliant',
    description: 'Full compliance with EU data protection regulations. Proper consent mechanisms, data processing agreements, and audit trails.'
  },
  {
    number: '02',
    title: 'Transparent Operations',
    description: 'No blackhat tactics. No purchased lists. No spam. Clean data sourcing, verified contacts, and ethical outbound practices only.'
  }
];

export default function ComplianceTrustSection() {
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
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
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
              COMPLIANCE & TRUST
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] bg-[#94A378]" 
            />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Responsible Outreach Infrastructure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-2xl mx-auto"
          >
            Full regulatory compliance and transparent operations. No shortcuts, no aggressive tactics—professional B2B outreach that respects both recipients and your reputation.
          </motion.p>
        </motion.div>

        {/* Trust Factors - Asymmetrical Vertical Layout */}
        <div className="space-y-8 mb-16 max-w-3xl">
          {trustFactors.map((factor, index) => (
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
              className="border-l-2 border-[#94A378]/30 pl-8 md:pl-10"
              style={{ marginLeft: index % 2 === 1 ? '4rem' : '0' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                className="text-4xl font-mono text-[#94A378]/20 mb-2 leading-none"
              >
                {factor.number}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (index * 0.15) }}
                className="text-lg font-canela font-medium text-[#E4E4DE] mb-3"
              >
                {factor.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 + (index * 0.15) }}
                className="text-sm font-sans text-[#E4E4DE]/60 leading-relaxed"
              >
                {factor.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#E4E4DE]/10"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs font-mono text-[#E4E4DE]/50 tracking-wider"
          >
            CERTIFIED COMPLIANCE
          </motion.div>
          <div className="flex items-center gap-4">
            {/* GDPR Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 px-4 py-2 border border-[#E4E4DE]/20 rounded bg-[#E4E4DE]/5"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#E4E4DE" strokeWidth="1.5" fill="none"/>
                <path d="M16 8V16L20 20" stroke="#94A378" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L16 16" stroke="#94A378" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="text-xs font-mono font-semibold text-[#E4E4DE]">GDPR</div>
                <div className="text-[10px] font-mono text-[#E4E4DE]/60">Compliant</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
