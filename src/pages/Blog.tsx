import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to B2B Promotional Campaign ROI in 2024",
    excerpt: "Discover the latest strategies and metrics that top-performing B2B companies use to maximize their promotional campaign ROI and drive sustainable growth.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "Strategy",
    featured: true
  };

  const blogPosts = [
    {
      title: "5 Performance Marketing Trends Reshaping B2B Sales",
      excerpt: "Explore the emerging trends in performance marketing that are transforming how B2B companies approach customer acquisition and retention.",
      author: "Mike Rodriguez",
      date: "March 10, 2024",
      category: "Trends",
      readTime: "8 min read"
    },
    {
      title: "Conversion Optimization: A/B Testing Best Practices",
      excerpt: "Learn proven A/B testing methodologies that can increase your conversion rates by up to 300% through systematic optimization.",
      author: "Lisa Wong",
      date: "March 5, 2024",
      category: "Optimization",
      readTime: "6 min read"
    },
    {
      title: "Building High-Converting Landing Pages for B2B Campaigns",
      excerpt: "Master the art of creating landing pages that convert visitors into qualified leads with these data-driven design principles.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Design",
      readTime: "12 min read"
    },
    {
      title: "Marketing Attribution: Measuring What Matters",
      excerpt: "Understand the different attribution models and how to choose the right one for measuring your promotional campaign effectiveness.",
      author: "Sarah Chen",
      date: "February 22, 2024",
      category: "Analytics",
      readTime: "10 min read"
    },
    {
      title: "Account-Based Marketing: Precision Targeting Strategies",
      excerpt: "Implement account-based marketing tactics that align sales and marketing teams for maximum impact on high-value prospects.",
      author: "Mike Rodriguez",
      date: "February 15, 2024",
      category: "Strategy",
      readTime: "14 min read"
    },
    {
      title: "The Psychology of B2B Buyer Behavior",
      excerpt: "Dive deep into the psychological factors that influence B2B purchasing decisions and how to leverage them in your campaigns.",
      author: "Emily Taylor",
      date: "February 8, 2024",
      category: "Psychology",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Strategy", "Optimization", "Analytics", "Trends", "Design"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Marketing Insights &
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Expert Strategies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with the latest trends, strategies, and best practices in B2B promotional campaigns 
            and performance marketing from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-glow hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">Featured</Badge>
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <Button variant="outline" className="group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"} 
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest marketing insights and strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button variant="cta">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;