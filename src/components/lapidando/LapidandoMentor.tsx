import { motion } from "framer-motion";
import { Diamond, Award, Users, Briefcase, Brain, Heart } from "lucide-react";

const milestones = [
  { icon: Briefcase, text: "Empresária desde os 18 anos" },
  { icon: Award, text: "+17 anos construindo, vendendo e recomeçando negócios" },
  { icon: Brain, text: "Criadora dos métodos ALMA DIGITAL™ e Mulher no Poder" },
  { icon: Users, text: "Estrategista de negócios digitais femininos com alma" },
  { icon: Heart, text: "Mãe, autora, colunista e implementadora de IA humanizada" },
];

const LapidandoMentor = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-secondary/80 uppercase tracking-[0.2em] text-xs font-sans mb-4 block">
            Sua mentora
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            Quem será sua mentora?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 font-sans text-[15px] leading-relaxed text-white/75"
          >
            <p>
              Meu nome é <strong className="text-white">Monike Kineippe</strong>. Abri meu primeiro CNPJ aos 18 anos. 
              De lá pra cá, foram mais de 17 anos construindo, vendendo e recomeçando negócios — passando por burnout, 
              perdas e reconstruções que me ensinaram uma coisa definitiva:
            </p>
            <blockquote className="border-l-2 border-secondary/50 pl-5 text-white/90 italic font-serif text-lg">
              "Talento não sustenta negócio. Estrutura sustenta."
            </blockquote>
            <p>
              Hoje atuo como estrategista de negócios digitais femininos, ajudando mulheres a saírem do improviso 
              e construírem ofertas, posicionamento e sistemas de vendas que geram renda com previsibilidade.
            </p>
            <p>
              Desenvolvi os métodos <strong className="text-secondary/90">ALMA DIGITAL™</strong> e{" "}
              <strong className="text-secondary/90">Mulher no Poder</strong>, unindo estratégia, identidade e execução — 
              os mesmos pilares que aplico nas mentorias individuais.
            </p>
          </motion.div>

          {/* Milestones + Value proposition */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-3">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-3"
                >
                  <item.icon className="w-4 h-4 text-secondary/70 flex-shrink-0" />
                  <span className="font-sans text-sm text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Value card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/[0.03] border border-secondary/20 rounded-xl p-6 space-y-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <Diamond className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-sans text-xs uppercase tracking-widest font-semibold">
                  Oportunidade exclusiva
                </span>
              </div>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Essa é <strong className="text-white">a mesma metodologia</strong> que entrego nas mentorias individuais — 
                com investimento a partir de <strong className="text-white">R$ 15 mil</strong>.
              </p>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                Pela <strong className="text-secondary">primeira vez</strong>, estou abrindo essa oportunidade em formato de grupo, 
                com um investimento <strong className="text-white">muito inferior</strong> — sem abrir mão da profundidade 
                e do acompanhamento estratégico.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LapidandoMentor;
