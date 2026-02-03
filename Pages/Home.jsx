import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, VARIANTS } from '@/src/ThemeContext';
import Header from '@/Components/landing/Header';
import Hero from '@/Components/landing/Hero';
import StatsSection from '@/Components/landing/StatsSection';
import ServicesSection from '@/Components/landing/ServicesSection';
import AboutSection from '@/Components/landing/AboutSection';
import PricingSection from '@/Components/landing/PricingSection';
import BookingSection from '@/Components/landing/BookingSection';
import Footer from '@/Components/landing/Footer';
import VariantSwitcher from '@/Components/ui/VariantSwitcher';

export default function Home() {
  const { variant, config } = useTheme();

  // Dynamic background based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case VARIANTS.DEEP_TECH:
        return 'bg-[#FAFAFA] text-[#1A1A1A]';
      case VARIANTS.DATA_INFRA:
        return 'bg-ethereal-ivory text-cinnamon-slate';
      case VARIANTS.TRADITIONAL:
        return 'bg-[#F5F5F0] text-[#2A2A2A]';
      default:
        return 'bg-white text-slate-900';
    }
  };

  return (
    <div className={`min-h-screen antialiased overflow-x-hidden w-full transition-colors duration-500 ${getBackgroundStyle()}`}>
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <BookingSection />
      <Footer />
      <VariantSwitcher />
    </div>
  );
}