import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const CoruJah = () => {
  return (
    <>
      <PageHero
        tag="IA Estratégica"
        title="CoruJah IA"
        subtitle="Uma IA estratégica feita para empreendedoras experientes que travam na hora de organizar, decidir e lançar."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-6">A trava que ninguém fala</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Não é falta de estudo. Não é falta de capacidade. É excesso de informação sem método. A CoruJah entra exatamente aí: estrutura o que você já sabe e transforma em produto vendável.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-8">O que ela entrega</h2>
          <ul className="space-y-3 text-sm font-sans text-muted-foreground">
            {[
              "Nome e posicionamento do produto",
              "Estrutura de módulos e aulas",
              "Oferta com bônus e preço sugeridos",
              "Copy de vendas pronta",
              "Ideias de criativos e conteúdos",
            ].map((item, i) => (
              <li key={i} className="flex gap-3"><span className="text-secondary">💎</span>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-accent rounded-lg text-center">
            <h3 className="font-serif text-lg mb-4 text-primary">Antes</h3>
            <p className="text-sm text-muted-foreground font-sans">Ideias dispersas, paralisia, meses reescrevendo</p>
          </div>
          <div className="p-8 bg-primary text-primary-foreground rounded-lg text-center">
            <h3 className="font-serif text-lg mb-4 text-secondary">Depois</h3>
            <p className="text-sm text-primary-foreground/70 font-sans">Oferta clara, estrutura completa, copy pronta, confiança para lançar</p>
          </div>
        </div>
      </Section>

      <Section variant="card">
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://solucoes.monikekineippe.com.br/corujah" target="_blank" rel="noopener noreferrer">Ver página oficial</a>
          </Button>
          <Button variant="gold" size="xl" asChild>
            <a href="https://payfast.greenn.com.br/redirect/212761" target="_blank" rel="noopener noreferrer">Comprar agora</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default CoruJah;
