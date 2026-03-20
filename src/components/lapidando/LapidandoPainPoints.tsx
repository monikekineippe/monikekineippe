import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const painItems = [
  "mês bom, mês ruim",
  "muito esforço, pouca previsibilidade",
  "conteúdo sem direção",
  'e aquela sensação de "eu sei fazer… mas não consigo organizar o digital"',
];

const LapidandoPainPoints = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4" style={{ color: "#FAF7F2" }}>
          A verdade que <span className="text-gradient-gold">ninguém te disse</span>
        </h2>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-10" />

        <p className="text-lg text-center mb-8 font-sans leading-relaxed" style={{ color: "rgba(250,247,242,0.8)" }}>
          Se você já vende por indicação, networking ou "porque é boa"… você tem um ativo.
          Só que <strong style={{ color: "#FAF7F2" }}>ativo sem sistema</strong> vira uma vida assim:
        </p>

        <div className="space-y-4 mb-10">
          {painItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-lg p-4"
              style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)" }}
            >
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(42, 78%, 55%)" }} />
              <span className="font-sans" style={{ color: "rgba(250,247,242,0.8)" }}>{item}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-lg font-sans leading-relaxed" style={{ color: "rgba(250,247,242,0.9)" }}>
          A <strong className="text-gradient-gold">Lapidando Diamante$</strong> existe pra isso: transformar seu off-line em um negócio digital que{" "}
          <strong style={{ color: "#FAF7F2" }}>não depende da sua energia do dia.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default LapidandoPainPoints;
