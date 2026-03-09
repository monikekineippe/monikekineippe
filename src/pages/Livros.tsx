import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import livroTablet1 from "@/assets/livro-tablet-1.png";
import livroTablet2 from "@/assets/livro-tablet-2.png";
import livroFisicoAutora from "@/assets/livro-fisico-autora.png";
import livroCombo from "@/assets/livro-combo.png";

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Book images */}
            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src={livroTablet1}
                  alt="Livro Empreender Nunca Foi Sorte - Tablet"
                  className="w-80 md:w-96 rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Book info */}
            <div className="text-center lg:text-left">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary">Livro principal</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">Empreender nunca foi sorte</h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                Descubra os segredos para transformar sua carreira e tornar-se uma líder de sucesso no mundo dos negócios. 
                Um guia completo para mulheres que desejam conquistar seu espaço e prosperar no empreendedorismo brasileiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="heroOutline" size="lg" onClick={() => setSinopse(true)}>
                  Sobre o livro
                </Button>
              </div>
            </div>
          </div>

          {/* Versões do livro */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif mb-2">Escolha a versão de sua preferência</h3>
            <p className="text-muted-foreground font-sans">Comece sua jornada empreendedora hoje mesmo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Versão Física */}
            <Card className="gold-border">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-xl">Versão Física</CardTitle>
                <CardDescription>Exemplar autografado pela autora</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src={livroFisicoAutora}
                    alt="Monike com o livro físico"
                    className="w-48 h-48 mx-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Receba seu exemplar autografado pela autora, em sua residência em até 10 dias úteis.
                </p>
                <p className="text-sm font-semibold text-secondary mb-6">
                  Bônus: Marca Página Exclusivo
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://payfast.greenn.com.br/41713/offer/yH4WSu?b_id_1=109226&b_offer_1=sqfaxL&b_id_2=60609&b_offer_2=DX35IQ" target="_blank" rel="noopener noreferrer">
                    QUERO O AUTOGRAFADO
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Versão Digital */}
            <Card className="gold-border">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-xl">Versão Digital</CardTitle>
                <CardDescription>Acesso imediato</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src={livroTablet2}
                    alt="Mulher lendo no tablet"
                    className="w-48 h-48 mx-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Acesso imediato ao conteúdo completo digital. Leia em qualquer dispositivo e aproveite recursos 
                  interativos exclusivos da versão digital.
                </p>
                <Button variant="heroOutline" className="w-full" asChild>
                  <a href="https://payfast.greenn.com.br/redirect/203943" target="_blank" rel="noopener noreferrer">
                    QUERO E-BOOK
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Combo */}
            <Card className="gold-border bg-secondary/10">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-xl">COMBO</CardTitle>
                <CardDescription>Melhor opção</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src={livroCombo}
                    alt="Combo Livro Físico + Digital"
                    className="w-48 h-48 mx-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Comece a ler imediatamente enquanto aguarda seu exemplar autografado chegar.
                </p>
                <p className="text-sm font-semibold text-secondary mb-6">
                  Ambas Versões + acesso ao Grupo de Networking Valio$o
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://empreender.monikekineippe.com.br/empreender" target="_blank" rel="noopener noreferrer">
                    QUERO O COMBO
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Dialog open={sinopse} onOpenChange={setSinopse}>
        <DialogContent className="max-w-2xl gold-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl mb-4">Sobre o Livro "Empreender Nunca Foi Sorte"</DialogTitle>
            <DialogDescription className="sr-only">Informações detalhadas sobre o livro</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-lg mb-2">Fundamentos do Empreendedorismo</h4>
              <p className="text-sm text-muted-foreground">
                Identifique oportunidades únicas e supere barreiras comuns enfrentadas no mundo dos negócios brasileiro.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-2">Estratégias de Crescimento</h4>
              <p className="text-sm text-muted-foreground">
                Técnicas comprovadas para desenvolver seu negócio, desde o planejamento inicial até a expansão sustentável.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-2">Liderança e Gestão de Equipes</h4>
              <p className="text-sm text-muted-foreground">
                Aprenda a construir e liderar equipes de alto desempenho com abordagens que valorizam a diversidade.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-2">Finanças e Captação de Recursos</h4>
              <p className="text-sm text-muted-foreground">
                Domine os aspectos financeiros do seu negócio e conheça fontes de investimento voltadas para empreendedoras.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-serif text-lg mb-2">Torne-se Protagonista da sua jornada!</h4>
              <p className="text-sm text-muted-foreground">
                Empreender nunca foi sorte é sobre assumir o controle. É sobre transformar bagagem em negócio, 
                e negócio em legado. Sem fantasia. Sem fórmula. Com verdade.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Section variant="accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Transforme sua Carreira</h2>
          <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
            Mais do que um livro, é um guia completo para mulheres que desejam conquistar 
            seu espaço e prosperar no empreendedorismo brasileiro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card gold-border rounded-lg">
              <h3 className="font-serif text-base mb-2">Fundamentos</h3>
              <p className="text-xs text-muted-foreground font-sans">Base sólida para empreender</p>
            </div>
            <div className="p-6 bg-card gold-border rounded-lg">
              <h3 className="font-serif text-base mb-2">Estratégias</h3>
              <p className="text-xs text-muted-foreground font-sans">Crescimento sustentável</p>
            </div>
            <div className="p-6 bg-card gold-border rounded-lg">
              <h3 className="font-serif text-base mb-2">Liderança</h3>
              <p className="text-xs text-muted-foreground font-sans">Gestão de equipes</p>
            </div>
            <div className="p-6 bg-card gold-border rounded-lg">
              <h3 className="font-serif text-base mb-2">Finanças</h3>
              <p className="text-xs text-muted-foreground font-sans">Captação de recursos</p>
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
