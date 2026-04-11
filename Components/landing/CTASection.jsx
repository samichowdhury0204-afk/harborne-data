import React, { useEffect } from 'react';

export default function CTASection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-[#0A0D14] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/15 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C4956A]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Got open machine hours?
          </h2>
          <p className="text-lg text-[#E5E7EB]/40 max-w-xl mx-auto leading-relaxed">
            Book a 15-minute call. I'll tell you straight whether outbound is a fit for your shop. No pressure, no pitch deck.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
          <div className="bg-white">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/samichowdhury1708/30min"
              style={{ minWidth: '280px', height: '700px' }}
            />
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-white/[0.08]" />
            <p className="text-sm text-[#E5E7EB]/35">
              Prefer email?{' '}
              <a
                href="mailto:sami@harborne-data.com"
                className="text-[#D4A87C] hover:text-[#C4956A] transition-colors duration-300 font-medium"
              >
                sami@harborne-data.com
              </a>
            </p>
            <div className="w-8 h-px bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}
