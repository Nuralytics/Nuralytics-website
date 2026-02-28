import { motion } from "framer-motion";

const TechLogo = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center px-8 py-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xl md:text-2xl font-display font-medium text-white/80 whitespace-nowrap">
            {name}
        </span>
    </div>
);

const MarqueeSection = () => {
    const logos = [
        "Python",
        "TensorFlow",
        "Next.js",
        "React",
        "OpenAI",
        "LangChain",
        "PostgreSQL",
        "Stripe",
    ];

    const extendedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative py-10 overflow-hidden bg-background">
            {/* Top and bottom subtle borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Fade effects on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex w-[200%]">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex items-center justify-start min-w-full"
                >
                    {extendedLogos.map((logo, index) => (
                        <TechLogo key={`${logo}-${index}`} name={logo} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeSection;
