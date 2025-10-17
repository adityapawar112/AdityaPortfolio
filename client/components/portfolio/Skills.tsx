import SectionTitle from "./SectionTitle";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRadixui,
  SiNodedotjs,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiVercel,
  SiVite
} from "react-icons/si";

export default function Skills() {
  // Languages logos
  const languageLogos = [
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://typescriptlang.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org" },
    { node: <SiCss3 />, title: "CSS3", href: "https://w3.org/Style/CSS" },
  ];

  // Frontend logos
  const frontendLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiRadixui />, title: "Radix UI", href: "https://radix-ui.com" },
  ];

  // Backend logos
  const backendLogos = [
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiDjango />, title: "Django", href: "https://djangoproject.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  ];

  // Database logos
  const databaseLogos = [
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  ];

  // Data Science logos
  const dataScienceLogos = [
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiScikitlearn />, title: "Scikit-learn", href: "https://scikit-learn.org" },
    { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
    { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  ];

  // DevOps & Tools logos
  const devopsLogos = [
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Skills"
          description="Technologies and tools I work with"
        />

        <div className="space-y-16">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              Languages
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {languageLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              Frontend
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {frontendLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              Backend
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {backendLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              Databases & ORMs
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {databaseLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Data Science */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              Data Science & ML
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {dataScienceLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-pointer">
              DevOps & Tools
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-8">
              {devopsLogos.map((logo, index) => (
                <a
                  key={`${logo.title}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  style={{
                    fontSize: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  title={logo.title}
                  aria-label={`Visit ${logo.title} website`}
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {logo.node}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
