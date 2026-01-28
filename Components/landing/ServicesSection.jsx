import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Database, 
  FileText, 
  Settings, 
  Send, 
  Filter, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'ICP Definition',
    description: 'We identify and target the right decision-makers for your specific services'
  },
  {
    icon: Database,
    title: 'List Building',
    description: 'Verified, relevant contacts added monthly'
  },
  {
    icon: FileText,
    title: 'Copy & Testing',
    description: '2-3 email variants tested and optimized for performance'
  },
  {
    icon: Settings,
    title: 'Infrastructure Setup',
    description: 'Domain configuration, mailbox setup, and automated warm-up'
  },
  {
    icon: Send,
    title: 'Campaign Management',
    description: '3,000+ emails sent monthly across multiple mailboxes'
  },
  {
    icon: Filter,
    title: 'Lead Qualification',
    description: 'Interested replies filtered and forwarded directly to your sales team'
  },
  {
    icon: BarChart3,
    title: 'Performance Reporting',
    description: 'Bi-weekly analytics showing opens, replies, and conversations generated'
  }
];

const notes = [
  'Month 1 is a testing and optimization period as we dial in messaging and targeting',
  'We forward qualified conversations to you—your team handles meeting booking and closing'
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Full-Stack Outbound Lead Generation
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We handle every aspect of your outbound engine so you can focus on closing deals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-medium text-white mb-8 text-center">What's Included</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group p-6 rounded-xl bg-[#111113]/50 border border-white/5 hover:border-white/10 hover:bg-[#111113] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{service.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/10">
            <h4 className="text-sm font-medium text-amber-400 mb-4">Important Notes</h4>
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-500/60 mt-0.5 shrink-0" />
                  <p className="text-sm text-zinc-400">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}