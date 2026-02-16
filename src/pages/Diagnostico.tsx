import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const Diagnostico = () => {
  return (
    <>
      <PageHero
        tag="Clareza"
        title="Diagnóstico de Negócio"
        subtitle="Um encontro para você parar de rodar em círculos e tomar decisão com clareza."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-serif mb-6">O que você leva</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              <li className="flex gap-3"><span className="text-secondary">—</span> Diagnóstico do gargalo principal</li>
              <li className="flex gap-3"><span className="text-secondary">—</span> Direção de oferta (o que ajustar agora)</li>
              <li className="flex gap-3"><span className="text-secondary">—</span> Próximos passos práticos para 7 dias</li>
              <li className="flex gap-3"><span className="text-secondary">—</span> Recomendação do caminho (CoruJah, mentoria ou implementação)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif mb-6">Para quem é</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              <li className="flex gap-3"><span className="text-secondary">—</span> Prestadoras de serviço e mentoras que querem organizar o digital</li>
              <li className="flex gap-3"><span className="text-secondary">—</span> Mulheres que vendem bem, mas sem sistema</li>
              <li className="flex gap-3"><span className="text-secondary">—</span> Quem sente que tem "ideia demais" e execução de menos</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-serif mb-10 text-center">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", text: "Você preenche o formulário" },
              { step: "02", text: "Minha equipe valida e agenda" },
              { step: "03", text: "Você sai com direção e plano" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="text-3xl font-serif text-secondary">{s.step}</span>
                <p className="mt-3 text-sm font-sans text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">Preencher formulário agora</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Diagnostico;
