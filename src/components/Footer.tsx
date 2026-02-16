import { Link } from "react-router-dom";

const Footer = () => {
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
              <Link to="/sobre" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Sobre</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-secondary mb-4">Contato</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/60">
              <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                WhatsApp (Carine)
              </a>
              <span>contato@monikekineippe.com.br</span>
              <a href="https://instagram.com/monikekineippe" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                @monikekineippe
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
