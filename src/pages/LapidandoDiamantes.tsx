import { useState, useEffect, useRef, ReactNode } from "react";
import { Gem, Star, Users, CheckCircle, ArrowRight, Shield, Clock, ChevronDown, Instagram, MessageCircle, Search, Map, Target, Trophy, Compass, Handshake, Scale, KeyRound } from "lucide-react";
import monikePhoto from "@/assets/monike-1.jpg";
import diamanteIcon from "@/assets/diamante-icon.png";

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Constants ─── */
const WA_LINK = "https://wa.me/+5511972313181?text=Quero%20saber%20mais%20da%20mentoria%20Lapidando%20Diamantes";

const LapidandoDiamantes = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* smooth scroll helper */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#0D0D0D", color: "#FAF7F2" }}>

      {/* ═══════ NAVBAR ═══════ */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/40" : ""}`} style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid rgba(201,168,76,0.25)" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3">
          <span className="font-serif text-lg tracking-wide" style={{ color: "#C9A84C" }}>✦ Lapidando Diamantes</span>
          <button onClick={() => scrollTo("inscricao")} className="text-xs tracking-widest uppercase px-5 py-2 rounded font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110" style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
            QUERO UMA VAGA
          </button>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-5 text-center overflow-hidden" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%), #0D0D0D" }}>
        {/* subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <Reveal className="relative z-10">
          <div className="flex justify-center mb-6">
            <Gem size={48} style={{ color: "#C9A84C", filter: "drop-shadow(0 0 18px rgba(201,168,76,0.45))" }} />
          </div>
          <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C9A84C" }}>✦ MENTORIA EM GRUPO · VAGAS LIMITADAS ✦</p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl mx-auto" style={{ color: "#FAF7F2" }}>
            Seu negócio já existe.<br />Agora é hora de lapidá-lo.
          </h1>
          <p className="text-base md:text-lg max-w-[520px] mx-auto mb-10 leading-relaxed" style={{ color: "rgba(250,247,242,0.7)" }}>
            A Mentoria Lapidando Diamantes é para a empresária que já tem negócio, já sabe que tem potencial — mas sente que algo está travando o crescimento que ela merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => scrollTo("inscricao")} className="text-xs tracking-widest uppercase px-8 py-4 rounded font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110" style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
              QUERO MINHA VAGA
            </button>
            <button onClick={() => scrollTo("como-funciona")} className="text-xs tracking-widest uppercase px-8 py-4 rounded font-semibold border transition-all duration-300 hover:scale-105" style={{ borderColor: "rgba(250,247,242,0.4)", color: "#FAF7F2" }}>
              VER COMO FUNCIONA
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-8 text-sm" style={{ color: "#E8D5A3" }}>
            <span>3 CNPJs</span>
            <span style={{ color: "#C9A84C" }}>·</span>
            <span>+200 alunas</span>
            <span style={{ color: "#C9A84C" }}>·</span>
            <span>+10 anos de campo</span>
          </div>
        </Reveal>
      </section>

      {/* ═══════ QUALIFICAÇÃO ═══════ */}
      <section className="py-20 md:py-28 px-5" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl text-center mb-12" style={{ color: "#0D0D0D" }}>Esta mentoria foi feita para você se…</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              "Você já tem negócio mas sente que está rodando em círculos — sem crescimento real.",
              "Você sabe que tem potencial, mas não sabe o que exatamente está travando.",
              "Você já comprou cursos, mas sente falta de alguém que olhe especificamente para o seu negócio.",
              "Você quer escalar sem precisar sacrificar ainda mais sua vida pessoal.",
              "Você está pronta para parar de tentar sozinha e investir em aceleração real.",
            ].map((t, i) => (
              <Reveal key={i}>
                <div className="bg-white rounded-lg p-6 h-full shadow-sm" style={{ borderLeft: "3px solid #C9A84C" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#0D0D0D" }}>
                    <span style={{ color: "#C9A84C" }}>✦ </span>{t}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="rounded-lg p-6 text-center text-sm" style={{ backgroundColor: "#E8C4B8", color: "#0D0D0D" }}>
              Se você se identificou com pelo menos 3 dessas situações, você é exatamente para quem esta mentoria foi criada.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ COMO FUNCIONA ═══════ */}
      <section id="como-funciona" className="py-20 md:py-28 px-5" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl text-center mb-3">Como a mentoria funciona</h2>
            <p className="text-center text-sm mb-14" style={{ color: "rgba(250,247,242,0.5)" }}>Não é um curso. É um processo de aceleração com olhar especializado para o seu negócio.</p>
          </Reveal>
          <div className="relative">
            {/* gold line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(201,168,76,0.3)" }} />
            {[
              { icon: <Search size={20} />, title: "Diagnóstico do seu negócio", desc: "Começamos entendendo onde você está, onde quer chegar e o que está no caminho." },
              { icon: <Map size={20} />, title: "Plano de aceleração personalizado", desc: "Com base no seu negócio real, não em teoria genérica." },
              { icon: <Target size={20} />, title: "Encontros ao vivo em grupo", desc: "Sessões coletivas com aprofundamento, trocas reais e olhar da Monike sobre cada caso." },
              { icon: <Trophy size={20} />, title: "Implementação acompanhada", desc: "Você não fica sozinha entre um encontro e outro — suporte para aplicar de verdade." },
            ].map((step, i) => (
              <Reveal key={i} className="relative pl-16 md:pl-20 mb-10 last:mb-0">
                <div className="absolute left-3 md:left-5 top-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
                  {step.icon}
                </div>
                <h3 className="font-serif text-lg mb-1" style={{ color: "#E8D5A3" }}>{step.title}</h3>
                <p className="text-sm" style={{ color: "rgba(250,247,242,0.6)" }}>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RESULTADOS ═══════ */}
      <section className="py-20 md:py-28 px-5" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl text-center mb-3" style={{ color: "#0D0D0D" }}>O que muda na sua vida e no seu negócio</h2>
            <p className="text-center text-sm mb-12" style={{ color: "#666" }}>Não listamos módulos. Listamos resultados.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Gem size={24} />, title: "Clareza de posicionamento", desc: "Você vai saber exatamente o que vender, para quem, e como comunicar o valor do seu negócio." },
              { icon: <ArrowRight size={24} />, title: "Estratégia real de crescimento", desc: "Um plano de ação concreto, não genérico, para o seu segmento e momento." },
              { icon: <Compass size={24} />, title: "Decisões sem paralisia", desc: "Aprenda a tomar decisões estratégicas com segurança, mesmo sob pressão." },
              { icon: <Handshake size={24} />, title: "Rede de alto nível", desc: "Você vai crescer cercada de empresárias sérias que se tornam parceiras." },
              { icon: <Scale size={24} />, title: "Escala com equilíbrio", desc: "Crescer sem destruir sua rotina, seu casamento ou sua saúde." },
              { icon: <KeyRound size={24} />, title: "Autonomia real", desc: "Você vai sair dependendo menos de achismos e mais de estratégia validada." },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="bg-white rounded-lg p-6 h-full shadow-sm">
                  <div className="mb-4" style={{ color: "#C9A84C" }}>{item.icon}</div>
                  <h3 className="font-serif text-base mb-2" style={{ color: "#0D0D0D" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MONIKE (AUTORIDADE) ═══════ */}
      <section className="py-20 md:py-28 px-5" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[3/4] rounded-lg overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
              <img src={monikePhoto} alt="Monike Kineippe" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#C9A84C" }}>Sua mentora</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "#C9A84C" }}>Monike Kineippe</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.75)" }}>
              <p>Monike não ensina o que leu em livros. Ela ensina o que viveu no campo de batalha real.</p>
              <p>Abriu seu primeiro CNPJ aos 18 anos. Hoje é CEO de 3 empresas LTDA — com impacto direto e indireto em mais de 50 famílias.</p>
              <p>Passou por dois burnouts, se reinventou em mais de 10 ramos diferentes, e desenvolveu um método próprio para construir negócios sólidos sem abrir mão de ser mãe, esposa e mulher.</p>
              <p>Ela vai olhar para o seu negócio com o mesmo cuidado que olhou para o dela.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {["Pós-graduada em Empreendedorismo", "PNL Practitioner", "Coach Certificada", "Autora publicada"].map((s, i) => (
                <span key={i} className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <Shield size={14} /> {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ PROVA SOCIAL ═══════ */}
      <section className="py-20 md:py-28 px-5" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl text-center mb-3" style={{ color: "#0D0D0D" }}>O que dizem as alunas</h2>
            <p className="text-center text-sm mb-12" style={{ color: "#666" }}>Empresárias que decidiram parar de tentar sozinhas.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { name: "Ana Paula", seg: "Estética", text: "Pela primeira vez alguém olhou para o MEU negócio, não para um negócio genérico." },
              { name: "Carla Mendes", seg: "Consultoria", text: "Em 60 dias implementei mais do que em 1 ano tentando sozinha." },
              { name: "Renata Costa", seg: "Varejo", text: "A Monike enxerga o que você mesma não consegue ver de dentro." },
              { name: "Juliana Ramos", seg: "Serviços", text: "O grupo em si já vale. Aprendi tanto com as outras alunas quanto nas sessões." },
            ].map((d, i) => (
              <Reveal key={i}>
                <div className="bg-white rounded-lg p-6 h-full shadow-sm" style={{ borderTop: "3px solid #C9A84C" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#E8D5A3", color: "#0D0D0D" }}>
                      {d.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#0D0D0D" }}>{d.name}</p>
                      <p className="text-xs" style={{ color: "#888" }}>{d.seg}</p>
                    </div>
                  </div>
                  <p className="text-sm italic leading-relaxed" style={{ color: "#444" }}>"{d.text}"</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-xs italic" style={{ color: "#999" }}>Substitua pelos depoimentos reais das suas alunas da mentoria.</p>
        </div>
      </section>

      {/* ═══════ INSCRIÇÃO ═══════ */}
      <section id="inscricao" className="py-20 md:py-28 px-5" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-[640px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl mb-4">Pronta para lapidar o seu diamante?</h2>
            <p className="text-sm mb-12" style={{ color: "#C9A84C" }}>As vagas são limitadas por grupo. Isso não é estratégia de marketing — é a única forma de entregar o nível de atenção que cada empresária merece.</p>
          </Reveal>
          <Reveal>
            <div className="rounded-xl p-8 md:p-10 text-left" style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(201,168,76,0.35)", boxShadow: "0 0 40px rgba(201,168,76,0.08)" }}>
              <p className="text-xs tracking-[0.3em] uppercase text-center mb-8" style={{ color: "#C9A84C" }}>✦ MENTORIA LAPIDANDO DIAMANTES ✦</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Diagnóstico inicial do seu negócio",
                  "Encontros ao vivo em grupo com a Monike",
                  "Plano de aceleração personalizado",
                  "Suporte entre os encontros",
                  "Acesso à rede exclusiva de alunas",
                  "Implementação acompanhada",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(250,247,242,0.8)" }}>
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-px w-full mb-8" style={{ backgroundColor: "rgba(201,168,76,0.25)" }} />
              <p className="font-serif text-xl text-center mb-2" style={{ color: "#E8D5A3" }}>Investimento sob consulta · Vagas limitadas</p>
              <p className="text-xs text-center mb-8" style={{ color: "rgba(250,247,242,0.45)" }}>
                O valor e as condições são apresentados após uma conversa inicial para garantir que a mentoria é o momento certo para o seu negócio.
              </p>
              <div className="text-center">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-xs tracking-widest uppercase px-8 py-4 rounded font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110 text-center" style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
                  QUERO CONVERSAR SOBRE UMA VAGA
                </a>
                <p className="text-xs mt-4" style={{ color: "#E8D5A3" }}>Você será direcionada para uma conversa com a equipe da Monike.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ URGÊNCIA ═══════ */}
      <section className="py-16 md:py-20 px-5 text-center" style={{ backgroundColor: "#C9A84C" }}>
        <Reveal>
          <Clock size={36} style={{ color: "#0D0D0D" }} className="mx-auto mb-5" />
          <h2 className="font-serif text-2xl md:text-3xl mb-3" style={{ color: "#0D0D0D" }}>As vagas do próximo grupo estão abertas.</h2>
          <p className="text-sm mb-8" style={{ color: "#0D0D0D" }}>Quando fechar, a próxima oportunidade pode demorar meses.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-xs tracking-widest uppercase px-8 py-4 rounded font-semibold transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#0D0D0D", color: "#FAF7F2" }}>
            GARANTIR MINHA VAGA AGORA
          </a>
        </Reveal>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-5" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl text-center mb-12" style={{ color: "#0D0D0D" }}>Perguntas frequentes</h2>
          </Reveal>
          <div className="space-y-3">
            {[
              { q: "Para quem é esta mentoria?", a: "Para empresárias que já têm negócio em funcionamento e querem acelerar o crescimento com acompanhamento real." },
              { q: "Qual a diferença para a Comunidade Empresária 4.0?", a: "A Comunidade é o seu ecossistema de aprendizado contínuo. A Lapidando Diamantes é aceleração intensiva com olhar direto da Monike para o seu negócio específico." },
              { q: "Quantas pessoas têm em cada grupo?", a: "O grupo é intencionalmente pequeno para garantir atenção individualizada a cada empresária." },
              { q: "Como funciona o processo de inscrição?", a: "Você entra em contato, a equipe da Monike faz uma conversa inicial para entender seu momento e confirmar que a mentoria é a solução certa para você." },
              { q: "Preciso já ter faturamento alto?", a: "Você precisa ter um negócio em operação. O nível de faturamento é avaliado na conversa inicial." },
              { q: "Tem garantia?", a: "Por ser uma mentoria ao vivo com vagas limitadas, não há reembolso após o início. Por isso fazemos a conversa de alinhamento antes da inscrição." },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-20 md:py-28 px-5 text-center" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 60%), #0D0D0D" }}>
        <Reveal>
          <Gem size={48} className="mx-auto mb-6" style={{ color: "#C9A84C", filter: "drop-shadow(0 0 20px rgba(201,168,76,0.5))" }} />
          <h2 className="font-serif text-2xl md:text-4xl mb-4">Todo diamante precisa ser lapidado.</h2>
          <p className="text-sm mb-10 max-w-md mx-auto" style={{ color: "rgba(250,247,242,0.65)" }}>Você já tem o que é preciso. Vamos trabalhar juntas para revelar isso.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-xs tracking-widest uppercase px-10 py-4 rounded font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110" style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
            QUERO MINHA VAGA
          </a>
        </Reveal>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-8 px-5 text-center" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <p className="text-xs mb-4" style={{ color: "rgba(250,247,242,0.4)" }}>© 2025 Monike Kineippe · Mentoria Lapidando Diamantes</p>
        <div className="flex justify-center gap-5">
          <a href="https://www.instagram.com/monikekineippe" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: "#C9A84C" }}><Instagram size={18} /></a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: "#C9A84C" }}><MessageCircle size={18} /></a>
        </div>
      </footer>
    </div>
  );
};

/* ─── FAQ accordion item ─── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal>
      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#fff" }}>
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left text-sm font-medium transition-colors" style={{ color: "#0D0D0D" }}>
          {question}
          <ChevronDown size={18} className={`flex-shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: "#C9A84C" }} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{answer}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default LapidandoDiamantes;
