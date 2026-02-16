import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const Livros = () => {
  const [sinopse, setSinopse] = useState(false);

  return (
    <>
      <PageHero
        tag="Livros"
        title="Livros"
        subtitle="Palavra boa não é a que emociona. É a que te move."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 gold-border rounded-lg bg-card text-center">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary">Livro principal</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-4 mb-4">Empreender nunca foi sorte</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
              Um livro sobre autonomia, reconstrução e estrutura. Pra quem cansou de depender e decidiu construir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Comprar</a>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => setSinopse(true)}>
                Ler sinopse
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Dialog open={sinopse} onOpenChange={setSinopse}>
        <DialogContent className="max-w-lg gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Sinopse</DialogTitle>
            <DialogDescription className="sr-only">Sinopse do livro</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Empreender nunca foi sorte é sobre assumir o controle. É sobre transformar bagagem em negócio, e negócio em legado. Sem fantasia. Sem fórmula. Com verdade.
          </p>
        </DialogContent>
      </Dialog>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Outros materiais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-card gold-border rounded-lg text-center">
              <h3 className="font-serif text-base mb-2">E-books e guias</h3>
              <p className="text-xs text-muted-foreground font-sans">Em breve</p>
            </div>
            <div className="p-8 bg-card gold-border rounded-lg text-center">
              <h3 className="font-serif text-base mb-2">Materiais de apoio</h3>
              <p className="text-xs text-muted-foreground font-sans">Em breve</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">Receber conteúdos por e-mail</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Livros;
