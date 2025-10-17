import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:pl-64">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          title="Experience"
          description="Professional journey and key roles"
        />

        <div className="space-y-6">
          <ExperienceCard
            title="Researcher and Engineer Intern"
            company="Ioncure Tech Pvt Ltd."
            location="New Delhi, India"
            period="Mar 2025 – Present"
            description={[
              "Engineered a full-stack automated workflow by integrating a custom chatbot, Zapier, and the ChatGPT API to parse, summarize, and categorize incoming CVs, significantly reducing manual processing time.",
              "Engineered and deployed the full-stack IonCure Symposium website, featuring dynamic content management, responsive UI with Radix UI, and integrated payment gateways (Razorpay, Paypal) using APIs and webhooks.",
              "Developed and produced over 20 educational videos and podcasts for clients by leveraging generative AI, including TTS, LLM-driven scripts, and AI video cloning technologies.",
              "Authored technical documentation and led training sessions for over 10 internal team members and clients on new tools and workflows.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
