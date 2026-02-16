import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const LapidandoDiamantes = () => {
  return (
    <>
      <div className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <img src={logoIcon} alt="Monike Kineippe" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-6">Aplicação</span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-6">Mentoria Lapidando Diamante$</h1>
          <p className="text-base md:text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
            Para mulheres com conteúdo e história, mas sem estrutura previsível de oferta e vendas.
          </p>
          <div className="mt-10 w-16 h-px bg-secondary mx-auto" />
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-serif mb-6">Você entra assim</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              {["Muita ideia", "Pouca clareza de oferta", "Execução irregular", "Conteúdo sem sistema"].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-primary">×</span>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif mb-6">Você sai assim</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              {[
                "Posicionamento claro",
                "Oferta estruturada (produto, bônus, preço e pitch)",
                "Plano de conteúdo que vende sem te sugar",
                "Rotina possível de execução",
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-secondary">✓</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">O que acontece dentro</h2>
          <ul className="space-y-3 text-sm font-sans text-muted-foreground">
            {[
              "Diagnóstico e mapa de oferta",
              "Estrutura e validação da solução",
              "Copy e narrativa de venda",
              "Execução guiada (com entregas semanais)",
              "Direção para lançamento ou venda contínua",
            ].map((t, i) => (
              <li key={i} className="flex gap-3"><span className="text-secondary">—</span>{t}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://mentorialapidandodiamantes.lovable.app/" target="_blank" rel="noopener noreferrer">Fazer aplicação</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">Falar com a equipe</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default LapidandoDiamantes;
