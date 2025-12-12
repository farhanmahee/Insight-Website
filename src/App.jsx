import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FinancialDashboard from './components/FinancialDashboard';
import Statistics from './components/Statistics';
import Delivery from './components/Delivery';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/design-system.css';

function App() {
  useEffect(() => {
    try {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    } catch (e) {}
  }, []);

  return (
    <div className="variant-modern min-h-screen text-white overflow-hidden">
      {/* Fixed background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2s"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4s"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <FinancialDashboard />
        <Statistics />
        <Delivery />
        <Comparison />
        <CTA />
        <Footer />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
        .animation-delay-4s {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;
