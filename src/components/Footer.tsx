import { Github, Linkedin, Twitter, ArrowRight, Star, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Projects", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const serviceLinks = [
    "Business Systems & Tools",
    "AI Automation",
    "Web & App Development",
    "ML & Data Analysis",
  ];

  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main footer content */}
      <div className="container px-4 pt-24 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="font-bold text-2xl text-white font-display flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-emerald-400" />
              </div>
              Nuralytics
            </span>
            <p className="text-white/50 text-sm mt-5 leading-relaxed max-w-xs">
              Custom web apps, AI automation, and business systems that save time
              and grow revenue for modern businesses.
            </p>
            <div className="flex items-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              ))}
              <span className="text-sm text-white/50 ml-2">
                5.0 — Trusted by 200+
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-white/60 hover:text-emerald-400 transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h4>
            <div className="flex items-center gap-3 text-sm text-white/60 mb-6 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
              <Mail className="w-4 h-4 text-emerald-400" />
              contact@nuralytics.com
            </div>
            <Button
              size="sm"
              className="button-gradient arrow-hover w-full rounded-xl"
              onClick={() => scrollTo("contact")}
            >
              Book a Free Call
              <ArrowRight className="ml-1.5 w-4 h-4 arrow-icon" />
            </Button>

            <div className="flex items-center gap-3 mt-8">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large background brand text */}
      <div
        className="absolute bottom-0 left-0 right-0 font-display font-black text-center select-none pointer-events-none"
        style={{
          fontSize: "clamp(4rem, 15vw, 18rem)",
          lineHeight: "0.8",
          color: "rgba(255,255,255,0.02)",
          transform: "translateY(20%)"
        }}
        aria-hidden="true"
      >
        NURALYTICS
      </div>

      {/* Bottom bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)" }}>
        <div className="container px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Nuralytics. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
