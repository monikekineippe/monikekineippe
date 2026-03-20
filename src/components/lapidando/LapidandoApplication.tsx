import { useState } from "react";
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";
import LapidandoApplicationForm from "./LapidandoApplicationForm";

const criteria = [
  "estágio do seu negócio",
  "clareza do que você entrega",
  "disponibilidade mínima pra executar",
  "se o seu gargalo é estrutura (mentoria) ou outro caminho do ecossistema",
];

const LapidandoApplication = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="aplicacao" className="py-24 px-6" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Diamond className="w-8 h-8 mx-auto mb-4 animate-pulse-gold" style={{ color: "hsl(42, 78%, 55%)" }} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#FAF7F2" }}>
            Aplicação para a Mentoria{" "}
            <span className="text-gradient-gold">Lapidando Diamante$</span>
          </h2>

          <p className="font-sans mb-8 text-lg leading-relaxed" style={{ color: "rgba(250,247,242,0.7)" }}>
            Eu não aceito todo mundo.{" "}
            <br className="hidden sm:block" />
            Porque uma mentoria com alma não pode virar terapia coletiva nem sala de curiosas.
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-gold font-sans font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transform duration-300 glow-gold mb-3"
            style={{ color: "hsl(220, 20%, 6%)" }}
          >
            ✅ Clique para aplicar
          </button>
          <p className="text-sm font-sans mb-10" style={{ color: "rgba(250,247,242,0.55)" }}>(leva 3 minutos)</p>

          <div className="rounded-xl p-6 text-left" style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)" }}>
            <p className="font-sans text-sm mb-4" style={{ color: "rgba(250,247,242,0.8)" }}>
              No formulário eu vou avaliar:
            </p>
            <div className="space-y-3">
              {criteria.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Diamond className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color: "hsl(42, 78%, 55%)" }} />
                  <span className="text-sm font-sans" style={{ color: "rgba(250,247,242,0.55)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <LapidandoApplicationForm open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default LapidandoApplication;
