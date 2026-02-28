import { motion } from "framer-motion";
import { Brain, Globe, BarChart3, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Development",
    description: "Custom AI solutions — chatbots, LLM integrations, and intelligent automation that work 24/7.",
    features: ["Custom AI agents & chatbots", "LLM API integrations", "Workflow automation"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "High-performance web apps built with modern frameworks, optimized for speed and conversion.",
    features: ["React & Next.js apps", "Full-stack SaaS platforms", "Landing pages & dashboards"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "ML & Data Analysis",
    description: "Turn raw data into actionable insights with custom ML models and analytics pipelines.",
    features: ["Predictive analytics", "Data pipeline design", "Custom ML models"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">What I Offer</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          Services Built for <span className="text-gradient">Growth</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
