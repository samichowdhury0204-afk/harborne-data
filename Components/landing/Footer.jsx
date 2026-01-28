import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">HD</span>
              </div>
              <span className="text-white font-semibold">Harborne Data</span>
            </div>
            <p className="text-sm text-zinc-500">
              Cold email lead generation for MSPs
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@harborne-data.com" 
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">hello@harborne-data.com</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
              href="https://harborne-data.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">harborne-data.com</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {currentYear} Harborne Data Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <span>London, UK</span>
            <span>•</span>
            <span>Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}