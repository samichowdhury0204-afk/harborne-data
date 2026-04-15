import React from 'react';

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Buyer Discovery',
    subtitle: 'I find the buyers actively looking for what your shop makes',
    description: 'I research and build a verified list of procurement contacts at the buyers your shop should be reaching - whether that\'s OEMs, tier-1s, tier-2 manufacturers, or direct industrial end-users. Real decision-makers, not gatekeepers.',
    bullets: [
      'Verified procurement contacts',
      'OEMs, tier-1s, tier-2s, end-users',
      'GDPR-compliant sourcing',
      'Refreshed every campaign',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Outbound Campaigns',
    subtitle: 'I run the outreach in your shop\'s name',
    description: 'I handle the full outbound motion and forward you qualified prospects to quote. Via Emails, Calls and Linkedin',
    bullets: [
      'SPF/DKIM/DMARC configured domains',
      'Founder-style copy, not marketing fluff',
      'Only qualified replies forwarded to you',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Quote Handover',
    subtitle: 'When a buyer\'s ready to RFQ, I hand them straight to you',
    description: 'What I earn only kicks in when an order is placed.',
    bullets: [
      'Warm handover, no awkward intros',
      'You own the customer relationship',
      'Mostly commission — I win when you win',
      'Small monthly fee covers data and tooling costs only',
    ],
  },
];

export default function ServicePillars() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0E1219] overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-[#D4A87C] font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Three Pillars of Growth
          </h2>
          <p className="text-lg text-[#E5E7EB]/40 max-w-2xl mx-auto leading-relaxed">
            From buyer discovery to RFQ handover — I handle the outbound so you can stay on the shop floor.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-[#0A0D14] rounded-2xl p-8 pb-9 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Border with gradient on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#C4956A]/25 transition-colors duration-500" />
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C4956A]/0 group-hover:via-[#C4956A]/30 to-transparent transition-all duration-500" />

              <div className="relative">
                <div className="text-[#C4956A]/70 group-hover:text-[#D4A87C] transition-colors duration-300 mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-[#D4A87C]/70 font-medium mb-5">{pillar.subtitle}</p>
                <p className="text-sm text-[#E5E7EB]/40 leading-relaxed mb-7">{pillar.description}</p>

                {/* Divider */}
                <div className="h-px bg-white/[0.05] mb-6" />

                <ul className="space-y-3">
                  {pillar.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#E5E7EB]/50">
                      <svg className="w-4 h-4 text-[#C4956A]/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
