import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ArrowRight, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormState = "idle" | "submitting" | "success" | "error";

const infoCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@nuralytics.io",
    sub: "We reply within 4 hours",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 4 Hours",
    sub: "Business days, Mon–Fri",
  },
  {
    icon: Calendar,
    title: "Book a Call",
    value: "Schedule Instantly",
    sub: "Free 30-min discovery call",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setState("submitting");
    setTimeout(() => {
      setState("success");
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  if (state === "success") {
    return (
      <section id="contact" className="container px-4 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center p-14 rounded-3xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(16,185,129,0.2)", boxShadow: "0 0 60px rgba(16,185,129,0.08)" }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2 font-display">Message Sent!</h3>
          <p className="text-muted-foreground mb-8">We'll get back to you within 4 hours.</p>
          <Button variant="outline" className="button-outline-green" onClick={() => setState("idle")}>
            Send Another
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at center bottom, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="section-divider" />

      <div className="container px-4 py-28 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-6">Let's Work Together</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight font-display leading-[1.1]">
            Ready to{" "}
            <span className="text-gradient">Transform</span>
            {" "}Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We'll craft a custom solution that saves time, cuts costs, and scales with you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5)"
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl h-12"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.name}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-12"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                placeholder="Company Name (optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="rounded-xl h-12"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell us about your project — what problem are you solving?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl min-h-[150px]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="button-gradient w-full h-13 text-base font-medium arrow-hover"
              style={{ height: "52px" }}
              disabled={state === "submitting"}
            >
              {state === "submitting" ? (
                <><span className="animate-pulse">Sending...</span></>
              ) : (
                <>Send Message <ArrowRight className="w-4 h-4 ml-2 arrow-icon" /></>
              )}
            </Button>
          </motion.form>

          {/* Right info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)"
                  }}
                  whileHover={{ borderColor: "rgba(16,185,129,0.25)" } as any}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{card.title}</div>
                    <div className="font-semibold text-foreground text-sm">{card.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{card.sub}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Commitment note */}
            <div className="mt-6 p-5 rounded-2xl"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>
              <div className="text-sm font-medium text-primary mb-1">Our Promise</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We stay accountable until your system delivers measurable results — not just until delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
