import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechScale",
    content: "Rezaul built an AI automation system that saved our team 25 hours per week. The ROI was visible within the first month.",
  },
  {
    name: "James Rodriguez",
    role: "Founder, DataFlow",
    content: "The ML pipeline he built predicts our sales with 87% accuracy. It completely changed how we allocate resources.",
  },
  {
    name: "Emily Chen",
    role: "CTO, Growthly",
    content: "Our custom dashboard went from concept to production in 3 weeks. Clean code, great communication, and zero issues post-launch.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          What Clients <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-border bg-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
