import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";
import sobre9 from "@/assets/sobre-9.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowRight, Target, Zap, ClipboardList, Calendar } from "lucide-react";
import DonaDeSiForm from "@/components/DonaDeSiForm";

const DonaDeSi = () => {
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
            💎 Dona de $i
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-serif leading-relaxed max-w-2xl mx-auto mb-2">
            7 dias para colocar dinheiro em movimento.<br />
            14 dias para instalar um sistema de vendas.
          </p>
          <p className="text-sm md:text-base text-primary-foreground/60 font-sans leading-relaxed max-w-xl mx-auto mt-6">
            Isso não é mentoria pra "conversar bonito".<br />
            É aceleração personalizada pra quem quer resultado em dias, com plano + execução + correção.
          </p>
          <div className="mt-10">
            <CtaButton>✅ Quero aplicar para a Dona de $i</CtaButton>
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
                "Você já tem entrega validada (clientes ou histórico de venda)",
                "Seu negócio está \"funcionando no improviso\" e você quer previsibilidade",
                "Você precisa de alguém dizendo: faz isso / para com isso / agora é aqui",
                "Você topa um sprint curto com foco (sem desculpa sofisticada)",
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
                "Você quer ir devagar — a Dona de $i é sprint, não caminhada",
                "Você está começando do zero absoluto",
                "Você não vai executar o que for combinado",
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

      {/* 7 DIAS */}
      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">O que acontece em 7 dias</h2>
          </div>
          <p className="text-base text-muted-foreground font-sans mb-6">Em 7 dias, você sai com:</p>
          <ul className="space-y-3 text-base font-sans text-foreground">
            {[
              "Oferta em 1 frase + Oferta em 1 tela (aprovadas por mim)",
              "Script de convite + follow-up (copie e cole)",
              "10 convites feitos (WhatsApp/Direct) com direção",
              "Meta realista: 1 venda / 1–3 clientes (depende do seu ticket)",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <ArrowRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base font-sans text-secondary font-semibold">
            Dinheiro em movimento. Sem perfeccionismo. Sem "postar e rezar".
          </p>
        </div>
      </Section>

      {/* 14 DIAS */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">O que acontece em 14 dias</h2>
          </div>
          <p className="text-base text-muted-foreground font-sans mb-6">Em 14 dias, você instala:</p>
          <ul className="space-y-3 text-base font-sans text-foreground">
            {[
              "Seu processo de vendas (CTA → conversa → script → follow-up → fechamento)",
              "Sua rotina comercial mínima (pra não voltar pro improviso)",
              "Um modelo repetível pra vender toda semana com leveza",
              "IA aplicada para acelerar conteúdo, atendimento e execução",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <ArrowRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COMO FUNCIONA — SPRINT */}
      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">Como funciona</h2>
          </div>
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-secondary mb-8">
            Formato: aceleração individual, online + WhatsApp · Sprint de 14 dias
          </p>

          <div className="space-y-6">
            {[
              { days: "Dia 1–2", title: "Raio-X + Plano (48h)", desc: "Diagnóstico direto: onde o dinheiro está travando e qual é a rota mais curta." },
              { days: "Dia 3–6", title: "Oferta e mensagens (com revisão)", desc: "Você constrói com templates. Eu reviso e deixo \"publicável\"." },
              { days: "Dia 7", title: "Dinheiro em movimento", desc: "Você executa as abordagens com o script (com correções rápidas)." },
              { days: "Dia 8–14", title: "Sistema instalado", desc: "Processo + rotina + ajustes com base no que o mercado respondeu." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xs font-sans font-semibold text-secondary">{step.days}</span>
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
            <p><strong className="text-foreground">Suporte:</strong> WhatsApp com prioridade (janelas combinadas)</p>
            <p><strong className="text-foreground">Entregáveis finais:</strong> oferta, scripts, rotina, CTA e funil de conversa</p>
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg text-sm font-sans text-muted-foreground italic">
            Na Comunidade, você evolui com rede e suporte contínuo.<br />
            Na Dona de $i, eu acelero com você — foco, correção e resultado em dias.
          </div>
        </div>
      </Section>

      {/* ENTREGÁVEIS */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-serif">O que você leva</h2>
          </div>
          <ul className="space-y-3 text-sm font-sans text-foreground">
            {[
              "Oferta em 1 frase + Oferta em 1 tela (versão final)",
              "Script de convite + objeções + follow-up 3 dias",
              "Roteiro de 7 dias (conteúdo + stories + CTA)",
              "Rotina comercial mínima (checklist semanal)",
              "Placar de previsibilidade (leads, conversas, conversão, receita, dreno de horas)",
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
          <p className="text-sm text-muted-foreground font-sans mb-8">
            A Dona de $i é limitada porque exige acompanhamento real.
          </p>
          <CtaButton>✅ Aplicar agora</CtaButton>
          <div className="mt-8 text-left max-w-md mx-auto">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-secondary mb-4">Na aplicação eu avalio:</p>
            <ul className="space-y-2 text-sm font-sans text-muted-foreground">
              {[
                "Se você já tem entrega validada",
                "Se seu gargalo é de aceleração (não de \"começar do zero\")",
                "Se você tem agenda mínima pra executar 14 dias",
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
                "Qual a diferença entre a Dona de $i e a Comunidade?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                A Comunidade é um ecossistema com conteúdo, networking e suporte contínuo. A Dona de $i é sprint individual com execução guiada e correção próxima — resultado em dias, não em semanas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="font-serif text-base text-left">
                "E se meu problema for falta de tempo/execução?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                A gente simplifica e instala rotina mínima. Se o gargalo for operacional pesado, eu recomendo o próximo degrau correto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="font-serif text-base text-left">
                "Eu vou sair vendendo mesmo?"
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-sans">
                Você vai sair com oferta clara + script + 10 convites executados. O objetivo é dinheiro em movimento com ação real.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section variant="wine">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-sans text-primary-foreground/70 mb-2">
            Se você quer estrutura com rede e suporte, conheça a Comunidade.
          </p>
          <p className="text-lg font-serif text-primary-foreground mb-8">
            Se você quer resultado em <strong className="text-secondary">dias</strong>, aplica pra Dona de $i.
          </p>
          <CtaButton>✅ Quero aplicar para a Dona de $i</CtaButton>
        </div>
      </Section>
    </>
  );
};

export default DonaDeSi;
