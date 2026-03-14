import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

const pricingFactors = [
  {
    label: 'Lead Volume',
    description: 'The number of qualified leads and outbound touches required each month directly impacts infrastructure scope and operational effort.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    label: 'Technical Complexity',
    description: 'Niche-specific compliance requirements, multi-step qualification logic, and advanced targeting all increase the engineering involved.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.58a1.5 1.5 0 010-2.45l5.1-3.58a1.5 1.5 0 012.08.4l.94 1.35a1.5 1.5 0 01-.4 2.08L10.98 12l3.06 2.61a1.5 1.5 0 01.4 2.08l-.94 1.35a1.5 1.5 0 01-2.08.4zM17 8l-1 8" />
      </svg>
    ),
  },
  {
    label: 'Integration Depth',
    description: 'CRM syncing, webhook automations, Slack alerts, and custom n8n workflows add layers of integration that scale the retainer accordingly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

const includedItems = [
  'ICP definition and targeting strategy',
  'Clean, verified list building',
  'Email copy testing (2-3 variants)',
  'Domain setup, mailbox configuration, and automated warm-up',
  'Campaign delivery (agreed upon volume)',
  'Qualified leads forwarded directly to your sales team',
  'Bi-weekly performance analytics and reporting',
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
          backgroundSize: '200px 200px',
        }}
      />

      {/* Technical grid background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(228,228,222,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(228,228,222,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="h-[1px] bg-[#94A378]"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#94A378] tracking-wider"
            >
              PRICING
            </motion.span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Flexible Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            Every engagement is scoped to your business. Pricing depends on the complexity of your requirements but is guaranteed to deliver a high ROI for you.
          </motion.p>
        </motion.div>

        {/* ── Retainer range banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#94A378]/20 via-[#94A378]/5 to-transparent rounded-3xl" />
            <div className="relative bg-[#E4E4DE] rounded-xl p-8 sm:p-10 md:p-12 border border-[#4A505E]/20">
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-mono text-[#94A378] mb-4 tracking-wider">MONTHLY RETAINER</p>
                <div className="flex items-baseline gap-2 flex-wrap justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-[#4A505E] tracking-tight">To be discussed</span>
                </div>
                <p className="text-sm font-sans text-[#4A505E]/60 mt-4 max-w-md">
                  Scoped during a no-obligation discovery call. Your retainer is tailored to the three factors below.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Three pricing factors ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="text-xs font-mono text-[#94A378] tracking-wider">DEPENDS ON</div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingFactors.map((factor, index) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-full">
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#94A378]/15 to-transparent rounded-2xl" />
                <div className="relative bg-[#E4E4DE] rounded-xl p-6 sm:p-8 border border-[#4A505E]/10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#94A378]">{factor.icon}</div>
                    <span className="text-xs font-mono text-[#94A378] tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-canela font-medium text-[#4A505E] mb-3">
                    {factor.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── What's included ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#94A378]/10 to-transparent rounded-3xl" />
            <div className="relative bg-[#E4E4DE] rounded-xl p-8 sm:p-10 md:p-12 border border-[#4A505E]/20">
              <div className="mb-8">
                <div className="text-xs font-mono text-[#4A505E]/50 mb-6 tracking-wider">EVERY RETAINER INCLUDES</div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#94A378] text-lg shrink-0 font-mono leading-none">→</span>
                      <span className="text-sm font-sans text-[#4A505E]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#94A378] hover:bg-[#94A378]/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-sans font-medium rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discuss Your Requirements
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}