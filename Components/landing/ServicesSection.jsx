import React from 'react';
import { motion } from 'framer-motion';

const serviceBlocks = [
  {
    section: 'Phase I',
    title: 'Foundation & Targeting',
    content: `Before sending a single email, we build the infrastructure. This includes ICP definition—identifying the exact decision-makers who need your services—and list building from verified, premium B2B databases. We configure domains, set up mailboxes, implement SPF/DKIM/DMARC records, and initiate automated warm-up sequences to establish sender reputation.`,
    duration: 'Week 1-2',
    deliverables: ['Configured domains', 'Warmed mailboxes', '1,000+ verified contacts']
  },
  {
    section: 'Phase II',
    title: 'Copy Development & Testing',
    content: `We draft 2-3 email variants tailored to your service offering and target persona. Each variant is tested across different segments to determine optimal messaging, subject lines, and CTAs. This is not generic templating—it's hypothesis-driven copywriting backed by conversion data.`,
    duration: 'Week 2-3',
    deliverables: ['3 tested variants', 'Optimised sequences', 'Performance baselines']
  },
  {
    section: 'Phase III',
    title: 'Campaign Execution & Monitoring',
    content: `We launch multi-mailbox campaigns sending an agreed upon amount of emails monthly with smart cadencing and deliverability monitoring. Real-time adjustments are made based on engagement rates, bounce rates, and reply sentiment. Your outbound engine is now operational.`,
    duration: 'Week 3+',
    deliverables: ['Agreed upon monthly sends', 'Multi-mailbox rotation', 'Real-time optimisation']
  },
  {
    section: 'Phase IV',
    title: 'Lead Qualification & Handoff',
    content: `Not all replies are created equal. We filter spam, auto-responders, and unqualified leads. Only interested, relevant responses are forwarded to your inbox—conversations that are ready for booking. Your team focuses on closing, not sorting.`,
    duration: 'Ongoing',
    deliverables: ['Qualified responses only', 'Direct inbox forwarding', 'Bi-weekly reporting']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 bg-[#4A505E] w-full overflow-hidden">
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
        {/* Editorial Header */}
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
              EXECUTION METHODOLOGY
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Execution Methodology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            A structured approach to building repeatable, systematic outbound infrastructure. 
            No shortcuts. No abstractions. Engineering discipline applied to pipeline development.
          </motion.p>
        </motion.div>

        {/* Vertical Editorial Flow - Staggered */}
        <div className="space-y-20">
          {serviceBlocks.map((block, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative ${index % 2 === 1 ? 'md:ml-16' : ''}`}
            >
              {/* Section Marker */}
              <div className="flex items-center gap-4 mb-6">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="text-sm font-mono text-[#94A378] border border-[#94A378]/30 px-3 py-1 rounded bg-[#94A378]/5"
                >
                  {block.section}
                </motion.span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="h-[1px] flex-1 bg-gradient-to-r from-[#E4E4DE]/10 to-transparent" 
                />
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xs font-mono text-[#E4E4DE]/50"
                >
                  {block.duration}
                </motion.span>
              </div>

              {/* Content Block */}
              <div className="border-l-2 border-[#94A378]/30 pl-6 md:pl-8 space-y-4">
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-2xl md:text-3xl font-canela font-medium text-[#E4E4DE] tracking-tight"
                >
                  {block.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-sm md:text-base font-sans text-[#E4E4DE]/60 leading-relaxed"
                >
                  {block.content}
                </motion.p>

                {/* Deliverables */}
                <div className="pt-4">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-xs font-mono text-[#E4E4DE]/50 mb-3 tracking-wider"
                  >
                    DELIVERABLES
                  </motion.div>
                  <div className="flex flex-wrap gap-2">
                    {block.deliverables.map((item, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + (i * 0.1),
                          ease: "easeOut"
                        }}
                        className="text-xs font-mono px-3 py-1.5 bg-[#E4E4DE]/5 border border-[#E4E4DE]/10 rounded text-[#E4E4DE]/50"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flow connector */}
              {index < serviceBlocks.length - 1 && (
                <div className="flex items-center gap-2 mt-12 ml-6 md:ml-8 text-[#E4E4DE]/50">
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 32, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    className="w-[1px] bg-gradient-to-b from-[#94A378]/30 to-transparent" 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-[#94A378]/30 font-mono text-xl leading-none"
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 p-8 border-l-2 border-[#94A378]/30 bg-[#94A378]/5"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs font-mono text-[#94A378] mb-3 tracking-wider"
          >
            NOTE
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-sm font-sans text-[#E4E4DE]/60 leading-relaxed mb-3"
          >
            Month 1 is a testing and optimisation period. We refine messaging, validate targeting, and establish baseline performance metrics.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-sm font-sans text-[#E4E4DE]/60 leading-relaxed"
          >
            We forward qualified conversations to you—your team handles meeting booking and closing. We handle everything upstream.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}