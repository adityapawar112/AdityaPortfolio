import { useTheme } from "@/hooks/use-theme";

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
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#6cb654" : "#059669";

  return (
    <div
      className={`border border-border rounded p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group animate-in fade-in slide-in-from-right-4 duration-500 ${theme === 'dark' ? 'bg-card hover:bg-card/80' : 'hover:bg-card/80'}`}
      style={{ backgroundColor: theme === 'dark' ? '' : '#f5f5f5' }}
    >
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
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
              className="inline-block px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
                border: `1px solid ${accentColor}40`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 text-sm text-muted-foreground font-light">
            <span
              className="font-bold mt-0.5 flex-shrink-0"
              style={{ color: accentColor }}
            >
              ✓
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
