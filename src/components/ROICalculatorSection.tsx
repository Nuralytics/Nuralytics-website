import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const ROICalculatorSection = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [monthlyCost, setMonthlyCost] = useState(50000);
    const [savings, setSavings] = useState(0);

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
                                        ${savings >= 1000000
                                            ? (savings / 1000000).toFixed(1) + 'M'
                                            : (savings / 1000).toFixed(0) + 'k'}
                                    </motion.div>
                                </div>
                            </div>

                            <div className="mt-8 text-center text-xs text-white/40 border-t border-white/5 pt-4 w-full leading-relaxed">
                                Predictions based on 35% average workflow optimization across our top enterprise AI integrations.
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculatorSection;
