import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-lg text-primary">Rezaul Arif</span>
            <p className="text-sm text-muted-foreground mt-1">AI Developer · Web Developer · ML Analyst</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rezaul Arif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
