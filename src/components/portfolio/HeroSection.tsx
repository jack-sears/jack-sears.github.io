import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-primary font-heading font-medium text-sm tracking-wider uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          Programmer & Aspiring Soccer Analyst
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Your Name
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          Building data-driven insights at the intersection of code and the beautiful game. 
          Passionate about turning raw data into actionable soccer intelligence.
        </p>
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="font-heading"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="font-heading"
          >
            Get in Touch
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
