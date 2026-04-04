import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Globe, Code2, Presentation } from "lucide-react";

const expertiseData = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Deploy custom ML models, intelligent agents, and scalable automation systems that forecast trends and transform your business operations.",
    icon: BrainCircuit,
    color: "from-emerald-400 to-teal-600",
    imageBg: "radial-gradient(circle at center, rgba(16,185,129,0.2) 0%, transparent 70%)",
    image: "/images/ai_expertise.png"
  },
  {
    id: "web",
    title: "Premium Web Platforms",
    description: "High-performance, dynamic web applications engineered for seamless user experiences, ultimate scalability, and maximum conversion rates.",
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    imageBg: "radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, transparent 70%)",
    image: "/images/web_expertise.png"
  },
  {
    id: "software",
    title: "Custom Software",
    description: "Bespoke digital solutions and robust enterprise architectures built from the ground up to address your exact business challenges.",
    icon: Code2,
    color: "from-purple-400 to-fuchsia-600",
    imageBg: "radial-gradient(circle at center, rgba(168,85,247,0.2) 0%, transparent 70%)",
    image: "/images/software_expertise.png"
  },
  {
    id: "consultation",
    title: "Expert Consultation",
    description: "Strategic technical roadmapping and digital advising to navigate complexities and ensure your investments yield high returns.",
    icon: Presentation,
    color: "from-amber-400 to-orange-600",
    imageBg: "radial-gradient(circle at center, rgba(245,158,11,0.2) 0%, transparent 70%)",
    image: "/images/consultation_expertise.png"
  }
];

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % expertiseData.length);
    }, 4000); // Auto-rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container px-4 mx-auto pb-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 mt-4 mb-6">
            Everything You Need To <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-lg text-gray-600">
            We merge cutting-edge technology with premium design to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Rotating Images/Visuals */}
          <div className="relative h-[450px] md:h-[550px] w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-900"
              >
                {/* Background AI Generated Image with slow pan */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.15 }}
                  transition={{ duration: 15, ease: "linear" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${expertiseData[activeIndex].image})`, filter: "brightness(0.8) contrast(1.1)" }}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent`} />
                
                {/* Inner glass pane */}
                <div className="w-3/4 h-3/4 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[200%] h-[200%] border-[2px] border-dashed border-gray-300/30 rounded-full"
                    />
                    <motion.div 
                        initial={{ rotate: 360 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[150%] h-[150%] border-[1px] border-solid border-gray-300/40 rounded-full"
                    />
                    
                    {(() => {
                      const Icon = expertiseData[activeIndex].icon;
                      return (
                        <motion.div 
                           initial={{ scale: 0.5, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ delay: 0.2, type: "spring" }}
                           className={`p-6 rounded-full bg-gradient-to-br ${expertiseData[activeIndex].color} shadow-lg text-white z-10`}
                        >
                          <Icon className="w-12 h-12" />
                        </motion.div>
                      );
                    })()}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Rotating indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {expertiseData.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 h-2 bg-gray-800' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
          </div>

          {/* Right Side: Text & Content */}
          <div className="flex flex-col gap-6">
            {expertiseData.map((item, idx) => {
              const isActive = idx === activeIndex;
              const Icon = item.icon;
              
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                    isActive 
                      ? "bg-white shadow-xl border-emerald-100 scale-[1.02]" 
                      : "bg-gray-50/50 border-transparent hover:bg-gray-50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`mt-1 flex-shrink-0 p-3 rounded-lg transition-colors duration-500 ${
                      isActive ? `bg-emerald-50 text-emerald-600` : `bg-gray-200/50 text-gray-500`
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                        isActive ? "text-gray-900" : "text-gray-600"
                      }`}>
                        {item.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-gray-600 leading-relaxed pt-2">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
