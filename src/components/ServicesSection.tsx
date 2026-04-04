import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Activity, Zap, Cpu, Network, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const servicesData = [
  {
    number: "01",
    title: "AI Consulting & Strategy",
    description: "Navigate the AI landscape with expert guidance. We build custom strategic roadmaps that identify high-ROI opportunities and ensure seamless integration with your existing ecosystems.",
    features: ["Strategic AI Roadmapping", "ROI-Focused Implementation", "Tech Stack Optimization", "Change Management"],
    image: "/brand-assets/Firefly.png",
    imageStyle: { filter: "saturate(1.2) brightness(0.9) hue-rotate(0deg)" },
    align: "left",
    badgeText: "Strategic Sync",
    badgeIcon: Activity
  },
  {
    number: "02",
    title: "Full-Stack Web & App Engineering",
    description: "Premium digital experiences engineered for performance. We build blazing-fast, scalable applications using modern stacks like React, Next.js, and TypeScript.",
    features: ["Custom React/Next.js Apps", "Scalable Serverless Architecture", "Mobile-First Design", "SEO & Performance Optimization"],
    image: "/brand-assets/Firefly.png",
    imageStyle: { filter: "saturate(1.1) brightness(0.95) hue-rotate(90deg)" },
    align: "right",
    badgeText: "High Performance",
    badgeIcon: Zap
  },
  {
    number: "03",
    title: "Neural AI Automation",
    description: "Eliminate bottleneck processes with agentic workflows. Our neural automation systems operate across platforms to handle complex, multi-step tasks with zero human intervention.",
    features: ["Agentic Process Automation", "Cross-Platform Orchestration", "Intelligent Document Processing", "80% Reduction in Manual Tasks"],
    image: "/brand-assets/Firefly.png",
    imageStyle: { filter: "saturate(1) brightness(0.85) hue-rotate(180deg)" },
    align: "left",
    badgeText: "Neural Active",
    badgeIcon: Network
  },
  {
    number: "04",
    title: "Proactive Voice AI Agents",
    description: "Revolutionize communication with multimodal voice AI. Our agents provide natural, low-latency interactions for customer support, sales, and complex scheduling.",
    features: ["Natural Language Processing", "Ultra-Low Latency Voice", "Multilingual Support", "CRM & Calendar Integration"],
    image: "/brand-assets/Firefly.png",
    imageStyle: { filter: "saturate(1.3) brightness(0.9) hue-rotate(270deg)" },
    align: "right",
    badgeText: "Voice Online",
    badgeIcon: Cpu
  },
  {
    number: "05",
    title: "Data & AI Intelligence",
    description: "Turn raw data into decisive action. We engineer real-time data pipelines and predictive models that provide deep insights into your business's future.",
    features: ["Real-Time Intelligence", "Predictive Trend Analysis", "Data Pipeline Engineering", "Automated Reporting"],
    image: "/brand-assets/Firefly.png",
    imageStyle: { filter: "saturate(1.2) brightness(0.95) hue-rotate(330deg)" },
    align: "left",
    badgeText: "Data Secure",
    badgeIcon: ShieldCheck
  },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 50 - 25, 0],
          opacity: [0, 0.4, 0],
          scale: [0, Math.random() + 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
        className="absolute w-1 h-1 rounded-full bg-emerald-400"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="services" className="bg-[#050907] relative py-32 border-y border-white/5 overflow-hidden">
      {/* Dynamic Background Trace */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-full max-w-7xl hidden lg:block opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 1000" className="w-full h-full preserve-3d" preserveAspectRatio="none">
           <motion.path 
              d="M50 0 L50 200 C50 250 80 250 80 300 C80 350 50 350 50 400 L50 600 C50 650 20 650 20 700 C20 750 50 750 50 800 L50 1000" 
              stroke="url(#emerald-gradient)" 
              strokeWidth="0.5" 
              fill="none" 
              style={{ pathLength }}
           />
           <defs>
             <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
               <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
               <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <FloatingParticles />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="container px-4 pt-12 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 uppercase tracking-widest backdrop-blur-sm">
            <Zap className="w-4 h-4" /> Next-Gen Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display leading-[1.05] text-white">
            Intelligent Solutions,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Real Results</span>
          </h2>
          <p className="text-white/50 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Five core neural pillars, engineered concurrently to eliminate bottlenecks, cut costs, and unleash unprecedented scaling potential.
          </p>
        </motion.div>
      </div>

      <div className="container px-4 space-y-40 md:space-y-64 relative z-10 mt-16 mt-0">
        {servicesData.map((service, idx) => {
          const isTextLeft = service.align === "left";
          const isEven = idx % 2 === 0;

          return (
            <div key={service.number} className="relative w-full group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                
                {/* ---------------- TEXT CONTENT ---------------- */}
                <motion.div
                  initial={{ opacity: 0, x: isTextLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`${isTextLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative mb-8 inline-block">
                    <div className="text-emerald-500 font-display text-8xl md:text-[140px] font-bold opacity-10 leading-none -ml-4 tracking-tighter">
                      {service.number}
                    </div>
                    <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-emerald-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight group-hover:text-emerald-300 transition-colors duration-500 shadow-emerald-500/20 drop-shadow-md">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(16,185,129,0.05)] transition-all duration-300 cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center border border-emerald-500/20 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-white/80 text-sm font-medium pt-1">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button size="lg" className="button-gradient rounded-full px-10 h-14 text-base shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-500 overflow-hidden relative group/btn">
                    <span className="relative z-10 flex items-center">
                        Initiate Sequence <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
                  </Button>
                </motion.div>

                {/* ---------------- VISUAL CONTENT ---------------- */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`${isTextLeft ? "lg:order-2" : "lg:order-1"} relative perspective-[1200px] h-full min-h-[400px] flex items-center justify-center`}
                >
                  <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center mt-10 lg:mt-0">
                    
                    {/* Core Core Glow */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-emerald-500/30 rounded-full blur-[100px] pointer-events-none"
                    />

                    {/* 3D Atomic Orbital Rings */}
                    <div className="absolute inset-[-60px] pointer-events-none flex items-center justify-center [transform-style:preserve-3d]">
                      {/* Orbital 1 */}
                      <motion.div 
                          style={{ rotateX: 65, rotateY: isEven ? 25 : -25 }}
                          animate={{ rotateZ: 360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="absolute w-full h-full border-[1px] border-solid border-emerald-500/30 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      />
                      {/* Orbital 2 */}
                      <motion.div 
                          style={{ rotateX: 65, rotateY: isEven ? -45 : 45 }}
                          animate={{ rotateZ: -360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                          className="absolute w-[110%] h-[110%] border-[2px] border-dashed border-teal-500/20 rounded-full"
                      />
                      {/* Orbital 3 */}
                      <motion.div 
                          style={{ rotateX: 75, rotateY: isEven ? 10 : -10 }}
                          animate={{ rotateZ: 360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                          className="absolute w-[120%] h-[120%] border-[1px] border-dotted border-emerald-300/40 rounded-full"
                      />
                    </div>

                    {/* Highly Creative Liquid Morphing Orb */}
                    <motion.div
                      animate={{ 
                        borderRadius: [
                          "40% 60% 70% 30% / 40% 50% 60% 50%", 
                          "60% 40% 30% 70% / 60% 30% 70% 40%", 
                          "30% 70% 50% 50% / 50% 40% 60% 50%",
                          "40% 60% 70% 30% / 40% 50% 60% 50%"
                        ],
                        rotateZ: isEven ? [0, 90, 180, 270, 360] : [360, 270, 180, 90, 0]
                      }}
                      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] z-10 group-hover:scale-110 transition-transform duration-1000 overflow-hidden border border-emerald-500/40 shadow-[inset_0_0_60px_rgba(16,185,129,0.4),0_0_80px_rgba(16,185,129,0.2)] bg-black"
                    >
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        style={service.imageStyle}
                        className="w-[150%] h-[150%] max-w-none -ml-[25%] -mt-[25%] object-cover opacity-90 mix-blend-screen"
                      />
                      {/* Internal glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-[#050907]/60 mix-blend-overlay" />
                    </motion.div>

                    {/* Dynamic Floating HUD Elements */}
                    <motion.div
                      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      className="absolute -bottom-6 sm:-bottom-10 right-0 sm:-right-10 z-20 glass px-6 py-4 rounded-2xl border border-emerald-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-black/60"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-900/40 flex items-center justify-center border border-emerald-500/30 shadow-[inset_0_0_10px_rgba(16,185,129,0.5)]">
                          <service.badgeIcon className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        </div>
                        <div>
                          <div className="text-[10px] text-emerald-400/70 font-mono uppercase tracking-widest mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Status
                          </div>
                          <div className="text-sm font-bold text-white tracking-wide">{service.badgeText}</div>
                        </div>
                      </div>
                    </motion.div>

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
