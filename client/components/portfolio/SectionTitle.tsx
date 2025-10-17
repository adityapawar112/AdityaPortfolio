interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
      <h2 className="text-5xl font-bold text-foreground mb-4 tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground font-light">{description}</p>
      )}
      <div className="w-12 h-0.5 bg-primary rounded-full mt-6" />
    </div>
  );
}
