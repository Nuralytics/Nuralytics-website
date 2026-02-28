import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "46%", label: "Avg Revenue Growth" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="container px-4 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 tracking-tight">
            I Build What Your{" "}
            <span className="text-gradient">Business</span> Actually Needs
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            I help businesses eliminate manual work and increase revenue with custom-built software, AI automation, and conversion systems. Every project is built from scratch — no shortcuts, no templates.
          </p>
          <p className="text-muted-foreground mb-8">
            My clients typically save 10–30 hours per week and see measurable revenue growth within the first 30 days of launch.
          </p>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-foreground font-medium">
              I stay accountable until your system delivers results — not just until delivery.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
