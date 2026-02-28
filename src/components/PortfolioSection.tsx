import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Customer Support Bot",
    description: "Reduced support tickets by 60% with an LLM-powered chatbot handling 24/7 customer queries.",
    tags: ["AI", "OpenAI", "Next.js"],
    gradient: "from-emerald-900/60 via-emerald-800/30 to-teal-900/40",
    accent: "#10B981",
    span: "col-span-1",
  },
  {
    title: "Real-Time Analytics Platform",
    description: "Real-time analytics tracking $2M+ in monthly transactions with custom visualizations.",
    tags: ["Analytics", "React", "PostgreSQL"],
    gradient: "from-teal-900/50 via-emerald-900/30 to-green-900/40",
    accent: "#34D399",
    span: "col-span-1",
  },
  {
    title: "Sales Automation CRM",
    description: "ML-powered CRM predicting lead conversion with 87% accuracy, boosting close rates by 34%.",
    tags: ["ML", "FastAPI", "CRM"],
    gradient: "from-green-900/50 via-emerald-800/30 to-teal-900/40",
    accent: "#059669",
    span: "col-span-1",
  },
  {
    title: "E-Commerce Intelligence Suite",
    description: "Full-scale intelligence suite with AI pricing, demand forecasting, and automated reordering.",
    tags: ["E-Commerce", "AI", "Automation"],
    gradient: "from-emerald-900/60 via-teal-900/30 to-green-800/40",
    accent: "#10B981",
    span: "col-span-1",
  },
  {
    title: "Medical Records AI",
    description: "HIPAA-compliant AI system that extracts, categorizes, and summarizes patient records at scale.",
    tags: ["Healthcare", "LLM", "Python"],
    gradient: "from-teal-800/50 via-emerald-900/35 to-green-900/50",
    accent: "#34D399",
    span: "col-span-1",
  },
  {
    title: "Fleet Management System",
    description: "IoT-connected fleet tracker with live GPS, fuel optimization, and predictive maintenance alerts.",
    tags: ["IoT", "Real-time", "Next.js"],
    gradient: "from-green-900/55 via-teal-800/30 to-emerald-900/45",
    accent: "#059669",
    span: "col-span-1",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container px-4 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-6">Our Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight font-display">
            Shipped.{" "}
            <span className="text-gradient">Scaled.</span>
            {" "}Proven.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Six projects. Measurable outcomes. Each one built from scratch to solve a real business problem.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.4s, box-shadow 0.4s, transform 0.4s",
              }}
              whileHover={{
                y: -6,
                borderColor: `${project.accent}40`,
                boxShadow: `0 20px 60px -15px ${project.accent}30`,
              } as any}
            >
              {/* Image / gradient placeholder */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px"
                  }} />
                {/* Glow orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-xl"
                  style={{ background: `${project.accent}20` }} />
                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}>
                  <ArrowUpRight className="w-4 h-4" style={{ color: project.accent }} />
                </div>

                {/* Mock UI lines in placeholder */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                  <div className="h-1.5 rounded-full w-3/4 opacity-20"
                    style={{ background: project.accent }} />
                  <div className="h-1.5 rounded-full w-1/2 opacity-15"
                    style={{ background: project.accent }} />
                  <div className="h-1.5 rounded-full w-2/3 opacity-10"
                    style={{ background: project.accent }} />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "rgba(52,211,153,0.9)"
                      }}>
                      {tag}
                    </span>
                  ))}
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
