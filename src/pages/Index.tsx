import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiveDashboardSection from "@/components/LiveDashboardSection";
import LogoCarousel from "@/components/LogoCarousel";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import PortfolioSection from "@/components/PortfolioSection";
import SuccessMetricsSection from "@/components/SuccessMetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <LiveDashboardSection />
      <LogoCarousel />
      <MarqueeSection />
      <ServicesSection />
      <AboutSection />
      <ROICalculatorSection />
      <PortfolioSection />
      <SuccessMetricsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
