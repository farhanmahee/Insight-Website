import React from 'react';
import { Users, Lightbulb, Award } from 'lucide-react';

import FounderImg from '../assets/founder-mahee.jpg';

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-6xl sm:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Built by Innovators for Growth
          </h2>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">
            Insight ERP was founded with a mission to revolutionize business operations through intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Info */}
          <div className="animate-fadeInLeft">
            <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20">
              <div className="flex items-start space-x-4 mb-6">
                <img src={FounderImg} alt="Sadiul Islam Mahee" className="w-20 h-20 rounded-full object-cover border-2 border-white/20 group-hover:border-blue-500 transition-colors duration-300 shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Sadiul Islam (Mahee)</h3>
                  <p className="text-blue-400 font-semibold mt-1">Founder & CEO</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                With over a decade of experience in enterprise automation, Mahee founded Insight ERP to solve the complex operational challenges faced by modern businesses. His vision: to empower companies to achieve 10x growth through intelligent automation.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="animate-fadeInRight space-y-8">
            <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-8 h-8 text-blue-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-white/70">
                    To transform how businesses operate by eliminating chaos, enforcing accountability, and enabling exponential growth through intelligent automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-8 h-8 text-purple-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-white/70">
                    To be the global leader in enterprise automation, trusted by thousands of companies to drive operational excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-pink-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Innovation through technology
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Customer-centric solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Transparent accountability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

export default About;
