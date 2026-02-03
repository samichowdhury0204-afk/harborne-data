import React from 'react';
import { Mail, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 sm:py-12 border-t border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Harborne Data" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
              Cold email lead generation for MSPs
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="mailto:sami@harborne-data.com" 
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">sami@harborne-data.com</span>
            </a>
            <a 
              href="https://harborne-data.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">harborne-data.com</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-slate-500 text-center">
            © {currentYear} Harborne Data Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-500">
            <span>London, UK</span>
            <span>•</span>
            <span className="text-center">Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}