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
            className="order-2 md:order-1"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#111113] to-[#18181b] border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-blue-400" />
                  </div>
                  <p className="text-zinc-500 text-sm">Photo placeholder</p>
                </div>
              </div>
            </div>
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
              I'm <span className="text-white font-medium">Sami</span>; I've spent 3 years as a data scientist in the public sector building automated systems and analysing pipeline data.
            </p>
            <p>
              I've seen how broken companies' outbound processes are.
            </p>
            <p>
              MSPs especially struggle with this. You're experts at managing IT infrastructure, but outbound lead generation is something different entirely.
            </p>
            <p>
              So I built <span className="text-white font-medium">Harborne Data</span> to do for your sales pipeline what you do for your clients' IT systems: automate it, optimise it, and make it predictable.
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