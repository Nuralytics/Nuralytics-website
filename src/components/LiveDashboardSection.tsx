import { motion, AnimatePresence } from "framer-motion";
import { Activity, BrainCircuit, Bell, Database, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const features = [
    {
        icon: Activity,
        title: "Real-time Metrics",
        desc: "Stream and visualize data with millisecond latency for instant, precise decision-making.",
    },
    {
        icon: BrainCircuit,
        title: "Predictive AI",
        desc: "Deploy custom ML models that forecast trends, flag anomalies, and automate responses.",
    },
    {
        icon: Bell,
        title: "Custom Alerts",
        desc: "Set intelligent thresholds and receive alerts by Slack, email, or SMS the moment KPIs shift.",
    },
    {
        icon: Database,
        title: "Multi-Source Data Pipeline",
        desc: "Unify data from any API, CRM, database, or warehouse into a single, coherent data layer.",
    },
];

const dashboardCrops = [
    { name: "Sales Overview", x: 0, y: 0, scale: 3 },
    { name: "Marketing Campaigns", x: 1, y: 0, scale: 3 },
    { name: "Customer Support", x: 2, y: 0, scale: 3 },
    { name: "Product Performance", x: 0, y: 1, scale: 2 },
    { name: "Global Logistics", x: 1, y: 1, scale: 2 },
];

const LiveDashboardSection = () => {
    const [currentDahboard, setCurrentDashboard] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDashboard((prev) => (prev + 1) % dashboardCrops.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentCrop = dashboardCrops[currentDahboard];

    return (
        <section className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                    style={{ background: "radial-gradient(ellipse at right, rgba(16,185,129,0.06) 0%, transparent 70%)" }} />
            </div>

            <div className="container px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-lg">
                        <span className="section-badge mb-6">Intelligent Analytics</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6 tracking-tight font-display mb-6 leading-[1.1]">
                            Real-Time Intelligence,{" "}
                            <span className="text-gradient">Delivered Instantly</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            We design bespoke dashboard solutions that give you complete control over your business logic, AI integrations, and real-time operations overview.
                        </p>

                        <div className="space-y-6">
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.12, duration: 0.5 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="mt-0.5 w-10 h-10 rounded-full flex items-center justify-center text-emerald-400 shrink-0 transition-all duration-300 group-hover:scale-110"
                                            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{feat.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-10">
                            <button className="flex items-center gap-2 text-primary font-medium hover:text-emerald-400 transition-colors group">
                                Explore the Platform
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 blur-[80px] rounded-[40px] pointer-events-none"
                            style={{ background: "rgba(16,185,129,0.08)" }} />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                background: "rgba(10,10,10,0.95)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 30px 80px -20px rgba(16,185,129,0.15)"
                            }}
                        >
                            <div className="h-10 flex items-center px-4 gap-2"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                                </div>
                                <div className="flex-1 mx-4 flex justify-center">
                                    <div className="h-4 px-4 rounded-full flex items-center"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                                            {currentCrop.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] flex">
                                <div className="w-1/4 border-r border-white/5 bg-[#0d0d0d] p-3 flex flex-col gap-2 relative z-10">
                                    <div className="flex items-center gap-2 mb-4 px-2 mt-2">
                                        <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                                            <Activity className="w-3 h-3" />
                                        </div>
                                        <span className="text-[10px] font-bold text-white tracking-widest uppercase">NURA . OS</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold px-2 mb-2">Platform Views</div>
                                        {dashboardCrops.map((crop, idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => setCurrentDashboard(idx)}
                                                className={`w-full flex items-center justify-between px-2 py-2 rounded text-[10px] font-medium transition-all duration-300 ${
                                                    idx === currentDahboard 
                                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                                                        : 'text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'
                                                }`}
                                            >
                                                <span className="truncate">{crop.name}</span>
                                                {idx === currentDahboard && (
                                                    <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 p-4 relative flex flex-col gap-4 overflow-hidden">
                                    <div className="flex justify-between items-center z-10 relative">
                                        <h3 className="text-white text-xs font-bold tracking-wide">
                                            {currentCrop.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-[9px] text-white/50">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                LIVE SYNC
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 z-10 relative">
                                        <AnimatePresence mode="popLayout">
                                            <motion.div
                                                key={`kpi1-${currentDahboard}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="p-3 rounded-xl border border-white/5 bg-white/[0.02]"
                                            >
                                                <div className="text-[9px] text-emerald-500/60 font-bold tracking-wider mb-1">METRIC ALPHA</div>
                                                <div className="text-xl font-bold text-white font-display mb-1">
                                                    {currentDahboard % 2 === 0 ? "84.2%" : "92.5%"}
                                                </div>
                                                <div className="text-[8px] text-white/40">+12% vs last week</div>
                                            </motion.div>
                                            <motion.div
                                                key={`kpi2-${currentDahboard}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ delay: 0.1 }}
                                                className="p-3 rounded-xl border border-white/5 bg-white/[0.02]"
                                            >
                                                <div className="text-[9px] text-emerald-500/60 font-bold tracking-wider mb-1">VOLUME</div>
                                                <div className="text-xl font-bold text-white font-display mb-1">
                                                    {currentDahboard % 2 === 0 ? "14.2M" : "2.4M"}
                                                </div>
                                                <div className="text-[8px] text-white/40">Processed instances</div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] relative overflow-hidden z-10 flex items-end px-4 pb-0 pt-4">
                                        <div className="absolute top-3 left-4 text-[9px] text-white/30 uppercase tracking-widest font-bold">Trend Analysis</div>
                                        <div className="flex items-end justify-between w-full h-[80%] gap-1.5">
                                            <AnimatePresence mode="popLayout">
                                                {[...Array(12)].map((_, i) => {
                                                    const height = 30 + Math.random() * 60;
                                                    return (
                                                        <motion.div
                                                            key={`bar-${currentDahboard}-${i}`}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: `${height}%`, opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ delay: i * 0.03, duration: 0.4 }}
                                                            className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-400/50 rounded-t border-t border-emerald-400/30"
                                                        />
                                                    );
                                                })}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.03)_50%)] bg-[length:100%_4px] z-0" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveDashboardSection;
