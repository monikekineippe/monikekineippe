import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Gem,
  Users,
  Bot,
  Mic,
  GraduationCap,
  BookOpen,
  FileText,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import monike from "@/assets/monike-1.jpg";

type LinkItem = {
  to: string;
  external?: boolean;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const primary: LinkItem[] = [
  {
    to: "/diagnostico",
    label: "Diagnóstico Gratuito",
    desc: "Descubra o próximo passo estratégico do seu negócio",
    icon: Sparkles,
    featured: true,
  },
  {
    to: "/venda-sem-vender",
    label: "Venda $em Vender",
    desc: "Workshop • 6 aulas • acesso por 1 ano",
    icon: Gem,
  },
  {
    to: "/dona-de-si",
    label: "Mentoria Dona de $i",
    desc: "Mentoria e aceleração 1:1 com a Monike",
    icon: Users,
  },
  {
    to: "/mentorias",
    label: "Método$ & Comunidade",
    desc: "Mentoria em grupo com estrutura e método",
    icon: Users,
  },
  {
    to: "/ia-humanizada",
    label: "IA Humanizada",
    desc: "Consultoria e estratégia de IA para o seu negócio",
    icon: Bot,
  },
];

const secondary: LinkItem[] = [
  { to: "/palestras", label: "Palestras", desc: "Palcos, congressos e eventos", icon: Mic },
  { to: "/treinamentos", label: "Treinamentos", desc: "Workshops, aulas e imersões in-company", icon: GraduationCap },
  { to: "/livros", label: "Livros", desc: "Empreender Nunca Foi Sorte", icon: BookOpen },
  { to: "/blog", label: "Blog", desc: "IA aplicada e negócios femininos", icon: FileText },
];

const ventures: LinkItem[] = [
  {
    to: "https://precifica3d.lovable.app/",
    external: true,
    label: "Precifica3D",
    desc: "SaaS de precificação para impressão 3D",
    icon: ArrowUpRight,
  },
];

const socials = [
  { href: "https://wa.me/5511972313181", label: "WhatsApp", icon: MessageCircle },
  { href: "https://instagram.com/monikekineippe", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/in/monikekineippe/", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com/@monikekineippe", label: "YouTube", icon: Youtube },
];

const LinkCard = ({ item }: { item: LinkItem }) => {
  const Icon = item.icon;
  const className = `group flex items-center gap-4 rounded-lg border p-5 transition-all ${
    item.featured
      ? "border-secondary bg-primary text-primary-foreground hover:bg-primary/90"
      : "border-border bg-card hover:border-secondary hover:shadow-md"
  }`;

  const inner = (
    <>
      <div
        className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
          item.featured ? "bg-secondary/20" : "bg-secondary/10"
        }`}
      >
        <Icon className="w-5 h-5 text-secondary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-serif text-base md:text-lg leading-tight">{item.label}</p>
        <p
          className={`font-sans text-xs md:text-sm mt-0.5 truncate ${
            item.featured ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {item.desc}
        </p>
      </div>
      <ArrowUpRight
        className={`w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          item.featured ? "text-secondary" : "text-muted-foreground group-hover:text-secondary"
        }`}
      />
    </>
  );

  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={item.to} className={className}>
      {inner}
    </Link>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary font-semibold text-center mb-3">
    {children}
  </p>
);

const Links = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Monike Kineippe — Links Oficiais</title>
        <meta
          name="description"
          content="Hub oficial de Monike Kineippe: mentorias, IA aplicada, palestras, livros e conteúdos para mulheres empreendedoras."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Monike Kineippe — Links Oficiais" />
        <meta
          property="og:description"
          content="Founder em série, estrategista de IA e autora. Acesse todas as frentes em um só lugar."
        />
        <meta property="og:type" content="profile" />
      </Helmet>

      {/* subtle gold vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.08),transparent_55%)]" />

      <main className="relative mx-auto w-full max-w-md px-5 pt-14 pb-16">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl" aria-hidden />
            <img
              src={monike}
              alt="Monike Kineippe"
              width={120}
              height={120}
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-secondary/60 shadow-lg"
            />
          </div>
          <h1 className="mt-5 font-serif text-2xl md:text-3xl">Monike Kineippe</h1>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            Founder em série • Estrategista de IA • Autora
          </p>
          <p className="mt-4 font-serif italic text-sm text-foreground/80 max-w-xs">
            "Talento não sustenta negócio. Estrutura sustenta."
          </p>

          {/* Socials */}
          <nav aria-label="Redes sociais" className="mt-6 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </nav>
        </header>

        {/* Primary links */}
        <section className="mt-10">
          <SectionLabel>Comece por aqui</SectionLabel>
          <div className="space-y-3">
            {primary.map((item) => (
              <LinkCard key={item.to} item={item} />
            ))}
          </div>
        </section>

        {/* Secondary */}
        <section className="mt-8">
          <SectionLabel>Marca & Conteúdo</SectionLabel>
          <div className="space-y-3">
            {secondary.map((item) => (
              <LinkCard key={item.to} item={item} />
            ))}
          </div>
        </section>

        {/* Ventures */}
        <section className="mt-8">
          <SectionLabel>Founder em série</SectionLabel>
          <div className="space-y-3">
            {ventures.map((item) => (
              <LinkCard key={item.to} item={item} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <Link
            to="/"
            className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-secondary transition-colors"
          >
            Visitar site oficial
          </Link>
          <p className="mt-4 font-sans text-[11px] text-muted-foreground/70">
            © {new Date().getFullYear()} Monike Kineippe
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Links;
