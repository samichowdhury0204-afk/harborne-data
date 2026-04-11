import React from 'react';
import Header from '@/Components/landing/Header';
import TechBanner from '@/Components/landing/TechBanner';
import HeroSection from '@/Components/landing/HeroSection';
import ServicePillars from '@/Components/landing/ServicePillars';
import ResultsSection from '@/Components/landing/ResultsSection';
import WorkInProgressSection from '@/Components/landing/WorkInProgressSection';
import FAQSection from '@/Components/landing/FAQSection';
import CTASection from '@/Components/landing/CTASection';
import Footer from '@/Components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-[#E5E7EB] antialiased overflow-x-hidden w-full">
      <Header />
      <TechBanner />
      <HeroSection />
      <ServicePillars />
      <ResultsSection />
      <WorkInProgressSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
