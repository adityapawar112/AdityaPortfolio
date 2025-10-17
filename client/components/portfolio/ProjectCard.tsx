interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  highlights,
}: ProjectCardProps) {
  return (
    <div className="border border-border rounded p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 bg-card hover:bg-card/80 group animate-in fade-in slide-in-from-right-4 duration-500">
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 font-light">{description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-foreground mb-3">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-secondary/40 transition-colors duration-300 border border-secondary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 text-sm text-muted-foreground font-light">
            <span className="text-secondary font-bold mt-0.5 flex-shrink-0">✓</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
