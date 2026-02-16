import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <PageHero
        tag="Sobre"
        title="Sobre a Monike"
        subtitle="Empresária desde os 18 anos. Autora. Colunista. Estrategista de negócios com alma."
      />

      <Section>
        <div className="max-w-2xl mx-auto space-y-8">
          {[
            "Eu não construí minha vida com 'sorte'. Eu construí com decisão. Já quebrei, já recomecei e já reconstruí.",
            "Hoje eu ajudo mulheres a transformarem conhecimento em renda digital sólida, com previsibilidade e verdade.",
            "Minha tese é simples: você já tem valor. Só falta estrutura.",
          ].map((text, i) => (
            <p key={i} className="text-muted-foreground font-sans leading-relaxed text-center text-base md:text-lg">
              "{text}"
            </p>
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-serif mb-6 text-center">Credenciais</h2>
          <ul className="space-y-3 text-sm font-sans text-muted-foreground">
            {[
              "Empresária há 17+ anos",
              'Autora de "Empreender nunca foi sorte"',
              "Palestrante e mentora de negócios digitais femininos",
              "Criadora da CoruJah e dos métodos de estrutura e previsibilidade",
            ].map((t, i) => (
              <li key={i} className="flex gap-3"><span className="text-secondary">💎</span>{t}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/diagnostico">Começar pelo Diagnóstico</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Sobre;
