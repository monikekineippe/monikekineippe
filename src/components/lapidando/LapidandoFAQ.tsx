import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Eu ainda não tenho produto digital.", a: "Ótimo. Você sai com o produto mínimo viável estruturado." },
  { q: "Eu tenho pouco tempo.", a: "A mentoria é desenhada pra rotina sustentável. Mas você precisa de um mínimo semanal." },
  { q: "Meu problema é vender, não criar produto.", a: "Venda sem oferta clara vira sofrimento. A gente arruma a base e ativa o processo comercial." },
  { q: "Vai ter suporte?", a: "Sim: grupo + materiais + devolutivas semanais + hot seat." },
];

const LapidandoFAQ = () => (
  <section className="py-24 px-6" style={{ backgroundColor: "hsl(220, 18%, 10%)" }}>
    <div className="container mx-auto max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2" style={{ color: "#FAF7F2" }}>
          Perguntas <span className="text-gradient-gold">Frequentes</span>
        </h2>
        <div className="w-16 h-px bg-gradient-gold mx-auto mb-10" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
            <AccordionItem value={`faq-${i}`} className="rounded-lg px-5" style={{ backgroundColor: "hsl(220, 20%, 6%)", border: "1px solid hsl(220, 15%, 18%)" }}>
              <AccordionTrigger className="font-sans text-sm hover:no-underline" style={{ color: "#FAF7F2" }}>{faq.q}</AccordionTrigger>
              <AccordionContent className="font-sans text-sm" style={{ color: "rgba(250,247,242,0.55)" }}>{faq.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default LapidandoFAQ;
