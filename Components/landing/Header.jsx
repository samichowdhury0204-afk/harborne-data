import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Results', id: 'results' },
  { label: 'Services', id: 'services' },
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          isScrolled 
            ? 'bg-ethereal-ivory/95 backdrop-blur-sm border-b border-cinnamon-slate/10' 
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
                  className="text-sm text-cinnamon-slate hover:text-cinnamon-slate/80 font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-muted-sage hover:bg-muted-sage/90 text-white rounded-lg font-medium"
                onClick={() => scrollToSection('booking')}
              >
                Review Your Audit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1 ${isScrolled ? 'text-cinnamon-slate' : 'text-cinnamon-slate/70'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
          className="fixed inset-0 z-40 bg-cinnamon-slate md:hidden pt-16 sm:pt-20"
        >
          <div className="flex flex-col items-center gap-6 p-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-base sm:text-lg text-ethereal-ivory/70 hover:text-ethereal-ivory transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-muted-sage hover:bg-muted-sage/90 text-white rounded-lg sm:rounded-xl w-full max-w-xs"
              onClick={() => scrollToSection('booking')}
            >
              Review Your Audit
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}