import React from 'react';
import { motion } from 'framer-motion';

const serviceOfferings = [
  {
    title: 'End-to-End Database Builds',
    subtitle: 'Raw data sources to outreach-ready intelligence',
    phases: [
      {
        section: 'Stage 1',
        title: 'Multi-Source Data Ingestion & Matching',
        content: `Ingest contact and institutional data from premium B2B databases, enrollment platforms, and institutional registries. 
Map and deduplicate records across sources using fuzzy matching and entity resolution. Clean, structure, and normalize data into a unified schema.`,
        deliverables: ['15+ data sources', 'Deduplicated records', 'Unified data model']
      },
      {
        section: 'Stage 2',
        title: 'Waterfall Contact Enrichment & Verification',
        content: `Multi-stage enrichment pipeline: surface verified decision-maker emails, institutional role confirmation, and contact validation. 
AI-powered role classification to identify the right people within each institution (admissions, partnerships, executive leadership).`,
        deliverables: ['Verified emails', 'AI role classification', '95%+ accuracy']
      },
      {
        section: 'Stage 3',
        title: 'Lead Scoring & Classification',
        content: `AI-powered scoring and segmentation based on institutional fit, capacity, and engagement signals. 
Custom classification layers: institution type, funding profile, strategic alignment, and partnership readiness.`,
        deliverables: ['Lead scoring model', 'Segment taxonomy', 'Institutional profiles']
      },
      {
        section: 'Stage 4',
        title: 'Dashboard & Ongoing Maintenance',
        content: `Interactive dashboard for filtering, searching, and managing prospects. 
Monthly retainer includes: change detection, structured reports, email re-verification, and database updates. Keeps your intelligence live.`,
        deliverables: ['Live dashboard', 'Monthly updates', 'Change alerts']
      }
    ]
  },
  {
    title: 'Lead Generation Campaigns',
    subtitle: 'Systematic outreach built on enriched intelligence',
    phases: [
      {
        section: 'Phase I',
        title: 'Foundation & Targeting',
        content: `Foundation work: configure domains, set up mailboxes, implement SPF/DKIM/DMARC records for deliverability. LinkedIn automations to warm prospects pre-outreach. 
Build lists of verified institutional contacts tailored to your student recruitment or partnership goals.`,
        deliverables: ['Configured domains', 'Warmed accounts', 'Verified contact lists']
      },
      {
        section: 'Phase II',
        title: 'Copy Development & Testing',
        content: `Draft 2-3 email variants tailored to your specific offer and target persona within education institutions. 
Test across different segments to identify optimal messaging, subject lines, and CTAs. Hypothesis-driven copywriting backed by conversion data.`,
        deliverables: ['3 tested variants', 'Optimised sequences', 'Performance baselines']
      },
      {
        section: 'Phase III',
        title: 'Campaign Execution & Monitoring',
        content: `Launch multi-mailbox campaigns with smart cadencing and real-time deliverability monitoring. 
Agreed monthly send volume with continuous optimisation based on engagement rates, bounce rates, and reply sentiment.`,
        deliverables: ['Monthly campaigns', 'Multi-mailbox rotation', 'Real-time optimization']
      },
      {
        section: 'Phase IV',
        title: 'Lead Qualification & Handoff',
        content: `Intelligent filtering removes spam, auto-responders, and unqualified responses. Only genuine, interested replies forwarded to your team—ready for conversation. 
Your team focuses on relationship building, not sorting through noise.`,
        deliverables: ['Qualified responses', 'Direct inbox forwarding', 'Bi-weekly reporting']
      }
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 bg-[#4A505E] w-full overflow-hidden">
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Technical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(228,228,222,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(228,228,222,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] bg-[#94A378]" 
            />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-[#94A378] tracking-wider"
            >
              WHAT WE BUILD
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-canela font-medium text-[#E4E4DE] mb-6 leading-tight tracking-tight"
          >
            Two Services for Education Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg font-sans text-[#E4E4DE]/70 leading-relaxed max-w-3xl"
          >
            Standalone database builds for ongoing intelligence platforms. Or database builds paired with lead generation campaigns. 
            Both designed to take you from raw data sources to outreach-ready systems.
          </motion.p>
        </motion.div>

        {/* Services */}
        <div className="space-y-32">
          {serviceOfferings.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: serviceIndex * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-0"
            >
              {/* Service Header */}
              <div className="mb-12 pb-8 border-b border-[#E4E4DE]/10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: serviceIndex * 0.2 + 0.1 }}
                  className="text-2xl md:text-3xl font-canela font-medium text-[#E4E4DE] mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: serviceIndex * 0.2 + 0.2 }}
                  className="text-base font-sans text-[#E4E4DE]/60"
                >
                  {service.subtitle}
                </motion.p>
              </div>

              {/* Vertical Editorial Flow - Staggered */}
              <div className="space-y-20">
                {service.phases.map((phase, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ 
                      duration: 1, 
                      delay: serviceIndex * 0.2 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`relative ${index % 2 === 1 ? 'md:ml-16' : ''}`}
                  >
                    {/* Section Marker */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-sm font-mono text-[#94A378] border border-[#94A378]/30 px-3 py-1 rounded bg-[#94A378]/5"
                      >
                        {phase.section}
                      </motion.span>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="h-[1px] flex-1 bg-gradient-to-r from-[#E4E4DE]/10 to-transparent" 
                      />
                    </div>

                    {/* Content Block */}
                    <div className="border-l-2 border-[#94A378]/30 pl-6 md:pl-8 space-y-4">
                      <motion.h3 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-canela font-medium text-[#E4E4DE] tracking-tight"
                      >
                        {phase.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-sm md:text-base font-sans text-[#E4E4DE]/60 leading-relaxed"
                      >
                        {phase.content}
                      </motion.p>

                      {/* Deliverables */}
                      <div className="pt-4">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="text-xs font-mono text-[#E4E4DE]/50 mb-3 tracking-wider"
                        >
                          DELIVERABLES
                        </motion.div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((item, i) => (
                            <motion.span 
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.8 + (i * 0.1),
                                ease: "easeOut"
                              }}
                              className="text-xs font-mono px-3 py-1.5 bg-[#E4E4DE]/5 border border-[#E4E4DE]/10 rounded text-[#E4E4DE]/50"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Flow connector */}
                    {index < service.phases.length - 1 && (
                      <div className="flex items-center gap-2 mt-12 ml-6 md:ml-8 text-[#E4E4DE]/50">
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: 32, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                          className="w-[1px] bg-gradient-to-b from-[#94A378]/30 to-transparent" 
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1 }}
                          className="text-[#94A378]/30 font-mono text-xl leading-none"
                        >
                          ↓
                        </motion.div>
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
