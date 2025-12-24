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
    title: "Expected Goals (xG) Model",
    description: "A machine learning model to calculate expected goals from shot data, providing deeper insights into team and player performance beyond traditional statistics.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/yourusername/xg-model",
  },
  {
    title: "Match Event Visualizer",
    description: "Interactive web application for visualizing match events, player movements, and tactical patterns using event stream data.",
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/match-visualizer",
    liveUrl: "https://match-visualizer.example.com",
  },
  {
    title: "Player Recruitment Dashboard",
    description: "A comprehensive dashboard for scouting and comparing players across multiple leagues using various performance metrics and radar charts.",
    technologies: ["Python", "Streamlit", "Plotly", "SQL"],
    githubUrl: "https://github.com/yourusername/recruitment-dashboard",
  },
  {
    title: "Passing Network Analysis",
    description: "Tool for analyzing and visualizing team passing networks, identifying key playmakers and tactical structures within match data.",
    technologies: ["Python", "NetworkX", "Matplotlib", "NumPy"],
    githubUrl: "https://github.com/yourusername/passing-networks",
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
          a step in my journey to better understand the game through data.
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
