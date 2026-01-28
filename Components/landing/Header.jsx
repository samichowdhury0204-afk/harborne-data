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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/logo.png" 
                alt="Harborne Data" 
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium"
                onClick={() => scrollToSection('booking')}
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          className="fixed inset-0 z-40 bg-[#0A0A0B] md:hidden pt-20"
        >
          <div className="flex flex-col items-center gap-6 p-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl w-full"
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