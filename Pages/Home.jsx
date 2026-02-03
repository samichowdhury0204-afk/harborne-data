import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/Components/landing/Header';
import Hero from '@/Components/landing/Hero';
import StatsSection from '@/Components/landing/StatsSection';
import ServicesSection from '@/Components/landing/ServicesSection';
import AboutSection from '@/Components/landing/AboutSection';
import PricingSection from '@/Components/landing/PricingSection';
import BookingSection from '@/Components/landing/BookingSection';
import Footer from '@/Components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden w-full">
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