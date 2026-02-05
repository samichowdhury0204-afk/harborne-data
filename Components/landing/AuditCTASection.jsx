import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

const auditIncludes = [
  'Deliverability posture assessment',
  'Current targeting accuracy analysis',
  'Technical infrastructure gaps',
  'Conversion opportunity mapping',
  'Custom implementation roadmap'
];

export default function AuditCTASection() {
  return (
    <section id="audit-cta" className="relative py-24 md:py-32 lg:py-40 bg-[#E4E4DE] w-full overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs font-mono text-[#94A378] mb-4 tracking-wider"
            >
              START WITH ANALYSIS
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#4A505E] mb-6 leading-tight tracking-tight"
            >
              Request Your Outbound Assessment
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-lg font-sans text-[#4A505E]/70 leading-relaxed max-w-2xl mx-auto"
            >
              No commitment required. I'll evaluate your current outbound posture—deliverability infrastructure, targeting accuracy, and technical architecture—then provide a detailed assessment of where improvements drive measurable pipeline growth.
            </motion.p>
          </div>

          {/* Audit Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-4 border-[#94A378] pl-8 md:pl-10 mb-8"
          >
            <div className="mb-6">
              <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl font-canela font-medium text-[#4A505E] mb-2 leading-tight"
                >
                  What You'll Receive
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                  className="text-sm font-sans text-[#4A505E]/60"
                >
                  A technical assessment of your outbound capabilities
                </motion.p>
              </div>

              <div className="space-y-3 mb-8 mt-6">
              {auditIncludes.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7 + (i * 0.1), ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#94A378] text-lg shrink-0 font-mono leading-none">→</span>
                  <span className="text-sm md:text-base font-sans text-[#4A505E]/70">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Process Note */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-[#4A505E]/5 border border-[#4A505E]/10 rounded-lg p-4 mt-6"
            >
              <p className="text-sm font-sans text-[#4A505E]/70 leading-relaxed">
                <span className="font-mono text-[#4A505E] font-semibold">30-minute consultation</span> — 
                We'll discuss your current outbound approach, identify bottlenecks, and outline a clear path to qualified conversations. No sales pitch, just engineering analysis.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-[#4A505E] hover:bg-[#4A505E]/90 text-[#E4E4DE] px-10 py-7 text-lg font-sans font-medium rounded-lg transition-all duration-300 inline-flex items-center"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Outbound Audit
            </Button>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm font-mono text-[#4A505E]/50 mt-4"
            >
              Complimentary assessment • No commitment • 30 minutes
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
