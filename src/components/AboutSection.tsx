import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Custom Architecture", icon: "01" },
  { value: "Autonomous", label: "AI Powered Systems", icon: "02" },
  { value: "Analytics Driven", label: "Data-First Approach", icon: "03" },
  { value: "Integration", label: "Seamless Integration", icon: "04" },
  { value: "1:1", label: "Dedicated Partnership", icon: "05" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white overflow-hidden pb-24">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white pointer-events-none" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />

      {/* Pulsing highlights */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 py-28 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge mb-6">About Us</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 tracking-tight font-display leading-[1.05]">
              We Build What Your{" "}
              <span className="text-gradient relative">
                Business
                <motion.svg 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 8" 
                  fill="none"
                >
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
                </motion.svg>
              </span>{" "}
              Actually Needs
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-lg">
              As a forward-thinking technology partner, we focus on helping ambitious businesses eliminate manual work and embrace seamless digital transformation. Our expertise spans custom-built software, intelligent AI automation, and high-performance technical architecture.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
              We engineer fully autonomous systems that integrate flawlessly with your existing platform stack—bridging CRMs, specialized tools, and external APIs into one unified engine. Everything we deploy is fortified by strict security standards and industry compliance to keep your firm's data protected at scale.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
              We believe in quality over volume. Every project is meticulously hand-crafted from the ground up — zero recycled templates, no generic shortcuts. We dedicate our full attention to understanding your unique operational bottlenecks and building targeted, scalable solutions.
            </p>
            <motion.div 
               whileInView={{ scale: [0.98, 1] }}
               transition={{ duration: 0.5 }}
               className="border-l-4 border-emerald-500/30 pl-6 py-3 bg-emerald-500/[0.02] rounded-r-xl"
            >
              <p className="text-foreground font-medium text-lg leading-relaxed">
                We consider ourselves your dedicated technical partners from Day 1, ensuring zero compromises on quality, performance, and impact.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5 py-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className={`relative flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group transition-all duration-300 w-[92%] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-300 ${i % 2 !== 0 ? 'ml-auto' : ''}`}
                style={{ zIndex: 10 - i }}
              >
                {/* Glowing Node Box */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center border border-emerald-200/50 group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:border-emerald-400 transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <span className="text-emerald-700 group-hover:text-white transition-colors duration-500 text-lg font-bold font-display z-10">
                    {stat.icon}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold font-display text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.15em] font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Tech Graphic on right */}
                <div className="ml-auto w-12 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex gap-1 items-end justify-end">
                  {[...Array(4)].map((_, idx) => (
                    <motion.div 
                      key={idx}
                      animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                      className="w-1.5 bg-emerald-500 rounded-t-sm"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
