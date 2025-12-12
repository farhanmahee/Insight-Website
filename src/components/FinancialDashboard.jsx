import React, { useState, useEffect } from 'react';
import { 
    ArrowUpRight, 
    TrendingUp, 
    Users, 
    DollarSign, 
    Activity, 
    CreditCard, 
    Shield, 
    PieChart, 
    BarChart3,
    Zap
} from 'lucide-react';

const FinancialDashboard = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
            }
        }, { threshold: 0.1 });

        const element = document.getElementById('financial-dashboard-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const cards = [
        {
            title: "Total Revenue",
            value: "$124,592.00",
            change: "+12.5%",
            icon: DollarSign,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
        },
        {
            title: "Active Users",
            value: "14,293",
            change: "+8.2%",
            icon: Users,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
        },
        {
            title: "Transactions",
            value: "8,432",
            change: "+5.4%",
            icon: Activity,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
        },
        {
            title: "Net Profit",
            value: "$42,300.50",
            change: "+18.2%",
            icon: TrendingUp,
            color: "text-amber-400",
            bg: "bg-amber-400/10",
        },
    ];

    const features = [
        {
            icon: PieChart,
            title: "Smart Analytics",
            desc: "automated financial insights delivered in real-time."
        },
        {
            icon: Shield,
            title: "Bank-Grade Security",
            desc: "256-bit encryption ensuring your data is always safe."
        },
        {
            icon: Zap,
            title: "Instant Sync",
            desc: "Real-time synchronization across all your devices."
        }
    ];

    return (
        <section id="financial-dashboard-section" className="relative w-full py-20 overflow-hidden bg-[#02040a] border-y border-white/5">
            
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

            <div className="container mx-auto px-4 z-10 relative">
                
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-blue-400 font-medium tracking-wide text-sm mb-3 uppercase">System Features</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                        Financial clarity for modern teams.
                    </h3>
                    <p className="text-slate-400 text-lg">
                        Visualize your revenue streams, track expenses, and forecast growth with our advanced dashboard components.
                    </p>
                </div>

                {/* Dashboard Preview Visual */}
                <div className={`rounded-3xl border border-white/10 bg-[#0a0c14]/50 backdrop-blur-sm p-6 md:p-8 shadow-2xl transition-all duration-1000 delay-200 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {cards.map((card, i) => (
                            <div 
                                key={i} 
                                className="p-5 rounded-2xl bg-[#0a0c14] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5 group"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className={`p-2.5 rounded-xl ${card.bg} ${card.color} transition-colors group-hover:bg-opacity-20`}>
                                        <card.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/5 ${card.color} flex items-center`}>
                                        {card.change}
                                        <ArrowUpRight className="w-3 h-3 ml-1" />
                                    </span>
                                </div>
                                <h4 className="text-slate-400 text-sm font-medium">{card.title}</h4>
                                <p className="text-2xl font-semibold text-white tracking-tight mt-1 font-mono">{card.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chart & Transactions Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Main Chart Area */}
                        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0a0c14] border border-white/[0.06] relative overflow-hidden group">
                           <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Revenue Growth</h4>
                                    <p className="text-xs text-slate-500">Yearly performance metric</p>
                                </div>
                                <BarChart3 className="text-slate-600 w-5 h-5" />
                           </div>
                           
                           {/* Decorative Chart Visual */}
                           <div className="h-64 flex items-end justify-between gap-2">
                               {[35, 55, 45, 70, 50, 85, 65, 90, 75, 60, 80, 50, 65, 75, 85, 95].map((h, i) => (
                                   <div key={i} className="flex-1 h-full flex items-end group/bar">
                                       <div 
                                           className="w-full bg-gradient-to-t from-blue-900/20 to-blue-500 rounded-t-sm transition-all duration-500 relative opacity-80 group-hover/bar:opacity-100 group-hover/bar:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                           style={{ height: `${h}%` }}
                                       ></div>
                                   </div>
                               ))}
                           </div>
                        </div>

                        {/* Feature List / Transactions Mock */}
                        <div className="space-y-4">
                            {features.map((feature, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-[#0a0c14] border border-white/[0.06] hover:bg-white/[0.03] transition-colors flex items-start gap-4 cursor-default">
                                    <div className="p-2.5 rounded-lg bg-white/5 text-blue-400 shrink-0">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-medium text-sm">{feature.title}</h5>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 border border-white/10 text-white text-center mt-auto">
                                <p className="font-semibold text-lg mb-1">Unlock Pro</p>
                                <p className="text-white/80 text-sm mb-3">Get advanced analytics today.</p>
                                <button className="w-full py-2 bg-white text-blue-600 rounded-lg text-sm font-bold shadow-lg hover:bg-blue-50 transition-colors">
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FinancialDashboard;
