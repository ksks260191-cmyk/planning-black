import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  // Removed services and company sections as requested
  const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"];
  return (
    <>
      <div className="w-full border-t border-slate-700 mb-0"></div>
      <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/team/pp.jpg"
                alt="Planning Pros & Consultant logo"
                className="w-10 h-10 rounded-md object-cover border-4 border-gray-300 shadow-[0_0_12px_2px_rgba(192,192,192,0.7)]"
              />
              <span className="text-2xl font-bold">Planning Pros <span className="whitespace-nowrap">& Consultant</span></span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted partner in IT staff augmentation. We connect businesses with top-tier professionals through our innovative one-time fee model.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>hitesh@planningpros.in</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+91-9711828656</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>N-4, Private Colony, Sri Niwas Puri, New Delhi, India-110065.</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          {/* Removed Services and Company sections as requested */}

          {/* Why Choose Us? Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:col-span-2 flex flex-col justify-center"
          >
            <span className="text-lg font-semibold mb-2">Why Choose Us?</span>
            <ul className="space-y-2 text-slate-300">
              <li>✔️ 10+ Years of Industry Experience</li>
              <li>✔️ 100+ Satisfied Clients Worldwide</li>
              <li>✔️ Fast Onboarding & Flexible Engagements</li>
              <li>✔️ Dedicated Account Managers</li>
              <li>✔️ Transparent, One-Time Fee Model</li>
              <li>✔️ Access to Top 2% of Global Talent</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">10+</span>
                <span className="text-slate-400 text-sm">Years Experience</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">100+</span>
                <span className="text-slate-400 text-sm">Clients Served</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">50+</span>
                <span className="text-slate-400 text-sm">Expert Consultants</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">24/7</span>
                <span className="text-slate-400 text-sm">Support</span>
              </div>
            </div>
          </motion.div>

          {/* Legal & Social */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6">
            <span className="text-lg font-semibold">Legal</span>
            <ul className="space-y-3">
              {legal.map((item, index) => <li key={index}>
                  <button onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>)}
            </ul>
            <div className="pt-4">
              <span className="text-lg font-semibold block mb-4">Follow Us</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/planning-pros-consultants/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/+918076536172?text=Hello Planning Pros & Consultant!!,%20I%20would%20like%20to%20know%20more%20about%20your IT%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-center md:text-left">
            © 2024 Planning Pros & Consultant. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Let's grow businesses</span>
          </div>
        </motion.div>
      </div>
      </footer>
    </>
  );
};
export default Footer;