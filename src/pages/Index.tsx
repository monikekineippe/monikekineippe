import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Bot, Sparkles, BarChart3, Mic } from "lucide-react";
import monike1 from "@/assets/monike-1.jpg";

const Index = () => {
  return (
    <>
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
                Eu transformo inteligência artificial em estratégia real para o seu negócio.
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/75 font-sans leading-relaxed mb-10 max-w-lg">
                Consultoria, treinamento e implementação de IA para empreendedoras que querem escalar com estrutura — não com esgotamento.
              </p>
              <div className="flex justify-center md:justify-start">
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
              />
            </div>
          </div>

          {/* Micro-provas */}
          <div className="mt-16 pt-10 border-t border-primary-foreground/10">
            <div className="flex justify-center gap-12 md:gap-20 text-center">
              {[
                { num: "18+", label: "anos empreendendo" },
                { num: "1.000+", label: "mulheres impactadas" },
                { num: "1", label: "livro publicado" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-2xl md:text-3xl text-secondary">{item.num}</p>
                  <p className="font-sans text-[10px] md:text-xs tracking-wide uppercase text-primary-foreground/50 mt-1">{item.label}</p>
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
              icon: BarChart3,
              title: "Mentoria & Comunidade",
              text: "Mentoria individual para alinhar negócio, estratégia e vida. Comunidade com networking e ecossistema para quem não quer mais crescer sozinha.",
              cta: "Conhecer as opções",
              link: "/mentorias",
            },
            {
              icon: Mic,
              title: "Palestras e Treinamentos",
              text: "IA aplicada, vendas, posicionamento e estrutura. Para eventos, equipes e comunidades.",
              cta: "Solicitar proposta",
              link: "/palestras",
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group p-8 md:p-10 bg-card gold-border rounded-lg hover:border-secondary/60 transition-all duration-300 premium-shadow hover:shadow-lg"
            >
              <card.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">{card.text}</p>
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-secondary group-hover:text-primary transition-colors">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          IA EM AÇÃO — destaque
          ═══════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">IA aplicada</span>
          <h2 className="text-2xl md:text-3xl font-serif mt-4 mb-4">Implementação de IA e Automação para o seu negócio</h2>
          <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            Dois programas com execução real: organização operacional com IA em 45 dias ou reconstrução completa da máquina de vendas em 3 meses. Eu implemento com você — não apenas ensino.
          </p>
          <p className="text-primary-foreground/60 font-sans text-xs mb-8">
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
              alt="Monike Kineippe"
              className="rounded-lg w-full object-cover aspect-[3/4] premium-shadow"
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

      {/* ═══════════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-4">Não sabe por onde começar?</h2>
          <p className="text-primary-foreground/70 font-sans text-sm mb-8 max-w-lg mx-auto">
            O diagnóstico gratuito identifica o gargalo do seu negócio e indica o caminho mais inteligente para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/diagnostico">Fazer meu diagnóstico gratuito</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contato">Agendar conversa</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
