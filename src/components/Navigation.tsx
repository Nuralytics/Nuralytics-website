import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
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
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg w-[90%] max-w-3xl"
          : "bg-background/60 backdrop-blur-sm w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-14 px-6">
        <nav className="flex items-center justify-between h-full">
          <span className="font-bold text-lg text-primary">RA</span>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
            <Button size="sm" className="button-gradient" onClick={() => scrollTo("contact")}>
              Book a Call
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="text-lg text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button className="button-gradient mt-4" onClick={() => scrollTo("contact")}>
                    Book a Call
                  </Button>
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
