import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Mic, Zap, DollarSign } from "lucide-react";

const featured = [
  {
    icon: DollarSign,
    title: "Trabalhar muito e ganhar pouco não é virtude. É alerta.",
    desc: "Por que esforço sem estrutura não gera resultado — e o que fazer em vez disso.",
  },
  {
    icon: Zap,
    title: "IA não resolve caos. Primeiro estrutura, depois acelera.",
    desc: "Como usar inteligência artificial sem pular a etapa que realmente importa.",
  },
  {
    icon: Mic,
    title: "Se esforço desse dinheiro, você já estaria rica.",
    desc: "A verdade sobre vendas, sistema e previsibilidade que ninguém conta no palco.",
  },
];

const otherThemes = [
  "Esse não é o ano da força. É o ano do sistema.",
  "Vendas com verdade: vender sem se violentar",
  "IA com intenção: automação sem perder humanidade",
  "Posicionamento e previsibilidade: estrutura que sustenta",
];

const Palestras = () => {
  return (
    <>
      <PageHero
        tag="Palco"
        title="Palestras e Treinamentos"
        subtitle="Menos motivacional vazio. Mais direção prática."
      />

      {/* PALESTRAS EM DESTAQUE */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">
            Palestras em destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <div
                key={i}
                className="relative p-8 md:p-10 rounded-lg bg-primary text-primary-foreground border border-secondary/20 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-secondary/15">
                  <p.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl leading-snug mb-4">
                  {p.title}
                </h3>
                <p className="text-sm font-sans text-primary-foreground/60 leading-relaxed mt-auto">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OUTROS TEMAS */}
      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Outros temas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherThemes.map((t, i) => (
              <div key={i} className="p-6 gold-border rounded-lg bg-card">
                <p className="font-serif text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WORKSHOPS & TREINAMENTOS */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-10 text-center">Workshops, Aulas e Treinamentos</h2>
          <div className="space-y-4">
            {[
              { tag: "Workshop", title: "Oferta em 1 Tela (em 60 min)" },
              { tag: "Workshop", title: "Script de Direct/WhatsApp que fecha (sem ser chata)" },
              { tag: "Aula prática", title: "Conteúdo com intenção em 30 min (com IA aplicada)" },
              { tag: "Treinamento", title: "Rotina comercial mínima para mães (3x30 min/semana)" },
              { tag: "Imersão curta", title: "Do off-line ao digital: seu funil simples em 90 min" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 gold-border rounded-lg bg-card">
                <span className="shrink-0 inline-block font-sans text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full w-fit">
                  {item.tag}
                </span>
                <p className="font-serif text-base leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>


      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Formatos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Palestra", detail: "45 a 90 min" },
              { label: "Treinamento", detail: "2 a 4 horas" },
              { label: "Workshop", detail: "Meio período" },
              { label: "Imersão", detail: "1 dia" },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg text-center">
                <h3 className="font-serif text-sm mb-1">{f.label}</h3>
                <p className="text-xs text-muted-foreground font-sans">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="card">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-serif mb-4">Para contratar</h2>
          <p className="text-sm text-muted-foreground font-sans mb-8">
            Para convites e proposta, fale direto com a Carine.
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">Falar com Carine no WhatsApp</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Palestras;
