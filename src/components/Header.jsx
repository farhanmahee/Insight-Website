import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

import Logo from '../assets/insight-logo.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const openCalendly = () => {
    window.Calendly.showPopupWidget('https://calendly.com/maheefarhan1/new-meeting');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/75 dark:bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300 group"
          onClick={() => scrollToSection('home')}
        >
          <img src={Logo} alt="Insight ERP Logo" className="h-10 w-auto rounded-lg" />
          <span className="hidden sm:inline font-bold text-xl text-white">Insight ERP</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/75 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/75 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/75 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
            >
              Features
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('delivery')}
              className="text-white/75 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
            >
              Delivery
            </button>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={openCalendly}
            className="group px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Schedule</span>
          </button>
          <button
            onClick={() => window.open('https://wa.me/+8801685243655', '_blank')}
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 md:hidden shadow-2xl animate-fadeIn">
            <ul className="flex flex-col p-6 space-y-4">
              <li><button onClick={() => scrollToSection('home')} className="text-white/75 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white/75 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-white/75 hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('delivery')} className="text-white/75 hover:text-white transition-colors">Delivery</button></li>
              <li>
                <button
                  onClick={openCalendly}
                  className="w-full px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://wa.me/+8801685243655', '_blank')}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}

export default Header;
