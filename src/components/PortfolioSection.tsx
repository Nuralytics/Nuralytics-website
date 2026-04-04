import { motion } from "framer-motion";
import { ArrowUpRight, Code, Database, Globe, Layers, Cpu, Zap } from "lucide-react";

const projects = [
  {
    title: "Autonomous Support AI",
    description: "Enterprise-grade LLM conversational agent that autonomously resolves 60% of tier-1 support queries, operating 24/7 with human-like reasoning capabilities.",
    tags: ["Generative AI", "Next.js", "OpenAI"],
    gradient: "from-emerald-900/80 via-emerald-800/40 to-[#070e0a]",
    accent: "#10B981",
    span: "lg:col-span-2 lg:row-span-2 md:col-span-2",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    number: "01",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Predictive Demand Engine",
    description: "Dynamic pricing and demand forecasting suite utilizing advanced reinforcement learning algorithms.",
    tags: ["Reinforcement Learning", "E-Commerce"],
    gradient: "from-teal-900/60 via-emerald-900/30 to-[#070e0a]",
    accent: "#34D399",
    span: "lg:col-span-2 lg:row-span-1 md:col-span-1",
    icon: <Database className="w-5 h-5 text-teal-400" />,
    number: "02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Clinical NLP Extraction",
    description: "HIPAA-compliant natural language processing engine designed to synthesize complex unstructured medical records.",
    tags: ["Healthcare", "Python"],
    gradient: "from-emerald-800/50 via-teal-900/30 to-[#070e0a]",
    accent: "#059669",
    span: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    icon: <Layers className="w-5 h-5 text-emerald-500" />,
    number: "03",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "IoT Fleet Intelligence",
    description: "Telematics tracking system utilizing predictive maintenance models to optimize routes and reduce downtime.",
    tags: ["IoT", "Edge AI"],
    gradient: "from-teal-800/60 via-emerald-800/20 to-[#070e0a]",
    accent: "#10B981",
    span: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    number: "04",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Real-Time Transaction Analytics",
    description: "High-throughput data ingestion pipeline processing heavy transaction volumes with sub-second latency.",
    tags: ["Big Data", "React", "PostgreSQL"],
    gradient: "from-green-900/50 via-emerald-900/25 to-[#070e0a]",
    accent: "#34D399",
    span: "lg:col-span-2 lg:row-span-1 md:col-span-1",
    icon: <Zap className="w-5 h-5 text-green-400" />,
    number: "05",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "ML-Driven Sales CRM",
    description: "Machine learning integration for lead scoring and predictive conversion modeling, yielding a 34% increase in close rates.",
    tags: ["Machine Learning", "FastAPI", "CRM"],
    gradient: "from-emerald-900/60 via-teal-900/30 to-[#070e0a]",
    accent: "#059669",
    span: "lg:col-span-2 lg:row-span-1 md:col-span-1",
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    number: "06",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 relative bg-[#030705] overflow-hidden selection:bg-emerald-500/30">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-emerald-900/10 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[100px] translate-y-1/2 mix-blend-screen opacity-50"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-emerald-500 rounded-full"></span>
              <span className="text-emerald-400 uppercase tracking-[0.2em] text-sm font-semibold">Excellence Delivered</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display text-white leading-[1.1]">
              Proven Impact. <br />
              <span className="text-emerald-500 relative whitespace-nowrap">
                Engineering Excellence.
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-transparent opacity-50"></span>
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:max-w-md"
          >
            <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed">
              We engineer bespoke intelligent systems that drive measurable business transformation across industries.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[22rem] sm:auto-rows-[24rem]">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-[2rem] overflow-hidden ${project.span}`}
              style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
              }}
            >
              {/* Animated Image Background */}
              <div className="absolute inset-0 overflow-hidden z-0 bg-[#030705]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 group-hover:-rotate-1 transition-all duration-[1.5s] ease-out opacity-50 group-hover:opacity-90 grayscale-[50%] group-hover:grayscale-0"
                />
              </div>

              {/* Animated Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply group-hover:opacity-30 transition-opacity duration-700 ease-in-out z-0`}></div>
              
              {/* Solid Gradient at Bottom for text legibility */}
              <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-[#030705]/95 via-[#030705]/60 to-transparent z-0"></div>

              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none z-0" style={{ 
                background: `radial-gradient(circle at top right, ${project.accent}20, transparent 40%)` 
              }}></div>

              <div className="relative h-full flex flex-col p-8 sm:p-10 justify-between z-10 transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* Top Section: Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                     {project.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-500 ease-out">
                    <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
                  </div>
                </div>

                {/* Bottom Section: Content & Tags */}
                <div className="mt-8">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 relative z-20">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-md font-medium tracking-wide backdrop-blur-sm bg-white/5 border border-white/10 text-white/70 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Large Watermark Number */}
                <div className="absolute -bottom-6 -right-4 text-[120px] sm:text-[160px] font-bold font-display leading-none text-white/[0.03] group-hover:text-emerald-500/[0.05] transition-colors duration-500 select-none pointer-events-none">
                  {project.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
