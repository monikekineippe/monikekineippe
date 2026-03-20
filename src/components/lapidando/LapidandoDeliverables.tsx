import { motion } from "framer-motion";
import { Gift, Diamond } from "lucide-react";

const items = [
  'Templates "ctrl+c/ctrl+v" de página de vendas e copy',
  "Kit de posicionamento e storytelling",
  "Matriz de escolha de produto",
  "Calendário de conteúdo com intenção",
  "Calculadora de preço ALMA",
  "Prompt pack (Reels, Stories, VSL/página)",
  "Mapas (talentos monetizáveis, persona, oferta em 1 tela)",
  "CoruJah por 90 dias como braço operacional",
];

const LapidandoDeliverables = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 18%, 10%)" }}>
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="flex items-center justify-center gap-3 mb-2">
          <Gift className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center" style={{ color: "#FAF7F2" }}>
            O que você <span className="text-gradient-gold">leva</span>
          </h2>
        </div>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-10" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-3 rounded-lg p-4 shimmer-lapidando"
            style={{ backgroundColor: "hsl(220, 20%, 6%)", border: "1px solid hsl(220, 15%, 18%)" }}>
            <Diamond className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(42, 78%, 55%)" }} />
            <span className="text-sm font-sans" style={{ color: "rgba(250,247,242,0.8)" }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LapidandoDeliverables;
