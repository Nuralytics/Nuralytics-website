import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const ROICalculatorSection = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [monthlyCost, setMonthlyCost] = useState(50000);
    const [savings, setSavings] = useState(0);

    const formatShort = (value: number) => {
        if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
        return `${Math.round(value / 1000)}k`;
    };

    const breakdown = [
        { label: "Ops Automation", percent: 0.32, colors: "from-emerald-400 to-emerald-500" },
        { label: "Support Deflection", percent: 0.26, colors: "from-teal-400 to-emerald-400" },
        { label: "Analytics Efficiency", percent: 0.18, colors: "from-sky-400 to-teal-400" },
        { label: "AI Co-pilot Uplift", percent: 0.24, colors: "from-lime-400 to-emerald-500" }
    ];

    const adoptionTrend = [62, 68, 70, 74, 78, 82, 85];
    const monthlySavings = monthlyCost * 0.35;
    const paybackMonths = Math.max(1, Math.round(monthlyCost / monthlySavings));
    const adoptionScore = adoptionTrend[adoptionTrend.length - 1];
    const efficiencyLift = 35;

    // Simple ROI estimation logic
    useEffect(() => {
        // 35% estimated efficiency savings across the team
        const estimatedSavings = (monthlyCost * 0.35 * 12);
        setSavings(estimatedSavings);
    }, [teamSize, monthlyCost]);

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Brand mark */}
            <img
                src="/brand-assets/Firefly.png"
                alt="Firefly brand mark"
                className="absolute right-6 top-6 w-20 md:w-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] opacity-100 pointer-events-none z-20"
            />

            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="section-badge mb-6 inline-flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-emerald-400" />
                        ROI Calculator
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight font-display text-white mb-6">
                        Calculate Your <span className="text-gradient">AI Savings</span>
                    </h2>
                    <p className="text-white/50 text-lg mt-5 leading-relaxed">
                        See how much your organization could save annually by integrating our AI automation & analytics platforms.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)"
                        }}
                    >

                        {/* Left side: Controls */}
                        <div className="flex flex-col justify-center space-y-10 z-10">
                            {/* Slider 1 */}
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium text-white/80">
                                    <label>Team Size</label>
                                    <span className="text-emerald-400 font-mono text-base">{teamSize} Employees</span>
                                </div>
                                <div className="relative h-2 w-full rounded-full bg-white/10">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full"
                                        style={{ width: `${(teamSize / 500) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min="1"
                                        max="500"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Slider 2 */}
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium text-white/80">
                                    <label>Monthly Operational Costs</label>
                                    <span className="text-emerald-400 font-mono text-base">${monthlyCost.toLocaleString()}</span>
                                </div>
                                <div className="relative h-2 w-full rounded-full bg-white/10">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full"
                                        style={{ width: `${(monthlyCost / 500000) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min="5000"
                                        max="500000"
                                        step="5000"
                                        value={monthlyCost}
                                        onChange={(e) => setMonthlyCost(parseInt(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="button-gradient w-full md:w-auto arrow-hover text-base h-13 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                    Get Full Custom Report
                                    <ArrowRight className="ml-2 w-4 h-4 arrow-icon" />
                                </Button>
                            </div>
                        </div>

                        {/* Right side: Visualization */}
                        <div className="rounded-2xl p-8 flex flex-col items-center justify-center relative z-10"
                            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(125,211,252,0.08),transparent_40%)] pointer-events-none" />

                            <div className="w-full flex items-center justify-between mb-6 text-xs text-white/60">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Savings Outlook</span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-500/20 font-medium">
                                        <TrendingUp className="w-3 h-3" /> +{efficiencyLift}% lift
                                    </span>
                                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/5 text-white/70">Payback ~ {paybackMonths} mo</span>
                                </div>
                            </div>

                            <div className="relative w-56 h-56 flex items-center justify-center">
                                {/* Background ring */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle
                                        cx="112" cy="112" r="100"
                                        stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="transparent"
                                    />
                                    <motion.circle
                                        cx="112" cy="112" r="100"
                                        stroke="url(#emeraldGrad)" strokeWidth="10" fill="transparent"
                                        strokeDasharray={2 * Math.PI * 100}
                                        initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                                        animate={{ strokeDashoffset: 2 * Math.PI * 100 * 0.3 }} // 70% filled visually
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        strokeLinecap="round"
                                        style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.4))" }}
                                    />
                                    <defs>
                                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#34D399" />
                                            <stop offset="100%" stopColor="#059669" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <TrendingUp className="w-8 h-8 text-emerald-400 mb-2" />
                                    <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium mb-1">Annual Savings</span>
                                    <motion.div
                                        key={savings}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-4xl font-bold text-white font-display"
                                    >
                                        ${formatShort(savings)}
                                    </motion.div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 text-center text-[11px] text-white/60 mt-6 w-full">
                                <div className="rounded-xl bg-white/5 border border-white/5 py-3">
                                    <div className="text-white font-semibold text-sm">${formatShort(monthlySavings)}</div>
                                    <div>Monthly impact</div>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/5 py-3">
                                    <div className="text-white font-semibold text-sm">{adoptionScore}%</div>
                                    <div>Adoption score</div>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/5 py-3">
                                    <div className="text-white font-semibold text-sm">{efficiencyLift}%</div>
                                    <div>Workflow optimized</div>
                                </div>
                            </div>

                            <div className="w-full mt-6 space-y-3">
                                {breakdown.map((item) => {
                                    const amount = savings * item.percent;
                                    return (
                                        <div key={item.label} className="space-y-1">
                                            <div className="flex justify-between text-xs text-white/60">
                                                <span>{item.label}</span>
                                                <span className="text-white font-semibold">${formatShort(amount)}</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${item.colors}`}
                                                    style={{ width: `${item.percent * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="w-full mt-6 rounded-xl bg-black/20 border border-white/5 p-4">
                                <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                                    <span>Adoption velocity</span>
                                    <span className="text-white font-semibold">Last 6 mo ↑</span>
                                </div>
                                <div className="flex items-end gap-2 h-16">
                                    {adoptionTrend.map((value, idx) => {
                                        const height = (value / 100) * 100;
                                        return (
                                            <div key={idx} className="flex-1 rounded-md bg-white/8 overflow-hidden">
                                                <div
                                                    className="w-full bg-gradient-to-t from-emerald-500 to-teal-400"
                                                    style={{ height: `${height}%` }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="text-[11px] text-white/50 mt-2 flex justify-between">
                                    <span>Stable rollout across teams</span>
                                    <span className="text-emerald-300 font-semibold">{adoptionScore}%</span>
                                </div>
                            </div>

                            <div className="mt-5 text-center text-xs text-white/40 border-t border-white/5 pt-4 w-full leading-relaxed">
                                Predictions blend 35% average workflow optimization and adoption velocity across our top enterprise AI integrations.
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculatorSection;
