import SectionTitle from "./SectionTitle";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "contact.aditya.pawar@gmail.com",
      href: "mailto:contact.aditya.pawar@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(+91) 844 648 0893",
      href: "tel:+918446480893",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "github.com/adityapawar112",
      href: "https://github.com/adityapawar112",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/adityapawar112",
      href: "https://linkedin.com/in/adityapawar112",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:pl-64">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          title="Get In Touch"
          description="Let's work together on your next project"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="border border-border rounded p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-card hover:bg-card/80 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent group-hover:text-accent-light transition-colors duration-300 group-hover:scale-110 transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-foreground font-medium mt-1 group-hover:text-accent transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to collaborate!
          </p>
          <a
            href="mailto:contact.aditya.pawar@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group"
          >
            Send Me an Email
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
