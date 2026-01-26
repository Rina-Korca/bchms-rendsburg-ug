import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { LogoStrip } from "@/components/logo-strip"
import { AboutSection } from "@/components/about-section"
import { ServicesStackedSection } from "@/components/services-stacked-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { GardenShowcaseSection } from "@/components/garden-showcase-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <LogoStrip />
      <AboutSection />
      <ServicesStackedSection />
      <ProjectsSection />
      <ProcessSection />
      <GardenShowcaseSection />
      <ContactFormSection />
      <TeamSection />
      <BlogSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
