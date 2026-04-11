import React, { useState } from 'react';

const faqs = [
  {
    q: 'How does pricing work?',
    a: "It's mostly commission-based. There's a small monthly fee that covers the hard costs of running your campaign — data sourcing, sending infrastructure, email tooling. That's not profit, it's cost recovery so I don't run campaigns at a loss. The real money is on the back end: a small percentage of the first year of orders that come from buyers I introduce. If those orders never land, you've only paid the cost-recovery fee.",
  },
  {
    q: 'How quickly will I see results?',
    a: 'Outbound usually starts producing first replies within 2–3 weeks of launch. First RFQs typically follow within 4–6 weeks. First orders depend on your sales cycle.',
  },
  {
    q: 'Do I need to do anything?',
    a: "Not really. You'll review the email copy before anything goes out, then take over conversations when buyers are ready to quote. Everything in between, I handle.",
  },
  {
    q: 'What sectors do you work with?',
    a: 'UK precision engineering subcontract shops — CNC machining, fabrication, sheet metal, treatment & coating, and toolmaking. I target wherever your shop already has a foot in the door — aerospace, defence, automotive, medical, oil & gas, marine, rail, construction, renewables, food & pharma, and more.',
  },
  {
    q: 'What about GDPR?',
    a: 'Fully compliant. All outreach uses legitimate interest under UK GDPR for B2B contacts at registered businesses, with clear opt-out on every email.',
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
