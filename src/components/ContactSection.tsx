import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormState = "idle" | "submitting" | "success" | "error";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
    // Simulate submission
    setTimeout(() => {
      setState("success");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  if (state === "success") {
    return (
      <section id="contact" className="container px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center p-12 rounded-2xl border border-border bg-card"
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">I'll get back to you within 24 hours.</p>
          <Button variant="outline" className="rounded-full" onClick={() => setState("idle")}>
            Send Another
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="container px-4 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 tracking-tight">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Have a project in mind? Let's talk about how I can help automate your workflows, build your product, or analyze your data.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>📧 hello@rezaularif.com</p>
            <p>📍 Available for remote work worldwide</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl border border-border bg-card"
        >
          <div>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl"
            />
            {errors.name && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl"
            />
            {errors.email && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl min-h-[120px]"
            />
            {errors.message && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
          </div>
          <Button type="submit" className="button-gradient w-full" disabled={state === "submitting"}>
            {state === "submitting" ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
