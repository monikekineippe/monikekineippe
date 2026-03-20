import { motion } from "framer-motion";
import { Users, Compass, MessageSquare, Eye, Zap } from "lucide-react";

const reasons = [
  { icon: Compass, text: "Direção semanal" },
  { icon: MessageSquare, text: "Feedback rápido" },
  { icon: Eye, text: "Exemplos reais" },
  { icon: Zap, text: "Execução com cadência" },
];

const LapidandoWhyGroup = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="flex items-center justify-center gap-3 mb-2">
          <Users className="w-5 h-5" style={{ color: "hsl(42, 78%, 55%)" }} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: "#FAF7F2" }}>
            Por que em <span className="text-gradient-gold">grupo</span>?
          </h2>
        </div>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-6" />
        <p className="font-sans mb-10" style={{ color: "rgba(250,247,242,0.7)" }}>Porque estrutura se constrói com:</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {reasons.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl p-5 flex flex-col items-center gap-3"
            style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)" }}>
            <r.icon className="w-6 h-6" style={{ color: "hsl(42, 78%, 55%)" }} />
            <span className="text-sm font-sans" style={{ color: "rgba(250,247,242,0.8)" }}>{r.text}</span>
          </motion.div>
        ))}
      </div>

      <p className="font-serif italic text-lg" style={{ color: "rgba(250,247,242,0.7)" }}>
        Grupo não é "bagunça". É <span style={{ color: "hsl(42, 78%, 55%)" }}>ambiente de implementação.</span>
      </p>
    </div>
  </section>
);

export default LapidandoWhyGroup;
