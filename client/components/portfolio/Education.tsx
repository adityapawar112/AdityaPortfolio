import SectionTitle from "./SectionTitle";

export default function Education() {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Information Technology and Data Science",
      institution: "Ajeenkya D Y Patil University",
      location: "Pune, India",
      period: "Aug 2022 – May 2026 (Expected)",
      year: 2022,
    },
    {
      degree: "Pearson International Advanced Level (IAL)",
      institution: "DHT - Kisumu Senior Academy",
      location: "Kisumu, Kenya",
      period: "2020 - 2022",
      year: 2020,
    },
    {
      degree: "Pearson Edexcel International GCSE (IGCSE)",
      institution: "Jalaram Academy",
      location: "Kisumu, Kenya",
      period: "2020",
      year: 2018,
    },
  ];

  const certifications = [
    "Future Skills for Youth - Deutsche Bank / Rubicon Foundation",
    "Data Science and Machine Learning (Theory and Projects) A to Z - Infosis Springboard",
    "Data Structures and Algorithms Using Java - An Interactive Way - Infosis Springboard",
  ];

  return (
    <section id="education" className="py-20 lg:pl-64">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Education"
          description="Academic background and timeline"
        />

        {/* Horizontal Timeline */}
        <div className="mb-16">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-8 min-w-min">
              {/* Timeline line */}
              <div className="absolute top-[480px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>

                  {/* Card */}
                  <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                      {item.year}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-3">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {item.institution}
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground font-light">
                      <p>{item.location}</p>
                      <p>{item.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <p className="text-sm text-muted-foreground text-center mt-4">
            Scroll right to see older education →
          </p>
        </div>

        {/* Certifications */}
        <div className="animate-in fade-in duration-700">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="flex gap-3 text-muted-foreground font-light hover:text-foreground transition-colors duration-300 group"
              >
                <span className="text-accent font-bold mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  ✓
                </span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
