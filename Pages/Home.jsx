import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import StatsSection from '@/components/landing/StatsSection';
import ServicesSection from '@/components/landing/ServicesSection';
import AboutSection from '@/components/landing/AboutSection';
import PricingSection from '@/components/landing/PricingSection';
import BookingSection from '@/components/landing/BookingSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <BookingSection />
      <Footer />
    </div>
  );
}