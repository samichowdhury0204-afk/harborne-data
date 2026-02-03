import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, VARIANTS } from '@/src/ThemeContext';

// Pipeline stages with technical specifications
const pipelineStages = [
  {
    stage: '01',
    title: 'Data Sourcing',
    subtitle: 'TARGET ACQUISITION',
    description: 'We architect your Ideal Customer Profile through systematic market segmentation. Each prospect undergoes validation against firmographic parameters, intent signals, and technographic alignment to ensure signal-to-noise optimization.',
    metrics: [
      'ICP definition through data-driven segmentation',
      'Decision-maker identification protocols',
      'Real-time verification and validation layers'
    ],
    technical: 'Precision targeting architecture reduces contact database noise by 60-70%'
  },
  {
    stage: '02',
    title: 'Lead Enrichment',
    subtitle: 'DATA REFINEMENT',
    description: 'Raw contact data passes through multi-layer enrichment pipelines. Missing fields are appended, email deliverability undergoes technical validation, and prospect scoring models rank engagement probability across 15+ data dimensions.',
    metrics: [
      '1,000+ verified contacts added monthly',
      'Multi-stage email validation layer',
      'Cross-reference enrichment across 15+ attributes'
    ],
    technical: 'High-fidelity contact data enables personalization infrastructure at scale'
  },
  {
    stage: '03',
    title: 'Deliverability Engineering',
    subtitle: 'INFRASTRUCTURE LAYER',
    description: 'Technical infrastructure configuration ensures maximum inbox placement rates. Domain authentication protocols, mailbox rotation architecture, and automated warm-up sequences maintain sender reputation integrity and prevent spam classification.',
    metrics: [
      'Multi-domain infrastructure deployment',
      'SPF, DKIM, DMARC technical configuration',
      'Automated mailbox warm-up orchestration'
    ],
    technical: 'Infrastructure-first approach maintains 95%+ sender reputation scores'
  },
  {
    stage: '04',
    title: 'Multi-Channel Sequencing',
    subtitle: 'CAMPAIGN EXECUTION',
    description: 'Coordinated outreach sequences deploy across email and LinkedIn channels. A/B tested message variants undergo send-time optimization, while automated follow-up cadences maintain consistent touchpoint orchestration without manual intervention.',
    metrics: [
      '3,000+ emails orchestrated monthly',
      '2-3 message variants per sequence',
      'Automated multi-touchpoint sequencing'
    ],
    technical: 'Sequencing automation layer manages 15-20 touchpoints per prospect lifecycle'
  },
  {
    stage: '05',
    title: 'Qualification Pipeline',
    subtitle: 'HANDOFF PROTOCOL',
    description: 'Inbound responses pass through automated filtering and qualification frameworks. Technical objection handling and pre-qualification workflows route meeting-ready conversations to your sales infrastructure, eliminating cold lead handoffs.',
    metrics: [
      'Response categorization and routing logic',
      'Data-driven qualification framework',
      'Bi-weekly performance analytics delivery'
    ],
    technical: 'Qualification pipeline delivers meeting-ready conversations, not unvetted responses'
  }
];

// Technical schematic component
const PipelineDiagram = () => (
  <div className="relative my-16 md:my-24">
    <div className="font-mono text-[10px] sm:text-xs leading-relaxed">
      {/* ASCII-style pipeline diagram */}
      <pre className="text-ethereal-ivory/40 overflow-x-auto pb-4">
{`
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                   TECHNICAL OUTREACH ARCHITECTURE                        │
    └─────────────────────────────────────────────────────────────────────────────┘

         [DATA]          [ENRICH]         [INFRA]          [SEND]         [CONVERT]
           ▼               ▼               ▼                ▼               ▼
        ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐
    ──▶ │  ICP │  ────▶ │ VALID│  ────▶ │ AUTH │  ────▶ │ CAMP │  ────▶ │ QUAL │ ──▶
        └──────┘        └──────┘        └──────┘        └──────┘        └──────┘
           │               │               │                │               │
           │               │               │                │               │
        Target          Contact         Domain          Sequence         Meeting
        Analysis        Database         Setup          Execution         Ready
                                                                           Leads

    ═══════════════════════════════════════════════════════════════════════════════
                        → CONTINUOUS OPTIMIZATION FEEDBACK LOOP ←
`}
      </pre>
    </div>
    
    {/* Metrics bar */}
    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-ethereal-ivory/5">
      <div>
        <div className="text-2xl font-mono text-muted-sage">3K+</div>
        <div className="text-xs text-ethereal-ivory/50 mt-1">Emails / Month</div>
      </div>
      <div>
        <div className="text-2xl font-mono text-muted-sage">1K+</div>
        <div className="text-xs text-ethereal-ivory/50 mt-1">Verified Contacts</div>
      </div>
      <div>
        <div className="text-2xl font-mono text-muted-sage">2-3</div>
        <div className="text-xs text-ethereal-ivory/50 mt-1">Copy Variants</div>
      </div>
    </div>
  </div>
);

