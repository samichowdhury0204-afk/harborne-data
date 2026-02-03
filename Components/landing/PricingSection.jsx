import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const includedItems = [
  'ICP definition and targeting strategy',
  'Clean, verified list building',
  'Email copy testing (2-3 variants)',
  'Domain setup, mailbox configuration, and automated warm-up',
  'Campaign delivery (3,000+ emails/month)',
  'n8n qualification workflow (automated lead filtering)',
  'Qualified leads forwarded directly to your sales team',
  'Bi-weekly performance analytics and reporting'
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0A0A0B] via-[#0d0d0f] to-[#0A0A0B] w-full overflow-hidden scroll-mt-20">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
            Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No long-term lock-in. Just straightforward pricing for predictable pipeline growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent rounded-3xl" />
            
            <div className="relative bg-[#111113] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/5">
              {/* Pricing header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/5">
                <div>
                  <p className="text-xs sm:text-sm text-blue-400 font-medium mb-2">Full-Service Package</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">£2,000</span>
                    <span className="text-sm sm:text-base text-zinc-500">/month</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-2">3-month minimum commitment</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <span className="text-zinc-500">Setup fee:</span>
                    <span className="text-white font-medium">£1,000 one-time</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <span className="text-zinc-500">First month total:</span>
                    <span className="text-white font-medium">£3,000</span>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6">What You're Paying For</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {includedItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline summary */}
              <div className="bg-white/[0.02] rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm text-zinc-500 text-center mb-4 sm:mb-6 font-medium">Payment Schedule</p>
                <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                  <div className="border-r border-white/5 pr-2 sm:pr-4 md:pr-6">
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1">£3,000</p>
                    <p className="text-xs sm:text-sm text-zinc-500">Month 1<br /><span className="hidden sm:inline">(setup + management)</span></p>
                  </div>
                  <div className="border-r border-white/5 pr-2 sm:pr-4 md:pr-6">
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1">£2,000</p>
                    <p className="text-xs sm:text-sm text-zinc-500">Month 2</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1">£2,000</p>
                    <p className="text-xs sm:text-sm text-zinc-500">Month 3</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(59,130,246,0.3)] w-full sm:w-auto"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}