import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import ceoPhoto from "@/assets/ceo-sarah.jpg";
import directorPhoto from "@/assets/director-mike.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "CEO & Founder",
      bio: "15+ years in performance marketing with Fortune 500 companies. Former VP at Google Ads.",
      image: ceoPhoto
    },
    {
      name: "Mike Rodriguez",
      title: "Head of Strategy",
      bio: "Data science expert with PhD from MIT. Led growth teams at unicorn startups.",
      image: directorPhoto
    }
  ];

  const stats = [
    { number: "500+", label: "B2B Clients Served" },
    { number: "324%", label: "Average ROI Increase" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "98%", label: "Client Retention Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Transforming B2B Marketing with
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Data-Driven Results</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Since 2018, we've been helping companies achieve breakthrough growth 
                through performance-based promotional campaigns that deliver measurable ROI.
              </p>
              <Button variant="cta" size="lg">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Uberpeoplesearch Solutions team working together in modern office environment"
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We believe every B2B company deserves access to enterprise-level marketing technology 
              and expertise. Our mission is to democratize performance marketing by providing 
              sophisticated promotional campaign tools that were once only available to Fortune 500 companies.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Client-First Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Every decision we make is guided by what's best for our clients' growth and success.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Results-Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    We measure our success by the measurable impact we create for our clients' businesses.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Innovation Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously innovate our platform to stay ahead of market trends and opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts with proven track records in performance marketing and B2B growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.title} at Uberpeoplesearch Solutions`}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <div className="text-primary font-medium mb-3">{member.title}</div>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of B2B companies who trust us to drive their promotional campaign success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;