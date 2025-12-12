import React from 'react';
import { Brain, Wand2, CheckCircle, Zap } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Pattern Recognition AI',
      description: 'Advanced machine learning algorithms that identify patterns in your business data to optimize operations.',
      color: 'from-blue-500 to-blue-600',
      accent: 'text-blue-400'
    },
    {
      icon: Wand2,
      title: 'Predictive Analytics',
      description: 'Stay ahead with AI-powered forecasting that anticipates market changes and customer behavior.',
      color: 'from-purple-500 to-purple-600',
      accent: 'text-purple-400'
    },
    {
      icon: CheckCircle,
      title: 'Built-In Accountability',
      description: 'Complete audit trails, real-time monitoring, and transparent reporting ensure every action is tracked.',
      color: 'from-pink-500 to-pink-600',
      accent: 'text-pink-400'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Core Features</span>
          <h2 className="text-6xl sm:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Technology Behind Growth
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Three core capabilities that work together to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:${feature.accent} transition-colors duration-300`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    <span>Learn more</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="grid md:grid-cols-2 gap-8 items-center p-12 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-fadeInUp hover:shadow-2xl">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose Insight ERP?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/70">Lightning-fast implementation and deployment</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/70">Real-time insights and analytics dashboards</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Zap className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/70">Enterprise-grade security and compliance</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/70">Global scale with local support</span>
              </li>
            </ul>
          </div>
          <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-white/10">
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-white font-semibold">Successful Implementations</div>
            <div className="text-sm text-white/60 mt-2">Trusted by leading enterprises worldwide</div>
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

export default Features;
