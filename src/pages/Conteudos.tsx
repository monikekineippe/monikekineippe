import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Conteudos = () => {
  const channels = [
    { title: "Instagram", link: "https://www.instagram.com/monikekineippe", icon: Instagram, desc: "Conteúdo diário sobre IA, negócios e bastidores" },
    { title: "YouTube", link: "https://www.youtube.com/@monikekineippe", icon: Youtube, desc: "Aulas, entrevistas e tutoriais práticos" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/monikekineippe/", icon: Linkedin, desc: "Artigos e reflexões sobre estratégia e IA" },
    { title: "TikTok", link: "https://www.tiktok.com/@monikekineippe", icon: null, desc: "Conteúdo rápido sobre IA e empreendedorismo" },
  ];

  return (
    <>
      <PageHero
        tag="Conteúdos"
        title="Conteúdos"
        subtitle="IA aplicada, estratégia e bastidores de quem empreende de verdade."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 gold-border rounded-lg bg-card hover:border-secondary/60 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                {ch.icon ? (
                  <ch.icon className="w-6 h-6 text-secondary" />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                )}
                <h3 className="font-serif text-lg group-hover:text-primary transition-colors">{ch.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-sans">{ch.desc}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Conteudos;
