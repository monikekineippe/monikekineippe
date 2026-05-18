import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import monikeVendaSemVender from "@/assets/monike-venda-sem-vender.jpg";

const CTA_LINK =
  "https://payfast.greenn.com.br/102443/offer/cX9FFF?b_id_1=120590&b_offer_1=IAzycE";

/* ───────────────────────── Helpers ───────────────────────── */

const trackCheckout = () => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (window.fbq) window.fbq("track", "InitiateCheckout");
    // @ts-ignore
    if (window.gtag) window.gtag("event", "begin_checkout");
  }
};

const Btn = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Button
    className={`bg-[#B8973A] hover:bg-[#6B1C2A] text-[#1A1A1A] hover:text-[#F5F0E8] text-sm sm:text-base px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-[4px] transition-all duration-300 font-semibold tracking-[0.08em] uppercase ${className}`}
    onClick={trackCheckout}
    asChild
  >
    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);

const Divider = ({ gold = true }: { gold?: boolean }) => (
  <hr
    className={`border-0 h-px mx-auto w-24 ${
      gold ? "bg-[#B8973A]/30" : "bg-[#1A1A1A]/10"
    }`}
  />
);

/* ───────────────────────── Dados ───────────────────────── */

const dores = [
  "Você entrega um trabalho impecável, mas na hora de falar de preço a insegurança aparece e o valor sai menor do que deveria.",
  "Vai a um evento de networking, faz contatos incríveis e volta para casa sem nenhuma proposta enviada.",
  "Toma um café com alguém que pediu sua ajuda espontaneamente, e no final a pessoa diz \"depois a gente se fala\" sem nenhum compromisso.",
  "Publica no Instagram, posta stories, faz reels, mas quando o cliente aparece por mensagem você não sabe conduzir a conversa até o fechamento.",
  "Já comprou cursos de vendas, decorou scripts e gatilhos, mas nada funciona porque nada soa como você.",
  "Sabe que tem potencial e que seu serviço transforma vidas, mas não consegue traduzir isso em previsibilidade de receita.",
];

const pilares = [
  {
    num: "01",
    title: "Posicionamento que pré-vende",
    desc: "Como ser percebida como autoridade antes de falar do seu serviço. A construção de credibilidade que faz o cliente querer comprar de você antes mesmo de saber o preço.",
  },
  {
    num: "02",
    title: "Neurovenda feminina",
    desc: "Entenda como o cérebro do seu cliente decide comprar. A linguagem que ativa desejo sem soar comercial e o caminho ético entre a intenção e a decisão.",
  },
  {
    num: "03",
    title: "Fechamento sem pressão",
    desc: "A técnica de levar a pessoa ao sim sem insistência e sem a sensação desconfortável de pedir. O fechamento que parece continuação natural da conversa.",
  },
];

const aulas = [
  { num: "01", title: "Apresentação", desc: "Abertura e mentalidade da venda que acontece em conversa." },
  { num: "02", title: "Por que vender parece difícil", desc: "Identificando e removendo as travas que te impedem de vender com naturalidade." },
  { num: "03", title: "O método", desc: "A estrutura técnica passo a passo do processo completo." },
  { num: "04", title: "Perguntas e respostas", desc: "Consultoria direta sobre casos reais de alunas." },
  { num: "05", title: "Dinâmica prática", desc: "Mão na massa para validar a sua nova abordagem em cenários reais." },
  { num: "06", title: "Encerramento", desc: "Plano de ação e próximos passos para aplicar o método hoje." },
];

const bonusItems = [
  { title: "E-book prático Venda $em Vender", desc: "Material complementar com exercícios e reflexões para fixar o conteúdo das aulas.", valor: "R$ 97" },
  { title: "Material de Apoio Vendas & Closer", desc: "Referências, frameworks e checklists de apoio para estruturar suas abordagens e fechamentos.", valor: "R$ 147" },
  { title: "Planeje Seu Mês com Propósito", desc: "Template de planejamento mensal focado em ação comercial alinhada aos seus objetivos de negócio.", valor: "R$ 67" },
];

