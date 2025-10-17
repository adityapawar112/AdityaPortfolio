export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/95 text-background py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          © {currentYear} Aditya Pawar. All rights reserved.
        </p>
        <p className="text-sm opacity-75 font-light">
          Designed with attention to detail and built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
