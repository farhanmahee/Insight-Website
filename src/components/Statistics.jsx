import React, { useState, useEffect } from 'react';
import { Building2, TrendingDown, Zap, Target, Star } from 'lucide-react';

function Statistics() {
  const [counts, setCounts] = useState({
    implementations: 0,
    costReduction: 0,
    speedImprovement: 0,
    accuracy: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        implementations: prev.implementations < 100 ? prev.implementations + 1 : 100,
        costReduction: prev.costReduction < 35 ? prev.costReduction + 1 : 35,
        speedImprovement: prev.speedImprovement < 60 ? prev.speedImprovement + 1 : 60,
        accuracy: prev.accuracy < 95 ? prev.accuracy + 1 : 95
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: counts.implementations, label: 'Implementations', suffix: '+', icon: Building2, color: 'from-blue-600 to-blue-400' },
    { value: counts.costReduction, label: 'Cost Reduction', suffix: '%', icon: TrendingDown, color: 'from-green-600 to-green-400' },
    { value: counts.speedImprovement, label: 'Speed Improvement', suffix: '%', icon: Zap, color: 'from-purple-600 to-purple-400' },
    { value: counts.accuracy, label: 'Accuracy Rate', suffix: '%', icon: Target, color: 'from-pink-600 to-pink-400' }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-6xl sm:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proven Results That Matter
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Real numbers from real clients achieving real growth
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 text-center">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  <div className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  
                  <div className="text-white font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-12">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">What Our Clients Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rating: 5, text: 'Insight ERP transformed our operations. We reduced costs by 40% in the first quarter alone.', name: 'Ahmed Khan', role: 'CEO, Tech Solutions Ltd' },
              { rating: 5, text: 'The implementation was seamless. Our team was productive within days, not weeks.', name: 'Fatema Rahman', role: 'Operations Manager' },
              { rating: 5, text: 'Accountability has never been clearer. Complete visibility across all operations.', name: 'Hassan Malik', role: 'Director, Enterprise Co.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
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

export default Statistics;