const faqData = [
  { q: "Funciona pra quem ainda não tem audiência grande?", a: "Sim. A venda em conversa é justamente o método para quem vende uma pessoa de cada vez, em interações reais. Não depende de alcance digital." },
  { q: "Quanto tempo leva pra aplicar?", a: "Você pode começar a aplicar na próxima conversa. O curso é gravado, didático e voltado para aplicação prática imediata." },
  { q: "E se eu não conseguir aplicar?", a: "Você tem 7 dias de garantia incondicional. Se sentir que não é pra você, devolvemos 100% do valor sem burocracia." },
  { q: "As aulas têm prazo?", a: "Não. O acesso é vitalício. Você assiste no seu ritmo, revisita quando quiser e tem o método sempre à mão." },
  { q: "Funciona pra vender serviço de ticket alto?", a: "Funciona ainda melhor. Ticket alto exige confiança e conexão, e é exatamente isso que o método constrói ao longo da conversa." },
  { q: "Preciso ter experiência em vendas?", a: "Não. O método foi criado justamente para quem não é vendedora, não quer ser e não precisa ser. Você aprende a vender sendo você mesma." },
  { q: "É ao vivo ou gravado?", a: "Gravado e editado. Você acessa imediatamente após a compra e assiste quando quiser, no seu ritmo." },
  { q: "Posso parcelar?", a: "Sim. O valor de R$ 147 pode ser parcelado no checkout. Acesso imediato em qualquer forma de pagamento." },
];

const depoimentos = [
  { nome: "Ana", texto: "DEPOIMENTO PLACEHOLDER — Aguardando texto da Ana." },
  { nome: "Ágata", texto: "DEPOIMENTO PLACEHOLDER — Aguardando texto da Ágata." },
  { nome: "Aluna", texto: "DEPOIMENTO PLACEHOLDER — Aguardando terceiro depoimento." },
];

/* ───────────────────────── Component ───────────────────────── */

