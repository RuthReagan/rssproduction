import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesPreview } from '@/components/services-preview'
import { WhoWeServe } from '@/components/who-we-serve'
import { TribalExpertiseSection } from '@/components/tribal-expertise-section'
import { AboutPreview } from '@/components/about-preview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhoWeServe />
      <TribalExpertiseSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
