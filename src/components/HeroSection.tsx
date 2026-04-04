import { BarVisualizer } from "@livekit/components-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import animationStarting from "../../images/animation-starting.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#070a08]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_28%),radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.14),transparent_20%)]" />

      {/* Right beam */}
      <div className="absolute top-0 right-[18%] h-[460px] w-[140px] rounded-full bg-emerald-300/18 blur-[34px] pointer-events-none" />
      <div className="absolute inset-y-0 right-[16%] w-[200px] bg-[radial-gradient(circle,rgba(52,211,153,0.45)_0%,rgba(16,185,129,0.12)_45%,transparent_75%)] blur-[42px] pointer-events-none" />


      <div className="container px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center min-h-[78vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="inline-flex items-center rounded-full border border-emerald-500/18 bg-emerald-500/[0.06] px-5 py-3 text-sm text-white/72 backdrop-blur-md"
            >
              Intelligence. Creativity. Momentum.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.72 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.04em] text-white font-display"
            >
              Transform the
              <br />
              Way Your <span className="italic font-serif text-white/92">Business</span>
              <br />
              <span className="italic font-serif text-white/92">Thinks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 max-w-2xl text-lg md:text-[1.35rem] leading-relaxed text-white/60"
            >
              Our team transforms complex ideas into clear digital systems - powered by web design, frontend delivery,
              AI-driven workflows, and voice automation that helps companies scale with speed and control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="button-gradient text-lg px-8 h-14 arrow-hover font-medium"
                onClick={() => scrollTo("contact")}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 arrow-icon" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="button-outline-green text-lg px-8 h-14 font-medium bg-transparent"
                onClick={() => scrollTo("portfolio")}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[460px] h-[560px] sm:w-[560px] sm:h-[680px] lg:w-[660px] lg:h-[780px] flex items-center justify-center -mt-10 sm:-mt-12">
              <div className="absolute inset-[-10%] bg-[radial-gradient(circle,rgba(16,185,129,0.20)_0%,rgba(16,185,129,0.06)_45%,transparent_75%)] blur-[36px]" />
              <div className="absolute -right-8 top-[-6%] h-[120%] w-24 rounded-full bg-emerald-300/18 blur-[26px]" />

              <motion.img
                src={animationStarting}
                alt="Rotating dot ring"
                className="relative w-[98%] h-[98%] object-contain drop-shadow-[0_0_36px_rgba(255,255,255,0.32)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
