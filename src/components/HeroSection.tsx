import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, BarChart3, Bot } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)" }} />
        {/* Top-left accent */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)" }} />
        {/* Bottom-right accent */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)" }} />

        {/* Particle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }} />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400"
        />
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary"
        />
      </div>

      <div className="container px-4 pt-36 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm"
            style={{ boxShadow: "0 0 30px rgba(16,185,129,0.08)" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              5.0 — Trusted by 200+ businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05] font-display"
          >
            Build Systems That
            <br className="hidden sm:block" />
            {" "}Save Time &{" "}
            <span className="text-gradient" style={{ textShadow: "0 0 60px rgba(16,185,129,0.2)" }}>Scale</span>
            <br className="hidden sm:block" />
            {" "}Your Business
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We build custom web apps, AI automation, and data systems that eliminate
            manual work — so you can focus on growing revenue, not managing chaos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              size="lg"
              className="button-gradient text-lg px-8 h-14 arrow-hover font-medium"
              onClick={() => scrollTo("contact")}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 arrow-icon" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="button-outline-green text-lg px-8 h-14 font-medium"
              onClick={() => scrollTo("portfolio")}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* — Mini stat strip — */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-20"
          >
            {[
              { icon: Bot, value: "80%", label: "Tasks Automated" },
              { icon: BarChart3, value: "300%", label: "Average ROI" },
              { icon: Zap, value: "48h", label: "Avg. Launch Time" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground font-display">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* — Dashboard Preview Card — */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Glow behind the card */}
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.1))", transform: "scale(0.95) translateY(10px)" }} />

            {/* Dashboard card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{
                background: "linear-gradient(145deg, rgba(17,17,17,0.95) 0%, rgba(10,10,10,0.98) 100%)",
                boxShadow: "0 30px 80px -20px rgba(16,185,129,0.2), 0 0 0 1px rgba(255,255,255,0.05)"
              }}>
              {/* Dashboard titlebar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-full mx-auto max-w-xs flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-[10px] text-white/30 font-mono">app.nuralytics.io/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {/* KPI Cards */}
                {[
                  { label: "Revenue", value: "$2.4M", change: "+28%", color: "rgba(16,185,129,1)" },
                  { label: "Efficiency", value: "73%", change: "+14%", color: "rgba(52,211,153,1)" },
                  { label: "Active Users", value: "480", change: "+9%", color: "rgba(5,150,105,1)" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-xs text-white/40 mb-1">{kpi.label}</div>
                    <div className="text-xl font-bold text-white mb-1">{kpi.value}</div>
                    <div className="text-xs font-medium" style={{ color: kpi.color }}>{kpi.change} ↑</div>
                  </div>
                ))}

                {/* Chart area */}
                <div className="col-span-2 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-xs text-white/40 mb-3">Revenue Trend — Last 7 Days</div>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 55, 48, 65, 58, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm transition-all"
                        style={{
                          height: `${h}%`,
                          background: i === 6
                            ? "linear-gradient(180deg, #34D399, #059669)"
                            : `rgba(16,185,129,${0.15 + i * 0.05})`,
                          boxShadow: i === 6 ? "0 0 10px rgba(52,211,153,0.4)" : "none"
                        }} />
                    ))}
                  </div>
                </div>

                {/* Donut / mini chart */}
                <div className="rounded-xl p-4 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#emerald-grad)" strokeWidth="3"
                        strokeDasharray="73 27" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#34D399" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">73%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
