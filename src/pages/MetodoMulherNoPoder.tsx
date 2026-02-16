import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const MetodoMulherNoPoder = () => {
  return (
    <>
      <PageHero
        tag="Ecossistema"
        title="Método Mulher no Poder"
        subtitle="Não é apenas sobre vender. É sobre construir um negócio que garanta o futuro da sua família e o seu."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-6">O que é</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Uma comunidade e um ecossistema prático para mulheres que vivem a realidade de ser mãe, esposa e empresária — e não aceitam mais sobreviver no improviso.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">O que você encontra</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Conteúdo no seu tempo",
              "Rede de apoio e networking",
              "Templates e ferramentas práticas",
              "Encontros ao vivo e masterclasses",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg text-center">
                <p className="text-sm font-sans text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://metodomulhernopoder.com.br/" target="_blank" rel="noopener noreferrer">Ver site oficial</a>
          </Button>
          <Button variant="gold" size="xl" asChild>
            <a href="https://payfast.greenn.com.br/redirect/188551" target="_blank" rel="noopener noreferrer">Ir para compra</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default MetodoMulherNoPoder;
