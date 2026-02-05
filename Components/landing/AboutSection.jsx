import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

const timeline = [
  {
    period: '2021-2024',
    role: 'Data Scientist, UK Defence Sector',
    focus: 'Automated systems engineering, pipeline analytics, decision intelligence'
  },
  {
    period: '2024',
    role: 'Founded Harborne Data',
    focus: 'Applied data engineering principles to B2B outbound infrastructure'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 bg-[#E4E4DE] w-full overflow-hidden">
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
              FOUNDER
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#4A505E] mb-6 leading-tight tracking-tight"
          >
            Built By Engineers, For Engineers
          </motion.h2>
        </motion.div>

        <div className="space-y-16">
          {/* Profile Section - Asymmetrical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="shrink-0"
            >
              <img 
                src="/images/me.jpg" 
                alt="Sami" 
                className="w-32 h-32 md:w-40 md:h-40 rounded border border-[#4A505E]/20 object-cover grayscale"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="text-sm font-mono text-[#4A505E]/50 mb-2">OPERATOR</div>
                <h3 className="text-2xl font-canela font-medium text-[#4A505E] mb-4">Sami Chowdhury</h3>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-sm md:text-base font-sans text-[#4A505E]/70 leading-relaxed"
              >
                Nearly 3 years as a data scientist in the UK defence sector, building automated systems 
                and analyzing pipeline data. Background in government analytics means understanding how 
                to use data for decision-making—ICP targeting, copy selection, deliverability optimisation.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="text-sm md:text-base font-sans text-[#4A505E]/70 leading-relaxed"
              >
                I built Harborne Data because MSPs are technical experts who shouldn't waste time wrestling 
                with outbound infrastructure. You need a system that works as reliably as the networks you manage.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="text-sm md:text-base font-sans text-[#4A505E]/70 leading-relaxed"
              >
                This is founder-led engineering. I apply the same rigor to your sales pipeline that you 
                apply to client IT systems: automation, optimisation, predictability.
              </motion.p>
            </div>
          </motion.div>

          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#4A505E]/10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#4A505E]/50 tracking-wider"
            >
              COMPLIANCE
            </motion.div>
            <div className="flex items-center gap-4">
              {/* GDPR Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2 px-4 py-2 border border-[#4A505E]/20 rounded bg-white"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="15" stroke="#4A505E" strokeWidth="1.5" fill="none"/>
                  <path d="M16 8V16L20 20" stroke="#94A378" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16 16" stroke="#94A378" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="text-xs font-mono font-semibold text-[#4A505E]">GDPR</div>
                  <div className="text-[10px] font-mono text-[#4A505E]/60">Compliant</div>
                </div>
              </motion.div>

              {/* CAN-SPAM Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-2 px-4 py-2 border border-[#4A505E]/20 rounded bg-white"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="#4A505E" strokeWidth="1.5" fill="none"/>
                  <path d="M4 10L16 18L28 10" stroke="#94A378" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 20L26 24M22 24L26 20" stroke="#94A378" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="text-xs font-mono font-semibold text-[#4A505E]">CAN-SPAM</div>
                  <div className="text-[10px] font-mono text-[#4A505E]/60">Compliant</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline - Vertical Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-2 border-[#94A378]/30 pl-6 md:pl-8 space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#4A505E]/50 tracking-wider mb-6"
            >
              TIMELINE
            </motion.div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + (index * 0.15), ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.15), ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute -left-[27px] md:-left-[35px] top-1 w-2 h-2 rounded-full bg-[#94A378] border-2 border-[#E4E4DE]" 
                />
                
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-mono text-[#94A378]">{item.period}</span>
                    <span className="text-xs font-mono text-[#4A505E]/40">—</span>
                    <span className="text-sm font-mono text-[#4A505E]">{item.role}</span>
                  </div>
                  <p className="text-sm font-sans text-[#4A505E]/60 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-l-2 border-[#94A378]/30 bg-[#94A378]/5 pl-6 md:pl-8 py-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#94A378] mb-3 tracking-wider"
            >
              PHILOSOPHY
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-base md:text-lg font-sans text-[#4A505E] leading-relaxed"
            >
              Handle the technical complexity—deliverability, data, infrastructure—so you focus on 
              what you do best: closing deals and serving clients.
            </motion.p>
          </motion.div>

          {/* Audit CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[#4A505E]/10 pt-12"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-xs font-mono text-[#94A378] mb-3 tracking-wider">NEXT STEP</div>
                <h3 className="text-2xl md:text-3xl font-canela font-medium text-[#4A505E] mb-3">
                  Review Your Outbound Audit
                </h3>
                <p className="text-sm md:text-base font-sans text-[#4A505E]/70 leading-relaxed max-w-2xl">
                  Start with analysis, not commitment. We'll evaluate your current outbound infrastructure—
                  deliverability posture, targeting accuracy, and technical gaps—then provide a detailed 
                  assessment of where improvements drive measurable pipeline growth.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-[#4A505E] hover:bg-[#4A505E]/90 text-[#E4E4DE] px-8 py-6 text-base font-sans font-medium rounded-lg transition-all duration-200 shrink-0"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}