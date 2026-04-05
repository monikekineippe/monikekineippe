import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Mic, Zap, DollarSign, Bot } from "lucide-react";
import sobre4 from "@/assets/sobre-4.jpg";

const featured = [
  {
    icon: Zap,
    title: "IA não resolve caos. Primeiro estrutura, depois acelera.",
    desc: "Como usar inteligência artificial sem pular a etapa que realmente importa.",
  },
  {
    icon: Bot,
    title: "IA para quem não é de tecnologia: o que toda empreendedora precisa saber agora.",
    desc: "Como usar inteligência artificial no dia a dia do negócio — sem programar, sem complicar.",
  },
  {
    icon: DollarSign,
    title: "Se esforço desse dinheiro, você já estaria rica.",
    desc: "A verdade sobre vendas, sistema e previsibilidade que ninguém conta no palco.",
  },
];


const Palestras = () => {
  return (
    <>
      <PageHero
        tag="Palco"
        title="Palestras e Treinamentos"
        subtitle="IA aplicada, estratégia real e provocações que ficam. Sem motivacional vazio."
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
                <p className="text-base font-sans text-primary-foreground/60 leading-relaxed mt-auto">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WORKSHOPS, AULAS E TREINAMENTOS */}
      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-10 text-center">Workshops, Aulas e Treinamentos</h2>
          <div className="space-y-4">
            {[
              { tag: "Imersão", title: "IA com intenção: automação sem perder humanidade" },
              { tag: "Aula prática", title: "Conteúdo com intenção em 30 min (com IA aplicada)" },
              { tag: "Workshop", title: "Como montar um assistente de IA para seu negócio (sem saber programar)" },
              { tag: "Workshop", title: "Oferta em 1 Tela (em 60 min)" },
              { tag: "Workshop", title: "Script de Direct/WhatsApp que fecha (sem ser chata)" },
              { tag: "Treinamento", title: "Rotina comercial mínima para empreendedoras (3x30 min/semana)" },
              { tag: "Imersão curta", title: "Do off-line ao digital: seu funil simples em 90 min" },
              { tag: "Palestra", title: "Vendas com verdade: vender sem se violentar" },
              { tag: "Palestra", title: "Posicionamento e previsibilidade: estrutura que sustenta" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 gold-border rounded-lg bg-card">
                <span className="shrink-0 inline-block font-sans text-xs tracking-[0.2em] uppercase text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full w-fit">
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
                <h3 className="font-serif text-base mb-1">{f.label}</h3>
                <p className="text-sm text-muted-foreground font-sans">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOBRE A PALESTRANTE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <img
              src={sobre4}
              alt="Monike Kineippe palestrando em evento"
              className="rounded-lg w-full object-cover aspect-[4/3] premium-shadow"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-4 block">Sobre a palestrante</span>
            <h2 className="text-xl font-serif mb-4">Monike Kineippe</h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-4">
              Estrategista de IA para negócios femininos, autora e palestrante. Leva ao palco o que aplica no dia a dia: inteligência artificial acessível, vendas com estrutura e posicionamento com verdade.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="font-serif text-xl text-secondary">18+</p>
                <p className="font-sans text-[10px] tracking-wide uppercase text-muted-foreground">anos empreendendo</p>
              </div>
              <div>
                <p className="font-serif text-xl text-secondary">150h+</p>
                <p className="font-sans text-[10px] tracking-wide uppercase text-muted-foreground">de palco</p>
              </div>
            </div>
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
