import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const servicesData = [
  {
    number: "01",
    title: "AI Automation & Workflow Intelligence",
    description: "Eliminate repetitive manual tasks with custom AI workflows. From email triage to data pipelines, we automate the work that drains your team.",
    features: ["Custom GPT/LLM integrations", "80% reduction in manual tasks", "Automated reporting & alerts", "Multi-platform orchestration"],
    imageType: "workflow",
    align: "left",
  },
  {
    number: "02",
    title: "Full-Stack Web Engineering",
    description: "Pixel-perfect, blazing-fast web applications built on modern stacks — React, Next.js, and TypeScript.",
    features: ["React/Next.js applications", "Sub-2s load times", "Mobile-first responsive design", "SEO-optimized architecture"],
    imageType: "code",
    align: "right",
  },
  {
    number: "03",
    title: "Machine Learning & Data Analytics",
    description: "Turn raw data into revenue with predictive models, live dashboards, and intelligent business intelligence systems.",
    features: ["Real-time analytics dashboards", "Predictive ML models", "Data pipeline engineering", "Custom BI reporting"],
    imageType: "dashboard",
    align: "left",
  },
  {
    number: "04",
    title: "Business Operations & Systems",
    description: "End-to-end ERP, CRM, and operations systems tailored to your exact workflows — ready to scale as you grow.",
    features: ["Custom CRM/ERP builds", "API integrations", "Process automation", "Scalable architecture"],
    imageType: "app",
    align: "right",
  },
];

