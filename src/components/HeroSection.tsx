import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Drive Performance with
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Promotional Campaigns</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Transform your marketing ROI with data-driven promotional campaigns that deliver measurable results. 
              Our platform helps B2B companies optimize conversions and scale profitable growth.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium">3x ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium">500+ Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium">24h Setup</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
            <div className="flex items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Fortune 500</div>
              <div className="text-lg font-semibold">TechCorp</div>
              <div className="text-lg font-semibold">ScaleUp Inc</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="UberPeopleSearch promotional campaigns dashboard showing performance analytics and conversion metrics"
              className="w-full h-auto rounded-2xl shadow-card"
            />
            
            {/* Floating ROI Card */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-card shadow-glow animate-glow-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">324%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
            </Card>

            {/* Floating Conversion Card */}
            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-card shadow-glow">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 -z-10" />
    </section>
  );
};

export default HeroSection;