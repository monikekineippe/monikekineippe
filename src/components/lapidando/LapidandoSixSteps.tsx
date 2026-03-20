import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

const steps = [
  { num: "01", title: "Descobrir o Diamante", subtitle: "Clareza de valor", desc: "Você identifica seus ativos reais e o que, de fato, vira oferta.", tools: "Mapa de Talentos Monetizáveis + leitura de persona + Canvas ALMA" },
  { num: "02", title: "Escolher a Lapidação", subtitle: "Produto ideal", desc: "Você decide o modelo certo e estrutura o produto mínimo viável.", tools: "Matriz de Escolha Inteligente + templates CoruJah de produto" },
  { num: "03", title: "Encontrar o Brilho Certo", subtitle: "Posicionamento", desc: "Você constrói marca pessoal que vende sem te engolir.", tools: "Mapa de Posicionamento + bio/pitch/perfil + copy base" },
  { num: "04", title: "Criar Estrutura de Valor", subtitle: "Copy + páginas + funil", desc: 'Você monta a estrutura que vende mesmo quando você não está "no modo energia alta".', tools: "Roteiro de página + modelo duplicável + calendário de conteúdo + story funnel" },
  { num: "05", title: "Ativar a Energia da Venda", subtitle: "Preço + validação + pitch", desc: "Você precifica com firmeza e aprende a vender sem se violentar.", tools: "Calculadora de Preço ALMA + pitch template + simulação/feedback" },
  { num: "06", title: "Escalar com Alma", subtitle: "Automação + previsibilidade", desc: "Você organiza bastidores e rotina pra parar de depender do improviso.", tools: "Fluxos básicos CoruJah + planejador de previsibilidade + plano 90 dias" },
];

const LapidandoSixSteps = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 20%, 6%)" }}>
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2" style={{ color: "#FAF7F2" }}>
          Os 6 Passos do <span className="text-gradient-gold">Método</span>
        </h2>
        <p className="text-center font-sans mb-2" style={{ color: "rgba(250,247,242,0.55)" }}>O método por dentro</p>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-14" />
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-xl p-6 md:p-8 transition-all duration-300"
            style={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)" }}>
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <span className="text-3xl font-serif font-bold transition-colors" style={{ color: "hsl(42 78% 55% / 0.3)" }}>{step.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Diamond className="w-3.5 h-3.5" style={{ color: "hsl(42, 78%, 55%)" }} />
                  <h3 className="font-serif text-lg md:text-xl font-semibold" style={{ color: "#FAF7F2" }}>{step.title}</h3>
                </div>
                <p className="text-xs uppercase tracking-widest font-sans mb-2" style={{ color: "hsl(42 78% 55% / 0.7)" }}>{step.subtitle}</p>
                <p className="font-sans text-sm mb-3" style={{ color: "rgba(250,247,242,0.75)" }}>{step.desc}</p>
                <p className="text-xs font-sans" style={{ color: "rgba(250,247,242,0.55)" }}>
                  <span style={{ color: "hsl(42 78% 55% / 0.6)" }}>Ferramentas:</span> {step.tools}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LapidandoSixSteps;
