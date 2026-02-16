import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const MetodoMulherNoPoder = () => {
  return (
    <>
      <div className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <img src={logoIcon} alt="Monike Kineippe" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">Ecossistema</span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">Método Mulher no Poder</h1>
          <p className="text-base md:text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
            Não é apenas sobre vender. É sobre construir um negócio que garanta o futuro da sua família e o seu.
          </p>
          <div className="mt-10 w-16 h-px bg-secondary mx-auto" />
        </div>
      </div>

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
