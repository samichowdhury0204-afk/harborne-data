import React from 'react';

const stats = [
  { value: '1,500+', label: 'UK Precision Shops Targeted' },
  { value: '8 Sectors', label: 'Aerospace, defence, medical, automotive, motorsport, oil & gas, marine, rail' },
  { value: 'Cost-recovery only', label: 'Upfront Risk' },
];

export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-[#0A0D14] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[#C4956A]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      {/* Secondary glow bottom-right */}
      <div className="absolute bottom-[-100px] right-[-200px] w-[500px] h-[500px] bg-[#C4956A]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#C4956A]/[0.08] border border-[#C4956A]/20 rounded-full px-5 py-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A87C]" />
          <span className="text-sm text-[#D4A87C] font-medium tracking-wide">Outbound Growth for UK Precision Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8">
          <span className="bg-gradient-to-r from-[#C4956A] via-[#D4A87C] to-[#C4956A] bg-clip-text text-transparent">Fill your unused CNC capacity</span>
          <br />
          <span className="text-white">with consistent new RFQs</span>
        </h1>

        <p className="text-lg md:text-xl text-[#E5E7EB]/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          Mostly commission-based outbound. I put your shop's capacity in front of procurement teams you haven't reached before. We only get paid when you get paid.
        </p>

        <button
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-[#C4956A] to-[#D4A87C] hover:from-[#D4A87C] hover:to-[#C4956A] text-[#0A0D14] px-12 py-5 rounded-lg text-lg font-bold transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-[#C4956A]/25 hover:shadow-xl hover:shadow-[#C4956A]/30"
        >
          Book a Call
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Social proof stats */}
        <div className="mt-20 pt-12 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-sm text-[#E5E7EB]/40 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
