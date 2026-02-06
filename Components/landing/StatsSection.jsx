import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '3,000+',
    label: 'Decision-makers reached',
    context: 'First quarter',
    description: 'Verified contacts across technical leadership, operations management, and executive roles'
  },
  {
    value: '30-50',
    label: 'Qualified conversations',
    context: 'Per quarter',
    description: 'Filtered responses expressing genuine interest in services—validated, qualified, and forwarded'
  },
  {
    value: '2-5',
    label: 'Engagements closed',
    context: 'Typical range',
    description: 'Based on observed conversion rates from qualified outbound conversations to signed agreements'
  }
];

export default function StatsSection() {
  return (
    <section id="results" className="relative py-24 md:py-32 lg:py-40 bg-[#E4E4DE] w-full overflow-hidden">
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
              EXPECTED OUTCOMES
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#4A505E] mb-6 leading-tight tracking-tight"
          >
            Expected Outcomes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#4A505E]/70 leading-relaxed max-w-3xl"
          >
            Measured projections based on observed outbound campaigns for technical companies. 
            Results vary based on market positioning, offer clarity, and conversion capability.
          </motion.p>
        </motion.div>

        {/* Asymmetrical Metric Flow */}
        <div className="space-y-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative ${index % 2 === 1 ? 'md:ml-20' : ''} ${index === 1 ? 'md:mr-12' : ''}`}
            >
              <div className="flex items-start gap-6">
                {/* Large Metric Display */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.9, 
                    delay: 0.2,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="shrink-0"
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-[#4A505E] tracking-tighter">
                    {metric.value}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xs font-mono text-[#4A505E]/40 mt-2 tracking-wider"
                  >
                    {metric.context}
                  </motion.div>
                </motion.div>

                {/* Vertical Divider */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 80, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="w-[1px] bg-gradient-to-b from-[#94A378]/40 to-transparent mt-2" 
                />

                {/* Content */}
                <div className="space-y-2 pt-2">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl font-canela text-[#4A505E] tracking-tight"
                  >
                    {metric.label}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm font-sans text-[#4A505E]/60 leading-relaxed"
                  >
                    {metric.description}
                  </motion.p>
                </div>
              </div>

              {/* Connector line for flow */}
              {index < metrics.length - 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 48, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="ml-12 mt-8 w-[1px] bg-gradient-to-b from-[#94A378]/30 to-transparent" 
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Disclaimer - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 border-l-2 border-[#4A505E]/30 pl-6 md:pl-8"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs font-mono text-[#4A505E]/50 mb-3 tracking-wider"
          >
            DISCLAIMER
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm font-sans text-[#4A505E]/60 leading-relaxed max-w-2xl"
          >
            These figures represent lower-bound projections and may differ based on your offer positioning, 
            email copy effectiveness, and ICP targeting accuracy. We refine continuously to improve results, 
            but outbound success depends on multiple variables—some within our control, others dependent on 
            your sales process and market fit.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}