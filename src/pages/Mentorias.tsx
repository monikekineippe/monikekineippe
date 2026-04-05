import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sobre8 from "@/assets/sobre-8.jpg";

const Mentorias = () => {
  const programs = [
    {
      title: "Dona de $i",
      label: "Individual",
      text: "Mentoria individual para mulheres que querem resultado sem perder a vida. Limites, consistência, estratégia e decisões maduras.",
      cta: "Entrar na lista de espera",
      link: "/dona-de-si",
      external: false,
    },
    {
      title: "Comunidade Empresária 4.0",
      label: "Ecossistema",
      text: "Ecossistema e networking para quem carrega tudo e não quer mais 'sobreviver'.",
      cta: "Participe da Comunidade Empresária 4.0",
      link: "/empresaria-40",
      external: false,
    },
  ];

  return (
    <>
      <div className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <img src={sobre8} alt="Monike Kineippe" className="w-32 h-32 mx-auto mb-6 object-cover object-top rounded-full gold-border" />
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">Mentoria & Comunidade</span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">Mentoria & Comunidade</h1>
          <p className="text-base md:text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
            Para quem cansou do "tenta mais um pouco" e decidiu construir um negócio com sistema.
          </p>
          <div className="mt-10 w-16 h-px bg-secondary mx-auto" />
        </div>
      </div>

      <Section>
        <div className="space-y-8 max-w-3xl mx-auto">
          {programs.map((p, i) => (
            <div key={i} className="p-8 md:p-10 gold-border rounded-lg bg-card">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">{p.label}</span>
              <h3 className="text-xl md:text-2xl font-serif mt-2 mb-4">{p.title}</h3>
              <p className="text-base text-muted-foreground font-sans leading-relaxed mb-6">{p.text}</p>
              <Button variant="hero" size="lg" asChild>
                {p.external ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">{p.cta}</a>
                ) : (
                  <Link to={p.link}>{p.cta}</Link>
                )}
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Mentorias;
