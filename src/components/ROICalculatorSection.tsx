import dashboard1 from "../../images/dashbord-1.png";
import dashboard2 from "../../images/image.png";
import dashboard3 from "../../images/dashbord-2.png";
import dashboard4 from "../../images/frontend-dashboard.png";

const roiImages = [
    { src: dashboard1, alt: "Dashboard card 1", span: "lg:col-span-4" },
    { src: dashboard2, alt: "Dashboard card 2", span: "lg:col-span-2" },
    { src: dashboard3, alt: "Dashboard card 3", span: "lg:col-span-3" },
    { src: dashboard4, alt: "Dashboard card 4", span: "lg:col-span-3" }
];

const ROICalculatorSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <img
                src="/brand-assets/Firefly.png"
                alt="Firefly brand mark"
                className="absolute right-6 top-6 w-20 md:w-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] opacity-100 pointer-events-none z-20"
            />

            <div className="container px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-white mb-4">
                        ROI Impact Gallery
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed">
                        Visual snapshots of performance, conversions, and efficiency gains powered by our AI stack.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8">
                    {roiImages.map((img) => (
                        <div
                            key={img.alt}
                            className={`relative overflow-hidden rounded-[28px] border border-emerald-500/15 bg-gradient-to-br from-emerald-900/30 via-emerald-950/20 to-black/80 shadow-[0_40px_110px_-60px_rgba(0,0,0,0.85)] ${img.span}`}
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ROICalculatorSection;
