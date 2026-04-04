import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GreenImageSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-24">
      {/* Green tint overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.14),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_45%)]" />
      {/* Vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 160px)",
          }}
        />
      </div>
      {/* Green glow patches */}
      <div className="absolute left-0 top-10 h-72 w-72 bg-emerald-500/18 blur-[90px] rounded-full" />
      <div className="absolute left-24 top-56 h-64 w-64 bg-emerald-400/14 blur-[80px] rounded-full" />
      <div className="absolute right-4 top-16 h-80 w-80 bg-emerald-400/18 blur-[110px] rounded-full" />
      <div className="absolute right-24 bottom-6 h-72 w-72 bg-emerald-500/18 blur-[100px] rounded-full" />
      <div className="absolute left-1/2 -bottom-10 h-56 w-56 bg-emerald-300/12 blur-[90px] rounded-full" />

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', 'Outfit', sans-serif" }}
            >
              THINK.
              <br />
              DEVELOP.
              <br />
              TRANSFORM.
            </h2>
            <p
              className="mt-8 text-base sm:text-lg text-white/60 leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', 'Outfit', sans-serif" }}
            >
              We work with ambitious teams to uncover opportunities, refine
              operations, and drive sustainable success.
            </p>

            <button
              className="mt-10 inline-flex items-center gap-3 text-white/90 text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', 'Outfit', sans-serif" }}
            >
              About us
              <span className="w-8 h-8 rounded-full bg-[#f5b000] text-black flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>

          {/* Right collage */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[560px]"
          >
            <div className="absolute left-4 sm:left-6 top-6 z-10 w-[260px] sm:w-[280px] lg:w-[300px] aspect-[5/4] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            </div>

            <div className="absolute left-[120px] sm:left-[150px] top-[140px] z-30 w-[260px] sm:w-[280px] lg:w-[300px] aspect-[5/4] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]" />
            </div>

            <div className="absolute left-[205px] sm:left-[240px] bottom-0 z-40 w-[260px] sm:w-[280px] lg:w-[300px] aspect-[5/4] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GreenImageSection;
