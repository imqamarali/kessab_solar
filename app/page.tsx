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

export default function KessabSolarLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header nav />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <StrategiesSection />
      <ServicesSection />
      <PartnershipsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
