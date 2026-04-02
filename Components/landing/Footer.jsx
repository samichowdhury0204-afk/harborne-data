import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0D14] py-14 sm:py-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <img
              src="/logo-rounded.png"
              alt="Harborne Data"
              className="h-10 sm:h-12 w-auto rounded-full ring-1 ring-white/[0.06]"
            />
            <p className="text-xs text-[#E5E7EB]/25 tracking-wide">
              Data Intelligence for Education
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm text-[#E5E7EB]/40 hover:text-[#D4A87C] transition-colors duration-300">
              What We Do
            </button>
            <button onClick={() => scrollToSection('results')} className="text-sm text-[#E5E7EB]/40 hover:text-[#D4A87C] transition-colors duration-300">
              About Me
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm text-[#E5E7EB]/40 hover:text-[#D4A87C] transition-colors duration-300">
              FAQ's
            </button>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:sami@harborne-data.com"
              className="text-sm text-[#E5E7EB]/40 hover:text-[#D4A87C] transition-colors duration-300"
            >
              sami@harborne-data.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#E5E7EB]/25">
            &copy; {currentYear} Harborne Data Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#E5E7EB]/25">
            <span>London, UK</span>
            <span className="text-[#C4956A]/20">|</span>
            <span>Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
