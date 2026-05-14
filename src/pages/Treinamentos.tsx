import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Zap, Bot, Target, Settings, MessageSquare, LineChart, Globe, Sparkles, BookOpen, Presentation } from "lucide-react";
import sobre4 from "@/assets/sobre-4.jpg";

const Treinamentos = () => {
  return (
    <>
      <PageHero
        tag="Capacitação"
        title="Treinamentos e Workshops"
        subtitle="Workshops, aulas práticas e imersões para equipes e comunidades. Conteúdo aplicável, com execução real."
      />

      {/* WORKSHOPS, AULAS E TREINAMENTOS */}
      <Section id="treinamentos">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-10 text-center">Workshops, Aulas e Treinamentos</h2>
          <div className="space-y-4">
            {[
              { tag: "Imersão", title: "IA com intenção: automação sem perder humanidade", icon: Zap },
              { tag: "Aula prática", title: "Conteúdo com intenção em 30 min (com IA aplicada)", icon: Bot },
              { tag: "Workshop", title: "Como montar um assistente de IA para seu negócio (sem saber programar)", icon: Settings },
              { tag: "Workshop", title: "Oferta em 1 Tela (em 60 min)", icon: Target },
              { tag: "Workshop", title: "Script de Direct/WhatsApp que fecha (sem ser chata)", icon: MessageSquare },
              { tag: "Treinamento", title: "Rotina comercial mínima para empreendedoras (3x30 min/semana)", icon: LineChart },
              { tag: "Imersão curta", title: "Do off-line ao digital: seu funil simples em 90 min", icon: Globe },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 gold-border rounded-lg bg-card hover:border-secondary/40 transition-colors">
                <span className="shrink-0 inline-block font-sans text-xs tracking-[0.2em] uppercase text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full w-fit">
                  {item.tag}
                </span>
                <p className="font-serif text-base leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-serif mb-8">Formatos para Treinamentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Treinamento", detail: "2 a 4 horas" },
              { label: "Workshop", detail: "Meio período" },
              { label: "Imersão", detail: "1 a 2 dias" },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg">
                <h3 className="font-serif text-base mb-1">{f.label}</h3>
                <p className="text-sm text-muted-foreground font-sans">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOBRE A MENTORA */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <img
              src={sobre4}
              alt="Monike Kineippe em treinamento"
              className="rounded-lg w-full object-cover aspect-[4/3] premium-shadow"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-4 block">Sobre a mentora</span>
            <h2 className="text-xl font-serif mb-4">Monike Kineippe</h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-4">
              Estrategista de IA para negócios femininos, autora e mentora. Leva para os treinamentos o que aplica no dia a dia: inteligência artificial acessível, vendas com estrutura e posicionamento com verdade.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <div>
                <p className="font-serif text-xl text-secondary">18+</p>
                <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground">anos empreendendo</p>
              </div>
              <div>
                <p className="font-serif text-xl text-secondary">+5k</p>
                <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground">alunas impactadas</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="card">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-serif mb-4">Leve um treinamento para sua empresa ou comunidade</h2>
          <p className="text-base text-muted-foreground font-sans mb-8">
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

export default Treinamentos;
