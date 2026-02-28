import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-card"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">5.0 · Trusted by 50+ clients worldwide</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Build Systems That Save Time, Increase Revenue, and{" "}
          <span className="text-gradient">Scale Your Business</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          I build custom web apps, AI automation, and data systems that eliminate manual work — so you can focus on growing revenue, not managing chaos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="button-gradient text-lg px-8" onClick={() => scrollTo("contact")}>
            Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8" onClick={() => scrollTo("portfolio")}>
            View My Work
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
