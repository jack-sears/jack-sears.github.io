import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Interested in collaborating or discussing soccer analytics? I'd love to hear from you.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-12">
          <a
            href="mailto:jacksears01@gmail.com"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-heading font-medium"
          >
            <Mail className="w-5 h-5" />
            jacksears01@gmail.com
          </a>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jack-sears"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-heading text-sm"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jack-sears-aa946625a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-heading text-sm"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        <Button 
          variant="default" 
          size="lg" 
          className="font-heading"
          asChild
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
