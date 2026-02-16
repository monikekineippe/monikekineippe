import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "wine" | "accent" | "card";
}

const Section = ({ children, className = "", id, variant = "default" }: SectionProps) => {
  const variants = {
    default: "bg-background",
    wine: "bg-primary text-primary-foreground",
    accent: "bg-accent",
    card: "bg-card",
  };

  return (
    <section id={id} className={`section-padding ${variants[variant]} ${className}`}>
      <div className="container mx-auto max-w-5xl">{children}</div>
    </section>
  );
};

export default Section;
