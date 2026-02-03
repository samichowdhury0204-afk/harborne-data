import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    prefix: '01',
    value: '9,000+',
    label: 'Prospects in sequencing pipeline',
    sublabel: 'Over first 90-day deployment'
  },
  {
    prefix: '02',
    value: '30-50',
    label: 'Qualified response conversations',
    sublabel: 'Routed to sales infrastructure'
  },
  {
    prefix: '03',
    value: '2-5',
    label: 'Typical conversion outcomes',
    sublabel: 'From qualification pipeline'
  }
];

export default function StatsSection() {
  return (
    <section id="results" className="relative py-16 md:py-24 lg:py-32 bg-ethereal-ivory w-full overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-cinnamon-slate/20"></div>
            <span className="font-mono text-xs text-cinnamon-slate/50 tracking-wider">BASELINE METRICS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-cinnamon-slate leading-tight max-w-3xl">
            Expected Output — First 90 Days
          </h2>
        </motion.div>

        {/* Editorial asymmetrical layout */}
        <div className="space-y-12 md:space-y-16">
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.15,
                ease: [0.22, 0.61, 0.36, 1]
              }}
              className={`relative border-l-2 border-cinnamon-slate/20 pl-8 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-24'
              } max-w-2xl`}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm text-muted-sage/50">{stat.prefix}</span>
                <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-light text-cinnamon-slate tracking-tight">
                  {stat.value}
                </div>
              </div>
              
              <div className="space-y-1 ml-12">
                <div className="font-sans text-base sm:text-lg text-cinnamon-slate/90 leading-relaxed">
                  {stat.label}
                </div>
                
                <div className="font-sans text-sm text-cinnamon-slate/50 leading-relaxed">
                  {stat.sublabel}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Technical note - not a card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-16 md:mt-20 pt-8 border-t border-cinnamon-slate/10 max-w-3xl"
        >
          <div className="font-mono text-xs text-cinnamon-slate/40 mb-3 tracking-wider">VARIANCE NOTICE</div>
          <p className="font-sans text-sm text-cinnamon-slate/60 leading-relaxed">
            Output metrics depend on market variables including offer positioning, message resonance, and ICP targeting precision. Figures represent conservative baseline expectations. Systematic optimization protocols improve performance over deployment cycles.
          </p>
        </motion.div>


      </div>
    </section>
  );
}