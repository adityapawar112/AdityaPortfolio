export default function BackgroundTexture() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background dark:to-foreground/5 light:to-foreground/3" />

      {/* Subtle radial gradients for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/8 to-transparent dark:from-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-secondary/8 to-transparent dark:from-secondary/5 blur-3xl" />

      {/* Grid Blueprint Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            className="dark:opacity-40 light:opacity-30"
          >
            {/* Grid lines */}
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground dark:text-white light:text-black"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground dark:text-white light:text-black"
            />
            {/* Grid dots at intersections */}
            <circle
              cx="0"
              cy="0"
              r="1"
              fill="currentColor"
              className="text-foreground dark:text-white light:text-black"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Stronger grid lines for dark mode blueprint feel */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-15 dark:opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: "currentColor",
        }}
      />

      {/* Subtle animated crunch effect (reduced from before) */}
      <div
        className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22/></filter><rect width=%22400%22 height=%22400%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')",
          backgroundSize: "200px 200px",
          animation: "crunchPaper 8s ease-in-out infinite",
        }}
      />

      {/* Animation keyframes */}
      <style>{`
        @keyframes crunchPaper {
          0% {
            opacity: 0.01;
            transform: scale(1) rotate(0deg);
          }
          25% {
            opacity: 0.015;
            transform: scale(1.01) rotate(0.5deg);
          }
          50% {
            opacity: 0.01;
            transform: scale(0.99) rotate(-0.3deg);
          }
          75% {
            opacity: 0.015;
            transform: scale(1.005) rotate(0.3deg);
          }
          100% {
            opacity: 0.01;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
