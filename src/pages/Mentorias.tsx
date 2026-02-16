import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Mentorias = () => {
  const programs = [
    {
      title: "Lapidando Diamante$",
      label: "Grupo",
      text: "Mentoria para destravar estrutura e execução: posicionamento, oferta, conteúdo e vendas com direção.",
      cta: "Aplicar agora",
      link: "/lapidando-diamantes",
      external: false,
    },
    {
      title: "Dona de $i",
      label: "Individual",
      text: "Mentoria individual para mulheres que querem resultado sem perder a vida. Limites, consistência, estratégia e decisões maduras.",
      cta: "Entrar na lista de espera",
      link: "/dona-de-si",
      external: false,
    },
    {
      title: "Método Mulher no Poder",
      label: "Ecossistema",
      text: "Ecossistema e comunidade para quem carrega tudo e quer viver plenamente, sem abrir mão dos sonhos.",
      cta: "Ver detalhes",
      link: "/metodo-mulher-no-poder",
      external: false,
    },
  ];

  return (
    <>
      <div className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <img src={logoIcon} alt="Monike Kineippe" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">Mentorias</span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">Mentorias</h1>
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
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary">{p.label}</span>
              <h3 className="text-xl md:text-2xl font-serif mt-2 mb-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">{p.text}</p>
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
