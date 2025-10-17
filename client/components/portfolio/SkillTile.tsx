import {
  Code2,
  Zap,
  Database,
  Rocket,
  Users,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface SkillTileProps {
  label: string;
  color?: "primary" | "secondary" | "accent";
  icon?: LucideIcon;
}

const iconMap: Record<string, LucideIcon> = {
  Python: Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  Java: Code2,
  "HTML/CSS": Code2,
  React: Zap,
  "Next.js": Zap,
  "Tailwind CSS": Zap,
  "Radix UI": Zap,
  Django: Rocket,
  "Node.js": Rocket,
  APIs: Rocket,
  Webhooks: Rocket,
  Express: Rocket,
  PostgreSQL: Database,
  "Drizzle ORM": Database,
  Supabase: Database,
  Neon: Database,
  "Jupyter Notebook": Code2,
  "Scikit-learn": Database,
  Pandas: Database,
  NumPy: Database,
  Matplotlib: Zap,
  Seaborn: Zap,
  Git: Rocket,
  GitHub: Rocket,
  "CI/CD": Rocket,
  "GitHub Actions": Rocket,
  Vercel: Rocket,
  Hostinger: Rocket,
  Heroku: Rocket,
  Vite: Zap,
  "Generative AI": Lightbulb,
  "Project Management": Users,
  Leadership: Users,
  Teamwork: Users,
  "Client Relations": Users,
  "Technical Documentation": Code2,
};

export default function SkillTile({
  label,
  color = "primary",
  icon: Icon,
}: SkillTileProps) {
  const IconComponent = Icon || iconMap[label] || Code2;

  const colorClasses = {
    primary:
      "bg-primary/20 border border-primary/40 hover:bg-primary/30 hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/20",
    secondary:
      "bg-secondary/20 border border-secondary/40 hover:bg-secondary/30 hover:border-secondary/60 group-hover:shadow-lg group-hover:shadow-secondary/20",
    accent:
      "bg-accent/20 border border-accent/40 hover:bg-accent/30 hover:border-accent/60 group-hover:shadow-lg group-hover:shadow-accent/20",
  };

  return (
    <div
      className={`${colorClasses[color]} px-6 py-4 rounded-lg font-medium flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 cursor-default group h-full min-h-[140px] flex items-center justify-center text-center`}
    >
      <IconComponent className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
      <span className="text-foreground">{label}</span>
    </div>
  );
}
