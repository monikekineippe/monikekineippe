import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  GraduationCap, Users, Wrench, Radio, BookOpen, Gift,
  Shield, ChevronDown, Menu, X, Check, XIcon,
  Clock, BarChart3, Scale
} from "lucide-react";
import monike1 from "@/assets/monike-1.jpg";
import monike2 from "@/assets/monike-2.jpg";

/* ─── Paleta ─── */
const C = {
  gold: "#C9A84C",
  goldDark: "#A07830",
  offWhite: "#FAF7F2",
  black: "#1A1A1A",
  nude: "#E8C4B8",
  cardDark: "#2A2A2A",
  grayLight: "#F3F1ED",
};

const buyLink = "https://payfast.greenn.com.br/49322";

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
   SEÇÃO 1 — NAVBAR
   ════════════════════════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#fff" : "rgba(255,255,255,0.95)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logoMk} alt="MK" className="h-10 w-auto" />
          <span className="text-sm font-normal hidden sm:inline font-serif" style={{ color: C.black }}>Comunidade Empresária 4.0</span>
        </a>

        <a
          href="#preco"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:brightness-110"
          style={{ backgroundColor: C.gold }}
        >
          Quero entrar
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4" style={{ backgroundColor: "#fff" }}>
          <a
            href="#preco"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-3 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: C.gold }}
          >
            Quero entrar
          </a>
        </div>
      )}
    </nav>
  );
};

/* ════════════════════════════════════════════════════════
   SEÇÃO 2 — HERO
   ════════════════════════════════════════════════════════ */
const Hero = () => (
  <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6" style={{ backgroundColor: C.offWhite }}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <Reveal>
        <span
          className="inline-block text-xs font-medium tracking-widest uppercase mb-6 px-4 py-2 rounded-full"
          style={{ backgroundColor: `${C.gold}18`, color: C.gold }}
        >
          ✦ Mais de 200 mulheres já transformaram seus negócios
        </span>

        <h1
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6"
          style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
        >
          Pare de carregar o mundo sozinha.
          <br />
          <span style={{ color: C.gold }}>
            Existe um lugar onde mulheres como você constroem negócios reais.
          </span>
        </h1>

        <p className="text-lg leading-relaxed mb-8" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
          A Comunidade Empresária 4.0 reúne método, suporte e rede para você crescer — mesmo com apenas 15 minutos por dia.
        </p>

        <a
          href="#preco"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02]"
          style={{ backgroundColor: C.gold, fontFamily: "'Inter', sans-serif" }}
        >
          QUERO ENTRAR NA COMUNIDADE
        </a>

        <p className="mt-4 text-sm" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>
          🔒 7 dias de garantia total. Risco zero.
        </p>
      </Reveal>

      <Reveal className="flex justify-center">
        <div
          className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src={monike1} alt="Monike Kineippe" className="w-full h-full object-cover" />
        </div>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   SEÇÃO 3 — PONTE EMOCIONAL
   ════════════════════════════════════════════════════════ */
const EmotionalBridge = () => {
  const cards = [
    { icon: Clock, text: "Você acorda cansada antes mesmo de começar o dia — e ainda assim precisa dar conta de tudo." },
    { icon: BarChart3, text: "Seu negócio cresce devagar e você não consegue identificar o que está faltando." },
    { icon: Scale, text: "Você sente que para ter sucesso teria que abrir mão de ser mãe, esposa ou de cuidar de você mesma." },
  ];

  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: C.offWhite }}>
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-14"
            style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
          >
            Você se identifica com alguma dessas situações?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full flex flex-col items-center gap-4">
                <card.icon size={32} style={{ color: C.gold }} />
                <p className="text-base leading-relaxed" style={{ color: "#444", fontFamily: "'Inter', sans-serif" }}>
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p
            className="font-serif text-2xl md:text-3xl italic"
            style={{ color: C.gold, fontFamily: "'Playfair Display', serif" }}
          >
            "E se nada disso precisasse ser verdade?"
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   SEÇÃO 4 — APRESENTAÇÃO DO PRODUTO
   ════════════════════════════════════════════════════════ */
