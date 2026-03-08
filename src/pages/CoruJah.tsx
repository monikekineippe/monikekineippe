import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Sparkles, Layers, Zap, XIcon, Check, ChevronDown,
  Shield, BookOpen, FileText, PenTool, DollarSign,
  Image, MessageSquare, GraduationCap, Users
} from "lucide-react";
import logoMk from "@/assets/logo-mk.png";
import monike1 from "@/assets/monike-1.jpg";
import corujahMockup from "@/assets/corujah-hero-mockup.png";

const buyLink = "https://payfast.greenn.com.br/redirect/212761";

/* ─── Reveal wrapper ─── */
const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

/* ════════════════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-md" : "bg-card/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logoMk} alt="MK" className="h-10 w-auto" />
          <span className="text-sm font-normal font-serif hidden sm:inline text-foreground">CoruJah IA</span>
        </a>
        <a
          href="#preco"
          className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-green-cta transition-all hover:bg-green-cta-dark"
        >
          Quero minha CoruJah
        </a>
      </div>
    </nav>
  );
};

/* ════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════ */
const Hero = () => (
  <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-background">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <Reveal className="flex justify-center">
        <img src={corujahMockup} alt="CoruJah IA - Plataforma" className="w-full max-w-md" />
      </Reveal>

      <Reveal>
        <span className="inline-block text-xs font-medium font-sans tracking-widest uppercase mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary">
          IA Estratégica para Empreendedoras
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.15] mb-6 text-foreground">
          Você não precisa aprender mais nada para criar um{" "}
          <span className="text-secondary">produto digital</span>
        </h1>

        <p className="text-xl mb-2 font-medium font-sans text-foreground">
          A CoruJah te ajuda a fazer acontecer!
        </p>

        <p className="text-lg mb-10 leading-relaxed font-sans text-muted-foreground">
          Uma IA estratégica feita para empreendedoras experientes que travam na hora de organizar, decidir e lançar.
        </p>

        <a
          href="#preco"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02] bg-green-cta font-sans"
        >
          QUERO TER MEU PRODUTO DIGITAL
        </a>

        <p className="mt-4 text-sm text-muted-foreground font-sans">
          🔒 7 dias de garantia incondicional
        </p>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   A TRAVA
   ════════════════════════════════════════════════════════ */
