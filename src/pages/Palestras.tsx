import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const Palestras = () => {
  return (
    <>
      <PageHero
        tag="Palco"
        title="Palestras e Treinamentos"
        subtitle="Menos motivacional vazio. Mais direção prática."
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Temas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Esse não é o ano da força. É o ano do sistema.",
              "Vendas com verdade: vender sem se violentar",
              "IA com intenção: automação sem perder humanidade",
              "Posicionamento e previsibilidade: estrutura que sustenta",
            ].map((t, i) => (
              <div key={i} className="p-8 gold-border rounded-lg bg-card">
                <p className="font-serif text-base leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Formatos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Palestra", detail: "45 a 90 min" },
              { label: "Treinamento", detail: "2 a 4 horas" },
              { label: "Workshop", detail: "Meio período" },
              { label: "Imersão", detail: "1 dia" },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg text-center">
                <h3 className="font-serif text-sm mb-1">{f.label}</h3>
                <p className="text-xs text-muted-foreground font-sans">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-serif mb-4">Para contratar</h2>
          <p className="text-sm text-muted-foreground font-sans mb-8">
            Para convites e proposta, fale direto com a Carine.
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">Falar com Carine no WhatsApp</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Palestras;
