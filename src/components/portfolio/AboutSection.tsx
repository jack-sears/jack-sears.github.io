const skills = [
  "Python",
  "R",
  "SQL",
  "JavaScript",
  "React",
  "Data Visualization",
  "Machine Learning",
  "Statistical Analysis",
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
              I'm a programmer with a deep passion for soccer analytics. My journey began 
              with a love for the game and evolved into a fascination with how data can 
              reveal hidden patterns and insights that shape match outcomes.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Currently, I'm focused on building tools and models that bridge the gap 
              between raw performance data and actionable insights for coaches, scouts, 
              and analysts. My goal is to contribute to how teams understand and 
              leverage data in professional soccer.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or watching matches, you'll find me diving into the 
              latest research papers on sports analytics or experimenting with new 
              visualization techniques.
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
