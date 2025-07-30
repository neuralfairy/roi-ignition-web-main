import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Marketing",
      company: "TechScale Corp",
      content: "UberPeopleSearch's promotional campaigns increased our conversion rate by 340% in just 3 months. The ROI has been phenomenal.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      title: "Growth Director", 
      company: "ScaleUp Solutions",
      content: "The performance marketing strategies delivered by their team transformed our B2B sales funnel. We've seen a 250% increase in qualified leads.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      title: "CEO",
      company: "InnovateLab",
      content: "Professional, data-driven, and results-focused. Their promotional campaigns helped us achieve our annual growth targets in 6 months.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their results with our promotional campaigns
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Certified & Trusted</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">✓</span>
              </div>
              <span className="text-sm font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">✓</span>
              </div>
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">✓</span>
              </div>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;