import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 sm:py-16 border-t border-cinnamon-slate/10">
      <div className="absolute inset-0 bg-ethereal-ivory" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Logo/Brand */}
          <div>
            <img 
              src="/images/logo.png" 
              alt="Harborne Data" 
              className="h-10 sm:h-12 w-auto mb-4"
            />
            <p className="font-sans text-sm text-cinnamon-slate/60 leading-relaxed max-w-md">
              Technical outreach infrastructure for MSPs
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-cinnamon-slate/40 tracking-wider mb-4">CONTACT</div>
            <a 
              href="mailto:sami@harborne-data.com" 
              className="font-sans block text-sm text-cinnamon-slate/70 hover:text-cinnamon-slate transition-colors"
            >
              sami@harborne-data.com
            </a>
            <a 
              href="https://harborne-data.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans block text-sm text-cinnamon-slate/70 hover:text-cinnamon-slate transition-colors"
            >
              harborne-data.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cinnamon-slate/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-cinnamon-slate/50">
            © {currentYear} Harborne Data Ltd. All rights reserved.
          </p>
          <div className="font-sans flex items-center gap-3 text-xs text-cinnamon-slate/50">
            <span>London, UK</span>
            <span>•</span>
            <span>Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}