import SectionTitle from "./SectionTitle";
import SkillTile from "./SkillTile";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "HTML/CSS"],
      color: "primary" as const,
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Radix UI"],
      color: "secondary" as const,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Django", "APIs", "Webhooks", "Express"],
      color: "accent" as const,
    },
    {
      category: "Databases & ORMs",
      skills: ["PostgreSQL", "Drizzle ORM", "Supabase", "Neon"],
      color: "primary" as const,
    },
    {
      category: "Data Science & ML",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      color: "secondary" as const,
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "CI/CD",
        "GitHub Actions",
        "Vercel",
        "Hostinger",
        "Heroku",
        "Vite",
      ],
      color: "accent" as const,
    },
    {
      category: "Soft Skills",
      skills: [
        "Project Management",
        "Leadership",
        "Teamwork",
        "Client Relations",
        "Technical Documentation",
      ],
      color: "primary" as const,
    },
  ];

  return (
    <section id="skills" className="py-20 lg:pl-64">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Skills"
          description="Technical expertise and proficiencies"
        />

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTile
                    key={skillIndex}
                    label={skill}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
