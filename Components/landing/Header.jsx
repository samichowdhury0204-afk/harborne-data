import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'What We Do', id: 'services' },
  { label: 'About Me', id: 'results' },
  { label: "FAQ's", id: 'faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-[#C4956A] via-[#D4A87C] to-[#C4956A] text-[#0A0D14] text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
        Limited availability — only taking <span className="font-extrabold">2 new clients</span> this quarter
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 w-full ${
          isScrolled
            ? 'bg-[#0A0D14]/90 backdrop-blur-2xl border-b border-[#C4956A]/10 shadow-lg shadow-black/20'
            : 'bg-[#0A0D14] border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/logo-rounded.png"
                alt="Harborne Data"
                className="h-9 sm:h-11 w-auto rounded-full ring-1 ring-white/10"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-[#E5E7EB]/50 hover:text-[#D4A87C] font-medium transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-[#C4956A] to-[#D4A87C] hover:from-[#D4A87C] hover:to-[#C4956A] text-[#0A0D14] px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-md shadow-[#C4956A]/20 hover:shadow-lg hover:shadow-[#C4956A]/30"
              >
                Book a Meeting
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-[#D4A87C] transition-colors duration-300 text-2xl leading-none"
            >
              {isMobileMenuOpen ? '\u00D7' : '\u2630'}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0D14]/98 backdrop-blur-xl md:hidden pt-28">
          <div className="flex flex-col items-center gap-8 p-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg text-[#E5E7EB]/60 hover:text-[#D4A87C] transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-[#C4956A] to-[#D4A87C] text-[#0A0D14] px-8 py-3.5 rounded-lg text-base font-bold transition-all duration-300 w-full max-w-xs shadow-lg shadow-[#C4956A]/20"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </>
  );
}
