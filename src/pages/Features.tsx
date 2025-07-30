import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Target, 
  BarChart, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Performance Campaigns",
      description: "Data-driven promotional campaigns optimized for maximum ROI and conversion rates.",
      benefits: ["3x conversion improvement", "Real-time optimization", "A/B testing included"]
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation and targeting for higher-quality leads.",
      benefits: ["Behavioral targeting", "Lookalike audiences", "Interest-based segments"]
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting to track campaign performance.",
      benefits: ["Real-time metrics", "Custom reports", "ROI tracking"]
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Automated lead capture and nurturing systems for B2B growth.",
      benefits: ["Qualified lead scoring", "Automated follow-up", "CRM integration"]
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Streamline your marketing processes with intelligent automation.",
      benefits: ["Workflow automation", "Email sequences", "Trigger-based actions"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR and SOC 2 compliance.",
      benefits: ["Data encryption", "Privacy controls", "Audit trails"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Promotional Success</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive tools and features designed to maximize your campaign performance 
            and drive measurable business results.
          </p>
          <Button variant="cta" size="lg">
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of our promotional campaign platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Dashboard Demo</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get hands-on experience with our analytics dashboard and see how easy it is 
                  to track your campaign performance and optimize for better results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg">
                    Launch Demo
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Walkthrough
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "Salesforce", "HubSpot", "Marketo", "Pardot",
              "Google Analytics", "Facebook Ads", "LinkedIn", "Microsoft Dynamics"
            ].map((integration, index) => (
              <div key={index} className="text-center p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;