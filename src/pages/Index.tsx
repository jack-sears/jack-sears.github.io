import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResearchSection from "@/components/portfolio/ResearchSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
