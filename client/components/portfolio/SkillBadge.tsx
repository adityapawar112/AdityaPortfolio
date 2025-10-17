import {
  Code2,
  Zap,
  Database,
  Rocket,
  Users,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface SkillBadgeProps {
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
  "Node.js": Rocket,
  APIs: Rocket,
  Webhooks: Rocket,
  Express: Rocket,
  PostgreSQL: Database,
  "Drizzle ORM": Database,
  Supabase: Database,
  Neon: Database,
  Git: Rocket,
  GitHub: Rocket,
  "CI/CD": Rocket,
  Vercel: Rocket,
  Hostinger: Rocket,
  Vite: Zap,
  "Generative AI": Lightbulb,
  "Project Management": Users,
  Leadership: Users,
  Teamwork: Users,
  "Client Relations": Users,
  "Technical Documentation": Code2,
};

export default function SkillBadge({
  label,
  color = "primary",
  icon: Icon,
}: SkillBadgeProps) {
  const IconComponent = Icon || iconMap[label] || Code2;

  const colorClasses = {
    primary: "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 hover:border-primary/50",
    secondary:
      "bg-secondary/15 text-secondary border border-secondary/30 hover:bg-secondary/25 hover:border-secondary/50",
    accent:
      "bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 hover:border-accent/50",
  };

  return (
    <div
      className={`${colorClasses[color]} px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default group`}
    >
      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
      <span>{label}</span>
    </div>
  );
}
