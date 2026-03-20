import { useState } from "react";
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";
import heroBg from "@/assets/lapidando-hero-bg.jpg";
import LapidandoApplicationForm from "./LapidandoApplicationForm";

const LapidandoHero = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsl(220 20% 6% / 0.6), hsl(220 20% 6% / 0.8), hsl(220 20% 6%))" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Diamond className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
            <span className="text-sm font-sans uppercase tracking-[0.3em]" style={{ color: "hsl(42, 78%, 55%)" }}>
              Mentoria em Grupo
            </span>
            <Diamond className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-6" style={{ color: "#FAF7F2" }}>
            Lapidando{" "}
            <span className="text-gradient-gold">Diamante$</span>
          </h1>

          <p className="text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: "rgba(250,247,242,0.8)" }}>
            Transforme o que você já sabe (e já faz no off-line) em um{" "}
            <strong style={{ color: "#FAF7F2" }}>sistema previsível de vendas no digital</strong> — com estrutura, estratégia e alma.
          </p>

          <p className="font-serif text-base md:text-lg mb-10 max-w-xl mx-auto italic" style={{ color: "rgba(250,247,242,0.55)" }}>
            Você não precisa de mais uma ideia. Você precisa de arquitetura: oferta + posicionamento + processo de vendas + rotina sustentável.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col items-center gap-4">
          <button
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-gold font-sans font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transform duration-300 glow-gold"
            style={{ color: "hsl(220, 20%, 6%)" }}
          >
            ✅ Aplicar para a próxima turma
          </button>
          <span className="text-sm font-sans" style={{ color: "rgba(250,247,242,0.5)" }}>
            Leva 3 minutos. Resposta em até 48h.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-sans"
          style={{ color: "rgba(250,247,242,0.5)" }}
        >
          <span className="flex items-center gap-2">
            <Diamond className="w-3 h-3" style={{ color: "hsl(42, 78%, 55%)" }} />
            Prestadoras de serviço e mulheres com valor
          </span>
          <span className="flex items-center gap-2">
            <Diamond className="w-3 h-3" style={{ color: "hsl(42, 78%, 55%)" }} />
            12 semanas | Encontros semanais ao vivo
          </span>
          <span className="flex items-center gap-2">
            <Diamond className="w-3 h-3" style={{ color: "hsl(42, 78%, 55%)" }} />
            Grupo fechado | Online
          </span>
        </motion.div>

        <LapidandoApplicationForm open={formOpen} onOpenChange={setFormOpen} />
      </div>
    </section>
  );
};

export default LapidandoHero;