const TheProblem = () => (
  <section className="py-20 md:py-28 px-6 bg-card">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Vamos falar a verdade?
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <div className="space-y-4 font-sans text-muted-foreground">
            <p className="text-base leading-relaxed">
              Existe um tipo específico de trava que só mulheres experientes sentem.
            </p>
            <p>Não é falta de estudo.</p>
            <p>Não é falta de vivência.</p>
            <p>E definitivamente não é falta de capacidade.</p>
            <p className="font-semibold text-foreground">Você já acumulou conhecimento.</p>
            <p>Já viveu na prática. Já resolveu problemas reais. Já ajudou pessoas — mesmo que nunca tenha chamado isso de "produto".</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl p-8 bg-background">
            <p className="font-semibold mb-4 text-foreground font-sans">
              O problema começa quando você tenta organizar tudo isso.
            </p>
            <p className="text-sm leading-relaxed mb-4 text-muted-foreground font-sans">
              Quando precisa decidir o que entra, o que fica de fora, como transformar anos de experiência em algo claro, vendável e estruturado.
            </p>
            <p className="font-medium italic mb-4 text-secondary font-sans">
              De repente, tudo parece demais.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li>• Ideias demais</li>
              <li>• Possibilidades demais</li>
              <li>• Informações demais</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <blockquote className="mt-12 text-center border-l-4 border-primary pl-6 py-4 mx-auto max-w-2xl">
          <p className="font-serif text-lg italic text-foreground">
            "Essa trava não é falha. É falta de método certo para o seu nível de maturidade. E é exatamente aí que a CoruJah entra."
          </p>
        </blockquote>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   O QUE A CORUJAH FAZ
   ════════════════════════════════════════════════════════ */
const WhatItDoes = () => {
  const features = [
    { icon: Layers, title: "Estrutura Completa", desc: "Cria o nome, define os módulos, estrutura a oferta com bônus e preço, escreve sua copy e monta os criativos para divulgação." },
    { icon: Sparkles, title: "Inteligência Estratégica", desc: "Entende seu conhecimento e transforma em um produto digital real. Nada de fórmulas prontas ou modelos genéricos." },
    { icon: Zap, title: "Resultados Rápidos", desc: "Você só precisa dizer o que sabe. Em menos de 20 minutos, tem um produto digital estruturado e pronto para vender." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Conheça a CoruJah — sua nova melhor amiga
          </h2>
          <p className="text-lg mb-14 text-muted-foreground font-sans">
            A inteligência estratégica que transforma seu conhecimento em produto digital.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={i}>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm h-full text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-primary/10">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-sans">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   ANTES vs DEPOIS
   ════════════════════════════════════════════════════════ */
const BeforeAfter = () => {
  const before = [
    "Ideias desorganizadas e dispersas",
    "Paralisia ao tentar estruturar",
    "Sensação de que nada fica pronto",
    "Frustração com templates genéricos",
    "Meses tentando organizar sozinha",
    "Insegurança sobre precificação",
  ];
  const after = [
    "Produto digital completamente estruturado",
    "Clareza total sobre sua oferta",
    "Copy de vendas pronta e persuasiva",
    "Preço e bônus estratégicos definidos",
    "Criativos prontos para divulgação",
    "Confiança para lançar e vender",
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">
            A transformação que você vai experimentar
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-xl p-8 h-full bg-muted">
              <h3 className="font-serif text-xl font-semibold mb-6 text-muted-foreground">
                ANTES
              </h3>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans">
                    <XIcon size={18} className="mt-0.5 flex-shrink-0 text-destructive" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl p-8 h-full bg-primary/5">
              <h3 className="font-serif text-xl font-semibold mb-6 text-primary">
                DEPOIS
              </h3>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="text-center mt-10">
          <a
            href="#preco"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02] bg-green-cta font-sans"
          >
            QUERO MINHA CORUJAH AGORA
          </a>
        </Reveal>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   SÍNDROME DA IMPOSTORA
   ════════════════════════════════════════════════════════ */
const ImpostorSyndrome = () => {
  const lies = [
    "Eu não tenho nada pra ensinar...",
    "Ninguém vai me pagar pelo que eu sei...",
    "O que eu sei todo mundo sabe!",
    "Não vou conseguir vender porque já tem muita gente vendendo",
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            A 1ª missão da CoruJah é caçar a sua
          </h2>
          <p className="text-2xl font-serif font-bold mb-10 text-secondary">
            Síndrome da Impostora
          </p>
        </Reveal>

        <div className="space-y-4 mb-10">
          {lies.map((lie, i) => (
            <Reveal key={i}>
              <div className="rounded-lg px-6 py-4 bg-primary/70 border border-primary-foreground/10">
                <p className="text-base italic text-primary-foreground/80 font-sans">
                  "{lie}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-3xl font-serif font-bold mb-6 text-primary-foreground">
            TUDO MENTIRA!
          </p>
          <p className="text-base leading-relaxed mb-6 text-primary-foreground/70 font-sans">
            O mercado está cheio de gente vendendo o que não sabe. E você, cheia de experiência, conteúdo e boa vontade, com medo de botar a cara no sol?
          </p>
          <p className="font-serif text-lg italic text-secondary">
            "EU ACREDITO EM VOCÊ, como um dia eu quis que alguém tivesse acreditado em mim."
          </p>
          <p className="text-sm mt-2 text-primary-foreground/50 font-sans">— Monike Kineippe</p>
        </Reveal>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   O QUE VOCÊ RECEBE
   ════════════════════════════════════════════════════════ */
const WhatYouGet = () => {
  const items = [
    { icon: Sparkles, title: "Acesso à CoruJah – Sua IA Estratégica", desc: "Transforme seu conhecimento em um infoproduto completo, com estrutura pensada para conversão, em questão de horas." },
    { icon: Layers, title: "Estrutura Completa do Produto", desc: "Nome, módulos, tópicos e sugestões de entrega organizadas de forma lógica." },
    { icon: FileText, title: "Copy da Página de Vendas", desc: "Copy persuasiva escrita pela IA com base na sua essência, que fala diretamente com sua audiência." },
    { icon: DollarSign, title: "Oferta com Preço e Bônus", desc: "Solução com clareza e valor percebido alto, com sugestões de bônus estratégicos e preço validado." },
    { icon: Image, title: "Criativos para Divulgação", desc: "Posts prontos e ideias de conteúdos para divulgar seu produto com mais confiança." },
    { icon: MessageSquare, title: "Pacote de Prompts Estratégicos", desc: "Direcione a IA com precisão, criando novas versões de conteúdos com consistência." },
    { icon: GraduationCap, title: "Treinamento Rápido", desc: "Use a CoruJah com autonomia, mesmo que nunca tenha mexido com IA antes." },
    { icon: Users, title: "Grupo de Networking", desc: "Conviva com outras mulheres criando seus produtos digitais, trocando experiências e parcerias." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            O que você vai receber com a CoruJah
          </h2>
          <p className="text-center text-lg mb-14 text-muted-foreground font-sans">
            Tudo que precisa para transformar seu conhecimento em um produto digital lucrativo e escalável.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <Reveal key={i}>
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-full hover:shadow-md transition-shadow">
                <item.icon size={24} className="text-primary mb-3" />
                <h3 className="font-serif text-sm font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground font-sans">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   DEPOIMENTOS
   ════════════════════════════════════════════════════════ */
const Testimonials = () => (
  <section className="py-20 md:py-28 px-6 bg-card">
    <div className="max-w-5xl mx-auto text-center">
      <Reveal>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Outras mulheres já estão criando com a CoruJah
        </h2>
        <p className="text-base mb-14 text-muted-foreground font-sans">
          Elas estavam travadas, com ideias na cabeça e pouca estrutura. Hoje, têm produtos digitais prontos e vendem com leveza.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          { src: "/corujah/depoimento-ana.png", alt: "Depoimento Ana" },
          { src: "/corujah/depoimento-2.png", alt: "Depoimento" },
          { src: "/corujah/depoimento-gabi.png", alt: "Depoimento Gabi" },
        ].map((img, i) => (
          <Reveal key={i}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-base italic leading-relaxed text-muted-foreground font-sans">
            💬 "Simplesmente apaixonada. A CoruJah fez o que eu tentei fazer por meses. Agora tenho meu produto pronto e uma direção clara. Em poucas horas, senti que desbloqueei anos."
          </p>
        </blockquote>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   PREÇO
   ════════════════════════════════════════════════════════ */
const Pricing = () => {
  const included = [
    "Acesso vitalício à versão atual da CoruJah",
    "Atualizações por 1 ano",
    "Estrutura completa do produto (nome, módulos, entrega)",
    "Copy da página de vendas pronta",
    "Oferta com preço e bônus sugeridos",
    "Criativos para divulgar e vender",
    "Pacote de prompts estratégicos",
    "Treinamento de uso rápido",
    "Grupo de networking Empresária 4.0",
  ];

  const bonuses = [
    "Checklist e Guia de Uso Inteligente da CoruJah",
    "Dicionário - Carreira Digital",
    "Descritivo de Talentos - Carreira Digital",
    "Como construir uma página de vendas gratuita",
    "Template de Página de Vendas gratuito",
    "Plataformas Digitais, qual escolher?",
    "Masterclass: Profissionalizando seu negócio",
  ];

  return (
    <section id="preco" className="py-20 md:py-28 px-6 bg-primary">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-primary-foreground">
            A oportunidade de colocar seu produto no mundo está aqui.
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-card rounded-3xl p-10 md:p-12 shadow-2xl text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-5 py-2 rounded-full text-white bg-green-cta font-sans">
              OFERTA DE LANÇAMENTO
            </span>

            <p className="text-sm line-through mb-1 text-muted-foreground font-sans">
              De R$ 247
            </p>
            <div className="mb-1">
              <span className="text-sm text-muted-foreground font-sans">por apenas</span>
            </div>
            <div className="mb-1">
              <span className="font-serif text-6xl md:text-7xl font-bold text-foreground">
                R$47
              </span>
            </div>
            <p className="text-sm mb-8 text-muted-foreground font-sans">
              ou 12x de <strong className="text-foreground">R$4,83</strong>
            </p>

            <div className="h-px w-full mb-6 bg-border" />

            <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-primary font-sans">
              Receba imediatamente:
            </p>

            <ul className="text-left space-y-2.5 mb-6 max-w-sm mx-auto">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-xs text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="h-px w-full mb-6 bg-border" />

            <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-secondary font-sans">
              + Bônus exclusivos:
            </p>

            <ul className="text-left space-y-2.5 mb-8 max-w-sm mx-auto">
              {bonuses.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-secondary" />
                  <span className="text-xs text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 rounded-full text-base font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02] bg-green-cta font-sans"
            >
              QUERO CRIAR MEU PRODUTO AGORA
            </a>

            <p className="mt-5 text-xs text-muted-foreground font-sans">
              🎯 Oferta de lançamento por tempo limitado · 🔒 7 dias de garantia
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   GARANTIA
   ════════════════════════════════════════════════════════ */
const Guarantee = () => (
  <section className="py-20 md:py-28 px-6 bg-card">
    <div className="max-w-2xl mx-auto text-center">
      <Reveal>
        <Shield size={56} className="mx-auto mb-6 text-primary" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Garantia incondicional de 7 dias
        </h2>
        <p className="text-base leading-relaxed mb-6 text-muted-foreground font-sans">
          Se a CoruJah não superar suas expectativas ou não fizer sentido para o seu negócio, basta solicitar o reembolso total do seu investimento. Sem perguntas, sem burocracia.
        </p>
        <p className="font-serif text-lg italic text-primary">
          — Monike Kineippe
        </p>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   MENTORA
   ════════════════════════════════════════════════════════ */
const Mentor = () => (
  <section className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <Reveal className="flex justify-center">
        <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          <img src={monike1} alt="Monike Kineippe" className="w-full h-full object-cover" />
        </div>
      </Reveal>

      <Reveal>
        <span className="inline-block text-xs font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-sans">
          Criadora da CoruJah
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Monike Kineippe
        </h2>

        <div className="space-y-4 font-sans text-muted-foreground">
          <p className="text-base leading-relaxed">
            Estrategista de negócios femininos, mentora, palestrante, autora e criadora do Método Mulhere$ no Poder e Venda $em Vender.
          </p>
          <p className="text-base leading-relaxed">
            Empresária desde os 18 anos. Já sentiu na pele a sobrecarga, a frustração com fórmulas que não funcionam e o desafio de equilibrar negócios, maternidade e vida pessoal.
          </p>
          <p className="text-base leading-relaxed italic text-primary">
            "Eu criei a CoruJah porque sei como é ter muito conhecimento e não saber por onde começar. Agora, você não precisa mais ficar travada."
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Preciso saber mexer com IA para usar a CoruJah?", a: "Não. A CoruJah foi feita para ser simples e intuitiva. Com o treinamento rápido incluso, você aprende a usar mesmo que nunca tenha interagido com IA antes." },
    { q: "A CoruJah realmente cria um produto digital pronto?", a: "Sim, a plataforma gera nome, módulos, tópicos detalhados, uma oferta completa, copy para sua página de vendas e até criativos para divulgação." },
    { q: "Quanto tempo leva para ter meu produto pronto?", a: "A maioria das usuárias consegue ter uma estrutura completa, com copy e oferta validadas, em poucas horas. A CoruJah acelera drasticamente o processo de criação." },
    { q: "Tenho medo de ficar travada novamente. A CoruJah resolve isso?", a: "A principal missão da CoruJah é justamente destravar e guiar você. Ela estrutura o produto com e para você, respeitando sua expertise e bagagem." },
    { q: "O acesso à CoruJah é vitalício?", a: "Sim, a versão atual é vitalícia. Além disso, você terá acesso por 1 ano às atualizações dentro da plataforma e novos recursos." },
    { q: "E se eu não gostar, posso pedir reembolso?", a: "Com certeza! Oferecemos uma garantia incondicional de 7 dias. Se não fizer sentido para o seu negócio, basta solicitar o reembolso total." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Dúvidas Frequentes
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted font-sans"
                >
                  <span className="text-sm font-medium pr-4 text-foreground">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 text-primary ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "200px" : "0" }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground font-sans">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   CTA FINAL
   ════════════════════════════════════════════════════════ */
const FinalCTA = () => (
  <section className="py-20 md:py-28 px-6 text-center bg-primary">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Seu conhecimento merece virar produto.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 font-sans">
          Pare de adiar. A CoruJah transforma o que você já sabe em algo claro, estruturado e pronto para vender.
        </p>
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-12 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:scale-[1.02] bg-green-cta text-white font-sans"
        >
          QUERO CRIAR MEU PRODUTO AGORA
        </a>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════ */
const LPFooter = () => (
<footer className="py-10 px-6 text-center bg-primary">
    <p className="text-sm text-primary-foreground/70 font-sans">
      © 2025 CoruJah IA · Monike Kineippe
    </p>
    <p className="text-xs mt-1 text-primary-foreground/50 font-sans">
      Todos os direitos reservados
    </p>
  </footer>
);

/* ════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════ */
const CoruJah = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <TheProblem />
    <WhatItDoes />
    <BeforeAfter />
    <ImpostorSyndrome />
    <WhatYouGet />
    <Testimonials />
    <Pricing />
    <Guarantee />
    <Mentor />
    <FAQ />
    <FinalCTA />
    <LPFooter />
  </div>
);

export default CoruJah;
