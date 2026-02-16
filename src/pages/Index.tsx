import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

type ModalKey = "diagnostico" | "corujah" | "mentorias" | "autoridade" | null;

const Index = () => {
  const [modal, setModal] = useState<ModalKey>(null);

  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)" }} />
        <div className="container mx-auto max-w-4xl px-6 py-24 text-center relative z-10">
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-8 animate-fade-up">
            Monike Kineippe
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Você já tem valor.<br />
            Só falta estrutura pra transformar<br className="hidden md:block" /> isso em <span className="text-secondary">previsibilidade</span>.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Estratégia humana + IA com intenção para mulheres que querem vender com verdade e construir um negócio sólido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl" asChild>
              <Link to="/diagnostico">Quero meu Diagnóstico</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/corujah">Conhecer a CoruJah</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CENTRAL — 4 CARDS */}
      <Section>
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Caminhos</span>
          <h2 className="text-2xl md:text-4xl font-serif mt-4">Por onde começar?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { key: "diagnostico" as ModalKey, title: "Diagnóstico de Negócio", text: "Clareza em vez de tentativa. Direção em vez de ansiedade.", tag: "Começar com clareza" },
            { key: "corujah" as ModalKey, title: "CoruJah IA 💎", text: "Transforme seu conhecimento em infoproduto com estrutura, copy e direção.", tag: "Criar produto com IA" },
            { key: "mentorias" as ModalKey, title: "Mentorias", text: "Estrutura, vendas e previsibilidade sem esgotamento.", tag: "Crescer com direção" },
            { key: "autoridade" as ModalKey, title: "Autoridade 🍀", text: "Conteúdo, palco e livros. A base do seu próximo nível.", tag: "Fortalecer autoridade" },
          ].map((card) => (
            <button
              key={card.key}
              onClick={() => setModal(card.key)}
              className="group text-left p-8 md:p-10 bg-card gold-border rounded-lg hover:border-secondary/60 transition-all duration-300 premium-shadow hover:shadow-lg cursor-pointer"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary">{card.tag}</span>
              <h3 className="text-xl md:text-2xl font-serif mt-3 mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{card.text}</p>
            </button>
          ))}
        </div>
      </Section>

      {/* MODALS */}
      <Dialog open={modal === "diagnostico"} onOpenChange={() => setModal(null)}>
        <DialogContent className="max-w-lg gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Diagnóstico de Negócio</DialogTitle>
            <DialogDescription className="sr-only">Detalhes do diagnóstico</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm font-sans text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">O que você recebe:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Leitura do cenário</li>
                <li>Gargalo principal identificado</li>
                <li>Próximos passos práticos</li>
                <li>Recomendação do caminho mais inteligente</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Para quem:</h4>
              <p>Mulheres prestadoras de serviço, mentoras, infoprodutoras e empresárias que querem organizar oferta, conteúdo e vendas.</p>
            </div>
          </div>
          <Button variant="hero" size="lg" className="mt-4 w-full" asChild>
            <Link to="/diagnostico">Preencher Diagnóstico</Link>
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={modal === "corujah"} onOpenChange={() => setModal(null)}>
        <DialogContent className="max-w-lg gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">CoruJah IA 💎</DialogTitle>
            <DialogDescription className="sr-only">Detalhes da CoruJah</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm font-sans text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Resultado:</h4>
              <p>Você sai com produto estruturado, oferta clara e conteúdo pronto para vender.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">O que a CoruJah faz:</h4>
              <p>Nome, módulos, bônus, preço sugerido, copy e ideias de criativos.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://solucoes.monikekineippe.com.br/corujah" target="_blank" rel="noopener noreferrer">Quero a CoruJah</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://payfast.greenn.com.br/redirect/212761" target="_blank" rel="noopener noreferrer">Comprar agora</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={modal === "mentorias"} onOpenChange={() => setModal(null)}>
        <DialogContent className="max-w-lg gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Mentorias</DialogTitle>
            <DialogDescription className="sr-only">Detalhes das mentorias</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm font-sans text-muted-foreground">
            <p><strong className="text-foreground">Lapidando Diamante$ (Grupo):</strong> para organizar posicionamento, oferta e execução com direção.</p>
            <p><strong className="text-foreground">Dona de $i (Individual):</strong> para alinhar negócio + vida, com limites, consistência e decisões maduras.</p>
            <p><strong className="text-foreground">Método Mulher no Poder:</strong> ecossistema e comunidade para quem carrega tudo e não quer mais "sobreviver".</p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/lapidando-diamantes">Aplicar para Lapidando</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/dona-de-si">Entrar na lista da Dona de $i</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/metodo-mulher-no-poder">Ver Método Mulher no Poder</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={modal === "autoridade"} onOpenChange={() => setModal(null)}>
        <DialogContent className="max-w-lg gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Autoridade 🍀</DialogTitle>
            <DialogDescription className="sr-only">Autoridade</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-2">
            <Button variant="hero" size="lg" asChild>
              <Link to="/palestras">Palestras & Treinamentos</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/livros">Livros</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/conteudos">Conteúdos</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* PARA QUEM É */}
      <Section variant="accent">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif">Para quem é</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            "Você tem conhecimento e entrega, mas trava na estrutura.",
            "Você vende no improviso e isso custa energia e dinheiro.",
            'Você quer previsibilidade, não apenas "picos" de faturamento.',
          ].map((text, i) => (
            <div key={i} className="text-center font-sans text-sm text-muted-foreground leading-relaxed">
              <div className="w-8 h-px bg-secondary mx-auto mb-6" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* O QUE MUDA */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif">O que muda quando você para de improvisar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Clareza de oferta", text: "O que você vende, para quem e por que vale." },
            { title: "Sistema de execução", text: "Rotina possível, sem perfeccionismo." },
            { title: "Vendas com verdade ✨", text: "Sem personagem, sem violência interna." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-card gold-border rounded-lg text-center">
              <h3 className="font-serif text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CAMINHOS RÁPIDOS */}
      <Section variant="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Diagnóstico gratuito", path: "/diagnostico" },
            { title: "Implementação IA Humanizada", path: "/ia-humanizada" },
            { title: "Convite para palestras", path: "/palestras" },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="group p-8 bg-background gold-border rounded-lg text-center hover:border-secondary/60 transition-all">
              <h3 className="font-serif text-lg mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <span className="text-xs font-sans tracking-widest uppercase text-secondary">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* MINI SOBRE */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Eu não ensino fórmula. Eu te devolvo direção.</h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-8">
            Sou empresária desde os 18 anos. Já falhei, recomecei e reconstruí. Hoje guio mulheres a transformarem conhecimento em renda digital sólida, com previsibilidade e verdade, usando IA com intenção.
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/sobre">Conhecer minha história</Link>
          </Button>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-serif mb-8">Chega de improviso. Escolha estrutura.</h2>
          <Button variant="gold" size="xl" asChild>
            <Link to="/diagnostico">Quero meu Diagnóstico</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
