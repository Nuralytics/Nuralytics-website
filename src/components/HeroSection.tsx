import { motion } from "framer-motion";
import { ArrowRight, Mic, PanelTop, Bot, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const servicePillars = [
  "Dashboard Analysis",
  "Voice Agents",
  "Agentic Systems",
  "AI Web Design",
];

const orbitMetrics = [
  { label: "Lead Response", value: "-52%" },
  { label: "Conversion Rate", value: "+38%" },
  { label: "Ops Cost", value: "-31%" },
  { label: "Team Velocity", value: "+2.4x" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#070a08]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_28%),radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.14),transparent_20%)]" />

      {/* Right beam */}
      <div className="absolute top-0 right-[18%] h-[460px] w-[140px] rounded-full bg-emerald-300/18 blur-[34px] pointer-events-none" />
      <div className="absolute inset-y-0 right-[16%] w-[200px] bg-[radial-gradient(circle,rgba(52,211,153,0.45)_0%,rgba(16,185,129,0.12)_45%,transparent_75%)] blur-[42px] pointer-events-none" />


      <div className="container px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center min-h-[78vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/18 bg-emerald-500/[0.06] px-5 py-3 text-sm text-white/72 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Intelligent Solutions, Real Results
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.72 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.04em] text-white font-display"
            >
              Intelligent Solutions.
              <br />
              <span className="italic font-serif text-white/92">Real Results.</span>
              <br />
              <span className="text-emerald-200">Built with Voice + AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 max-w-2xl text-lg md:text-[1.35rem] leading-relaxed text-white/60"
            >
              We design and ship data analysis systems, voice agents, agentic workflows, and AI-ready websites that reduce manual effort and turn operations into measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {servicePillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-400/25 bg-emerald-500/[0.07] px-4 py-2 text-xs sm:text-sm text-white/80"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.55 }}
              className="mt-8 grid grid-cols-2 gap-3 max-w-md"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Average ROI Lift</p>
                <p className="mt-1 text-2xl font-semibold text-emerald-300">2.8x</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Automation Hours Saved</p>
                <p className="mt-1 text-2xl font-semibold text-emerald-300">120+</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
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
                className="text-lg px-8 h-14 font-medium rounded-full border-2 border-white/45 text-white bg-white/5 hover:bg-white/12 hover:border-white/70"
                onClick={() => scrollTo("portfolio")}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[620px] rounded-[32px] border border-white/10 bg-[#07140f]/90 p-5 sm:p-7 shadow-[0_40px_90px_-60px_rgba(16,185,129,0.75)]">
              <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-emerald-500/30 blur-3xl" />
              <div className="absolute -bottom-14 -left-6 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Mic className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm tracking-wide">Voice Agent Console</span>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
                  Live
                </span>
              </div>

              <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="relative mx-auto h-72 w-full max-w-md">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                  >
                    {orbitMetrics.map((metric, idx) => {
                      const angle = (idx / orbitMetrics.length) * Math.PI * 2;
                      const radiusX = 140;
                      const radiusY = 96;
                      const x = Math.cos(angle) * radiusX;
                      const y = Math.sin(angle) * radiusY;

                      return (
                        <div
                          key={metric.label}
                          className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-emerald-400/25 bg-emerald-500/[0.08] px-3 py-2 text-center shadow-[0_0_24px_rgba(16,185,129,0.18)]"
                          style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                        >
                          <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">{metric.label}</p>
                          <p className="mt-1 text-lg font-semibold text-emerald-200">{metric.value}</p>
                        </div>
                      );
                    })}
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0a1612] p-5 text-center">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">ROI Engine</p>
                    <p className="mt-2 text-3xl font-semibold text-emerald-300">2.8x</p>
                    <p className="mt-1 text-sm text-white/60">Average growth impact</p>
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-[230px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20" />
                  <div className="absolute left-1/2 top-1/2 h-[180px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                </div>
              </div>

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-white/75">
                    <Bot className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm">Agentic Workflow</span>
                  </div>
                  <p className="mt-2 text-sm text-white/55">Lead intake, qualification, and handoff orchestrated end-to-end.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-white/75">
                    <PanelTop className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm">Dashboard Analysis</span>
                  </div>
                  <p className="mt-2 text-sm text-white/55">Real-time KPI visibility with actionable ROI tracking.</p>
                </div>
              </div>

              <div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border border-emerald-400/25 bg-emerald-500/[0.08] px-4 py-3">
                <div className="text-sm text-white/75">Pipeline conversion trend</div>
                <div className="flex items-center gap-1.5 text-emerald-200">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+38% in 60 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
