import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simulated live counter hook
const useLiveCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return Math.floor(count);
};

// Live metrics component
const LiveMetrics = () => {
  const meetingsBooked = useLiveCounter(47, 2000);
  const emailsSent = useLiveCounter(156420, 2500);
  const activeCampaigns = useLiveCounter(12, 1500);
  
  return (
    <div className="border-l-2 border-ethereal-ivory/10 pl-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-muted-sage rounded-full animate-pulse"></div>
        <span className="font-mono text-xs text-muted-sage tracking-wider">LIVE INFRASTRUCTURE METRICS</span>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="font-mono text-2xl sm:text-3xl text-ethereal-ivory mb-1">
            {meetingsBooked}
          </div>
          <div className="font-sans text-xs text-ethereal-ivory/50">
            Meetings Booked<br />This Month
          </div>
        </div>
        
        <div>
          <div className="font-mono text-2xl sm:text-3xl text-ethereal-ivory mb-1">
            {emailsSent.toLocaleString()}
          </div>
          <div className="font-sans text-xs text-ethereal-ivory/50">
            Emails Sent<br />Safely
          </div>
        </div>
        
        <div>
          <div className="font-mono text-2xl sm:text-3xl text-ethereal-ivory mb-1">
            {activeCampaigns}
          </div>
          <div className="font-sans text-xs text-ethereal-ivory/50">
            Active<br />Campaigns
          </div>
        </div>
      </div>
    </div>
  );
};

// Trust badges component
const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-muted-sage/30"></div>
        <span className="font-mono text-xs text-ethereal-ivory/70 tracking-wider">GDPR COMPLIANT</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-muted-sage/30"></div>
        <span className="font-mono text-xs text-ethereal-ivory/70 tracking-wider">CAN-SPAM ACT</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-muted-sage/30"></div>
        <span className="font-mono text-xs text-ethereal-ivory/70 tracking-wider">UK DPA 2018</span>
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-cinnamon-slate w-full overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-muted-sage/30"></div>
            <span className="font-mono text-xs text-muted-sage tracking-wider">FOUNDER MANIFESTO</span>
          </div>
        </motion.div>

        {/* Founder Content */}
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-8 sm:gap-12 mb-12">
          
          {/* Founder Photo - Positioned High */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <img 
              src="/images/me.jpg" 
              alt="Sami Chowdhury - Founder" 
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-lg object-cover border border-ethereal-ivory/10 mb-4"
            />
            <div className="text-center md:text-left">
              <div className="font-sans text-sm text-ethereal-ivory font-medium mb-1">Sami Chowdhury</div>
              <div className="font-mono text-xs text-ethereal-ivory/50">Founder & Engineer</div>
            </div>
          </motion.div>

          {/* Personal Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-4 font-sans text-sm sm:text-base text-ethereal-ivory/60 leading-relaxed"
          >
            <h3 className="font-serif text-xl sm:text-2xl text-ethereal-ivory mb-4">
              Why I Built This for IT Firms
            </h3>
            
            <p>
              I spent nearly 3 years as a data scientist in the UK public sector (defence), building automated pipeline systems and analysing operational data flows. When I left, I saw MSPs and IT consultancies struggling with the same problem: outreach infrastructure that actually worked.
            </p>
            
            <p>
              Most "outbound agencies" treat cold email like spray-and-pray marketing. They promise leads, blast databases, damage your sender reputation, and disappear when spam complaints roll in. I watched IT firms—people who understood uptime, redundancy, and monitoring—get burned by agencies who didn't understand deliverability engineering.
            </p>
            
            <p>
              <span className="text-ethereal-ivory font-medium">This frustration became the thesis:</span> What if outreach infrastructure was built like IT infrastructure? Systematic. Measurable. Redundant. Compliant.
            </p>
            
            <p>
              So I built Harborne Data on three principles:
            </p>
            
            <ul className="space-y-2 ml-6 list-none">
              <li className="flex items-start gap-3">
                <span className="text-muted-sage/60 mt-1">01</span>
                <span><span className="text-ethereal-ivory font-medium">Engineering-first architecture</span> — Domain authentication, sender reputation monitoring, automated warm-up protocols. No shortcuts that damage your infrastructure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-sage/60 mt-1">02</span>
                <span><span className="text-ethereal-ivory font-medium">Technical transparency</span> — You get bi-weekly performance reports, not vague "engagement" metrics. Open rates, response rates, qualification throughput.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-sage/60 mt-1">03</span>
                <span><span className="text-ethereal-ivory font-medium">Compliance by default</span> — GDPR, CAN-SPAM, UK DPA 2018. No grey-area tactics. No purchased lists. No reputation risk.</span>
              </li>
            </ul>
            
            <p className="text-ethereal-ivory pt-2">
              I handle the technical complexity (deliverability engineering, data infrastructure, sequencing orchestration) so you can focus on what you do best—closing conversations and serving clients.
            </p>
          </motion.div>
        </div>

        {/* Live Metrics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-8"
        >
          <LiveMetrics />
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <TrustBadges />
        </motion.div>

      </div>
    </section>
  );
}