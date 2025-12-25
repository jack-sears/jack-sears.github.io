import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Jack Sears
        </h1>
        <p className="font-heading text-xl md:text-2xl text-primary font-medium mb-4">
          Programmer & Aspiring Soccer Analyst
        </p>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          MSc in Machine Learning & Data Analytics. Former competitive soccer player 
          building tools to bridge the gap between performance data and actionable insights.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="font-heading"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="font-heading"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/jack-sears"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jack-sears-aa946625a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:jacksears01@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
