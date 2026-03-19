import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Activity } from "lucide-react";
import { Button } from "./ui/button";

const servicesData = [
  {
    number: "01",
    title: "AI Consulting & Strategy",
    description: "Navigate the AI landscape with expert guidance. We build custom strategic roadmaps that identify high-ROI opportunities and ensure seamless integration with your existing ecosystems.",
    features: ["Strategic AI Roadmapping", "ROI-Focused Implementation", "Tech Stack Optimization", "Change Management"],
    image: "/brand-assets/dashboard-proof.png",
    imageStyle: { filter: "saturate(1.02) brightness(0.92)" },
    align: "left",
  },
  {
    number: "02",
    title: "Full-Stack Web & App Engineering",
    description: "Premium digital experiences engineered for performance. We build blazing-fast, scalable applications using modern stacks like React, Next.js, and TypeScript.",
    features: ["Custom React/Next.js Apps", "Scalable Serverless Architecture", "Mobile-First Design", "SEO & Performance Optimization"],
    image: "/brand-assets/frontend-dashboard.png",
    imageStyle: { filter: "hue-rotate(105deg) saturate(0.8) brightness(0.82)" },
    align: "right",
  },
  {
    number: "03",
    title: "Neural AI Automation",
    description: "Eliminate bottleneck processes with agentic workflows. Our neural automation systems operate across platforms to handle complex, multi-step tasks with zero human intervention.",
    features: ["Agentic Process Automation", "Cross-Platform Orchestration", "Intelligent Document Processing", "80% Reduction in Manual Tasks"],
    image: "/brand-assets/dashboard-proof.png",
    imageStyle: { filter: "saturate(1.02) brightness(0.92)" },
    align: "left",
  },
  {
    number: "04",
    title: "Proactive Voice AI Agents",
    description: "Revolutionize communication with multimodal voice AI. Our agents provide natural, low-latency interactions for customer support, sales, and complex scheduling.",
    features: ["Natural Language Processing", "Ultra-Low Latency Voice", "Multilingual Support", "CRM & Calendar Integration"],
    image: "/brand-assets/dashboard-alt.png",
    imageStyle: { filter: "hue-rotate(115deg) saturate(0.72) brightness(0.8)" },
    align: "right",
  },
  {
    number: "05",
    title: "Data & AI Analytics",
    description: "Turn raw data into decisive action. We engineer real-time data pipelines and predictive models that provide deep insights into your business's future.",
    features: ["Real-Time Insights Dashboards", "Predictive Trend Analysis", "Data Pipeline Engineering", "Automated KPI Reporting"],
    image: "/brand-assets/dashboard-proof.png",
    imageStyle: { filter: "saturate(1.02) brightness(0.92)" },
    align: "left",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#0a0a0a] relative pb-28 border-y border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="container px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-badge mb-6">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 tracking-tight font-display leading-[1.05] text-white">
            Intelligent Solutions,{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Five core business pillars, each engineered to save you time, cut costs, and unlock exponential growth.
          </p>
        </motion.div>
      </div>

      <div className="container px-4 space-y-24 md:space-y-40 relative">
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent hidden lg:block -translate-x-1/2">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-emerald-500/10 blur-sm"
          />
        </div>

        {servicesData.map((service) => {
          const isTextLeft = service.align === "left";

          return (
            <div key={service.number} className="relative z-10 w-full group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`${isTextLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary font-display text-5xl md:text-7xl font-bold opacity-20">
                      {service.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight group-hover:text-emerald-400 transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shrink-0 mt-0.5 group-hover:bg-emerald-500/40 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-white/80 text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button size="lg" className="button-gradient arrow-hover rounded-full px-10 h-14 text-base shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    Explore Strategy <ArrowRight className="w-5 h-5 ml-2 arrow-icon" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`${isTextLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative">
                    <motion.div
                      animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -inset-10 bg-emerald-500/10 rounded-[60px] blur-[100px] pointer-events-none"
                    />

                    <div className="relative group-hover:-translate-y-4 group-hover:translate-x-2 transition-all duration-700 ease-[0.16,1,0.3,1]">
                      <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#0d0d0d]">
                        <img
                          src={service.image}
                          alt={service.title}
                          style={service.imageStyle}
                          className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/18 via-transparent to-emerald-300/8 opacity-70" />
                      </div>

                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-xl hidden sm:block"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <Activity className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <div className="text-[10px] text-white/40 uppercase tracking-tighter">Status</div>
                            <div className="text-xs font-bold text-white tracking-wide">AI Optimized</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
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
