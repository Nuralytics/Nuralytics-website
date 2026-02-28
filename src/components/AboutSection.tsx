import { motion } from "framer-motion";

const stats = [
  { value: "800+", label: "Projects Completed", icon: "◆" },
  { value: "46%", label: "Avg Revenue Growth", icon: "◉" },
  { value: "200+", label: "Happy Clients", icon: "★" },
  { value: "5+", label: "Years Experience", icon: "⬡" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black/50 to-background pointer-events-none" />

      {/* Green divider line at top */}
      <div className="section-divider opacity-50" />

      <div className="container px-4 py-28 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-6">About Us</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 tracking-tight font-display leading-[1.1]">
              We Build What Your{" "}
              <span className="text-gradient relative">
                Business
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary) / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Actually Needs
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We help businesses eliminate manual work and increase revenue with
              custom-built software, AI automation, and conversion systems. Every
              project is built from scratch — no shortcuts, no templates.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our clients typically save 10–30 hours per week and see measurable
              revenue growth within the first 30 days of launch.
            </p>
            <div className="border-l-4 border-emerald-500/50 pl-5 py-2">
              <p className="text-foreground font-medium text-lg leading-relaxed">
                We stay accountable until your system delivers results — not just
                until delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative p-7 rounded-3xl border border-white/5 text-center group hover:border-emerald-500/20 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  boxShadow: "0 10px 40px -20px rgba(0,0,0,0.5)"
                }}
              >
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500 rounded-3xl pointer-events-none" />

                <div className="text-emerald-500/40 text-lg mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-white group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
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
