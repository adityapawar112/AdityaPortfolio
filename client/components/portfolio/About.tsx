import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-20 lg:pl-64">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          description="Results-driven Full-Stack Developer"
        />

        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            I'm a full-stack developer with expertise across the entire
            development lifecycle. I specialize in building dynamic
            front-end applications and engineering robust back-end services.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Currently pursuing my Bachelor of Technology in Information
            Technology and Data Science at Ajeenkya D Y Patil University,
            Pune. I'm passionate about creating user-friendly applications
            and solving complex technical challenges.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and staying updated with
            the latest in web development trends.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="bg-primary/10 rounded p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Full-Stack Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                From responsive UIs with React to scalable backends with
                Node.js, I deliver end-to-end solutions optimized for
                production deployment.
              </p>
            </div>

            <div className="bg-secondary/10 rounded p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                DevOps & Cloud
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Experience with CI/CD pipelines, cloud hosting on Vercel and
                Hostinger, and modern deployment practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
