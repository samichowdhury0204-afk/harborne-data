import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

export default function FounderHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-[#E4E4DE]">
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Technical grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,80,94,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74,80,94,0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <img 
              src="/images/me.jpg" 
              alt="Sami Chowdhury" 
              className="w-48 h-48 md:w-56 md:h-56 rounded border-2 border-[#4A505E]/20 object-cover grayscale"
            />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-4 text-center"
            >
              <div className="text-xs font-mono text-[#4A505E]/50 mb-1">FOUNDER</div>
              <div className="text-lg font-canela font-medium text-[#4A505E]">Sami Chowdhury</div>
              <div className="text-sm font-mono text-[#4A505E]/60 mt-1">Data Scientist, UK Defence</div>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xs font-mono text-[#94A378] mb-4 tracking-wider"
              >
                FOUNDER-LED ENGINEERING
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-canela font-medium tracking-tight leading-[1.1] mb-6 text-[#4A505E]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.7, ease: "easeOut" }}
                  className="inline-block"
                >
                  Outbound Infrastructure
                </motion.span>
                <br />
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.85, ease: "easeOut" }}
                  className="text-[#94A378] inline-block"
                >
                  for Technical Firms
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
                className="text-base md:text-lg font-sans text-[#4A505E]/70 leading-relaxed mb-8"
              >
                I engineer the outbound infrastructure that reaches 9,000+ decision-makers and generates 30-50 qualified conversations per quarter—because technical companies need pipeline systems as reliable as the networks they manage.
              </motion.p>

              {/* Credibility Points */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.3, ease: "easeOut" }}
                className="space-y-3 mb-8"
              >
                {[
                  'Nearly 3 years: data scientist in UK defence sector',
                  'Built automated pipeline systems for government analytics'
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.4 + (i * 0.1), ease: "easeOut" }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#94A378] text-lg shrink-0 font-mono leading-none">→</span>
                    <span className="text-sm font-sans text-[#4A505E]/70">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <Button 
                  size="lg"
                  className="bg-[#94A378] hover:bg-[#94A378]/90 text-white px-8 py-6 text-base font-sans font-medium rounded-lg transition-all duration-300"
                  onClick={() => document.getElementById('audit-cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Your Outbound Audit
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
