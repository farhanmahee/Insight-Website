import React from 'react';
import { Zap, Brain, Lock } from 'lucide-react';

function Comparison() {
  const comparisonData = [
    { feature: 'Setup Time', traditional: '3-6 Months', platform: '1-2 Weeks', insight: '✅ 5x Faster' },
    { feature: 'Cost', traditional: '$500K+', platform: '$50-100K', insight: '✅ 50% Savings' },
    { feature: 'Scalability', traditional: 'Limited', platform: 'High', insight: '✅ Unlimited' },
    { feature: 'Real-time Analytics', traditional: 'Delayed (24hrs)', platform: 'Near Real-time', insight: '✅ Instant' },
    { feature: 'AI Capabilities', traditional: 'Manual Processes', platform: 'Basic AI', insight: '✅ Advanced ML' },
    { feature: 'Maintenance', traditional: 'Heavy (In-house)', platform: 'Managed', insight: '✅ Fully Automated' },
    { feature: 'Integration', traditional: 'Complex', platform: 'Multiple Connectors', insight: '✅ 200+ Integrations' },
    { feature: 'Support', traditional: 'Limited', platform: '24/7 Support', insight: '✅ Dedicated Team' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Comparison</span>
          <h2 className="text-6xl sm:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Insight ERP Wins
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Compare traditional systems with Insight ERP's modern platform approach
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl mb-16">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                <th className="px-6 py-4 text-left font-bold text-white">Feature</th>
                <th className="px-6 py-4 text-center font-bold text-white">Traditional ERP</th>
                <th className="px-6 py-4 text-center font-bold text-white">Generic Platform</th>
                <th className="px-6 py-4 text-center font-bold text-white bg-white/10">Insight ERP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <td className="px-6 py-4 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-white/70">
                    {row.traditional}
                  </td>
                  <td className="px-6 py-4 text-center text-white/70">
                    {row.platform}
                  </td>
                  <td className="px-6 py-4 text-center font-bold bg-gradient-to-b from-blue-600/20 to-transparent">
                    <span className="text-blue-300">{row.insight}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insight ERP Advantages */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group animate-fadeInUp" style={{ animationDelay: '0ms' }}>
            <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning-Fast Implementation</h3>
              <p className="text-white/70">
                Go live in weeks, not months. Our proven implementation methodology ensures smooth deployment with minimal disruption.
              </p>
            </div>
          </div>

          <div className="group animate-fadeInUp" style={{ animationDelay: '150ms' }}>
            <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
              <p className="text-white/70">
                Built-in machine learning provides predictive insights, pattern recognition, and automated recommendations out of the box.
              </p>
            </div>
          </div>

          <div className="group animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-400 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-white/70">
                Bank-level security, compliance certifications, and complete audit trails ensure your data is always protected.
              </p>
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

export default Comparison;
