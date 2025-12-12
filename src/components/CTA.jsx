import React from 'react';
import { Calendar, MessageCircle, Linkedin, Facebook, Instagram, Send, MessageSquare } from 'lucide-react';

function CTA() {
  const openCalendly = () => {
    window.Calendly.showPopupWidget('https://calendly.com/maheefarhan1/new-meeting');
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/farhanmaheee', color: 'from-blue-600 to-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/farhanmaheee', color: 'from-blue-500 to-blue-300' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/farhanmaheee', color: 'from-pink-600 to-purple-600' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/farhanmaheee', color: 'from-sky-500 to-blue-500' },
    { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/+8801685243655', color: 'from-green-600 to-green-400' }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          
          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 py-20 sm:py-24 text-center text-white">
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Join 100+ companies that are already experiencing the power of Insight ERP. Get started with a free personalized demo today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={openCalendly}
                className="group/btn px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                Schedule Free Demo
              </button>
              <button
                onClick={() => window.open('https://wa.me/+8801685243655', '_blank')}
                className="group/btn px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/20 backdrop-blur transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                Contact Us Now
              </button>
            </div>

            <p className="text-white/80 text-sm">
              No credit card required • 30-minute personalized consultation • Free implementation roadmap
            </p>
          </div>
        </div>

        {/* Social Media & Contact Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h3 className="text-4xl font-bold text-white mb-8">Connect With Us</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Follow us on social media for the latest updates, insights, and industry trends
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${social.color} border-2 border-transparent group-hover:border-white transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 flex flex-col items-center gap-2`}>
                    <IconComponent className="w-8 h-8 text-white" />
                    <span className="text-white font-semibold text-sm text-center">{social.name}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Why Teams Trust Insight ERP</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🏆</div>
              <h4 className="font-bold text-white mb-2">Industry Leading</h4>
              <p className="text-white/60 text-sm">Trusted by enterprises worldwide</p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h4 className="font-bold text-white mb-2">Fast Deployment</h4>
              <p className="text-white/60 text-sm">Live in 1-2 weeks, not months</p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🎓</div>
              <h4 className="font-bold text-white mb-2">Expert Support</h4>
              <p className="text-white/60 text-sm">Dedicated success team 24/7</p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📈</div>
              <h4 className="font-bold text-white mb-2">Proven ROI</h4>
              <p className="text-white/60 text-sm">30-40% cost savings guaranteed</p>
            </div>
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
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

export default CTA;
