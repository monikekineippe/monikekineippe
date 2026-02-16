import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Diagnóstico", path: "/diagnostico" },
  { label: "CoruJah", path: "/corujah" },
  { label: "Mentorias", path: "/mentorias" },
  { label: "IA Humanizada", path: "/ia-humanizada" },
  { label: "Palestras", path: "/palestras" },
  { label: "Livros", path: "/livros" },
  { label: "Conteúdos", path: "/conteudos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-secondary/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-serif text-xl tracking-wider text-foreground">
          <span className="text-primary font-semibold">MK</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-xs font-sans tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-background border-t border-secondary/10 animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`py-3 text-xs font-sans tracking-widest uppercase border-b border-border/50 last:border-0 ${
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