export default function ServicesSection() {
  const { variant } = useTheme();

  // Variant-specific styling
  const getBackgroundClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'bg-[#FAFAFA]';
      case VARIANTS.DATA_INFRA:
        return 'bg-cinnamon-slate';
      case VARIANTS.TRADITIONAL:
        return 'bg-[#E8E8E0]';
      default:
        return 'bg-cinnamon-slate';
    }
  };

  const getTextClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-[#1A1A1A]';
      case VARIANTS.DATA_INFRA:
        return 'text-ethereal-ivory';
      case VARIANTS.TRADITIONAL:
        return 'text-[#2A2A2A]';
      default:
        return 'text-ethereal-ivory';
    }
  };

  const getSecondaryTextClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-[#4A4A4A]/70';
      case VARIANTS.DATA_INFRA:
        return 'text-ethereal-ivory/60';
      case VARIANTS.TRADITIONAL:
        return 'text-[#5A5A5A]/80';
      default:
        return 'text-ethereal-ivory/60';
    }
  };

  const getAccentClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-muted-sage/50';
      case VARIANTS.DATA_INFRA:
        return 'text-muted-sage';
      case VARIANTS.TRADITIONAL:
        return 'text-muted-sage/80';
      default:
        return 'text-muted-sage';
    }
  };

  const getDiagramTextClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'text-[#4A4A4A]/40';
      case VARIANTS.DATA_INFRA:
        return 'text-ethereal-ivory/40';
      case VARIANTS.TRADITIONAL:
        return 'text-[#5A5A5A]/50';
      default:
        return 'text-ethereal-ivory/40';
    }
  };

  const getBorderClass = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'border-[#E0E0E0]';
      case VARIANTS.DATA_INFRA:
        return 'border-ethereal-ivory/5';
      case VARIANTS.TRADITIONAL:
        return 'border-[#CACAC0]/30';
      default:
        return 'border-ethereal-ivory/5';
    }
  };

  const PipelineDiagram = () => (
    <div className="relative my-16 md:my-24">
      <motion.div 
        className="font-mono text-[10px] sm:text-xs leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {/* ASCII-style pipeline diagram */}
        <motion.pre 
          className={`overflow-x-auto pb-4 ${getDiagramTextClass()}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
  {`
      ┌─────────────────────────────────────────────────────────────────────────────┐
      │                   TECHNICAL OUTREACH ARCHITECTURE                        │
      └─────────────────────────────────────────────────────────────────────────────┘

           [DATA]          [ENRICH]         [INFRA]          [SEND]         [CONVERT]
             ▼               ▼               ▼                ▼               ▼
          ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐
      ──▶ │  ICP │  ────▶ │ VALID│  ────▶ │ AUTH │  ────▶ │ CAMP │  ────▶ │ QUAL │ ──▶
          └──────┘        └──────┘        └──────┘        └──────┘        └──────┘
             │               │               │                │               │
             │               │               │                │               │
          Target          Contact         Domain          Sequence         Meeting
          Analysis        Database         Setup          Execution         Ready
                                                                             Leads

      ═══════════════════════════════════════════════════════════════════════════════
                          → CONTINUOUS OPTIMIZATION FEEDBACK LOOP ←
  `}
        </motion.pre>
      </motion.div>
      
      {/* Metrics bar */}
      <motion.div 
        className={`grid grid-cols-3 gap-4 mt-8 pt-8 border-t ${getBorderClass()}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div>
          <div className={`text-2xl font-mono ${getAccentClass()}`}>3K+</div>
          <div className={`text-xs mt-1 ${getSecondaryTextClass()}`}>Emails / Month</div>
        </div>
        <div>
          <div className={`text-2xl font-mono ${getAccentClass()}`}>1K+</div>
          <div className={`text-xs mt-1 ${getSecondaryTextClass()}`}>Verified Contacts</div>
        </div>
        <div>
          <div className={`text-2xl font-mono ${getAccentClass()}`}>2-3</div>
          <div className={`text-xs mt-1 ${getSecondaryTextClass()}`}>Copy Variants</div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="services" className={`relative py-16 md:py-24 lg:py-32 w-full overflow-hidden ${getBackgroundClass()}`}>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-px w-12 ${variant === VARIANTS.DATA_INFRA ? 'bg-muted-sage/30' : 'bg-muted-sage/50'}`}></div>
            <span className={`font-mono text-xs tracking-wider ${getAccentClass()}`}>TECHNICAL OVERVIEW</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.15] max-w-3xl ${getTextClass()}`}>
            A Systematic Approach to Technical Outreach Architecture
          </h2>
          <p className={`font-sans text-base md:text-lg max-w-2xl leading-relaxed font-light ${getSecondaryTextClass()}`}>
            We've engineered a five-stage pipeline that transforms raw market intelligence into 
            qualified sales conversations. Each component is optimized for throughput consistency, 
            data fidelity, and deliverability integrity.
          </p>
        </motion.div>

        {/* Pipeline Diagram */}
        <PipelineDiagram />

        {/* Editorial Flow - Staggered Pipeline Stages */}
        <div className="space-y-20 md:space-y-32 mt-20 md:mt-32">
          {pipelineStages.map((stage, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ 
                duration: 1, 
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1]
              }}
              className={`relative ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              } max-w-3xl`}
            >
              {/* Stage Number */}
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className={`font-mono text-5xl md:text-6xl font-bold leading-none ${variant === VARIANTS.DATA_INFRA ? 'text-muted-sage/20' : 'text-muted-sage/30'}`}>
                    {stage.stage}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className={`font-mono text-[10px] tracking-widest mb-2 ${getAccentClass()}`}>
                    {stage.subtitle}
                  </div>
                  <h3 className={`font-serif text-2xl md:text-3xl lg:text-4xl font-normal mb-4 ${getTextClass()}`}>
                    {stage.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="ml-0 md:ml-24 space-y-6">
                <p className={`font-sans leading-relaxed font-light ${getSecondaryTextClass()}`}>
                  {stage.description}
                </p>

                {/* Technical Metrics */}
                <div className={`border-l-2 pl-6 space-y-2 ${variant === VARIANTS.DATA_INFRA ? 'border-muted-sage/20' : 'border-muted-sage/30'}`}>
                  {stage.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={variant === VARIANTS.DATA_INFRA ? 'text-muted-sage/40' : 'text-muted-sage/50 mt-1.5'}>→</div>
                      <div className={`font-sans text-sm font-light ${getSecondaryTextClass()}`}>{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Note */}
                <div className={`p-4 border-l-2 ${
                  variant === VARIANTS.DEEP_TECH 
                    ? 'bg-[#F5F5F5] border-[#E0E0E0]'
                    : variant === VARIANTS.DATA_INFRA
                    ? 'bg-cinnamon-slate/30 border-ethereal-ivory/10'
                    : 'bg-[#F5F5F0] border-[#CACAC0]/30'
                }`}>
                  <div className={`font-mono text-xs mb-1 ${getAccentClass()}`}>TECHNICAL NOTE:</div>
                  <div className={`font-sans text-sm font-light italic ${getSecondaryTextClass()}`}>
                    {stage.technical}
                  </div>
                </div>
              </div>

              {/* Connecting Line (except last) */}
              {index < pipelineStages.length - 1 && (
                <div className={`absolute ${
                  index % 2 === 0 ? 'left-8' : 'right-8'
                } bottom-0 transform translate-y-full`}>
                  <div className={`w-px h-16 bg-gradient-to-b to-transparent ${
                    variant === VARIANTS.DATA_INFRA ? 'from-muted-sage/20' : 'from-muted-sage/30'
                  }`}></div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Technical Specifications Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className={`mt-24 md:mt-32 pt-12 border-t ${getBorderClass()}`}
        >
          <div className="max-w-3xl">
            <div className={`font-mono text-xs tracking-wider mb-4 ${getAccentClass()}`}>
              ⚠ OPERATIONAL PARAMETERS
            </div>
            <div className={`font-sans space-y-4 text-sm leading-relaxed ${getSecondaryTextClass()}`}>
              <p>
                <span className={`font-normal ${getTextClass()} opacity-90`}>Month 1 — Calibration Phase:</span> Initial testing period for message optimization 
                and targeting parameter refinement. Baseline performance metrics are established through systematic A/B testing protocols.
              </p>
              <p>
                <span className={`font-normal ${getTextClass()} opacity-90`}>Handoff Architecture:</span> Qualified conversations route directly to your sales infrastructure. 
                Your team manages calendar scheduling and deal progression. We maintain upstream qualification, sequencing, and deliverability layers.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}