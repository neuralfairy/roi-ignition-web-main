import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import nyOffice from "@/assets/ny-office.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Our Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your promotional campaigns? Let's discuss how we can help 
            your business achieve breakthrough growth and performance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Acme Corporation" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Company Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>How can we help you?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Schedule a Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="features">Product Features</SelectItem>
                        <SelectItem value="integration">Integration Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your promotional campaign goals and how we can help..."
                      className="min-h-32"
                      required 
                    />
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              
              {/* Office Info */}
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">New York Office</h3>
                  <img 
                    src={nyOffice} 
                    alt="Uberpeoplesearch Solutions New York office building exterior"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">123 Marketing Ave</div>
                        <div className="text-sm text-muted-foreground">New York, NY 10001</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div className="font-medium">+1 (555) 123-4567</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div className="font-medium">hello@uberpeoplesearch.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm">
                      <strong>Emergency Support:</strong> 24/7 for Enterprise clients
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Chat */}
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our team for instant support and quick answers.
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;