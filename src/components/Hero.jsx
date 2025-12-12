import React from 'react';
import { Calendar } from 'lucide-react';
import Banner from '../assets/banner.svg';
import HeroIll from '../assets/ai-graphics/hero-illustration.svg';
import Hand1 from '../assets/ai-graphics/icon-hand-1.svg';
import Hand2 from '../assets/ai-graphics/icon-hand-2.svg';

function Hero() {
  const openCalendly = () => {
    window.Calendly.showPopupWidget('https://calendly.com/maheefarhan1/new-meeting');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Background banner */}
      <img src={Banner} alt="Data flow banner" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full text-center">
        <img src={HeroIll} alt="Illustration" className="pointer-events-none absolute right-6 top-24 w-1/2 opacity-60 hidden lg:block" />
        <div className="space-y-8 animate-fadeInUp">
          <div className="inline-block">
            <span className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold backdrop-blur-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300">
              🚀 Enterprise Solutions for Modern Business
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
              <span className="block text-white mb-4">Eliminating Chaos.</span>
              <span className="block text-white mb-4">Enforcing Accountability.</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Empowering 10× Growth
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Transform your business with Insight ERP - the intelligent automation platform that combines Pattern Recognition AI, Predictive Analytics, and Built-In Accountability to streamline operations and accelerate growth.
            </p>
          </div>

          {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 max-w-3xl mx-auto">
            <div className="group p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src={Hand1} alt="icon" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">30-40%</div>
              <div className="text-sm text-white/60 mt-2">Cost Reduction</div>
            </div>
            <div className="group p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src={Hand2} alt="icon" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">60%</div>
              <div className="text-sm text-white/60 mt-2">Faster Processing</div>
            </div>
            <div className="group p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src={Hand1} alt="icon" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-white/60 mt-2">Accuracy Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={openCalendly}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Schedule Free Demo
            </button>
            <button
              onClick={() => window.open('https://wa.me/+8801685243655', '_blank')}
              className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105"
            >
              <span>💬</span>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Hero;
