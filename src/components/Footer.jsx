import React from 'react';
import { Linkedin, Facebook, Instagram, Send, MessageSquare, Calendar, MessageCircle } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const openCalendly = () => {
    window.Calendly.showPopupWidget('https://calendly.com/maheefarhan1/new-meeting');
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-xl text-white">Insight ERP</span>
            </div>
            <p className="text-white/70 mb-6">
              Transform your business with intelligent automation and predictive analytics.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/farhanmaheee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/farhanmaheee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/farhanmaheee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/farhanmaheee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+8801685243655"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:scale-110"
                title="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3 text-white/70">
              <li><button onClick={() => window.location.href = '#home'} className="hover:text-white hover:translate-x-1 transition-all duration-300">Features</button></li>
              <li><button onClick={() => window.location.href = '#features'} className="hover:text-white hover:translate-x-1 transition-all duration-300">Solutions</button></li>
              <li><button onClick={() => window.location.href = '#delivery'} className="hover:text-white hover:translate-x-1 transition-all duration-300">Delivery</button></li>
              <li><button onClick={openCalendly} className="hover:text-white hover:translate-x-1 transition-all duration-300">Pricing</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li><button onClick={() => window.location.href = '#about'} className="hover:text-white hover:translate-x-1 transition-all duration-300">About Us</button></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-8 mb-12 backdrop-blur-xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">Subscribe to get the latest updates on enterprise automation and business growth strategies.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-slate-900/50 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors duration-300 backdrop-blur-xl"
              />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm">
              <p>&copy; {currentYear} Insight Innovators Limited. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8 text-white/70 text-sm">
              <button onClick={openCalendly} className="hover:text-white hover:gap-3 transition-all duration-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Schedule Demo
              </button>
              <a
                href="https://wa.me/+8801685243655"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:gap-3 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
