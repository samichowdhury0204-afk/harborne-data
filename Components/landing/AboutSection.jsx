import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-[#0A0A0B] w-full overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 flex justify-center"
          >
            <img 
              src="/images/me.jpg" 
              alt="Photo" 
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border border-white/10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 md:order-2 space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed px-2 sm:px-0"
          >
            <p>
              I'm <span className="text-white font-medium">Sami</span>; I've spent nearly 3 years as a data scientist in the public sector (defence), building automated systems and analysing pipeline data.
            </p>
            <p>
              My background in government analytics and data science means I know how to use data for better decision making - to target ICP's properly, and to choose the right copy.
            </p>
            <p>
              MSPs especially struggle with this. You're experts at managing IT infrastructure, but outbound lead generation is something different entirely.
            </p>
            <p>
              So I started <span className="text-white font-medium">Harborne Data</span> to do for your sales pipeline what you do for your clients' IT systems: automate it, optimise it, and make it predictable.
            </p>
            <p className="text-white">
              I handle the technical complexity (deliverability, data, infrastructure) so you can focus on what you do best—closing deals and serving clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}