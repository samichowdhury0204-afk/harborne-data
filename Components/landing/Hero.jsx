import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme, VARIANTS } from '@/src/ThemeContext';

export default function Hero() {
  const { variant } = useTheme();

  // Variant-specific styling
  const getBackgroundClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'bg-white';
      case VARIANTS.DATA_INFRA:
        return 'bg-ethereal-ivory';
      case VARIANTS.TRADITIONAL:
        return 'bg-[#F5F5F0]';
      default:
        return 'bg-ethereal-ivory';
    }
  };

  const getTextClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-[#1A1A1A]';
      case VARIANTS.DATA_INFRA:
        return 'text-cinnamon-slate';
      case VARIANTS.TRADITIONAL:
        return 'text-[#2A2A2A]';
      default:
        return 'text-cinnamon-slate';
    }
  };

  const getSecondaryTextClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-[#4A4A4A]';
      case VARIANTS.DATA_INFRA:
        return 'text-cinnamon-slate/70';
      case VARIANTS.TRADITIONAL:
        return 'text-[#5A5A5A]';
      default:
        return 'text-cinnamon-slate/70';
    }
  };

  const getBorderClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'border-[#E0E0E0]';
      case VARIANTS.DATA_INFRA:
        return 'border-cinnamon-slate/20';
      case VARIANTS.TRADITIONAL:
        return 'border-[#CACAC0]';
      default:
        return 'border-cinnamon-slate/20';
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden w-full ${getBackgroundClass()}`}>
      {/* Background - variant-specific accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cinnamon-slate/[0.02] rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-muted-sage/[0.03] rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern - minimal for Deep Tech */}
      {variant !== VARIANTS.DEEP_TECH && (
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(74,80,94,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(74,80,94,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-6 ${getTextClass()}`}
        >
          {variant === VARIANTS.DEEP_TECH ? (
            <>
              Technical Outreach Infrastructure
              <br />
              <span className="text-muted-sage">
                for Managed Service Providers
              </span>
            </>
          ) : variant === VARIANTS.TRADITIONAL ? (
            <>
              Predictable Outbound Infrastructure
              <br />
              <span className="text-muted-sage">
                for IT & MSP Firms
              </span>
            </>
          ) : (
            <>
              Predictable Outbound Infrastructure
              <br />
              <span className="text-muted-sage">
                for MSPs
              </span>
            </>
          )}
        </motion.h1>

        {/* Subheadline - variant-specific copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className={`font-sans text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light ${getSecondaryTextClass()}`}
        >
          {variant === VARIANTS.DEEP_TECH ? (
            <>
              Multi-channel sequencing architecture with deliverability safeguards reaches 3,000+ prospects monthly. 
              Automated qualification pipelines route vetted conversations to your sales infrastructure—supporting 
              network management, security services, IT support, disaster recovery, and cloud infrastructure providers.
            </>
          ) : variant === VARIANTS.TRADITIONAL ? (
            <>
              We engineer multi-channel email and LinkedIn outreach to reach 3,000+ decision-makers monthly. 
              Our system handles the technical complexity—domain setup, deliverability monitoring, and lead qualification—so 
              qualified conversations arrive ready for your sales team.
            </>
          ) : (
            <>
              We engineer multi-channel sequencing with deliverability safeguards to reach 3,000+ prospects monthly. 
              Qualified conversations are routed directly to your team—whether you provide network management, security services, 
              IT support, disaster recovery, or cloud infrastructure.
            </>
          )}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Button 
            size="lg"
            className="bg-muted-sage hover:bg-muted-sage/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all duration-200 w-full sm:w-auto"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Review Your Outbound Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            className={`hover:bg-opacity-5 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl border w-full sm:w-auto ${getTextClass()} ${getBorderClass()}`}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${getBorderClass()}`}
        >
          <div className={`w-1 h-2 rounded-full ${variant === VARIANTS.DEEP_TECH ? 'bg-[#4A4A4A]/40' : 'bg-cinnamon-slate/40'}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}