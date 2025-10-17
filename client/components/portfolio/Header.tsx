import CardNav from "./CardNav";
import { useTheme } from "@/hooks/use-theme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  // Define navigation items for the CardNav component
  const navItems = [
    {
      label: "About",
      bgColor: theme === "dark" ? "#059669" : "#6cb654",
      textColor: theme === "dark" ? "#ffffff" : "#052e0f",
      links: [
        {
          label: "Overview",
          href: "#about",
          ariaLabel: "Go to About section"
        },
        {
          label: "Experience",
          href: "#experience",
          ariaLabel: "Go to Experience section"
        }
      ]
    },
    {
      label: "Work",
      bgColor: theme === "dark" ? "#6cb654" : "#059669",
      textColor: theme === "dark" ? "#052e0f" : "#ffffff",
      links: [
        {
          label: "Projects",
          href: "#projects",
          ariaLabel: "Go to Projects section"
        },
        {
          label: "Skills",
          href: "#skills",
          ariaLabel: "Go to Skills section"
        }
      ]
    },
    {
      label: "Connect",
      bgColor: theme === "dark" ? "#2d2d2d" : "#f5f5f5",
      textColor: theme === "dark" ? "#f5f5f5" : "#2d2d2d",
      links: [
        {
          label: "Contact",
          href: "#contact",
          ariaLabel: "Go to Contact section"
        },
        {
          label: "Resume",
          href: "/resume",
          ariaLabel: "View Resume"
        }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle navigation link clicks
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <CardNav
      logo="/placeholder.svg"
      logoAlt="Aditya Pawar Logo"
      items={navItems}
      baseColor={theme === "dark" ? "#2d2d2d" : "#f5f5f5"}
      menuColor={theme === "dark" ? "#6cb654" : "#059669"}
      theme={theme}
      onThemeToggle={toggleTheme}
    />
  );
}
