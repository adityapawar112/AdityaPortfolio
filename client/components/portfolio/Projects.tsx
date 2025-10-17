import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "HealersHarbor.com (IonCure Conference Website)",
      description:
        "A full-stack scientific conference platform for the IonCure managing hosting across Vercel and Hostinger.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Razorpay",
        "Paypal",
        "Neon",
      ],
      highlights: [
        "Responsive design with Tailwind CSS",
        "Interactive UI components with Radix UI",
        "Dynamic content management for schedules and speakers",
        "Payment gateway integration with APIs and webhooks",
        "Managed hosting on Vercel and Hostinger",
      ],
    },
    {
      title: "BlueIn (SIH Prototype for OBIS Data Visualization)",
      description:
        "Full-stack prototype for Smart India Hackathon addressing marine data accessibility challenges.",
      technologies: [
        "Node.js",
        "React",
        "TypeScript",
        "Supabase",
        "Drizzle ORM",
      ],
      highlights: [
        "Extract and visualize reports from OBIS API",
        "Interactive dashboard with Chart.js visualizations",
        "Modern UI with Tailwind CSS and Radix UI",
        "PostgreSQL database with Drizzle ORM",
        "Type-safe queries and data management",
      ],
    },
    {
      title: "Socialpidia (Social Media Platform Demo)",
      description:
        "A full-stack social media platform demo deployed on Heroku with automated CI/CD pipeline.",
      technologies: ["Django", "React", "Python", "GitHub Actions", "Heroku"],
      highlights: [
        "Robust Django backend with RESTful APIs",
        "Dynamic React frontend with real-time updates",
        "Basic CI/CD pipeline with GitHub Actions for automated testing and deployment",
        "User authentication and authorization system",
        "Post creation, comments, and likes functionality",
      ],
    },
    {
      title: "UK Retail Customer Analysis Using K-means Clustering",
      description:
        "Data science project applying machine learning to segment retail customer data and identify purchasing patterns.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
      ],
      highlights: [
        "K-Means clustering algorithm to segment customer data",
        "Identified distinct purchasing patterns and customer segments",
        "Data visualization with Matplotlib and Seaborn",
        "Statistical analysis using NumPy and Pandas",
        "Actionable insights for retail business strategy",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:pl-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Projects"
          description="Featured work and applications"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