const MockupGraphic = ({ type }: { type: string }) => {
  if (type === "workflow") {
    return (
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass p-6 border-white/10 flex items-center justify-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Nodes and Lines fake layout */}
        <div className="relative w-full h-full flex items-center justify-between px-8">
          <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center z-10">
            <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_#34D399]" />
          </div>
          <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/10 flex-1 mx-2" />
          <div className="w-16 h-16 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center z-10 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="w-2.5 h-2.5 bg-white/20 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-white/20 rounded-sm" />
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-emerald-500/10 via-emerald-500/40 to-emerald-500/0 flex-1 mx-2 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-emerald-500/40" />
          </div>
          <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center z-10 box-content outline outline-offset-4 outline-emerald-500/20">
            <div className="w-3 h-3 bg-emerald-400 rounded-sm shadow-[0_0_15px_#34D399]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass flex flex-col border-white/10" style={{ background: "#0d0d14" }}>
        {/* Editor Tab */}
        <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
          <div className="flex gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-white/40 bg-white/5 py-1 px-3 rounded-md">app.tsx</div>
        </div>

        {/* Editor body simulating code */}
        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
          <div className="text-emerald-400/80">import <span className="text-white/80">{'{ motion, AnimatePresence }'}</span> from <span className="text-green-300/80">'framer-motion'</span>;</div>
          <div className="text-emerald-400/80">import <span className="text-purple-400/80">React</span> from <span className="text-green-300/80">'react'</span>;</div>
          <br />
          <div><span className="text-blue-400/80">const</span> <span className="text-yellow-200/90">Dashboard</span> <span className="text-blue-400/80">=</span> () <span className="text-blue-400/80">{'=>'}</span> {'{'}</div>
          <div className="pl-4"><span className="text-blue-400/80">return</span> (</div>
          <div className="pl-8 text-white/60">{'<div className="min-h-screen bg-background text-white">'}</div>
          <div className="pl-12">{'<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>'}</div>
          <div className="pl-16 text-emerald-300/90">{'<AnalyticsMetrics data={realtimeFeed} />'}</div>
          <div className="pl-16 text-emerald-300/90">{'<PredictiveChart dataset={mlPredictions} />'}</div>
          <div className="pl-12">{'</motion.div>'}</div>
          <div className="pl-8 text-white/60">{'</div>'}</div>
          <div className="pl-4">);</div>
          <div>{'};'}</div>
          <br />
          <div className="text-purple-400/80">export default <span className="text-yellow-200/90">Dashboard</span>;</div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ background: "linear-gradient(145deg, #111 0%, #0a0a0a 100%)" }}>
        {/* Glow */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-emerald-500/10 rounded-full blur-[80px]" />

        <div className="flex h-full p-4 gap-4 relative">
          {/* Sidebar */}
          <div className="w-20 rounded-xl bg-white/[0.02] border border-white/5 hidden sm:flex flex-col items-center py-4 gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 mb-4" />
            <div className="w-6 h-6 rounded bg-white/10" />
            <div className="w-6 h-6 rounded bg-emerald-500/30" />
            <div className="w-6 h-6 rounded bg-white/10" />
            <div className="w-6 h-6 rounded bg-white/10" />
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Topbar metrics */}
            <div className="flex gap-4 h-20">
              <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <div className="w-16 h-2 bg-white/10 rounded-full mb-3" />
                <div className="w-24 h-5 bg-white/20 rounded-full mb-2" />
                <div className="w-10 h-2 bg-emerald-500/70 rounded-full" />
              </div>
              <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                <div className="w-16 h-2 bg-emerald-500/40 rounded-full mb-3" />
                <div className="w-24 h-5 bg-emerald-400 rounded-full mb-2" />
                <div className="w-10 h-2 bg-emerald-500/90 rounded-full" />
              </div>
            </div>

            {/* Huge chart */}
            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex items-end gap-2 overflow-hidden relative">
              <div className="absolute top-4 left-4 w-32 h-3 bg-white/10 rounded-full" />
              {[30, 45, 40, 60, 55, 80, 75, 90, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/60 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // App Dashboard
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass p-5 flex flex-col gap-4 border-white/10">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-emerald-500/5 blur-2xl pointer-events-none" />

      {/* Top Banner */}
      <div className="h-16 w-full rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 flex items-center px-4 relative">
        <div className="w-12 h-12 bg-white/10 rounded-lg mr-4" />
        <div>
          <div className="w-32 h-3 bg-white/20 rounded-full mb-2" />
          <div className="w-24 h-2 bg-emerald-500/50 rounded-full" />
        </div>
        <div className="absolute right-4 w-20 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
      </div>

      <div className="flex-1 flex gap-4">
        {/* Table/List Area */}
        <div className="flex-[2] rounded-xl bg-white/[0.02] border border-white/5 p-4 space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-full rounded bg-white/[0.03] flex items-center px-3 gap-3">
              <div className="w-4 h-4 rounded-sm bg-white/10" />
              <div className="w-20 h-2 rounded-full bg-white/20" />
              <div className="w-16 h-2 rounded-full bg-white/10 ml-auto" />
              <div className="w-16 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
            </div>
          ))}
        </div>

        {/* Action Sidebar */}
        <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/10 p-4 flex flex-col gap-3">
          <div className="w-full h-3 border-b border-white/10 pb-2 mb-2">
            <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          </div>
          <div className="w-full h-10 rounded-lg border border-emerald-500/40 border-dashed flex items-center justify-center bg-emerald-500/5">
            <div className="w-4 h-4 bg-emerald-500/60 rounded-full" />
          </div>
          <div className="w-full h-8 rounded-lg bg-emerald-500 border border-emerald-400 mt-auto" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#0a0a0a] relative pb-28">
      {/* Header */}
      <div className="container px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-badge mb-6">What We Do</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 tracking-tight font-display leading-[1.05] text-white">
            Intelligent Solutions,{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Four core capabilities, each engineered to save you time, cut costs, and unlock exponential growth.
          </p>
        </motion.div>
      </div>

      {/* Alternating Split Layout Blocks */}
      <div className="container px-4 space-y-24 md:space-y-32 relative">
        {/* Central connecting line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block -translate-x-1/2" />

        {servicesData.map((service, index) => {
          const isTextLeft = service.align === "left";

          return (
            <div key={service.number} className="relative z-10 w-full group">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>

                {/* ── TEXT BLOCK ── */}
                <motion.div
                  initial={{ opacity: 0, x: isTextLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`${isTextLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="text-primary/30 font-display text-5xl md:text-7xl font-bold mb-4">
                    {service.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 font-display leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" className="button-gradient arrow-hover rounded-full px-8 h-12 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Button>
                </motion.div>

                {/* ── IMAGE BLOCK ── */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`${isTextLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    {/* Glow behind mockup */}
                    <div className="absolute -inset-4 bg-emerald-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Mockup component */}
                    <MockupGraphic type={service.imageType} />
                  </div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
