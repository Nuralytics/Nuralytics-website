import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI Customer Support Bot",
    category: "AI Development",
    description: "Reduced support tickets by 60% with an LLM-powered chatbot handling 24/7 customer queries.",
    tech: ["OpenAI", "Next.js", "Supabase"],
  },
  {
    title: "E-commerce Analytics Dashboard",
    category: "Web Development",
    description: "Real-time analytics platform tracking $2M+ in monthly transactions with custom visualizations.",
    tech: ["React", "Python", "PostgreSQL"],
  },
  {
    title: "Predictive Sales Pipeline",
    category: "ML Analysis",
    description: "ML model that predicts lead conversion with 87% accuracy, increasing close rates by 34%.",
    tech: ["scikit-learn", "FastAPI", "React"],
  },
  {
    title: "Workflow Automation System",
    category: "AI Development",
    description: "Automated 80% of repetitive operations for a logistics company, saving 25+ hours per week.",
    tech: ["n8n", "GPT-4", "Webhooks"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          Recent <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
          >
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
            <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
              View Details <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
