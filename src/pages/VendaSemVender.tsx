import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";
import sobre9 from "@/assets/sobre-9.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowRight, Heart, MessageCircle, Calendar, ClipboardList } from "lucide-react";
import DonaDeSiForm from "@/components/DonaDeSiForm";

const VendaSemVender = () => {
  const [formOpen, setFormOpen] = useState(false);

  const CtaButton = ({ children }: { children: React.ReactNode }) => (
    <Button variant="gold" size="xl" className="whitespace-normal px-6 md:px-12" onClick={() => setFormOpen(true)}>
      {children}
    </Button>
  );

  return (
    <>
      <DonaDeSiForm open={formOpen} onOpenChange={setFormOpen} />

      {/* HERO */}
      <div className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <img src={logoIcon} alt="Monike Kineippe" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-4">Mentoria Individual</span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-4">
            Venda $em Vender
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-serif leading-relaxed max-w-2xl mx-auto mb-2">
            Aprenda a vender com leveza e autenticidade.<br />
            Sem pressão. Sem manipulação. Sem parecer vendedora.
          </p>
          <p className="text-sm md:text-base text-primary-foreground/60 font-sans leading-relaxed max-w-xl mx-auto mt-6">
            Uma mentoria para mulheres que querem vender mais sem perder sua essência.<br />
            Estratégia + prática + ajustes em tempo real.
          </p>
          <div className="mt-10">
            <CtaButton>Quero aplicar para o Venda $em Vender</CtaButton>
          </div>
          <div className="mt-10 w-16 h-px bg-secondary mx-auto" />
        </div>
      </div>

      {/* FOTO */}
      <Section>
        <div className="max-w-xs mx-auto">
          <img
            src={sobre9}
            alt="Monike Kineippe"
            className="rounded-lg w-full object-cover aspect-square premium-shadow"
          />
        </div>
      </Section>

      {/* PARA QUEM É / NÃO É */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> É pra você se:
            </h2>
            <ul className="space-y-4 text-base font-sans text-muted-foreground">
              {[
                "Você tem um bom produto/serviço mas sente dificuldade em vender",
                "Você evita fazer ofertas porque teme parecer 'chata' ou 'insistente'",
                "Você quer vender de forma alinhada aos seus valores",
                "Você está pronta para praticar e receber feedback direto",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" /> Não é pra você se:
            </h2>
            <ul className="space-y-4 text-base font-sans text-muted-foreground">
              {[
                "Você quer fórmulas mágicas de persuasão agressiva",
                "Você não está disposta a praticar conversas de venda",
                "Você acredita que vender é sinônimo de enganar",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">O que você vai aprender</h2>
          </div>
          <p className="text-base text-muted-foreground font-sans mb-6">Durante a mentoria, você desenvolve:</p>
          <ul className="space-y-3 text-base font-sans text-foreground">
            {[
              "Mentalidade de abundância e merecimento (vender é servir)",
              "Técnicas de conversa natural que conduzem à venda sem forçar",
              "Como lidar com objeções de forma elegante e efetiva",
              "Script de oferta que soa como conversa, não como pitch",
              "Estratégias de follow-up que mantêm relacionamento (não incomodam)",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <ArrowRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">Como funciona</h2>
          </div>
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-secondary mb-8">
            Formato: encontros individuais, online + suporte por WhatsApp
          </p>

          <div className="space-y-6">
            {[
              { num: "01", title: "Diagnóstico da sua relação com vendas", desc: "Identificamos crenças limitantes, padrões que te sabotam e oportunidades imediatas." },
              { num: "02", title: "Construção da sua oferta conversacional", desc: "Criamos juntas a forma de apresentar seu produto de modo natural e alinhado." },
              { num: "03", title: "Prática com feedback em tempo real", desc: "Você vende, eu observo, corrijo e refinamos na hora." },
              { num: "04", title: "Sistema de vendas leve e repetível", desc: "Você sai com um processo que pode usar todos os dias sem desconforto." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 shrink-0 text-right">
                  <span className="text-xs font-sans font-semibold text-secondary">{step.num}</span>
                </div>
                <div className="w-px bg-border self-stretch" />
                <div>
                  <h3 className="font-serif text-base mb-1">{step.title}</h3>
                  <p className="text-base text-muted-foreground font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 gold-border rounded-lg bg-card text-base font-sans text-muted-foreground space-y-1">
            <p><strong className="text-foreground">Suporte:</strong> WhatsApp com prioridade entre sessões</p>
            <p><strong className="text-foreground">Entregáveis finais:</strong> script personalizado, roteiro de conversa, plano de ação</p>
          </div>
        </div>
      </Section>

      {/* ENTREGÁVEIS */}
      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">O que você leva</h2>
          </div>
          <ul className="space-y-3 text-base font-sans text-foreground">
            {[
              "Script de abordagem e oferta personalizado para seu negócio",
              "Roteiro de conversa para WhatsApp e reuniões",
              "Técnicas de handling de objeções adaptadas ao seu estilo",
              "Checklist de follow-up que mantém o relacionamento",
              "Plano de ação de 30 dias para implementar sozinha",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* APLICAÇÃO */}
      <Section variant="card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Aplicação</h2>
          <p className="text-base text-muted-foreground font-sans mb-8">
            O Venda $em Vender é limitado para garantir atenção individual de qualidade.
          </p>
          <CtaButton>Quero aplicar agora</CtaButton>
          <div className="mt-8 text-left max-w-md mx-auto">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-secondary mb-4">Na aplicação eu avalio:</p>
            <ul className="space-y-2 text-base font-sans text-muted-foreground">
              {[
                "Se você já tem um produto ou serviço para vender",
                "Se está disposta a praticar e receber feedback direto",
                "Se tem disponibilidade para as sessões e execução entre elas",
              ].map((t, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-secondary">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif mb-8 text-center">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="font-serif text-base text-left">
                "Qual a diferença entre Venda $em Vender e a Dona de $i?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                A Dona de $i é uma aceleração completa de negócio em 14 dias (oferta + vendas + sistema). O Venda $em Vender foca especificamente na habilidade de vender de forma natural e autêntica — é para quem já tem negócio mas sente dificuldade na conversa de venda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="font-serif text-base text-left">
                "E se eu tiver muito medo de vender?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                Esse é exatamente o público do programa. Trabalhamos crenças limitantes na primeira sessão e você pratica em ambiente seguro comigo antes de ir para o mercado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="font-serif text-base text-left">
                "Quanto tempo dura a mentoria?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                O programa tem duração de 4 semanas, com encontros semanais de 60 minutos + suporte por WhatsApp entre sessões.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section variant="wine">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-sans text-primary-foreground/70 mb-2">
            Se você quer estrutura completa de negócio, conheça a Dona de $i.
          </p>
          <p className="text-lg font-serif text-primary-foreground mb-8">
            Se você quer vender com <strong className="text-secondary">leveza e resultado</strong>, aplica pra Venda $em Vender.
          </p>
          <CtaButton>Quero aplicar para o Venda $em Vender</CtaButton>
        </div>
      </Section>
    </>
  );
};

export default VendaSemVender;
