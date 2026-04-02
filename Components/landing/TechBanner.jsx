import React from 'react';

const logos = [
  { src: '/techstack/python.png', alt: 'Python' },
  { src: '/techstack/Hunter-io_Logo.png', alt: 'Hunter.io' },
  { src: '/techstack/apollo_logo.png', alt: 'Apollo' },
  { src: '/techstack/instantly-ai-logo.png', alt: 'Instantly' },
  { src: '/techstack/OIP.png', alt: 'LinkedIn' },
  { src: '/techstack/OIP (1).png', alt: 'Icypeas' },
  { src: '/techstack/5dbd80e4267a330001fc9db3-198x149-1x.png', alt: 'Mailmeteor' },
];

const repeated = [...logos, ...logos, ...logos, ...logos];

export default function TechBanner() {
  return (
    <section className="relative py-6 bg-[#0A0D14] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0A0D14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0A0D14] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex animate-scroll-left">
        {repeated.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-400"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
