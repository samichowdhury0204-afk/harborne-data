import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { LogoWall } from '@/components/logo-wall'
import { ProblemSection } from '@/components/problem-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CaseStudySection } from '@/components/case-study-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoWall />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CaseStudySection />
      <CTASection />
      <Footer />
    </>
  )
}
