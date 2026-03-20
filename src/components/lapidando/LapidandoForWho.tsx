import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "você já tem experiência real e entrega de verdade",
  "você quer transformar seu conhecimento em produto/escada",
  "você quer previsibilidade no digital sem virar refém do negócio",
  "você aceita execução com leveza, mas com responsabilidade",
];

const notForYou = [
  "você quer fórmula pronta sem implementar",
  "você está buscando validação, não estrutura",
  "você não tem tempo mínimo semanal pra aplicar (mesmo que pouco)",
];

const LapidandoForWho = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2" style={{ color: "#FAF7F2" }}>
          Pra quem é <span style={{ color: "rgba(250,247,242,0.55)" }}>(e pra quem não é)</span>
        </h2>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-xl p-8" style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(42 78% 55% / 0.2)" }}>
          <h3 className="font-serif text-xl font-semibold mb-6" style={{ color: "hsl(42, 78%, 55%)" }}>
            ✅ Essa mentoria é pra você se:
          </h3>
          <div className="space-y-4">
            {forYou.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(42, 78%, 55%)" }} />
                <span className="font-sans text-sm" style={{ color: "rgba(250,247,242,0.8)" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-xl p-8" style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)" }}>
          <h3 className="font-serif text-xl font-semibold mb-6" style={{ color: "rgba(250,247,242,0.55)" }}>
            ❌ Não é pra você se:
          </h3>
          <div className="space-y-4">
            {notForYou.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "rgba(250,247,242,0.55)" }} />
                <span className="font-sans text-sm" style={{ color: "rgba(250,247,242,0.55)" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LapidandoForWho;
