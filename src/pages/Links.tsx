import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Instagram, Youtube, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";
import monike from "@/assets/monike-1.jpg";

/**
 * Link na bio — hub "nave-mãe" da Monike Kineippe.
 * Estética: old money CEO / luxo minimalista.
 * Paleta: creme #F7F4EF, grafite #1C1C1C, verde #1E3A32, dourado #B8975A.
 *
 * Para editar links depois: procure a constante LINKS abaixo.
 * Meta Pixel: já carregado globalmente no index.html (ID 1889631038500773).
 * Para trocar a foto: substitua src/assets/monike-1.jpg por um headshot (close do rosto).
 */

// Meta Pixel — fbq global (carregado no index.html)
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
const track = (eventName: string) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName);
  }
};

// ————————————————————————————————————————————————————————
// LINKS — edite aqui
// ————————————————————————————————————————————————————————
const LINKS = {
  // 3 Portas
  nexura: "https://nexurasensorial.com.br",
  blamai: "https://agenciaai.com.br",
  mentorias: "https://www.monikekineippe.com/dona-de-si",

  // CTA principal
  diagnostico: "https://www.monikekineippe.com.br/diagnostico",

  // WhatsApp — palestras & eventos
  whatsapp: "https://wa.me/5511972313181?text=Oi%20Monike!%20Quero%20falar%20sobre%20uma%20palestra%2Fevento%20presencial",

  // Links rápidos
  vendaSemVender: "https://www.monikekineippe.com/venda-sem-vender",
  corujah: "https://monikekineippe.com/corujah",
  empresaria40: "https://www.monikekineippe.com/empresaria-40",
  gestao3d: "https://gestao3d.agenciaai.com.br",
  livro: "https://payfast.greenn.com.br/59094/offer/q1AC8f?b_id_1=109226&b_offer_1=sqfaxL&b_id_2=102443&b_offer_2=uc0dmn&utm_source=instagram",
  substack: "https://monikekineippe.substack.com/",
  site: "https://monikekineippe.com",

  // Sociais
  instagram: "https://instagram.com/monikekineippe",
  youtube: "https://www.youtube.com/@monikekineippe",
  linkedin: "https://www.linkedin.com/in/monikekineippe/",
};

// ————————————————————————————————————————————————————————
// Preserva UTMs vindos da URL atual
// ————————————————————————————————————————————————————————
const useUtmForwarder = () => {
  const [qs, setQs] = useState("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm = new URLSearchParams();
    params.forEach((v, k) => {
      if (k.toLowerCase().startsWith("utm_") || k === "gclid" || k === "fbclid") utm.set(k, v);
    });
    setQs(utm.toString());
  }, []);
  return (url: string) => {
    if (!url || !qs) return url;
    try {
      const u = new URL(url);
      const existing = u.searchParams;
      new URLSearchParams(qs).forEach((v, k) => {
        if (!existing.has(k)) existing.set(k, v);
      });
      return u.toString();
    } catch {
      return url;
    }
  };
};

