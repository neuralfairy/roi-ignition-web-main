import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "499",
      period: "month",
      description: "Perfect for small businesses getting started with promotional campaigns",
      features: [
        "Up to 10,000 monthly visitors",
        "Basic campaign optimization",
        "Email support",
        "Standard analytics",
        "A/B testing (2 variants)",
        "CRM integration"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional", 
      price: "1,499",
      period: "month",
      description: "Advanced features for growing companies scaling their marketing",
      features: [
        "Up to 100,000 monthly visitors",
        "Advanced campaign optimization",
        "Priority support + dedicated rep",
        "Advanced analytics & reporting",
        "Unlimited A/B testing",
        "All CRM integrations",
        "Custom audiences",
        "Conversion tracking"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Unlimited monthly visitors",
        "Enterprise campaign optimization",
        "24/7 dedicated support team",
        "Custom analytics & dashboards",
        "Advanced testing suite",
        "All integrations + custom APIs",
        "White-label options",
        "Custom conversion funnels",
        "SLA guarantee",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your promotional campaign needs. 
            No hidden fees, no long-term contracts required.
          </p>
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              14-day free trial • No credit card required
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'border-2 border-primary shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "cta" : "outline"} 
                    size="lg" 
                    className="w-full group"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our pricing and features
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
              },
              {
                question: "What's included in the free trial?",
                answer: "The 14-day free trial includes full access to Professional plan features with no limitations or setup fees."
              },
              {
                question: "Do you offer custom pricing for enterprises?",
                answer: "Yes, we offer customized enterprise packages with volume discounts, dedicated support, and additional features."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, ACH bank transfers, and can arrange net-30 terms for enterprise customers."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;