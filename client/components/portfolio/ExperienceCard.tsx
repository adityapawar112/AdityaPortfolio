interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border border-border rounded p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card hover:bg-card/80 group animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-primary font-medium text-base">{company}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2 text-sm text-muted-foreground">
          <span>{location}</span>
          <span>{period}</span>
        </div>
      </div>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex gap-3 text-muted-foreground font-light">
            <span className="text-primary font-bold mt-1 flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
