import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

const includedItems = [
  'ICP definition and targeting strategy',
  'Clean, verified list building',
  'Email copy testing (2-3 variants)',
  'Domain setup, mailbox configuration, and automated warm-up',
  'Campaign delivery (agreed upon amount)',
  'n8n qualification workflow (automated lead filtering)',
  'Qualified leads forwarded directly to your sales team',
  'Bi-weekly performance analytics and reporting'
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 lg:py-40 bg-[#4A505E] w-full overflow-hidden scroll-mt-20">
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
              INVESTMENT
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            Clear pricing with no hidden components. A structured engagement designed for measurable pipeline development.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#94A378]/20 via-[#94A378]/5 to-transparent rounded-3xl" />
            
            <div className="relative bg-[#E4E4DE] rounded-xl p-8 sm:p-10 md:p-12 border border-[#4A505E]/20">
              {/* Pricing header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-10 border-b border-[#4A505E]/20">
                <div>
                  <p className="text-xs font-mono text-[#94A378] mb-3 tracking-wider">FULL-STACK PACKAGE</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-[#4A505E] tracking-tight">£1,500</span>
                    <span className="text-base font-mono text-[#4A505E]/60">/month</span>
                  </div>
                  <p className="text-xs font-mono text-[#4A505E]/50 mt-3 tracking-wide">3-month minimum commitment</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#4A505E]/60 font-mono">Setup fee:</span>
                    <span className="text-[#4A505E] font-mono font-medium">£500 one-time</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#4A505E]/60 font-mono">First month total:</span>
                    <span className="text-[#4A505E] font-mono font-medium">£2,000</span>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-10">
                <div className="text-xs font-mono text-[#4A505E]/50 mb-6 tracking-wider">WHAT'S INCLUDED</div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {includedItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-[#94A378] text-lg shrink-0 font-mono leading-none">→</span>
                      <span className="text-sm font-sans text-[#4A505E]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline summary */}
              <div className="bg-[#4A505E]/5 border border-[#4A505E]/10 rounded-lg p-6 mb-8">
                <p className="text-xs font-mono text-[#4A505E]/50 text-center mb-6 tracking-wider">PAYMENT SCHEDULE</p>
                <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                  <div className="border-r border-[#4A505E]/10 pr-2 sm:pr-4 md:pr-6">
                    <p className="text-xl sm:text-2xl font-bold text-[#4A505E] mb-1">£2,000</p>
                    <p className="text-xs sm:text-sm text-[#4A505E]/60">Month 1<br /><span className="hidden sm:inline">(setup + management)</span></p>
                  </div>
                  <div className="border-r border-[#4A505E]/10 pr-2 sm:pr-4 md:pr-6">
                    <p className="text-xl sm:text-2xl font-bold text-[#4A505E] mb-1">£1,500</p>
                    <p className="text-xs sm:text-sm text-[#4A505E]/60">Month 2</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#4A505E] mb-1">£1,500</p>
                    <p className="text-xs sm:text-sm text-[#4A505E]/60">Month 3</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-[#94A378] hover:bg-[#94A378]/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-sans font-medium rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discuss Requirements
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}