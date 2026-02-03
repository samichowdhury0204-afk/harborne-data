import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '9,000+',
    label: 'Decision-makers reached',
    sublabel: 'In your first 3 months'
  },
  {
    icon: MessageSquare,
    value: '30-50',
    label: 'Interested conversations',
    sublabel: 'Qualified and forwarded to you'
  },
  {
    icon: TrendingUp,
    value: '2-5',
    label: 'Deals closed on average',
    sublabel: 'From outbound pipeline'
  }
];

export default function StatsSection() {
  return (
    <section id="results" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0A0A0B] via-[#0d0d0f] to-[#0A0A0B] w-full overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            What to Expect in Your First 3 Months
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full">
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-[#111113] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-colors duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  
                  <div className="text-base sm:text-lg font-medium text-zinc-300 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-zinc-500">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10"
        >
          <p className="text-xs sm:text-sm text-zinc-400 text-center leading-relaxed">
            <span className="font-medium text-zinc-300">Note:</span> These results are based on the lower end of expected outcomes and may differ widely based on your particular offer, email copy, and targeting strength. Nevertheless, we strive to be the best at optimizing your campaign.
          </p>
        </motion.div>


      </div>
    </section>
  );
}