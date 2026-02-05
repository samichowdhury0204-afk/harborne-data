import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 sm:py-16 border-t border-[#4A505E]/20 bg-[#E4E4DE]">
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Technical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,80,94,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74,80,94,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Harborne Data" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-xs font-mono text-[#4A505E]/50 text-center md:text-left tracking-wide">
              Structured Outbound Infrastructure
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a 
              href="mailto:sami@harborne-data.com" 
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#4A505E]/70 hover:text-[#4A505E] transition-colors"
            >
              <span className="text-base">@</span>
              <span className="hidden sm:inline">sami@harborne-data.com</span>
            </a>
            <a 
              href="https://harborne-data.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-[#4A505E]/70 hover:text-[#4A505E] transition-colors"
            >
              harborne-data.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#4A505E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#4A505E]/50 text-center tracking-wide">
            © {currentYear} Harborne Data Ltd.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-[#4A505E]/50 tracking-wide">
            <span>London, UK</span>
            <span className="text-[#4A505E]/30">|</span>
            <span className="text-center">Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}