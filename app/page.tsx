import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PartnershipsSection,
  ServicesSection,
  StrategiesSection,
  TeamSection,
  WhyChooseUsSection
} from "@/components/landing";
import ValuesSection from "@/components/landing/values-section";
import HowSolarWorksSection from "@/components/landing/how-solar-works-section";

export default function KessabSolarLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header nav />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <StrategiesSection />
      <HowSolarWorksSection />
      <ValuesSection />
      <ServicesSection />
      <PartnershipsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
