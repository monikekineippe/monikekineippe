import { motion } from "framer-motion";
import { Calendar, Video, MessageCircle, FileText, Sparkles } from "lucide-react";

const details = [
  { icon: Calendar, label: "Duração", value: "12 semanas (3 meses)" },
  { icon: Video, label: "Encontros", value: "1x por semana, ao vivo (Meet)" },
  { icon: MessageCircle, label: "Acompanhamento", value: "Grupo fechado no WhatsApp" },
  { icon: FileText, label: "Suporte", value: "Checklists + templates + materiais + devolutiva em grupo" },
  { icon: Sparkles, label: "Bônus", value: "90 dias de acesso à CoruJah + templates completos" },
];

const dynamics = [
  "Roda de insights (aquecimento rápido)",
  "Hot seat (1 negócio por encontro)",
  "Perguntas + devolutiva estratégica",
  "Microdesafio de ativação semanal",
];

const LapidandoHowItWorks = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 18%, 10%)" }}>
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2" style={{ color: "#FAF7F2" }}>
          Como <span className="text-gradient-gold">Funciona</span>
        </h2>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {details.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-lg p-5 flex items-start gap-3"
            style={{ backgroundColor: "hsl(220, 20%, 6%)", border: "1px solid hsl(220, 15%, 18%)" }}>
            <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(42, 78%, 55%)" }} />
            <div>
              <p className="font-sans font-semibold text-sm" style={{ color: "#FAF7F2" }}>{item.label}</p>
              <p className="font-sans text-sm" style={{ color: "rgba(250,247,242,0.55)" }}>{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="rounded-xl p-8" style={{ backgroundColor: "hsl(220, 20%, 6%)", border: "1px solid hsl(42 78% 55% / 0.2)" }}>
        <h3 className="font-serif text-xl font-semibold mb-5" style={{ color: "hsl(42, 78%, 55%)" }}>
          💎 Dinâmica ao vivo (toda semana):
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {dynamics.map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-sans text-sm" style={{ color: "rgba(250,247,242,0.8)" }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "hsl(42, 78%, 55%)" }} />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LapidandoHowItWorks;
