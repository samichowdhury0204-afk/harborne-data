import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

export default function Hero() {
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
        {/* System Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12 justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#94A378]/30 bg-[#94A378]/5 rounded"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-2 h-2 rounded-full bg-[#94A378]" 
            />
            <span className="text-xs font-mono text-[#4A505E] tracking-wider">SYSTEM OPERATIONAL</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#4A505E]/30 bg-[#4A505E]/5 rounded"
          >
            <Terminal className="w-3.5 h-3.5 text-[#4A505E]" />
            <span className="text-xs font-mono text-[#4A505E] tracking-wider">B2B OUTBOUND v2.0</span>
          </motion.div>
        </motion.div>

        {/* Main headline - Technical Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-canela font-medium tracking-tight leading-[1.1] mb-4 text-[#4A505E]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
              className="inline-block"
            >
              Outbound Infrastructure
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: "easeOut" }}
              className="text-[#94A378] inline-block"
            >
              for MSPs
            </motion.span>
          </h1>
          
          {/* Subtitle - monospaced */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-sans text-[#4A505E]/60 mt-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Data sourcing
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="text-[#94A378]/40"
            >
              →
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Lead enrichment
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              className="text-[#94A378]/40"
            >
              →
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Deliverability
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="text-[#94A378]/40"
            >
              →
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              Sequencing
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Value Prop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg font-sans text-[#4A505E]/70 max-w-3xl mx-auto mb-12 leading-relaxed text-center"
        >
          A full-stack outbound engine that reaches an agreed upon amount of decision-makers monthly and delivers 
          qualified conversations to your inbox. Built for MSPs targeting network management, 
          security services, IT support, disaster recovery, and cloud infrastructure.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Button 
            size="lg"
            className="bg-[#94A378] hover:bg-[#94A378]/90 text-white px-8 py-6 text-base font-mono font-semibold rounded border border-[#94A378] transition-all duration-200 w-full sm:w-auto"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book 30-Min Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            className="text-[#4A505E] hover:text-[#4A505E] hover:bg-[#4A505E]/5 px-8 py-6 text-base font-mono font-medium rounded border border-[#4A505E]/20 hover:border-[#4A505E]/30 transition-all duration-200 w-full sm:w-auto"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Pipeline
          </Button>
        </motion.div>

        {/* Technical Specs Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#4A505E]/50"
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#4A505E]/50" />
            <span>15+ data sources</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#4A505E]/50" />
            <span>99%+ inbox rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#4A505E]/50" />
            <span>Real-time optimisation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#4A505E]/50" />
            <span>Automated qualification</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - minimalist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs font-mono text-[#4A505E]/40 flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#4A505E]/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}