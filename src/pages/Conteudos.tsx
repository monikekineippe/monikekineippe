import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const Conteudos = () => {
  const channels = [
    { title: "Instagram", link: "#", icon: "📸" },
    { title: "YouTube", link: "#", icon: "🎬" },
    { title: "Newsletter / Substack", link: "#", icon: "✉️" },
    { title: "LinkedIn", link: "#", icon: "💼" },
  ];

  return (
    <>
      <PageHero
        tag="Conteúdos"
        title="Conteúdos"
        subtitle="Eu escrevo e ensino para você pensar melhor e decidir melhor."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 gold-border rounded-lg bg-card text-center hover:border-secondary/60 transition-all group"
            >
              <span className="text-2xl">{ch.icon}</span>
              <h3 className="font-serif text-lg mt-3 group-hover:text-primary transition-colors">{ch.title}</h3>
            </a>
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">Assinar a newsletter</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Conteudos;
