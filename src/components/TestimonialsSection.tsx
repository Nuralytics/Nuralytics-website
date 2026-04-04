import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechScale",
    content: "They built an AI automation system that saved our team 25 hours per week. The ROI was visible within the first month. Incredible work.",
  },
  {
    name: "James Rodriguez",
    role: "Founder, DataFlow",
    content: "The ML pipeline they built predicts our sales with 87% accuracy. It completely changed how we allocate resources. Highly recommended.",
  },
  {
    name: "Emily Chen",
    role: "CTO, Growthly",
    content: "Our custom dashboard went from concept to production in 3 weeks. Clean code, great communication, and zero issues post-launch.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-[#070e0a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.04) 0%, transparent 60%)" }} />
      </div>

      <div className="section-divider opacity-50" />

      <div className="container px-4 py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-6">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight font-display text-white">
            What Our <span className="text-gradient">Partners</span> Say
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — real feedback from companies we've helped scale and automate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl relative group hover:-translate-y-2 transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "0 20px 40px -20px rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.2)"
                }} />

              {/* Quote icon */}
              <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 right-6 group-hover:text-emerald-500/40 transition-colors">
                "
              </div>

              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <p className="text-white/70 mb-8 leading-relaxed text-[15px] relative z-10 h-24">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 mt-auto relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#10B981" }}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-white/90">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
