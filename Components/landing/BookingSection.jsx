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
    <section id="booking" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/3 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Book a 30-minute call to see if we're a good fit for your MSP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-lg"
        >
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/samichowdhury1708/30min" style={{ minWidth: '280px', height: '700px' }}></div>
        </motion.div>

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Prefer email? Reach out at{' '}
            <a href="mailto:sami@harborne-data.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              sami@harborne-data.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}