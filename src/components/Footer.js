import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Campus Map', path: '/campus-map' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-academic-blue text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-academic-blue font-bold text-lg">J</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Seth MR Jaipuria</h3>
                <p className="text-sm text-blue-100">Kanpur Road Campus</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering students with quality education and fostering academic excellence 
              in a nurturing environment since our establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-academic-gold mt-0.5" />
                <div>
                  <p className="text-blue-100 text-sm">
                    Kanpur Road, Lucknow<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-academic-gold" />
                <span className="text-blue-100 text-sm">+91 522 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-academic-gold" />
                <span className="text-blue-100 text-sm">info@jaipuria.edu.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-academic-gold" />
                <span className="text-blue-100 text-sm">Mon - Fri: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-academic-gold transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <h5 className="font-semibold text-sm mb-2">Emergency Contact</h5>
              <p className="text-blue-100 text-sm">+91 522 1234568</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © {currentYear} Seth MR Jaipuria, Kanpur Road Campus. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
