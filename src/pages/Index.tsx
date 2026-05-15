import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { personSchema, organizationSchema, websiteSchema, faqPage } from "@/lib/schemas";
import { Bot, Sparkles, Mic, Gem, Users, GraduationCap, ArrowLeft } from "lucide-react";
import monike1 from "@/assets/monike-1.jpg";
import precifica3dLogo from "@/assets/precifica3d-logo.png";

const Index = () => {
  return (
    <>
      <SEO
        title="Monike Kineippe | IA e Automação para Negócios Femininos"
        description="IA aplicada a negócios femininos com estratégia, estrutura e linguagem humana. Consultoria, palestras, treinamentos e programas de implementação de IA."
        canonical="/"
        schema={[
          personSchema, 
          organizationSchema, 
          websiteSchema,
          faqPage([
            {
              question: "O que é estratégia de IA para negócios?",
              answer: "É o uso de ferramentas de Inteligência Artificial para automatizar processos, criar assistentes personalizados e otimizar vendas, sempre com foco em resultados reais e linguagem humana, sem complicações técnicas.",
            },
            {
              question: "Preciso saber programar para usar IA?",
              answer: "Não. Meu foco é traduzir a tecnologia para empreendedoras. Implementamos soluções que você e sua equipe conseguem operar facilmente, sem necessidade de conhecimentos técnicos profundos.",
            },
            {
              question: "Como funciona a consultoria de implementação?",
              answer: "Trabalhamos em ciclos (45 dias ou 3 meses) onde mapeamos seus processos, identificamos gargalos e instalamos as automações e assistentes necessários diretamente na sua operação.",
            },
          ])
        ]}
      />
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground section-padding pt-28 md:pt-36">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">
                IA aplicada a negócios femininos
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">
                Consultoria e Estratégia de IA para Negócios Femininos
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/75 font-sans leading-relaxed mb-10 max-w-lg">
                Eu traduzo o que parece complexo — automações, assistentes, fluxos inteligentes — em soluções que funcionam na rotina real do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/ia-humanizada">Conhecer os programas de IA</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-first md:order-last mb-8 md:mb-0">
              <img
                src={monike1}
                alt="Monike Kineippe — Estrategista de IA para negócios femininos"
                className="rounded-lg w-full max-w-xs md:max-w-sm object-cover aspect-[3/4] premium-shadow"
                loading="eager"
                width={400}
                height={533}
              />
            </div>
          </div>

          {/* Micro-provas */}
          <div className="mt-16 pt-10 border-t border-primary-foreground/10">
            <div className="flex justify-center gap-12 md:gap-20 text-center">
              {[
                { num: "+18", label: "anos empreendendo" },
                { num: "+5.000", label: "mulheres impactadas" },
                { num: "1", label: "livro publicado" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-2xl md:text-3xl text-secondary">{item.num}</p>
                  <p className="font-sans text-xs md:text-sm tracking-wide uppercase text-primary-foreground/50 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          O QUE EU FAÇO — 4 pilares
          ═══════════════════════════════════════════ */}
      <Section>
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Como posso te ajudar</span>
          <h2 className="text-2xl md:text-4xl font-serif mt-4">Estratégia de verdade. IA que funciona.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Bot,
              title: "Implementação de IA",
              text: "Automações, assistentes e fluxos inteligentes instalados no seu negócio — em 45 dias ou 3 meses.",
              cta: "Ver programas de IA",
              link: "/ia-humanizada",
            },
            {
              icon: Sparkles,
              title: "CoruJah IA",
              text: "Uma IA estratégica que transforma seu conhecimento em produto digital estruturado em 20 minutos.",
              cta: "Conhecer a CoruJah",
              link: "/corujah",
            },
            {
              icon: Gem,
              title: "Mentoria e Aceleração",
              text: "Dona de $i: aceleração individual de 14 dias para colocar dinheiro em movimento e instalar um sistema real de vendas no seu negócio.",
              cta: "Conhecer a Dona de $i",
              link: "/dona-de-si",
            },
            {
              icon: Users,
              title: "Método$ e Comunidade",
              text: "Workshop Venda $em Vender e a Comunidade Empresária 4.0 — método, networking e ecossistema para quem não quer crescer sozinha.",
              cta: "Conhecer as opções",
              link: "/mentorias",
            },
            {
              icon: Mic,
              title: "Palestras",
              text: "Provocações que ficam: IA aplicada, vendas com verdade e posicionamento com estrutura. Para eventos e congressos.",
              cta: "Ver palestras",
              link: "/palestras",
            },
            {
              icon: GraduationCap,
              title: "Treinamentos",
              text: "Workshops, aulas práticas e imersões para equipes e comunidades. Conteúdo aplicável, com execução real.",
              cta: "Ver treinamentos",
              link: "/treinamentos",
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group p-8 md:p-10 bg-card gold-border rounded-lg hover:border-secondary/60 transition-all duration-300 premium-shadow hover:shadow-lg"
            >
              <card.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-muted-foreground font-sans text-base leading-relaxed mb-4">{card.text}</p>
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-secondary group-hover:text-primary transition-colors">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          CASE — Precifica3D
          ═══════════════════════════════════════════ */}
      <Section variant="accent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Case real</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4">Eu não só ensino IA. Eu construo com ela.</h2>
            <p className="text-muted-foreground font-sans mt-4 max-w-2xl mx-auto">
              O Precifica3D é a prova viva de que a IA, quando bem aplicada, cria soluções escaláveis e lucrativas em tempo recorde.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Coluna da Esquerda: Texto e Contexto */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-4 p-4 bg-white/50 rounded-xl gold-border mb-4">
                <img
                  src={precifica3dLogo}
                  alt="Logo do Precifica3D"
                  className="h-16 md:h-20 object-contain"
                  loading="lazy"
                  width={120}
                  height={80}
                />
                <div className="h-12 w-px bg-secondary/20" />
                <span className="font-serif text-lg italic text-primary/80">O SaaS da impressão 3D</span>
              </div>

              <div className="prose prose-slate font-sans text-muted-foreground leading-relaxed max-w-none space-y-6">
                <p className="text-lg text-primary/90 font-medium">
                  Identifiquei uma lacuna crítica: profissionais de impressão 3D calculavam preços no "achismo" e perdiam lucro.
                </p>
                <p>
                  Construí o <strong className="text-primary">Precifica3D</strong> como uma plataforma completa que automatiza o cálculo de custos — do filamento à depreciação da máquina — usando IA para sugerir margens estratégicas baseadas no mercado.
                </p>
                <p className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary text-primary/80 italic">
                  "Desenvolvido 100% com IA e no-code, sem uma única linha de código manual, e com usuários pagantes desde o primeiro dia."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "SaaS", sub: "Produto Real", icon: Bot },
                  { label: "IA", sub: "Margem Inteligente", icon: Sparkles },
                  { label: "No-code", sub: "Agilidade Total", icon: Gem }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/40 rounded-lg text-center gold-border">
                    <item.icon className="w-5 h-5 text-secondary mx-auto mb-2 opacity-70" />
                    <p className="font-serif text-lg text-secondary leading-none">{item.label}</p>
                    <p className="font-sans text-[10px] tracking-wider uppercase text-muted-foreground mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:shadow-secondary/20 transition-all" asChild>
                  <a href="https://precifica3d.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Visitar o Precifica3D <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Coluna da Direita: Card de Funcionalidades */}
            <div className="lg:col-span-5">
              <div className="relative p-8 bg-primary text-primary-foreground rounded-2xl premium-shadow overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full -ml-12 -mb-12 blur-2xl" />
                
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-secondary mb-8 border-b border-secondary/20 pb-4">
                  Diferenciais do Projeto
                </h3>
                
                <ul className="space-y-6 relative z-10">
                  {[
                    "Cálculo automático de custo real (filamento, energia, desgaste)",
                    "Sugestão de margem via IA por categoria de peça",
                    "Dashboard de gestão de orçamentos e clientes",
                    "Geração de orçamentos profissionais em PDF",
                    "Fluxo de pagamento integrado com assinatura Pro"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-base font-sans text-primary-foreground/90 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm text-primary-foreground/70 font-sans">
                  "Este é o nível de solução que a IA permite entregar hoje: complexidade tecnológica com simplicidade de uso."
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          IA EM AÇÃO — destaque
          ═══════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">IA aplicada</span>
          <h2 className="text-2xl md:text-3xl font-serif mt-4 mb-4">Implementação de IA e Automação para o seu negócio</h2>
          <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl mx-auto mb-4">
            Dois programas com execução real: organização operacional com IA em 45 dias ou reconstrução completa da máquina de vendas em 3 meses. Eu implemento com você — não apenas ensino.
          </p>
          <p className="text-primary-foreground/60 font-sans text-sm mb-8">
            Você não precisa saber de tecnologia. Eu traduzo o complexo em aplicável.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/ia-humanizada">Ver os programas de IA</Link>
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOBRE — com fotos
          ═══════════════════════════════════════════ */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="relative">
            <img
              src={monike1}
              alt="Monike Kineippe — Autora e Estrategista de IA"
              className="rounded-lg w-full object-cover aspect-[3/4] premium-shadow"
              loading="lazy"
              width={400}
              height={533}
            />
          </div>
          <div className="text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Quem é Monike</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-3 mb-6">
              Estratégia de verdade.<br />IA que funciona.<br />Sem programês.
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Empresária há 18 anos, autora e estrategista de IA para negócios femininos. Meu trabalho é pegar o que parece complicado — automações, assistentes inteligentes, fluxos de atendimento e vendas — e transformar em soluções aplicáveis para empreendedoras reais.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Nada de teoria. Nada de fórmula mágica. Estrutura que funciona.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/sobre">Conhecer minha história</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Visual na Home */}
      <Section id="faq" className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-4">Perguntas Frequentes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "O que é estratégia de IA para negócios?",
                a: "É o uso de ferramentas de Inteligência Artificial para automatizar processos, criar assistentes personalizados e otimizar vendas, sempre com foco em resultados reais e linguagem humana, sem complicações técnicas.",
              },
              {
                q: "Preciso saber programar para usar IA?",
                a: "Não. Meu foco é traduzir a tecnologia para empreendedoras. Implementamos soluções que você e sua equipe conseguem operar facilmente, sem necessidade de conhecimentos técnicos profundos.",
              },
              {
                q: "Como funciona a consultoria de implementação?",
                a: "Trabalhamos em ciclos (45 dias ou 3 meses) onde mapeamos seus processos, identificamos gargalos e instalamos as automações e assistentes necessários diretamente na sua operação.",
              },
              {
                q: "A IA vai tirar a humanidade do meu negócio?",
                a: "Pelo contrário. O objetivo é automatizar o que é mecânico para que você tenha mais tempo para a conexão humana, que é o que realmente diferencia negócios femininos.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg">
                <h3 className="font-serif text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-4">Não sabe por onde começar?</h2>
          <p className="text-primary-foreground/70 font-sans text-base mb-8 max-w-lg mx-auto">
            O diagnóstico gratuito identifica o gargalo do seu negócio e indica o caminho mais inteligente para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/diagnostico">Fazer meu diagnóstico gratuito</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
