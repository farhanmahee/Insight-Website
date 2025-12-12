import React from 'react';
import { MapPin, Cpu, Clock, TrendingUp, Gauge } from 'lucide-react';

function Delivery() {
  const features = [
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time location tracking for all deliveries with live updates and route optimization',
      color: 'text-blue-400'
    },
    {
      icon: Cpu,
      title: 'AI Routing',
      description: 'Intelligent route optimization that reduces delivery time and fuel costs significantly',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'ETA Prediction',
      description: 'Accurate estimated time of arrival using machine learning and historical data',
      color: 'text-pink-400'
    }
  ];

  const pipeline = [
    { step: 1, title: 'Order Placement', description: 'Real-time order entry with instant confirmation' },
    { step: 2, title: 'Route Optimization', description: 'AI calculates optimal delivery routes in milliseconds' },
    { step: 3, title: 'Live Tracking', description: 'GPS tracking with real-time updates to customers' },
    { step: 4, title: 'Smart Delivery', description: 'Adaptive routing based on traffic and conditions' },
    { step: 5, title: 'Delivery Confirmation', description: 'Digital proof of delivery with timestamps' }
  ];

  return (
    <section id="delivery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Delivery Processing</span>
          <h2 className="text-6xl sm:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Supply Chain
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Modern delivery management powered by AI and real-time intelligence
          </p>
        </div>

        {/* Delivery Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Process Workflow */}
        <div className="rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Delivery Pipeline</h3>
          
          <div className="space-y-6">
            {pipeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg text-white">{item.title}</h4>
                  <p className="text-white/60 mt-1">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block text-2xl text-blue-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Performance Analytics</h3>
            </div>
            <ul className="space-y-3 text-white/70 mt-6">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Average delivery time metrics
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Cost per delivery analysis
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Driver performance ratings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Fuel efficiency tracking
              </li>
            </ul>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Customer Satisfaction</h3>
            </div>
            <ul className="space-y-3 text-white/70 mt-6">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Real-time delivery notifications
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Accurate delivery windows
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Proof of delivery photos
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Customer rating system
              </li>
            </ul>
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

export default Delivery;