const Product = () => {
  const benefits = [
    { icon: GraduationCap, title: "Aprenda no seu tempo", desc: "+20h de conteúdo em aulas de até 15 minutos. Funciona offline, do celular, quando você puder." },
    { icon: Users, title: "Nunca mais sozinha", desc: "Uma rede real de empresárias que entendem seus desafios e te impulsionam a chegar mais longe." },
    { icon: Wrench, title: "Templates prontos para usar", desc: "Estratégias validadas em mais de 20 segmentos. Copie, cole e aplique no seu negócio hoje." },
    { icon: Radio, title: "Hotseat ao vivo toda semana", desc: "Traga seu problema atual e receba insights personalizados de empresárias experientes." },
    { icon: BookOpen, title: "Masterclass mensal", desc: "Uma aula aprofundada por mês, escolhida com base nas necessidades reais da comunidade." },
    { icon: Gift, title: "Clube de vantagens", desc: "Condições especiais com parceiros para seu crescimento, saúde e autocuidado." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
          >
            A Comunidade Empresária 4.0 é um ecossistema completo para a mulher que quer mais
          </h2>
          <p className="text-lg mb-14" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
            Não é um curso que você abandona. É um método com suporte real, ao vivo, toda semana.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm h-full text-left hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${C.gold}15` }}>
                  <b.icon size={24} style={{ color: C.gold }} />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
                  {b.desc}
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
   SEÇÃO 5 — PROVA SOCIAL
   ════════════════════════════════════════════════════════ */
const SocialProof = () => {
  const screenshots = [
    { src: "/depoimentos/d5.jpeg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/a1.jpg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/wa103.jpg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/d1.jpg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/insta-nov.jpg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/a2.jpg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/d4.jpeg", alt: "Depoimento de aluna da comunidade" },
    { src: "/depoimentos/d2.jpeg", alt: "Depoimento de aluna da comunidade" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? screenshots : screenshots.slice(0, 4);

  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: C.black }}>
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-3 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O que dizem as mulheres que já estão dentro
          </h2>
          <p className="text-base mb-14" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
            Centenas de empresárias já transformaram seus negócios e suas rotinas.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {visible.map((s, i) => (
            <Reveal key={i}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform cursor-pointer">
                <img src={s.src} alt={s.alt} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        {!showAll && screenshots.length > 4 && (
          <Reveal>
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full text-sm font-medium border transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", fontFamily: "'Inter', sans-serif" }}
            >
              VER MAIS RESULTADOS
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   SEÇÃO 6 — O MÉTODO
   ════════════════════════════════════════════════════════ */
const Method = () => {
  const pillars = [
    { num: "01", title: "Mentalidade & Posicionamento", desc: "Desenvolva uma visão clara, resiliência real e a confiança para ocupar o espaço que você merece no mercado." },
    { num: "02", title: "Estratégia & Ferramentas de Negócio", desc: "Aprenda a criar posicionamento de autoridade, liderar times e atrair clientes com marketing e vendas que funcionam." },
    { num: "03", title: "Gestão de Rotina & Equilíbrio", desc: "Organize sua vida para ser produtiva sem se destruir — priorizando o que importa de verdade." },
  ];

  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: `linear-gradient(180deg, ${C.offWhite} 0%, ${C.gold}12 100%)` }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <span
            className="inline-block text-xs font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
            style={{ backgroundColor: `${C.gold}18`, color: C.gold, fontFamily: "'Inter', sans-serif" }}
          >
            ✦ A base de tudo
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
          >
            O que estrutura sua transformação: o Método Mulher no Poder
          </h2>
          <p className="text-lg mb-14" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
            Três pilares desenvolvidos a partir de anos de experiência real no campo de batalha empresarial.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full text-center">
                <span
                  className="font-serif text-5xl font-bold block mb-4"
                  style={{ color: `${C.gold}40`, fontFamily: "'Playfair Display', serif" }}
                >
                  {p.num}
                </span>
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
                  {p.desc}
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
   SEÇÃO 7 — COMPARAÇÃO
   ════════════════════════════════════════════════════════ */
const Comparison = () => {
  const bad = [
    "Aulas gravadas que você abandona na metade",
    "Teoria sem aplicação prática",
    "Você sozinha tentando descobrir o que fazer",
    "Conteúdo genérico que ignora sua realidade",
    "Certificado vazio por concluir o módulo",
  ];
  const good = [
    "Método com trilhas organizadas para sua rotina",
    "Estratégias testadas em +20 segmentos reais",
    "Suporte ao vivo toda semana, não só conteúdo",
    "Comunidade ativa que te acompanha de verdade",
    "Resultados mensuráveis no seu negócio",
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-14"
            style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
          >
            Aqui você não vai encontrar o de sempre
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-xl p-8 h-full" style={{ backgroundColor: C.grayLight }}>
              <h3
                className="font-serif text-xl font-semibold mb-6"
                style={{ color: "#666", fontFamily: "'Playfair Display', serif" }}
              >
                Outros cursos
              </h3>
              <ul className="space-y-4">
                {bad.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <XIcon size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#D44" }} />
                    <span className="text-sm" style={{ color: "#666" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="rounded-xl p-8 h-full"
              style={{ backgroundColor: `${C.gold}12` }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-6"
                style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
              >
                Comunidade Empresária 4.0
              </h3>
              <ul className="space-y-4">
                {good.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#2B6B3F" }} />
                    <span className="text-sm" style={{ color: "#444" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   SEÇÃO 8 — MENTORA
   ════════════════════════════════════════════════════════ */
const Mentor = () => (
  <section className="py-20 md:py-28 px-6" style={{ backgroundColor: C.offWhite }}>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <Reveal className="flex justify-center">
        <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          <img src={monike2} alt="Monike Kineippe" className="w-full h-full object-cover" />
        </div>
      </Reveal>

      <Reveal>
        <span
          className="inline-block text-xs font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
          style={{ backgroundColor: `${C.gold}18`, color: C.gold, fontFamily: "'Inter', sans-serif" }}
        >
          Sua mentora
        </span>

        <h2
          className="font-serif text-3xl md:text-4xl font-bold mb-6"
          style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
        >
          Monike Kineippe
        </h2>

        <div className="space-y-4 mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#555" }}>
          <p className="text-base leading-relaxed">
            Monike não ensina teoria de manual. Ela é CEO de 3 CNPJs, mãe atípica, neurodivergente e já teve dois burnouts tentando dar conta de tudo.
          </p>
          <p className="text-base leading-relaxed">
            O Método Mulher no Poder nasceu da experiência real de quem errou, aprendeu e construiu negócios sólidos do zero — mais de uma vez.
          </p>
          <p className="text-base leading-relaxed">
            Ela entende seus desafios porque já viveu cada um deles.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {[
            { num: "3", label: "CNPJs ativos" },
            { num: "+200", label: "alunas" },
            { num: "+20", label: "segmentos" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-serif text-2xl font-bold block" style={{ color: C.gold }}>{s.num}</span>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   SEÇÃO 9 — PREÇO
   ════════════════════════════════════════════════════════ */
const Pricing = () => {
  const included = [
    "+20h de conteúdo em aulas de até 15min",
    "+15 cursos especializados",
    "Hotseat ao vivo toda semana",
    "Masterclass mensal",
    "Templates e ferramentas práticas",
    "Clube de vantagens exclusivo",
    "Comunidade ativa de empresárias",
  ];

  return (
    <section id="preco" className="py-20 md:py-28 px-6" style={{ backgroundColor: C.black }}>
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-12 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Invista em você uma vez. Colha por um ano inteiro.
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl text-center">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-5 py-2 rounded-full text-white"
              style={{ backgroundColor: C.gold, fontFamily: "'Inter', sans-serif" }}
            >
              ACESSO COMPLETO POR 12 MESES
            </span>

            <div className="mb-2">
              <span className="text-lg" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>12x de</span>
            </div>
            <div className="mb-1">
              <span
                className="font-serif text-6xl md:text-7xl font-bold"
                style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
              >
                R$51,10
              </span>
            </div>
            <p className="text-sm mb-2" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>
              ou <strong style={{ color: C.black }}>R$497,00</strong> à vista
            </p>
            <p className="text-sm mb-8" style={{ color: C.gold, fontFamily: "'Inter', sans-serif" }}>
              Menos de R$1,40 por dia para ter método, mentoria e comunidade.
            </p>

            <div className="h-px w-full mb-8" style={{ backgroundColor: "#eee" }} />

            <ul className="text-left space-y-3 mb-10 max-w-sm mx-auto">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: C.gold }} />
                  <span className="text-sm" style={{ color: "#444" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 rounded-full text-base font-semibold text-white tracking-wide transition-all hover:brightness-110 hover:scale-[1.02]"
              style={{ backgroundColor: C.gold, fontFamily: "'Inter', sans-serif" }}
            >
              QUERO ENTRAR AGORA
            </a>

            <p className="mt-5 text-xs" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
              🔒 Pagamento 100% seguro · Acesso imediato · 7 dias de garantia
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════
   SEÇÃO 10 — GARANTIA
   ════════════════════════════════════════════════════════ */
const Guarantee = () => (
  <section className="py-20 md:py-28 px-6 bg-white">
    <div className="max-w-2xl mx-auto text-center">
      <Reveal>
        <Shield size={56} className="mx-auto mb-6" style={{ color: C.gold }} />
        <h2
          className="font-serif text-3xl md:text-4xl font-bold mb-6"
          style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
        >
          Eu assumo todo o risco por você
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
          Se em até 7 dias você entrar na Comunidade Empresária 4.0 e não ficar satisfeita, eu devolvo 100% do seu investimento. Sem perguntas, sem burocracia. O risco é inteiramente meu.
        </p>
        <p className="font-serif text-lg italic" style={{ color: C.gold }}>
          — Monike Kineippe
        </p>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   SEÇÃO 11 — FAQ
   ════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "O que terei acesso?", a: "Mais de 15 cursos, templates, ferramentas, hotseat semanal, masterclass mensal e clube de vantagens, durante todo o período da sua assinatura." },
    { q: "Consigo acessar pelo celular?", a: "Sim! A plataforma funciona no celular e você pode assistir às aulas offline, quando e onde quiser." },
    { q: "Quanto tempo preciso dedicar?", a: "Recomendamos de 15 a 30 minutos por dia. Mas você vai no seu ritmo — o conteúdo foi feito para encaixar na rotina de quem não tem tempo sobrando." },
    { q: "Quanto tempo tenho acesso?", a: "Por 12 meses ou enquanto sua assinatura estiver ativa." },
    { q: "E se eu me arrepender?", a: "Você tem até 7 dias após a compra para cancelar e receber 100% do valor de volta, sem perguntas." },
    { q: "Ainda não tenho negócio. É para mim?", a: "Sim! A comunidade serve tanto para quem está começando do zero quanto para quem quer crescer e escalar o que já tem." },
    { q: "Moro fora do Brasil. Posso comprar?", a: "Sim, a plataforma converte automaticamente. Dúvidas: suporte@metodomulhernopoder.com.br" },
  ];

  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: C.offWhite }}>
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: C.black, fontFamily: "'Playfair Display', serif" }}
          >
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="text-sm font-medium pr-4" style={{ color: C.black }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: C.gold,
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "200px" : "0" }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
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
   SEÇÃO 12 — CTA FINAL
   ════════════════════════════════════════════════════════ */
const FinalCTA = () => (
  <section
    className="py-20 md:py-28 px-6 text-center"
    style={{ background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldDark} 100%)` }}
  >
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Agora é a sua vez.
        </h2>
        <p className="text-lg text-white/90 mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          Pare de sobreviver. Comece a viver o negócio — e a vida — que você construiu para merecer.
        </p>
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-12 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:scale-[1.02]"
          style={{ backgroundColor: "#fff", color: C.gold, fontFamily: "'Inter', sans-serif" }}
        >
          QUERO ENTRAR NA COMUNIDADE
        </a>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════ */
const LPFooter = () => (
  <footer className="py-10 px-6 text-center" style={{ backgroundColor: C.black }}>
    <p className="text-sm" style={{ color: "#777", fontFamily: "'Inter', sans-serif" }}>
      © 2025 Comunidade Empresária 4.0 · Monike Kineippe
    </p>
    <p className="text-xs mt-1" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
      Todos os direitos reservados
    </p>
  </footer>
);

/* ════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ════════════════════════════════════════════════════════ */
const Empresaria40 = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <EmotionalBridge />
      <Product />
      <SocialProof />
      <Method />
      <Comparison />
      <Mentor />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <LPFooter />
    </div>
  );
};

export default Empresaria40;
