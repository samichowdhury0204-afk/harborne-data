import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';

const includedItems = [
  'ICP definition and market segmentation protocols',
  'Verified contact database with enrichment pipelines',
  'Message variant testing (2-3 sequences per cycle)',
  'Domain authentication, mailbox orchestration, automated warm-up',
  'Multi-channel sequencing (3,000+ emails/month)',
  'Automated qualification workflow and response routing',
  'Meeting-ready conversations forwarded to sales infrastructure',
  'Bi-weekly performance analytics and optimization reporting'
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32 bg-ethereal-ivory w-full overflow-hidden scroll-mt-20">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-cinnamon-slate/20"></div>
            <span className="font-mono text-xs text-cinnamon-slate/50 tracking-wider">DEPLOYMENT COSTS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-cinnamon-slate leading-tight max-w-2xl">
            Infrastructure Pricing
          </h2>
          <p className="font-sans text-sm sm:text-base text-cinnamon-slate/60 max-w-xl mt-4 leading-relaxed">
            Fixed monthly architecture fee. No performance-based models. Transparent deployment costs for predictable outreach infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Pricing header - editorial layout */}
          <div className="border-l-2 border-cinnamon-slate/20 pl-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 mb-8 pb-8 border-b border-cinnamon-slate/10">
              <div className="font-mono text-5xl sm:text-6xl md:text-7xl font-light text-cinnamon-slate tracking-tight">
                £2,000
              </div>
              <div className="space-y-1">
                <div className="font-sans text-base text-cinnamon-slate/50">/month</div>
                <div className="font-mono text-xs text-muted-sage">Complete Infrastructure Stack</div>
              </div>
            </div>
            
            <div className="space-y-2 text-sm mb-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-cinnamon-slate/40 w-24">Setup fee:</span>
                <span className="font-mono text-cinnamon-slate">£1,000 one-time</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-cinnamon-slate/40 w-24">Month 1 total:</span>
                <span className="font-mono text-cinnamon-slate font-medium">£3,000</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-cinnamon-slate/40 w-24">Minimum term:</span>
                <span className="font-sans text-cinnamon-slate/60">90-day deployment cycle</span>
              </div>
            </div>

            {/* What's included - list format */}
            <div>
              <h3 className="font-mono text-xs text-cinnamon-slate/40 tracking-wider mb-4">INFRASTRUCTURE COMPONENTS</h3>
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-muted-sage/40 mt-1">→</span>
                    <span className="font-sans text-sm text-cinnamon-slate/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deployment schedule - table format */}
          <div className="border-t border-cinnamon-slate/10 pt-8 mb-12">
            <div className="font-mono text-xs text-cinnamon-slate/40 tracking-wider mb-6">DEPLOYMENT SCHEDULE</div>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-2 border-cinnamon-slate/20 pl-4">
                <div className="font-mono text-2xl sm:text-3xl text-cinnamon-slate mb-2">£3,000</div>
                <div className="font-sans text-xs text-cinnamon-slate/50">Month 1<br />Setup + Operations</div>
              </div>
              <div className="border-l-2 border-cinnamon-slate/20 pl-4">
                <div className="font-mono text-2xl sm:text-3xl text-cinnamon-slate mb-2">£2,000</div>
                <div className="font-sans text-xs text-cinnamon-slate/50">Month 2<br />Operations</div>
              </div>
              <div className="border-l-2 border-cinnamon-slate/20 pl-4">
                <div className="font-mono text-2xl sm:text-3xl text-cinnamon-slate mb-2">£2,000</div>
                <div className="font-sans text-xs text-cinnamon-slate/50">Month 3<br />Operations</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Button 
              size="lg"
              className="bg-muted-sage hover:bg-muted-sage/90 text-white px-8 py-6 text-base font-medium transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Infrastructure Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}