import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/monikekineippe", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/monikekineippe/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@monikekineippe", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Quote */}
        <p className="font-serif text-lg md:text-xl text-center mb-12 text-primary-foreground/80 italic max-w-2xl mx-auto">
          "Você já tem valor. Só falta estrutura pra transformar isso em previsibilidade."
        </p>

        <div className="gold-line mb-12 opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-secondary mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link to="/diagnostico" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Diagnóstico</Link>
              <Link to="/corujah" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">CoruJah</Link>
              <Link to="/mentorias" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Mentorias</Link>
              <Link to="/palestras" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Palestras</Link>
              <Link to="/livros" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Livros</Link>
              <Link to="/sobre" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Sobre</Link>
              <Link to="/contato" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contato</Link>
            </div>
          </div>

          {/* Contact + Socials */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-secondary mb-4">Contato</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/60 mb-6">
              <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                WhatsApp (Carine)
              </a>
              <span>contato@monikekineippe.com.br</span>
            </div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-secondary mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <s.icon size={20} />
                </a>
              ))}
              <a href="https://www.tiktok.com/@monikekineippe" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Brand */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <Link to="/" className="font-serif text-2xl tracking-wider mb-4">
              <span className="text-secondary">MK</span>
            </Link>
            <p className="text-primary-foreground/40 text-xs">© MK Company. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
