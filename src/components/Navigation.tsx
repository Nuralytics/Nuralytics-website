import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Work", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto transition-all duration-500 ${isScrolled
            ? "max-w-4xl"
            : "max-w-5xl"
          }`}
      >
        <nav
          className={`flex items-center justify-between h-14 px-6 rounded-full transition-all duration-500 ${isScrolled
              ? "glass-nav shadow-lg shadow-black/5"
              : "glass-nav"
            }`}
        >
          {/* Brand */}
          <span className="font-bold text-xl text-primary font-display tracking-tight">
            Nuralytics
          </span>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/50 border border-border/30">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-card/80"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              className="button-gradient arrow-hover px-5 text-sm font-medium"
              onClick={() => scrollTo("contact")}
            >
              Get a Free Consultation
              <ArrowRight className="ml-1.5 w-4 h-4 arrow-icon" />
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 backdrop-blur-xl border-border/30">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="text-lg text-left text-muted-foreground hover:text-foreground transition-colors px-4 py-3 rounded-xl hover:bg-card"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <Button
                      className="button-gradient w-full arrow-hover"
                      onClick={() => scrollTo("contact")}
                    >
                      Get a Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4 arrow-icon" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
