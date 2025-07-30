import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              UberPeopleSearch
            </div>
            <p className="text-sm text-muted-foreground">
              Leading the future of promotional campaigns with performance-driven marketing solutions for B2B companies.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@uberpeoplesearch.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-primary transition-colors">Promotional Campaigns</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Conversion Optimization</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">ROI Marketing</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">B2B Sales Tools</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Performance Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Free Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">GDPR</Link>
            </div>
            
            {/* Strategic Partner Link with UTM Tracking */}
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://salescentri.com?utm_source=UberPeopleSearch.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                Powered by Sales Intelligence Platform
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground mt-4">
            © {currentYear} Uberpeoplesearch Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;