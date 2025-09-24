import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '/services#web-development' },
      { label: 'AI Integration', href: '/services#ai-integration' },
      { label: 'UI/UX Design', href: '/services#ui-ux-design' },
      { label: 'Mobile Apps', href: '/services#mobile-apps' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
    support: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aicodemarketplace', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/aicodemarketplace', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/aicodemarketplace', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="absolute inset-0 mesh-gradient opacity-5"></div>
      
      <div className="relative section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-accent-neon" />
              <span className="text-xl font-bold text-gradient">
                AI-Code-Marketplace
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming businesses with AI-powered web development, stunning designs, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-accent-neon transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-accent-neon mt-0.5" />
                <a
                  href="mailto:aicodemarketplace2@gmail.com"
                  className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
                >
                  aicodemarketplace2@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent-neon mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Available Worldwide
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-accent-neon mt-0.5" />
                <span className="text-gray-400 text-sm">
                  24/7 Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AI-Code-Marketplace. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-accent-neon transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
