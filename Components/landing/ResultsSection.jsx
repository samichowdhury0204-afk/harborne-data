import React from 'react';

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-24 md:py-32 bg-[#0A0D14] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/15 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C4956A]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-[#D4A87C] font-semibold tracking-widest uppercase mb-4">Who Am I</p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight">
          I'm Sami.
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C4956A]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4956A]/40" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C4956A]/40" />
        </div>

        <p className="text-lg md:text-xl text-[#E5E7EB]/55 leading-relaxed max-w-2xl mx-auto mb-10">
          Background in high security data engineering and outbound systems. I work with a small number of UK precision engineering shops at a time so each one gets proper attention. The bulk of what I earn is on the back end, when orders land. If I don't think your shop is the right fit for outbound, I'll tell you on the call.
        </p>

        <div className="inline-block border border-white/[0.06] rounded-xl px-8 py-4 bg-[#0E1219]/60">
          <p className="text-base text-[#D4A87C]/80 font-medium tracking-wide">
            Working with UK precision shops and manufacturing firms.
          </p>
        </div>
      </div>
    </section>
  );
}
