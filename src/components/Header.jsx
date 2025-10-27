import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Users, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918076536172';
  };

  const handleQuoteClick = () => {
    const phoneNumber = '+918076536172';
  const message = encodeURIComponent('Hello Planning Pros & Consultant!!, I would like a custom quote for your IT services.');
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-white/20 shadow-xl text-white'
          : 'bg-transparent text-white'
      }`}
    >
  <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/team/pp.jpg"
              alt="Planning Pros & Consultant logo"
              className="w-10 h-10 rounded-md object-cover border-4 border-gray-300 shadow-[0_0_12px_2px_rgba(192,192,192,0.7)]"
            />
            <span className="text-2xl font-bold gradient-text">
              Planning Pros <span className="whitespace-nowrap">&amp; Consultant</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCallClick}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get Quote</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 p-4 glass-effect rounded-lg"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get Quote</span>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;