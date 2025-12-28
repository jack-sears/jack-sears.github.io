import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sports Event Tagger",
    description: "Upload game film and manually tag events, then export data files to CSV for easy analysis. Designed for coaches and analysts who want to build their own datasets.",
    technologies: ["Python", "OpenCV", "Pandas", "Tkinter"],
    githubUrl: "https://github.com/jack-sears/sports-event-tagger",
    liveUrl: "https://jack-sears.github.io/sports-event-tagger/",
  },
  {
    title: "FPL Analytics Dashboard",
    description: "Comprehensive dashboard featuring player stats database, team planning tools, fixture difficulty ratings, players on the rise/fall tracking, and buy/sell recommendations using custom algorithms.",
    technologies: ["Python", "API Integration", "SQL", "Data Visualization"],
    githubUrl: "https://github.com/jack-sears/fpl-viz",
    liveUrl: "https://jack-sears.github.io/fpl-viz/",
  },
  {
    title: "Chess Opening Trainer",
    description: "Chess training app where you can upload PGN files containing opening lines you want to learn. The program generates random lines with spaced repetition to help memorize opening theory.",
    technologies: ["Python", "Chess.js", "React", "Spaced Repetition"],
    githubUrl: "https://github.com/jack-sears/chess-opening-trainer",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          A selection of my soccer analytics and development projects. Each one represents 
          a step in my journey to better my skills as a programmer and data scientist.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/30 transition-colors group"
            >
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-heading font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-heading font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
