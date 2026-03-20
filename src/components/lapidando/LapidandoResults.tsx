import { motion } from "framer-motion";
import { Check, Diamond } from "lucide-react";

const results = [
  "um produto digital pronto (ou quase pronto) pra vender",
  "posicionamento e identidade claros (bio, pitch, perfil que converte)",
  "página de vendas + copy estruturadas",
  "funil e estratégia de conteúdo base",
  "precificação alinhada ao valor (sem culpa e sem subpreço)",
  "IA CoruJah como braço operacional pra acelerar entrega e atendimento",
  "plano de metas e vendas pros próximos 90 dias",
];

const LapidandoResults = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 18%, 10%)" }}>
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Diamond className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center" style={{ color: "#FAF7F2" }}>O Resultado</h2>
          <Diamond className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
        </div>
        <p className="text-center font-sans mb-2" style={{ color: "rgba(250,247,242,0.55)" }}>Ao final das 12 semanas, você sai com:</p>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-10" />

        <div className="space-y-3">
          {results.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-3 p-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "hsl(42 78% 55% / 0.2)" }}>
                <Check className="w-3.5 h-3.5" style={{ color: "hsl(42, 78%, 55%)" }} />
              </div>
              <span className="font-sans" style={{ color: "rgba(250,247,242,0.85)" }}>{item}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-lg font-serif italic" style={{ color: "hsl(42, 78%, 55%)" }}>
          Não é "motivação". É estrutura.
        </p>
      </motion.div>
    </div>
  </section>
);

export default LapidandoResults;
