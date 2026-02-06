import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';

const navLinks = [
  { label: 'Pipeline', id: 'services' },
  { label: 'Results', id: 'results' },
  { label: 'About', id: 'about' },
  { label: 'Pricing', id: 'pricing' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-[#E4E4DE]/95 backdrop-blur-xl border-b border-[#4A505E]/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/logo.png" 
                alt="Harborne Data" 
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-mono text-[#4A505E]/70 hover:text-[#4A505E] font-medium transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-[#94A378] hover:bg-[#94A378]/90 text-white rounded border border-[#94A378] font-sans font-medium"
                onClick={() => scrollToSection('booking')}
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-[#4A505E]/70 hover:text-[#4A505E] transition-colors font-mono text-2xl leading-none"
            >
              {isMobileMenuOpen ? '×' : '☰'}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-[#E4E4DE] md:hidden pt-16 sm:pt-20"
        >
          <div className="flex flex-col items-center gap-6 p-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-base sm:text-lg font-mono text-[#4A505E]/70 hover:text-[#4A505E] transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-[#94A378] hover:bg-[#94A378]/90 text-white rounded border border-[#94A378] font-sans w-full max-w-xs"
              onClick={() => scrollToSection('booking')}
            >
              Book a Call
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}