import React from 'react';

const engagements = [
  {
    status: 'Live',
    title: 'International Manufacturer',
    description: 'Building market segmentation and outbound infrastructure for one of the largest manufacturers serving global brands.',
  },
  {
    status: 'Live',
    title: 'Facilities Operation Group',
    description: 'Building a prospect and market database to support their UK growth pipeline.',
  },
];

export default function WorkInProgressSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E1219] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#D4A87C] font-semibold tracking-widest uppercase mb-4">Currently Working With</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Client Work as of April 2026
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {engagements.map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#0A0D14] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Border with gradient on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#C4956A]/25 transition-colors duration-500" />
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C4956A]/0 group-hover:via-[#C4956A]/30 to-transparent transition-all duration-500" />

              <div className="relative">
                {/* Status pill */}
                <div className="inline-flex items-center gap-2 bg-[#C4956A]/[0.08] border border-[#C4956A]/20 rounded-full px-3.5 py-1 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A87C]" />
                  <span className="text-xs text-[#D4A87C] font-medium tracking-wide">{item.status}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#E5E7EB]/45 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
