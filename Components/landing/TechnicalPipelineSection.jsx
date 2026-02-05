import React from 'react';
import { motion } from 'framer-motion';

// Simple geometric SVG icons for each stage
const StageIcon = ({ type }) => {
  const iconProps = { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  
  switch(type) {
    case 'database':
      return (
        <svg {...iconProps}>
          <rect x="4" y="6" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'search':
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="12" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...iconProps}>
          <path d="M10 3L5 6V10C5 13 7 15 10 17C13 15 15 13 15 10V6L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'lightning':
      return (
        <svg {...iconProps}>
          <path d="M11 3L6 11H10L9 17L14 9H10L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const pipelineStages = [
  {
    id: '01',
    title: 'DATA SOURCING',
    description: 'Multi-source aggregation from premium B2B databases, verified contact enrichment, real-time validation protocols',
    iconType: 'database',
    metrics: ['15+ data sources', '95%+ accuracy', 'Daily refresh cycles']
  },
  {
    id: '02',
    title: 'LEAD ENRICHMENT',
    description: 'Technographic analysis, intent signal processing, ICP scoring algorithms, decision-maker identification',
    iconType: 'search',
    metrics: ['30+ data points', 'ML-powered scoring', 'Role verification']
  },
  {
    id: '03',
    title: 'DELIVERABILITY ENGINEERING',
    description: 'SPF/DKIM/DMARC configuration, domain warming protocols, sender reputation management, inbox placement optimisation',
    iconType: 'shield',
    metrics: ['99%+ inbox rate', '10+ warm domains', 'Real-time monitoring']
  },
  {
    id: '04',
    title: 'EMAIL SEQUENCING',
    description: 'Multi-variant testing, cadence optimisation, reply classification, automated follow-up logic, conversion tracking',
    iconType: 'lightning',
    metrics: ['A/B/C testing', '7-touch sequences', 'Smart cadencing']
  }
];

export default function TechnicalPipelineSection() {
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial Style */}
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
              SYSTEM ARCHITECTURE
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Outbound Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            A four-stage infrastructure designed for predictable, systematic B2B outreach. 
            Each component is engineered for reliability, deliverability, and qualified response generation.
          </motion.p>
        </motion.div>

        {/* Pipeline Flow - Vertical, Asymmetrical */}
        <div className="space-y-16">
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} max-w-2xl`}
            >
              {/* Connector Line */}
              {index < pipelineStages.length - 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 64, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-full w-[1px] bg-gradient-to-b from-[#94A378]/40 to-transparent hidden md:block`} 
                />
              )}

              <div className="group relative">
                {/* Stage Number Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 rounded border border-[#94A378]/30 bg-[#94A378]/5 flex items-center justify-center"
                  >
                    <div className="text-[#94A378]">
                      <StageIcon type={stage.iconType} />
                    </div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl font-mono font-bold text-[#E4E4DE]/10 group-hover:text-[#E4E4DE]/20 transition-colors"
                  >
                    {stage.id}
                  </motion.span>
                </div>

                {/* Content Block */}
                <div className="border-l-2 border-[#94A378]/30 pl-6 space-y-3">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-canela font-medium text-[#E4E4DE] tracking-tight"
                  >
                    {stage.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm md:text-base font-sans text-[#E4E4DE]/60 leading-relaxed"
                  >
                    {stage.description}
                  </motion.p>

                  {/* Technical Metrics */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {stage.metrics.map((metric, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.6 + (i * 0.1),
                          ease: "easeOut"
                        }}
                        className="text-xs font-mono px-3 py-1 bg-[#E4E4DE]/5 border border-[#E4E4DE]/10 rounded text-[#E4E4DE]/50"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Flow Arrow */}
                {index < pipelineStages.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-8 flex items-center justify-center md:hidden"
                  >
                    <span className="text-xl text-[#94A378]/30 font-mono">↓</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Output Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 p-8 border border-[#94A378]/30 bg-[#94A378]/5 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-2 h-2 mt-2 rounded-full bg-[#94A378]" 
            />
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xs font-mono text-[#94A378] mb-2 tracking-wider"
              >
                OUTPUT
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-lg font-canela text-[#E4E4DE] mb-2"
              >
                Qualified conversations → Your inbox
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-sm font-sans text-[#E4E4DE]/60"
              >
                Automated filtering forwards only interested, qualified responses to your sales team. 
                No spam, no unqualified leads—just conversations ready for booking.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
