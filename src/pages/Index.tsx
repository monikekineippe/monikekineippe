import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import EmailPopup from "@/components/EmailPopup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import monike1 from "@/assets/monike-1.jpg";
import monike2 from "@/assets/monike-2.jpg";

type ModalKey = "diagnostico" | "corujah" | "mentorias" | "autoridade" | null;

const Index = () => {
  const [modal, setModal] = useState<ModalKey>(null);

  return (
    <>
      <EmailPopup />

      {/* CAMINHOS — 4 CARDS */}
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
            <p><strong className="text-foreground">Comunidade Empresária 4.0:</strong> ecossistema e networking para quem carrega tudo e não quer mais "sobreviver".</p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://mentorialapidandodiamantes.lovable.app/" target="_blank" rel="noopener noreferrer">APLICAR PARA LAPIDANDO DIAMANTE$</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/dona-de-si">LISTA DE ESPERA DONA DE $I</Link>
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
          </div>
        </DialogContent>
      </Dialog>

      {/* IMPLEMENTAÇÃO IA — destaque */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Escala com estrutura</span>
          <h2 className="text-2xl md:text-3xl font-serif mt-4 mb-4">Programas de Implementação</h2>
          <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            IA e automações humanizadas para você parar de fazer tudo sozinha e começar a operar com inteligência, processo e leveza.
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href="https://programaiahumanizada.lovable.app/" target="_blank" rel="noopener noreferrer">Conhecer o Programa</a>
          </Button>
        </div>
      </section>

      {/* SOBRE — com fotos */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="relative">
            <img
              src={monike1}
              alt="Monike Kineippe"
              className="rounded-lg w-full object-cover aspect-[3/4] premium-shadow"
            />
            <img
              src={monike2}
              alt="Monike Kineippe com diamante"
              className="absolute -bottom-6 -right-6 w-40 h-40 object-cover object-top rounded-lg gold-border shadow-xl hidden md:block"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">Sobre</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-3 mb-6">Eu não ensino fórmula.<br />Eu te devolvo direção.</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Sou empresária desde os 18 anos. Já falhei, recomecei e reconstruí. Hoje guio mulheres a transformarem conhecimento em renda digital sólida, com previsibilidade e verdade, usando IA com intenção.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/sobre">Conhecer minha história</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-8">Chega de improviso. Escolha estrutura.</h2>
          <div className="flex justify-center">
            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/diagnostico">Quero meu Diagnóstico</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
