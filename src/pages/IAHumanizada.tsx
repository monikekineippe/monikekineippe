import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Settings, Zap, Target, Layers, Bot, Crown } from "lucide-react";

const IAHumanizada = () => {
  return (
    <>
      <PageHero
        tag="IA Aplicada"
        title="Implementação de IA e Automações"
        subtitle="Tecnologia não precisa ser fria. Ela só precisa ser bem pensada. Eu implemento com você — não apenas ensino."
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">O que eu implemento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Bot, text: "IA para conteúdo e produtos digitais" },
              { icon: Zap, text: "IA para atendimento (Instagram/WhatsApp)" },
              { icon: Settings, text: "Automação de processos (captação, e-mail, onboarding, follow-up)" },
              { icon: Layers, text: "Organização de operação (templates, fluxos e documentos)" },
            ].map((item, i) => (
              <div key={i} className="p-8 gold-border rounded-lg bg-card flex items-start gap-4">
                <item.icon className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                <p className="font-sans text-sm text-muted-foreground">{item.text}</p>
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

      {/* DOIS PROGRAMAS */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Programas</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-4">Dois caminhos. Execução real.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programa 1 */}
            <div className="p-8 md:p-10 bg-primary text-primary-foreground rounded-lg border border-secondary/20 flex flex-col">
              <Settings className="w-8 h-8 text-secondary mb-4" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary mb-2">45 dias</span>
              <h3 className="font-serif text-xl md:text-2xl mb-3">Implementação IA com Alma™</h3>
              <p className="text-sm text-primary-foreground/70 font-sans leading-relaxed mb-6 flex-1">
                Organização estratégica + automação inteligente para acabar com a sobrecarga e colocar sua operação no piloto automático.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/60 font-sans mb-6">
                <li>→ Processos organizados e documentados</li>
                <li>→ Automações implementadas com IA</li>
                <li>→ Funil ajustado e otimizado</li>
                <li>→ Redução drástica de sobrecarga</li>
              </ul>
              <a
                href="https://wa.me/5511972313181?text=Oi%20Carine%2C%20quero%20saber%20mais%20sobre%20o%20programa%20IA%20com%20Alma"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center h-12 leading-[3rem] rounded-md bg-secondary text-secondary-foreground font-sans tracking-wide uppercase text-xs hover:bg-secondary/90 transition-all duration-300"
              >
                Quero saber mais
              </a>
            </div>

            {/* Programa 2 */}
            <div className="p-8 md:p-10 bg-primary text-primary-foreground rounded-lg border border-secondary/20 flex flex-col">
              <Crown className="w-8 h-8 text-secondary mb-4" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary mb-2">3 meses</span>
              <h3 className="font-serif text-xl md:text-2xl mb-3">Sistema de Escala com IA Humanizada™</h3>
              <p className="text-sm text-primary-foreground/70 font-sans leading-relaxed mb-6 flex-1">
                Reconstrua sua máquina de vendas. Escale com estrutura previsível, posicionamento premium e IA estratégica.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/60 font-sans mb-6">
                <li>→ Máquina de vendas estruturada</li>
                <li>→ Automações inteligentes rodando</li>
                <li>→ Posicionamento premium definido</li>
                <li>→ Escala com previsibilidade</li>
              </ul>
              <a
                href="https://wa.me/5511972313181?text=Oi%20Carine%2C%20quero%20saber%20mais%20sobre%20o%20Sistema%20de%20Escala"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center h-12 leading-[3rem] rounded-md bg-secondary text-secondary-foreground font-sans tracking-wide uppercase text-xs hover:bg-secondary/90 transition-all duration-300"
              >
                Quero saber mais
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-serif mb-6">Pra quem é</h2>
          <div className="space-y-3 text-sm font-sans text-muted-foreground">
            <p>Empreendedoras que querem escala com leveza.</p>
            <p>Que querem consistência sem virar refém da própria operação.</p>
            <p>Que precisam de processo, não de mais "dica".</p>
          </div>
          <p className="mt-6 text-xs text-muted-foreground font-sans">
            Você não precisa saber de tecnologia. Eu traduzo o complexo em aplicável.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-xl font-serif mb-4">Não sabe qual programa é para você?</h2>
          <p className="text-sm text-muted-foreground font-sans mb-8 max-w-lg mx-auto">
            O diagnóstico gratuito identifica o gargalo do seu negócio e indica o caminho mais inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="/diagnostico">Fazer diagnóstico gratuito</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/contato">Agendar conversa</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default IAHumanizada;
