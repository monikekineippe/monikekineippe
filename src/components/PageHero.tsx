interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

const PageHero = ({ title, subtitle, tag }: PageHeroProps) => {
  return (
    <div className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container mx-auto max-w-3xl">
        {tag && (
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">
            {tag}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-10 w-16 h-px bg-secondary mx-auto" />
      </div>
    </div>
  );
};

export default PageHero;
