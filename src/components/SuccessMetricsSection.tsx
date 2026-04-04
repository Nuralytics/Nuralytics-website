import { motion } from "framer-motion";
import { Factory, Gauge, Shield, HeartHandshake, Rocket, TrendingUp } from "lucide-react";

const metrics = [
    {
        title: "E-Commerce Platform",
        highlight: "300%",
        unit: "Average ROI",
        desc: "AI-driven supply chain automation and real-time inventory intelligence drove 3x returns in year one.",
        icon: Factory,
        colSpan: "md:col-span-2",
        rowSpan: "",
        large: true,
    },
    {
        title: "Healthcare Workflow",
        highlight: "80%",
        unit: "Time Saved",
        desc: "Automated patient record processing and intelligent scheduling cut admin overhead dramatically.",
        icon: Shield,
        colSpan: "",
        rowSpan: "",
        large: false,
    },
    {
        title: "Data Pipeline",
        highlight: "2.4M",
        unit: "Data Points / Day",
        desc: "Real-time pipeline processing millions of records with zero downtime.",
        icon: Gauge,
        colSpan: "",
        rowSpan: "",
        large: false,
    },
    {
        title: "SaaS Integration",
        highlight: "$1.2M",
        unit: "Revenue Generated",
        desc: "Conversational AI agents boosted conversion rates by 40%, directly attributing $1.2M in new revenue.",
        icon: HeartHandshake,
        colSpan: "md:col-span-2",
        rowSpan: "",
        large: true,
    },
    {
        title: "Record Launch Speed",
        highlight: "48h",
        unit: "To Deployment",
        desc: "From kick-off to live production in 48 hours.",
        icon: Rocket,
        colSpan: "",
        rowSpan: "",
        large: false,
    },
];

const SuccessMetricsSection = () => {
    return (
        <section className="py-28 relative overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
                    style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)" }} />
            </div>

            <div className="container px-4 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="section-badge mb-6">Client Results</span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight font-display">
                        Numbers That{" "}
                        <span className="text-gradient">Speak</span>
                        {" "}for Themselves
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                        Real business results delivered through tailored AI engineering and automation solutions.
                    </p>
                </motion.div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {metrics.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className={`relative group rounded-3xl p-8 overflow-hidden transition-all duration-500 cursor-default bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 ${item.colSpan}`}
                            >
                                {/* Gradient glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl bg-emerald-50/50" />

                                {/* Emerald gradient border top line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Header row */}
                                <div className="flex items-start justify-between mb-10 relative">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 border border-emerald-100">
                                        <Icon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                        {item.title}
                                    </span>
                                </div>

                                {/* Big metric number */}
                                <div className="relative mb-3">
                                    <div
                                        className={`font-bold font-mono leading-none ${item.large ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"} text-gray-900 group-hover:text-emerald-600 transition-colors duration-500`}
                                    >
                                        {item.highlight}
                                    </div>
                                    <div className="text-sm font-medium mt-1.5 text-emerald-600">
                                        {item.unit}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SuccessMetricsSection;
