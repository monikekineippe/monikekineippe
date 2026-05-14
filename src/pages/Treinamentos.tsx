import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { course, breadcrumb, faqPage } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Zap, Bot, Target, Settings, MessageSquare, LineChart, Globe, Sparkles, BookOpen, Presentation } from "lucide-react";
import sobre4 from "@/assets/sobre-4.jpg";

const Treinamentos = () => {
  return (
    <>
      <SEO
        title="Treinamentos e Workshops — IA, Vendas e Operação para Equipes"
        description="Workshops, aulas práticas e imersões para equipes e comunidades. Conteúdo aplicável sobre IA, vendas e estrutura comercial."
        canonical="/treinamentos"
        schema={[
          course({
            name: "Treinamentos e Workshops Monike Kineippe",
            description: "Treinamentos práticos sobre IA aplicada, vendas, conteúdo e estrutura comercial para empresas e comunidades.",
            url: "/treinamentos",
          }),
          faqPage([
            {
              question: "Os treinamentos são presenciais ou online?",
              answer: "Oferecemos ambos os formatos. Podem ser realizados in-company (presencial) ou via plataformas de videoconferência para equipes remotas.",
            },
            {
              question: "Qual a duração média dos workshops?",
              answer: "Os workshops costumam durar meio período (3 a 4 horas), enquanto imersões podem levar de 1 a 2 dias inteiros.",
            },
            {
              question: "Os treinamentos incluem material de apoio?",
              answer: "Sim, todos os treinamentos e workshops incluem material digital de apoio, guias práticos e, em alguns casos, acesso a bibliotecas de prompts específicos.",
            },
          ]),
          breadcrumb([
            { name: "Início", path: "/" },
            { name: "Treinamentos", path: "/treinamentos" },
          ]),
        ]}
      />
      <PageHero
        tag="Capacitação"
        title="Treinamentos e Workshops"
        subtitle="Workshops, aulas práticas e imersões para equipes e comunidades. Conteúdo aplicável, com execução real."
      />

      {/* WORKSHOPS, AULAS E TREINAMENTOS */}
      <Section id="treinamentos">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-10 text-center">Nossos Formatos</h2>
          
          <Tabs defaultValue="workshops" className="w-full">
            <TabsList className="w-full justify-center mb-12 bg-transparent gap-4 md:gap-8 border-b rounded-none h-auto p-0">
              <TabsTrigger 
                value="workshops" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary rounded-none px-4 pb-4 font-serif text-lg bg-transparent border-b-2 border-transparent transition-all"
              >
                Workshops
              </TabsTrigger>
              <TabsTrigger 
                value="aulas" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary rounded-none px-4 pb-4 font-serif text-lg bg-transparent border-b-2 border-transparent transition-all"
              >
                Aulas Práticas
              </TabsTrigger>
              <TabsTrigger 
                value="treinamentos" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary rounded-none px-4 pb-4 font-serif text-lg bg-transparent border-b-2 border-transparent transition-all"
              >
                Imersões & Treinamentos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workshops" className="mt-0 space-y-4 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {[
                  { title: "Como montar um assistente de IA para seu negócio (sem saber programar)", icon: Settings, desc: "Aprenda a criar ferramentas personalizadas que automatizam tarefas repetitivas." },
                  { title: "Oferta em 1 Tela (em 60 min)", icon: Target, desc: "Estruturação rápida de ofertas irresistíveis e visualmente claras." },
                  { title: "Script de Direct/WhatsApp que fecha (sem ser chata)", icon: MessageSquare, desc: "Comunicação persuasiva e elegante para converter leads em clientes." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 gold-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aulas" className="mt-0 space-y-4 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {[
                  { title: "Conteúdo com intenção em 30 min (com IA aplicada)", icon: Bot, desc: "Método para criar conteúdo estratégico e autêntico em tempo recorde." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 gold-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="treinamentos" className="mt-0 space-y-4 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {[
                  { tag: "Imersão", title: "IA com intenção: automação sem perder humanidade", icon: Zap, desc: "Deep dive no uso estratégico de IA para escala sem descaracterizar sua marca." },
                  { tag: "Treinamento", title: "Rotina comercial mínima para empreendedoras (3x30 min/semana)", icon: LineChart, desc: "A estrutura comercial necessária para quem não tem tempo a perder." },
                  { tag: "Imersão curta", title: "Do off-line ao digital: seu funil simples em 90 min", icon: Globe, desc: "Transição rápida e eficiente para o posicionamento digital lucrativo." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 gold-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-sans text-[10px] tracking-widest uppercase text-secondary font-bold">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
              alt="Monike Kineippe liderando treinamento corporativo de IA"
              className="rounded-lg w-full object-cover aspect-[4/3] premium-shadow"
              loading="lazy"
              width={448}
              height={336}
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

      {/* FAQ Visual */}
      <Section id="faq" className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "Os treinamentos são presenciais ou online?",
                a: "Oferecemos ambos os formatos. Podem ser realizados in-company (presencial) ou via plataformas de videoconferência para equipes remotas.",
              },
              {
                q: "Qual a duração média dos workshops?",
                a: "Os workshops costumam durar meio período (3 a 4 horas), enquanto imersões podem levar de 1 a 2 dias inteiros.",
              },
              {
                q: "Os treinamentos incluem material de apoio?",
                a: "Sim, todos os treinamentos e workshops incluem material digital de apoio, guias práticos e, em alguns casos, acesso a bibliotecas de prompts específicos.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
