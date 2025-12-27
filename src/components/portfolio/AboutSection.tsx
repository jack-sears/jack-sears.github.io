const skills = [
  "Python",
  "C++",
  "C",
  "Matlab",
  "SQL",
  "Machine Learning",
  "Data Analytics",
  "Statistical Modeling",
  "Data Visualization",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm a Mathematical Science undergrad turned Computer Science Master's 
              graduate, specializing in machine learning and data analytics. My passion 
              lies at the intersection of soccer and data science.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Having played competitive soccer at the semi-pro and university level 
              in Canada, I bring a unique perspective to sports analytics. I understand 
              the game from a player's viewpoint and combine that with technical skills 
              to extract meaningful insights from data.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              My goal is to contribute to how teams understand and leverage data in 
              professional soccer, building tools and AI models that help coaches, scouts, 
              and analysts make better decisions.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-accent text-accent-foreground text-sm font-heading font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