// ————————————————————————————————————————————————————————
// UI helpers
// ————————————————————————————————————————————————————————
const ExtLink = ({
  href,
  className,
  children,
  ariaLabel,
  disabled,
  onClick,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  if (disabled || !href) {
    return (
      <div className={className} aria-disabled aria-label={ariaLabel}>
        {children}
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const Links = () => {
  const withUtm = useUtmForwarder();

  // Dispara PageView do Meta Pixel especificamente na rota /links
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, []);

  const openWith = (event: string) => () => track(event);



  return (
    <div
      className="min-h-screen antialiased"
      style={{
        backgroundColor: "#F7F4EF",
        color: "#1C1C1C",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Helmet>
        <title>Monike Kineippe — Escolha por onde entrar</title>
        <meta
          name="description"
          content="Hub oficial de Monike Kineippe. Negócios femininos com tecnologia, alma e estrutura: Nexura Sensorial, BlamAI e Mentorias."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Monike Kineippe — Escolha por onde entrar" />
        <meta
          property="og:description"
          content="Construo negócios com tecnologia, alma e estrutura. Escolha por onde entrar."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://monikekineippe.lovable.app/og-links.jpg" />
        <meta property="og:url" content="https://monikekineippe.lovable.app/links" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monike Kineippe — Escolha por onde entrar" />
        <meta name="twitter:image" content="https://monikekineippe.lovable.app/og-links.jpg" />
        <link rel="canonical" href="https://monikekineippe.lovable.app/links" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Meta Pixel já carregado globalmente (ID 1889631038500773) */}
      </Helmet>

      <style>{`
        .serif { font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif; letter-spacing: -0.005em; }
        .fade-up { opacity: 0; transform: translateY(12px); animation: fadeUp .8s ease forwards; }
        .fade-up.d1 { animation-delay: .05s; }
        .fade-up.d2 { animation-delay: .15s; }
        .fade-up.d3 { animation-delay: .25s; }
        .fade-up.d4 { animation-delay: .35s; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .card-lift { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .card-lift:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -24px rgba(28,28,28,.18); }
        .gold-rule { height:1px; background: linear-gradient(90deg, transparent, #B8975A66, transparent); }
      `}</style>

      <main className="mx-auto w-full max-w-xl px-6 pt-14 pb-16 md:max-w-3xl md:pt-20">
        {/* 1. HERO */}
        <header className="text-center fade-up">
          <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40"
              style={{ backgroundColor: "#B8975A" }}
              aria-hidden
            />
            <img
              src={monike}
              alt="Monike Kineippe"
              width={144}
              height={144}
              className="relative w-full h-full rounded-full object-cover"
              style={{
                objectPosition: "top center",
                boxShadow: "0 0 0 1px #B8975A, 0 0 0 6px #F7F4EF, 0 0 0 7px #B8975A55",
              }}
            />
          </div>

          <h1 className="serif mt-8 text-3xl md:text-5xl font-medium" style={{ color: "#1C1C1C" }}>
            Monike Kineippe
          </h1>
          <p
            className="mt-3 text-sm md:text-base tracking-wide"
            style={{ color: "#1C1C1C99" }}
          >
            Founder em série · Construo negócios com tecnologia, alma e estrutura
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <div className="gold-rule mb-6" />
            <p
              className="serif italic text-xl md:text-2xl leading-snug"
              style={{ color: "#1E3A32" }}
            >
              Mulher empreende diferente.
              <br />
              Eu construo o mundo que faltava. <span aria-hidden>💎</span>
            </p>
            <div className="gold-rule mt-6" />
          </div>

          <p
            className="mt-8 text-xs md:text-sm uppercase tracking-[0.28em]"
            style={{ color: "#B8975A" }}
          >
            Escolha por onde entrar ↓
          </p>
        </header>

        {/* 2. AS 3 PORTAS */}
        <section className="mt-14 fade-up d1" aria-label="As três frentes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Nexura */}
            <ExtLink
              href={withUtm(LINKS.nexura)}
              className="card-lift relative flex flex-col justify-between rounded-lg p-6 min-h-[180px]"
              ariaLabel="Nexura Sensorial"
              onClick={openWith("Clique_Nexura")}
            >
              <div
                className="absolute inset-0 rounded-lg border pointer-events-none"
                style={{ borderColor: "#1C1C1C14" }}
              />
              <div className="relative">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "#B8975A" }}
                >
                  Frente 01
                </p>
                <h2 className="serif text-2xl md:text-[1.6rem] leading-tight" style={{ color: "#1C1C1C" }}>
                  Nexura Sensorial
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#1C1C1C99" }}>
                  Produtos sensoriais 3D para crianças atípicas. Desenvolvimento com afeto.
                </p>
              </div>
              <div
                className="relative mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
                style={{ color: "#1E3A32" }}
              >
                Visitar <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </ExtLink>

            {/* BlamAI */}
            <ExtLink
              href={withUtm(LINKS.blamai)}
              disabled={!LINKS.blamai}
              className="card-lift relative flex flex-col justify-between rounded-lg p-6 min-h-[180px] cursor-default"
              ariaLabel="BlamAI — em breve"
            >
              <div
                className="absolute inset-0 rounded-lg border pointer-events-none"
                style={{ borderColor: "#1C1C1C14" }}
              />
              <span
                className="absolute top-4 right-4 text-[9px] tracking-[0.25em] uppercase px-2 py-1 rounded-sm"
                style={{ backgroundColor: "#1E3A32", color: "#F7F4EF" }}
              >
                Em breve
              </span>
              <div className="relative">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "#B8975A" }}
                >
                  Frente 02
                </p>
                <h2 className="serif text-2xl md:text-[1.6rem] leading-tight" style={{ color: "#1C1C1C" }}>
                  BlamAI<sup className="text-xs">®</sup>
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#1C1C1C99" }}>
                  Agência de IA e automação para negócios.
                </p>
              </div>
              <div
                className="relative mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-60"
                style={{ color: "#1E3A32" }}
              >
                Em construção
              </div>
            </ExtLink>

            {/* Mentorias */}
            <ExtLink
              href={withUtm(LINKS.mentorias)}
              className="card-lift relative flex flex-col justify-between rounded-lg p-6 min-h-[180px]"
              ariaLabel="Mentorias & Palestras"
            >
              <div
                className="absolute inset-0 rounded-lg border pointer-events-none"
                style={{ borderColor: "#1C1C1C14" }}
              />
              <div className="relative">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "#B8975A" }}
                >
                  Frente 03
                </p>
                <h2 className="serif text-2xl md:text-[1.6rem] leading-tight" style={{ color: "#1C1C1C" }}>
                  Mentorias & Palestras
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#1C1C1C99" }}>
                  Transforme conhecimento em negócio previsível.
                </p>
              </div>
              <div
                className="relative mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
                style={{ color: "#1E3A32" }}
              >
                Conhecer <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </ExtLink>
          </div>
        </section>

        {/* 3. DESTAQUE — DIAGNÓSTICO */}
        <section className="mt-14 fade-up d2">
          <div
            className="rounded-lg p-8 md:p-10 text-center relative overflow-hidden"
            style={{ backgroundColor: "#1E3A32", color: "#F7F4EF" }}
          >
            <div
              className="absolute inset-x-8 top-4 h-px opacity-40"
              style={{ background: "linear-gradient(90deg, transparent, #B8975A, transparent)" }}
              aria-hidden
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ color: "#B8975A" }}
            >
              Porta principal
            </p>
            <h3 className="serif text-2xl md:text-4xl leading-tight">
              Não sabe por onde começar?
            </h3>
            <p className="mt-3 text-sm md:text-base opacity-80 max-w-md mx-auto">
              Faça o diagnóstico gratuito do seu negócio.
            </p>
            <a
              href={withUtm(LINKS.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-7 px-8 py-3.5 text-sm tracking-[0.2em] uppercase transition-all hover:opacity-90"
              style={{
                backgroundColor: "#B8975A",
                color: "#1C1C1C",
                fontWeight: 500,
              }}
            >
              Fazer meu diagnóstico
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* 3b — WhatsApp palestras */}
            <div className="mt-5">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs md:text-sm tracking-[0.18em] uppercase transition-all"
                style={{
                  border: "1px solid #B8975A",
                  color: "#F7F4EF",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Palestras & eventos presenciais — WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 4. LINKS RÁPIDOS */}
        <section className="mt-14 fade-up d3">
          <QuickGroup label="Comece por aqui">
            <QuickLink href={withUtm(LINKS.vendaSemVender)} title="Venda $em Vender" desc="Workshop para vender sem forçar" />
            <QuickLink href={withUtm(LINKS.corujah)} title="CoruJah" desc="IA que cria seu produto digital" />
            <QuickLink href={withUtm(LINKS.empresaria40)} title="Comunidade Empresária 4.0" desc="Rede de mulheres empreendedoras" />
          </QuickGroup>

          <QuickGroup label="Ferramentas & outras frentes">
            <QuickLink href={withUtm(LINKS.gestao3d)} title="Gestão3D" desc="Sistema de gestão e precificação para impressão 3D" />
          </QuickGroup>

          <QuickGroup label="Autoridade & conteúdo">
            <QuickLink href={withUtm(LINKS.livro)} title="Livro — Empreender Nunca Foi Sorte" desc="Adquira o livro" />
            <QuickLink href={withUtm(LINKS.substack)} title="Newsletter · Substack" desc="Ensaios sobre IA, negócios e mulheres" />
            <QuickLink href={withUtm(LINKS.site)} title="Site oficial" desc="monikekineippe.com" />
          </QuickGroup>
        </section>

        {/* 4b. REDES SOCIAIS */}
        <section className="mt-12 fade-up d4">
          <div className="gold-rule mb-8" />
          <nav aria-label="Redes sociais" className="flex items-center justify-center gap-6">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors"
              style={{ color: "#1C1C1C" }}
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{ color: "#1C1C1C" }}
            >
              <Youtube className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "#1C1C1C" }}
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </nav>
        </section>

        {/* 5. RODAPÉ */}
        <footer className="mt-14 text-center">
          <p
            className="serif text-sm"
            style={{ color: "#1C1C1C99" }}
          >
            Monike Kineippe Consultoria e Palestra LTDA.
          </p>
          <p
            className="mt-2 text-xs tracking-[0.25em]"
            style={{ color: "#B8975A" }}
            aria-hidden
          >
            💎 &nbsp; 🍀 &nbsp; ✨
          </p>
          <p className="mt-3 text-[11px]" style={{ color: "#1C1C1C66" }}>
            © {new Date().getFullYear()} · Todos os direitos reservados
          </p>
        </footer>
      </main>
    </div>
  );
};

// ————————————————————————————————————————————————————————
// Quick links
// ————————————————————————————————————————————————————————
const QuickGroup = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <p
      className="text-[10px] tracking-[0.3em] uppercase text-center mb-4"
      style={{ color: "#B8975A" }}
    >
      {label}
    </p>
    <div className="space-y-3">{children}</div>
  </div>
);

const QuickLink = ({ href, title, desc }: { href: string; title: string; desc: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card-lift group flex items-center gap-4 rounded-md px-5 py-4"
    style={{ border: "1px solid #1C1C1C1A", backgroundColor: "#FFFFFF80" }}
  >
    <div className="flex-1 min-w-0">
      <p className="serif text-base md:text-lg leading-tight" style={{ color: "#1C1C1C" }}>
        {title}
      </p>
      <p className="text-xs md:text-sm mt-0.5" style={{ color: "#1C1C1C99" }}>
        {desc}
      </p>
    </div>
    <ArrowUpRight
      className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      style={{ color: "#B8975A" }}
    />
  </a>
);

export default Links;