const VendaSemVender = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.fbq) {
        // @ts-ignore
        window.fbq("track", "ViewContent", {
          content_name: "Venda $em Vender",
          content_category: "Curso",
          value: 147,
          currency: "BRL",
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans selection:bg-[#B8973A] selection:text-[#1A1A1A]">

      {/* ──── Helmet ──── */}
      <Helmet>
        <title>Venda $em Vender | Monike Kineippe</title>
        <meta name="description" content="O método de vendas para mulheres que querem vender em conversas, cafés e eventos, sem parecer vendedora." />
        <link rel="canonical" href="https://monikekineippe.com/venda-sem-vender" />
        <meta property="og:title" content="Venda $em Vender | Monike Kineippe" />
        <meta property="og:description" content="O método de vendas para mulheres que querem vender em conversas, cafés e eventos, sem parecer vendedora." />
        <meta property="og:url" content="https://monikekineippe.com/venda-sem-vender" />
        <meta property="og:type" content="website" />
        {/* TODO: og:image — adicionar imagem de compartilhamento */}
        {/* Meta Pixel instalado globalmente em index.html; eventos de rota em App.tsx */}
        {/* TODO: Google Analytics 4 — adicionar script do GA4 */}
      </Helmet>

      {/* ──── Barra fixa CTA (após 30% scroll) ──── */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="bg-[#B8973A] px-4 sm:px-6 py-3 flex items-center justify-between max-w-screen-xl mx-auto">
          <span className="font-serif text-[#1A1A1A] text-sm sm:text-base font-semibold">VENDA $EM VENDER&nbsp;&nbsp;|&nbsp;&nbsp;R$ 147</span>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
            className="bg-[#1A1A1A] text-[#B8973A] text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-[4px] font-semibold tracking-[0.08em] uppercase hover:bg-[#1A1A1A]/90 transition-colors">
            Garantir Acesso
          </a>
        </div>
      </div>

      {/* ═══════ S1 — HERO ═══════ */}
      <section className="min-h-screen flex items-center bg-[#F5F0E8] text-[#1A1A1A] py-20 md:py-28 relative">
        <div className="container mx-auto px-6 max-w-[960px]">
          <div className="max-w-2xl">
            <span className="inline-block text-[#B8973A] text-xs tracking-[0.25em] uppercase mb-8 font-medium">
              PARA MENTORAS, CONSULTORAS E PRESTADORAS DE SERVIÇO
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
              A venda que acontece numa conversa.
              <br />
              <span className="text-[#6B1C2A]">Sem você nunca parecer que está vendendo.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed mb-12 max-w-lg">
              O método criado para mulheres que querem vender em cafés, eventos, networking e bate-papos. Sem script, sem performance, sem insistência.
            </p>
            <div className="mb-6">
              <Btn>Quero vender assim</Btn>
            </div>
            <p className="text-sm text-[#4A4A4A]">Acesso imediato. R$ 147 à vista ou parcelado.</p>
          </div>
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 overflow-hidden rounded-sm shadow-2xl shadow-[#6B1C2A]/10">
            <img
              src={monikeVendaSemVender}
              alt="Monike Kineippe — método Venda $em Vender"
              className="h-[420px] w-full object-cover object-top grayscale contrast-110 transition-all duration-700 hover:grayscale-0"
              loading="eager"
              width={320}
              height={400}
            />
          </div>
        </div>
        <Divider />
      </section>

      {/* ═══════ S2 — IDENTIFICAÇÃO DA DOR ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[680px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 leading-tight">
            Talvez você se reconheça aqui.
          </h2>
          <div className="space-y-0">
            {dores.map((d, i) => (
              <div key={i}>
                <p className="text-lg text-[#4A4A4A] leading-[1.75] py-6">{d}</p>
                {i < dores.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ S3 — REFRAME ESTRATÉGICO (faixa vinho) ═══════ */}
      <section className="bg-[#6B1C2A] py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-[720px] text-center">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F5F0E8] leading-[1.4]">
            O problema não é você. É o modelo de vendas que te ensinaram. Um modelo criado para produtos, não para relações. Para volume, não para profundidade.
          </p>
        </div>
      </section>

      {/* ═══════ S4 — A VIRADA DE CHAVE ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[680px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Existe um outro caminho.
          </h2>
          <div className="space-y-6 text-lg text-[#4A4A4A] leading-[1.75]">
            <p>
              Um caminho onde você não precisa de live diária, de funil agressivo ou de script decorado. Onde a venda acontece de forma orgânica, dentro de conversas reais, com pessoas que já confiam em você.
            </p>
            <p>
              Onde o valor do seu serviço fica claro antes do preço aparecer. Onde fechar cliente é uma consequência natural da conversa, não um momento constrangedor no final.
            </p>
            <p className="text-[#6B1C2A] font-medium text-xl">
              Você não precisa vender mais. Precisa vender diferente.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ S5 — O MÉTODO (3 PILARES) ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <div className="text-center mb-20">
            <span className="inline-block text-[#B8973A] text-xs tracking-[0.25em] uppercase mb-4 font-medium">O MÉTODO</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">VENDA $EM VENDER</h2>
            <p className="text-lg text-[#4A4A4A] max-w-xl mx-auto">Três pilares para transformar qualquer conversa em oportunidade real de venda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((p) => (
              <div key={p.num} className="bg-white/60 p-10 border border-[#B8973A]/20 text-center transition-all hover:border-[#B8973A]/50">
                <span className="text-[#B8973A] font-serif text-3xl mb-6 block">{p.num}</span>
                <h3 className="font-serif text-xl sm:text-2xl mb-4">{p.title}</h3>
                <div className="w-12 h-px bg-[#B8973A]/30 mx-auto mb-6" />
                <p className="text-[#4A4A4A] leading-relaxed text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ S6 — O QUE VOCÊ VAI APRENDER (6 aulas) ═══════ */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[800px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">O que você vai aprender</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {aulas.map((a) => (
              <div key={a.num} className="flex gap-5 group">
                <span className="font-serif text-2xl text-[#B8973A]/40 group-hover:text-[#B8973A] transition-colors shrink-0">{a.num}</span>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl mb-1">{a.title}</h4>
                  <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ S7 — OS BÔNUS (3 cards) ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[800px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">Bônus exclusivos</h2>
          <p className="text-center text-[#4A4A4A] text-lg mb-16 max-w-md mx-auto">Materiais complementares para acelerar sua aplicação do método.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bonusItems.map((b, i) => (
              <div key={i} className="bg-white/60 p-8 border border-[#B8973A]/20 flex flex-col">
                <span className="text-xs text-[#B8973A] font-medium tracking-[0.15em] uppercase mb-4">Bônus {String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-serif text-lg mb-3 leading-snug">{b.title}</h4>
                <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">{b.desc}</p>
                <span className="text-[#B8973A] font-serif text-sm mt-4">Valor percebido: {b.valor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DEPOIMENTOS (3 placeholders) ═══════ */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">Quem aplicou, aprova</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {depoimentos.map((d, i) => (
              <div key={i} className="text-center">
                {/* TODO: adicionar foto circular do depoimento */}
                <div className="w-20 h-20 rounded-full bg-[#F5F0E8]/10 mx-auto mb-6" />
                <p className="font-serif italic text-[#F5F0E8]/80 text-base leading-relaxed mb-6">&ldquo;{d.texto}&rdquo;</p>
                <span className="font-serif text-[#B8973A]">{d.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ S8 — ANTES X DEPOIS ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[960px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">A transformação que o método entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#6B1C2A]/10 p-10 md:p-12">
              <span className="text-[#6B1C2A] font-serif text-sm tracking-[0.15em] uppercase mb-8 block">Antes</span>
              <ul className="space-y-5 text-[#4A4A4A] text-base leading-relaxed">
                <li className="flex gap-3"><span className="text-[#6B1C2A] mt-0.5 shrink-0">—</span>Conversas boas que não viram negócio.</li>
                <li className="flex gap-3"><span className="text-[#6B1C2A] mt-0.5 shrink-0">—</span>Medo de parecer vendedora ou insistente.</li>
                <li className="flex gap-3"><span className="text-[#6B1C2A] mt-0.5 shrink-0">—</span>Preço baixo porque o valor não ficou claro.</li>
                <li className="flex gap-3"><span className="text-[#6B1C2A] mt-0.5 shrink-0">—</span>Receita imprevisível, dependente de sorte.</li>
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="h-full w-px bg-[#B8973A]/30" />
            </div>
            <div className="bg-[#B8973A]/10 p-10 md:p-12">
              <span className="text-[#B8973A] font-serif text-sm tracking-[0.15em] uppercase mb-8 block">Depois</span>
              <ul className="space-y-5 text-[#4A4A4A] text-base leading-relaxed">
                <li className="flex gap-3"><span className="text-[#B8973A] mt-0.5 shrink-0">+</span>Cada conversa vira oportunidade real de venda.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] mt-0.5 shrink-0">+</span>Vende sendo você mesma, sem performance.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] mt-0.5 shrink-0">+</span>Cobra o que vale porque o valor ficou óbvio.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] mt-0.5 shrink-0">+</span>Receita previsível que nasce de método, não de sorte.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S9 — PARA QUEM É / NÃO É ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center">Este método é pra você?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#B8973A]/30 -translate-x-px" />
            <div className="p-10 md:p-12 md:pr-16">
              <h3 className="font-serif text-2xl mb-8 text-[#B8973A]">É pra você, se você...</h3>
              <ul className="space-y-5 text-base text-[#4A4A4A] leading-relaxed">
                <li className="flex gap-3"><span className="text-[#B8973A] font-bold mt-0.5 shrink-0">✓</span>É mentora, consultora, designer, terapeuta, nutricionista, social media, criadora digital ou outra prestadora de serviço que vende pelo próprio esforço.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] font-bold mt-0.5 shrink-0">✓</span>Sabe entregar um bom trabalho, mas trava na hora de conduzir a conversa até o fechamento.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] font-bold mt-0.5 shrink-0">✓</span>Quer cobrar mais sem se sentir gananciosa e sem perder a essência do que faz.</li>
                <li className="flex gap-3"><span className="text-[#B8973A] font-bold mt-0.5 shrink-0">✓</span>Acredita que vender bem não precisa custar sua autenticidade.</li>
              </ul>
            </div>
            <div className="p-10 md:p-12 md:pl-16">
              <h3 className="font-serif text-2xl mb-8 text-[#6B1C2A]">Não é pra você, se você...</h3>
              <ul className="space-y-5 text-base text-[#4A4A4A] leading-relaxed">
                <li className="flex gap-3"><span className="text-[#6B1C2A] font-bold mt-0.5 shrink-0">✕</span>Procura fórmula mágica, atalho ou promessa de ficar rica em 30 dias.</li>
                <li className="flex gap-3"><span className="text-[#6B1C2A] font-bold mt-0.5 shrink-0">✕</span>Quer técnicas de pressão, manipulação ou forçar a venda.</li>
                <li className="flex gap-3"><span className="text-[#6B1C2A] font-bold mt-0.5 shrink-0">✕</span>Não está disposta a aplicar o que vai aprender na prática.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S10 — SOBRE MONIKE ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <img src={monikeVendaSemVender} alt="Monike Kineippe — Criadora do método Venda $em Vender" className="grayscale contrast-125 transition-all duration-700 hover:grayscale-0 w-full max-w-md" loading="lazy" width={448} height={560} />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#B8973A] hidden md:block" />
            </div>
            <div className="space-y-8">
              <span className="inline-block text-[#B8973A] text-xs tracking-[0.25em] uppercase font-medium">QUEM TE ENSINA</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Monike Kineippe</h2>
              <div className="space-y-6 text-lg text-[#4A4A4A] leading-[1.7]">
                <p>Há mais de 18 anos ajudo mulheres empreendedoras a transformarem conhecimento em renda previsível, com estrutura e verdade.</p>
                <p>Já impactei mais de 5.000 mulheres, escrevi 2 livros, e construí um ecossistema completo de soluções para quem quer crescer sem se perder.</p>
                <p>O método Venda $em Vender nasceu da prática. Foi testado, ajustado e validado em workshops presenciais antes de virar curso digital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S11 — INVESTIMENTO ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[600px]">
          <div className="bg-white p-10 sm:p-12 border-2 border-[#B8973A] text-center">
            <span className="inline-block text-[#B8973A] text-xs tracking-[0.25em] uppercase mb-6 font-medium">INVESTIMENTO</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8">O que está incluso</h2>
            <ul className="space-y-3 text-[#4A4A4A] text-base text-left mb-10">
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>6 aulas gravadas e editadas</li>
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>Acesso vitalício</li>
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>E-book prático Venda $em Vender</li>
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>Material de Apoio Vendas & Closer</li>
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>Planeje Seu Mês com Propósito</li>
              <li className="flex gap-3"><span className="text-[#B8973A] font-bold">+</span>7 dias de garantia incondicional</li>
            </ul>
            <Divider />
            <div className="my-8">
              <p className="text-[#4A4A4A] line-through text-base mb-2">De R$ 297</p>
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2">R$ 147</p>
              <p className="text-sm text-[#4A4A4A]">Pagamento único. Acesso imediato.</p>
            </div>
            <Divider />
            <div className="mt-8">
              <Btn className="w-full">Quero começar agora</Btn>
              <p className="text-xs text-[#4A4A4A] mt-4">Compra segura. 7 dias de garantia incondicional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S12 — GARANTIA ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-[720px]">
          <div className="flex flex-col sm:flex-row items-center gap-8 border border-[#B8973A]/30 p-8 sm:p-10">
            <div className="shrink-0 w-20 h-20 rounded-full border-2 border-[#B8973A] flex items-center justify-center">
              <span className="font-serif text-3xl text-[#B8973A] font-bold">7</span>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl mb-2">Garantia incondicional</h3>
              <p className="text-[#4A4A4A] text-base leading-relaxed">
                Se nos primeiros 7 dias você sentir que o método não é pra você, devolvemos 100% do valor. Sem perguntas, sem burocracia, sem ressentimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S13 — FAQ (8 perguntas) ═══════ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[720px]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqData.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#B8973A]/20 px-1">
                <AccordionTrigger className="font-serif text-lg text-left hover:no-underline py-6">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] text-base leading-relaxed pb-6">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════ S14 — CTA FINAL (faixa vinho) ═══════ */}
      <section className="bg-[#6B1C2A] py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-[720px] text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
            Você não precisa vender mais. Precisa vender diferente.
          </h2>
          <p className="text-[#F5F0E8]/80 text-lg mb-10 max-w-lg mx-auto">
            Se você chegou até aqui, já sabe que precisa de método. Não de mais conteúdo gratuito. R$ 147 é menos do que uma sessão, um atendimento, uma proposta. E pode ser a virada que destrava todas as próximas.
          </p>
          <Btn className="bg-[#B8973A] hover:bg-[#F5F0E8] text-[#1A1A1A] hover:text-[#6B1C2A]">
            Quero o acesso por R$ 147
          </Btn>
          <p className="text-[#F5F0E8]/50 text-sm mt-4">Acesso imediato. Acesso vitalício. 7 dias de garantia.</p>
        </div>
      </section>

      {/* ═══════ RODAPÉ ═══════ */}
      <footer className="bg-[#1A1A1A] py-16 text-[#F5F0E8]/40 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="font-serif text-2xl text-[#F5F0E8]/80 mb-8">Monike Kineippe</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-sm uppercase tracking-widest mb-10">
            <a href="mailto:contato@monikekineippe.com.br" className="hover:text-[#B8973A] transition-colors">contato@monikekineippe.com.br</a>
            <a href="/politica-de-privacidade" className="hover:text-[#B8973A] transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-[#B8973A] transition-colors">Termos de Uso</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Monike Kineippe Consultoria e Palestra LTDA. CNPJ: 19.911.204/0001-02. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ──── WhatsApp flutuante (placeholder) ──── */}
      {/* TODO: substituir link do WhatsApp */}
      <a
        href="https://wa.me/5511972313181?text=Olá! Quero saber mais sobre o Venda $em Vender."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#B8973A] hover:bg-[#6B1C2A] text-[#F5F0E8] flex items-center justify-center shadow-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
};

export default VendaSemVender;
