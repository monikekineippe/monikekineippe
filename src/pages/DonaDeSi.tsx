import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const DonaDeSi = () => {
  return (
    <>
      <PageHero
        tag="Individual"
        title="Mentoria Dona de $i"
        subtitle={'Você não precisa de mais "força". Você precisa de sistema, limites e direção.'}
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-6">O problema real</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Tem mulher que até sabe vender. O que ela não consegue é sustentar. Porque sustentar exige estrutura interna e estrutura de negócio.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-serif mb-6">Para quem é</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              {[
                "Mulheres que estão no limite da sobrecarga",
                "Prestadoras de serviço e mentoras que querem crescer com maturidade",
                "Quem quer previsibilidade sem virar refém do digital",
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-secondary">—</span>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif mb-6">O que você constrói comigo</h2>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              {[
                "Agenda e limites de CEO (sem culpa)",
                "Oferta e escada de valor sustentável",
                "Rotina de vendas compatível com sua vida",
                "Decisões estratégicas sem autoengano",
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-secondary">✓</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-6 text-center">Formato</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Formato", value: "Individual" },
              { label: "Vagas", value: "Limitadas" },
              { label: "Encontros", value: "Sob consulta" },
              { label: "Duração", value: "Sob consulta" },
            ].map((item, i) => (
              <div key={i} className="p-4 gold-border rounded-lg">
                <span className="text-[10px] font-sans tracking-widest uppercase text-secondary">{item.label}</span>
                <p className="font-serif text-lg mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="card">
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">Entrar na lista de espera</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default DonaDeSi;
