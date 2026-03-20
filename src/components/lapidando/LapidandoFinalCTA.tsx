import { useState } from "react";
import { motion } from "framer-motion";
import { Diamond, Instagram, MessageCircle } from "lucide-react";
import LapidandoApplicationForm from "./LapidandoApplicationForm";

const WA_LINK = "https://wa.me/+5511972313181?text=Quero%20saber%20mais%20da%20mentoria%20Lapidando%20Diamantes";

const LapidandoFinalCTA = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(42 78% 55% / 0.05), transparent)" }} />
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Diamond className="w-10 h-10 mx-auto mb-6 animate-float-diamond" style={{ color: "hsl(42, 78%, 55%)" }} />
            <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-6" style={{ color: "#FAF7F2" }}>
              Se você já tem valor e está cansada de improvisar…{" "}
              <br />
              <span className="text-gradient-gold">é aqui que você troca esforço por sistema.</span>
            </h2>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-gold font-sans font-semibold px-10 py-5 rounded-lg text-lg hover:scale-105 transform duration-300 glow-gold"
              style={{ color: "hsl(220, 20%, 6%)" }}
            >
              ✅ Quero aplicar para a Lapidando Diamante$
            </button>
          </motion.div>
        </div>

        <div className="container mx-auto max-w-4xl mt-20 pt-8" style={{ borderTop: "1px solid hsl(220, 15%, 18%)" }}>
          <p className="text-center text-xs font-sans mb-4" style={{ color: "rgba(250,247,242,0.4)" }}>
            © {new Date().getFullYear()} Lapidando Diamante$ — Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-5">
            <a href="https://www.instagram.com/monikekineippe" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: "hsl(42, 78%, 55%)" }}><Instagram size={18} /></a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: "hsl(42, 78%, 55%)" }}><MessageCircle size={18} /></a>
          </div>
        </div>

        <LapidandoApplicationForm open={formOpen} onOpenChange={setFormOpen} />
      </section>
    </>
  );
};

export default LapidandoFinalCTA;
