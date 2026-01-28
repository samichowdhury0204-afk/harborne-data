import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="w-48 h-48 rounded-full object-cover border border-white/10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 md:order-2 space-y-4 text-zinc-400 leading-relaxed"
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