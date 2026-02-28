import { motion } from "framer-motion";
import { Activity, BrainCircuit, Bell, Database, ArrowRight } from "lucide-react";

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
        desc: "Set intelligent thresholds — receive alerts by Slack, email, or SMS the moment KPIs shift.",
    },
    {
        icon: Database,
        title: "Multi-Source Data Pipeline",
        desc: "Unify data from any API, CRM, database, or warehouse into a single, coherent data layer.",
    },
];

const LiveDashboardSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            {/* Background subtle glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                    style={{ background: "radial-gradient(ellipse at right, rgba(16,185,129,0.06) 0%, transparent 70%)" }} />
            </div>

            <div className="container px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Text */}
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

                    {/* Right — Dashboard mockup */}
                    <div className="relative">
                        {/* Glow backing */}
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
                            {/* Window bar */}
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
                                        <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                                            app.nuralytics.io/live
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard content */}
                            <div className="p-5 space-y-4">
                                {/* KPI row */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Efficiency", value: "73%", change: "+14%", highlight: true },
                                        { label: "Revenue", value: "$2.4M", change: "+28%" },
                                        { label: "Users", value: "480", change: "+9%" },
                                    ].map((kpi) => (
                                        <div key={kpi.label} className="rounded-xl p-3"
                                            style={{
                                                background: kpi.highlight ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.03)",
                                                border: kpi.highlight ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(255,255,255,0.06)"
                                            }}>
                                            <div className="text-[10px] mb-1" style={{ color: kpi.highlight ? "rgba(52,211,153,0.8)" : "rgba(255,255,255,0.35)" }}>
                                                {kpi.label}
                                            </div>
                                            <div className="text-lg font-bold font-mono" style={{ color: "rgba(255,255,255,0.9)" }}>
                                                {kpi.value}
                                            </div>
                                            <div className="text-[10px] font-medium text-emerald-400">{kpi.change} ↑</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Line chart */}
                                <div className="rounded-xl p-4 relative"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <div className="text-[10px] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        Revenue Trend — Live Feed
                                    </div>
                                    <div className="h-24 relative">
                                        <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                                            {/* Area fill */}
                                            <motion.path
                                                d="M0,70 Q30,60 60,65 T120,45 T180,30 T240,20 T300,10 L300,80 L0,80 Z"
                                                fill="url(#areaGrad)"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 1 }}
                                            />
                                            {/* Line */}
                                            <motion.path
                                                d="M0,70 Q30,60 60,65 T120,45 T180,30 T240,20 T300,10"
                                                fill="none"
                                                stroke="#10B981"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                            />
                                            {/* Dotted secondary line */}
                                            <path
                                                d="M0,75 Q40,68 80,72 T160,58 T240,52 T300,40"
                                                fill="none"
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="1.5"
                                                strokeDasharray="4 4"
                                                strokeLinecap="round"
                                            />
                                            <defs>
                                                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
                                                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        {/* Live pulsing dot */}
                                        <motion.div
                                            className="absolute w-2.5 h-2.5 rounded-full right-[2%] top-[8%]"
                                            style={{ background: "#34D399", boxShadow: "0 0 10px #10B981" }}
                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </div>
                                </div>

                                {/* Bar chart */}
                                <div className="rounded-xl p-4"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <div className="text-[10px] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        Weekly Performance Breakdown
                                    </div>
                                    <div className="flex items-end gap-2 h-12">
                                        {[55, 70, 60, 85, 75, 90, 80].map((h, i) => (
                                            <div key={i} className="flex-1 rounded-sm"
                                                style={{
                                                    height: `${h}%`,
                                                    background: i === 5 || i === 3
                                                        ? "linear-gradient(180deg, #34D399, #059669)"
                                                        : `rgba(16,185,129,${0.12 + i * 0.04})`,
                                                    boxShadow: (i === 5 || i === 3) ? "0 0 8px rgba(52,211,153,0.3)" : "none"
                                                }} />
                                        ))}
                                    </div>
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
