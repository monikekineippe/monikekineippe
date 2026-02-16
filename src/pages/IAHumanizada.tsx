import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const IAHumanizada = () => {
  return (
    <>
      <PageHero
        tag="Implementação"
        title="Implementação de IA e Automações Humanizadas"
        subtitle="Tecnologia não precisa ser fria. Ela só precisa ser bem pensada."
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">O que eu implemento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "IA para conteúdo e produtos digitais",
              "IA para atendimento (Instagram/WhatsApp)",
              "Automação de processos (captação, e-mail, onboarding, follow-up)",
              "Organização de operação (templates, fluxos e documentos)",
            ].map((item, i) => (
              <div key={i} className="p-8 gold-border rounded-lg bg-card text-center">
                <p className="font-sans text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-serif mb-10 text-center">O método</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnóstico", text: "Onde a energia está vazando" },
              { step: "02", title: "Arquitetura", text: "Fluxos, tom de voz, regras e limites" },
              { step: "03", title: "Implementação", text: "Ferramentas e integrações" },
              { step: "04", title: "Otimização", text: "Melhoria contínua e ajustes" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="text-2xl font-serif text-secondary">{s.step}</span>
                <h3 className="font-serif text-sm mt-2 mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground font-sans">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-serif mb-6 text-center">Pra quem é</h2>
          <ul className="space-y-3 text-sm font-sans text-muted-foreground text-center">
            {[
              "Quem quer escala com leveza",
              "Quem quer consistência sem virar refém",
              'Quem precisa de processo, não de mais "dica"',
            ].map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="card">
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://programaiahumanizada.lovable.app/" target="_blank" rel="noopener noreferrer">Ver página completa</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="/diagnostico">Agendar conversa</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default IAHumanizada;
