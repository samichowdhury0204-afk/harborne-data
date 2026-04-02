import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to build a database?',
    a: 'Typically 2-4 weeks from kickoff to delivery of a fully enriched, verified database. Timeline depends on the scope — number of data sources, target regions, and classification complexity.',
  },
  {
    q: 'What kind of data accuracy can I expect?',
    a: 'We guarantee 95%+ email accuracy through multi-layer verification. Every contact goes through waterfall enrichment, AI-powered role classification, and deliverability testing before it reaches your system.',
  },
  {
    q: 'Do I need to be involved in the process?',
    a: 'Minimal involvement required. We need one kickoff call to understand your ICP, target institutions, and goals. After that, we handle everything — data sourcing, enrichment, verification, and delivery.',
  },
  {
    q: 'How does pricing work?',
    a: 'Pricing is scoped during a discovery call based on three factors: data scope, classification complexity, and dashboard/integration requirements. Every engagement is a custom retainer — no cookie-cutter packages.',
  },
  {
    q: 'What about GDPR and data compliance?',
    a: 'All operations are fully GDPR compliant. We use legitimate interest-based processing, maintain proper consent mechanisms, and provide full audit trails. No purchased lists, no scraping, no shortcuts.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0E1219] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/15 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#D4A87C] font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0A0D14] border border-[#C4956A]/20 shadow-lg shadow-[#C4956A]/[0.04]'
                    : 'bg-[#0A0D14]/60 border border-white/[0.05] hover:border-white/[0.1]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300"
                >
                  <span className={`text-sm sm:text-base font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-[#D4A87C]' : 'text-white/80'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#C4956A]/15 rotate-45' : 'bg-white/[0.04]'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-[#D4A87C]' : 'text-white/40'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-white/[0.04] mb-4" />
                    <p className="text-sm text-[#E5E7EB]/45 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
