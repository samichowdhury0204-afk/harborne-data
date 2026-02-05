import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/Components/landing/Header';
import FounderHero from '@/Components/landing/FounderHero';
import ProblemSection from '@/Components/landing/ProblemSection';
import StatsSection from '@/Components/landing/StatsSection';
import FounderManifestoSection from '@/Components/landing/FounderManifestoSection';
import ComplianceTrustSection from '@/Components/landing/ComplianceTrustSection';
import AuditCTASection from '@/Components/landing/AuditCTASection';
import ServicesSection from '@/Components/landing/ServicesSection';
import PricingSection from '@/Components/landing/PricingSection';
import BookingSection from '@/Components/landing/BookingSection';
import Footer from '@/Components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E4E4DE] text-[#4A505E] antialiased overflow-x-hidden w-full">
      <Header />
      
      {/* 1. Founder credibility hero */}
      <FounderHero />
      
      {/* 2. Problem framing for IT firms */}
      <ProblemSection />
      
      {/* 3. Proof + metrics */}
      <StatsSection />
      
      {/* 4. Founder manifesto */}
      <FounderManifestoSection />
      
      {/* 5. Compliance + trust layer */}
      <ComplianceTrustSection />
      
      {/* 6. Audit CTA */}
      <AuditCTASection />
      
      {/* Supporting sections */}
      <ServicesSection />
      <PricingSection />
      <BookingSection />
      
      <Footer />
    </div>
  );
}