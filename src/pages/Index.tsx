import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ROICalculator />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
