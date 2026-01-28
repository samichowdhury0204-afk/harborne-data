import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowUpRight, Clock, Video } from 'lucide-react';

export default function BookingSection() {
  return (
    <section id="booking" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Book a 30-minute call to see if we're a good fit for your MSP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Calendly placeholder */}
          <div className="relative bg-[#111113] rounded-2xl border border-white/5 overflow-hidden">
            {/* Mock calendar header */}
            <div className="p-6 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Discovery Call</h3>
                    <p className="text-sm text-zinc-500">Harborne Data</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>Google Meet</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calendar body placeholder */}
            <div className="p-8 min-h-[400px] flex flex-col items-center justify-center">
              <div className="text-center max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-medium text-white mb-3">
                  Schedule Your Call
                </h4>
                <p className="text-zinc-500 mb-6">
                  Click below to open our booking calendar and select a time that works for you.
                </p>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-medium rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(59,130,246,0.3)]"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Open Calendar
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-zinc-600 mt-4">
                  Calendly link will be configured here
                </p>
              </div>
            </div>
          </div>

          {/* Alternative contact */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-500">
              Prefer email? Reach out at{' '}
              <a href="mailto:hello@harborne-data.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                hello@harborne-data.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}