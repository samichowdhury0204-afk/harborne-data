import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BookingSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="relative py-16 md:py-24 lg:py-32 bg-cinnamon-slate w-full overflow-hidden">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Audit Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-muted-sage/30"></div>
            <span className="font-mono text-xs text-muted-sage tracking-wider">FREE INFRASTRUCTURE ANALYSIS</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-ethereal-ivory mb-6 leading-tight">
            Review Your Outbound Audit
          </h2>
          
          <div className="font-sans text-base sm:text-lg text-ethereal-ivory/60 max-w-2xl leading-relaxed space-y-4">
            <p>
              Before recommending infrastructure deployment, we analyze your current outbound approach. This 30-minute technical review evaluates:
            </p>
            
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-sage/50 mt-1">01</span>
                <span>Existing sender reputation and domain health</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-sage/50 mt-1">02</span>
                <span>ICP definition and target market alignment</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-sage/50 mt-1">03</span>
                <span>Current messaging and value proposition gaps</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-sage/50 mt-1">04</span>
                <span>Technical infrastructure requirements and timeline</span>
              </li>
            </ul>
            
            <p className="pt-2">
              No sales pitch. No obligation. Just technical analysis to determine infrastructure fit.
            </p>
          </div>
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="bg-ethereal-ivory border-l-2 border-ethereal-ivory/20 overflow-hidden"
        >
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/samichowdhury1708/30min" style={{ minWidth: '280px', height: '700px' }}></div>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-8 text-center"
        >
          <p className="font-sans text-sm text-ethereal-ivory/60">
            Prefer written intake? Send infrastructure details to{' '}
            <a href="mailto:sami@harborne-data.com" className="text-muted-sage hover:text-muted-sage/80 font-medium transition-colors">
              sami@harborne-data.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}