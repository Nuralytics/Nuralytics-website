import { motion } from "framer-motion";

const stats = [
  { value: "800+", label: "Projects Completed", icon: "◆" },
  { value: "46%", label: "Avg Revenue Growth", icon: "◉" },
  { value: "200+", label: "Happy Clients", icon: "★" },
  { value: "5+", label: "Years Experience", icon: "⬡" },
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
              We help businesses eliminate manual work and increase revenue with
              custom-built software, AI automation, and conversion systems. Every
              project is built from scratch — no shortcuts, no templates.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Our clients typically save 10–30 hours per week and see measurable
              revenue growth within the first 30 days of launch.
            </p>
            <motion.div 
               whileInView={{ scale: [0.98, 1] }}
               transition={{ duration: 0.5 }}
               className="border-l-4 border-emerald-500/30 pl-6 py-3 bg-emerald-500/[0.02] rounded-r-xl"
            >
              <p className="text-foreground font-medium text-lg leading-relaxed">
                We stay accountable until your system delivers results — not just
                until delivery.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 rounded-[32px] border border-gray-100 text-center group transition-all duration-500 bg-white hover:-translate-y-1"
                style={{
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)"
                }}
              >
                {/* Pulsing border on hover */}
                <div className="absolute inset-0 rounded-[32px] border border-emerald-500/0 group-hover:border-emerald-200 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500" />
                
                <div className="text-emerald-600 text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                  {stat.label}
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
