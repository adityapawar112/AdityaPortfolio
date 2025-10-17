import { ExternalLink, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-8 lg:pl-64 lg:pt-0"
    >
      <div className="max-w-3xl mx-auto px-6 py-0 w-full">
        <div className="space-y-8 animate-in fade-in duration-700">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Aditya Pawar
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            Building dynamic front-end applications with React and Next.js, and
            engineering robust back-end services with Node.js and PostgreSQL.
            Experienced in full-stack development, CI/CD pipelines, and cloud
            deployment on Vercel and Hostinger.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              Get in Touch
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="https://github.com/adityapawar112"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded font-medium hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-12 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
