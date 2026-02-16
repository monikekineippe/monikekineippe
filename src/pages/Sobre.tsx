import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import sobre1 from "@/assets/sobre-1.jpg";
import sobre2 from "@/assets/sobre-2.jpg";
import sobre3 from "@/assets/sobre-3.jpg";
import sobre4 from "@/assets/sobre-4.jpg";
import sobre5 from "@/assets/sobre-5.jpg";
import sobre6 from "@/assets/sobre-6.jpg";
import sobre7 from "@/assets/sobre-7.jpg";
import sobre8 from "@/assets/sobre-8.jpg";
import sobre9 from "@/assets/sobre-9.jpg";

const carouselImages = [
  { src: sobre1, alt: "Monike em evento ADESAMPA com seu livro" },
  { src: sobre2, alt: "Monike ministrando palestra sobre SWOT" },
  { src: sobre3, alt: "Monike em entrevista em evento" },
  { src: sobre4, alt: "Monike palestrando em evento" },
  { src: sobre5, alt: "Monike com a família" },
  { src: sobre6, alt: "Livro Empreender Nunca Foi Sorte" },
  { src: sobre7, alt: "Monike lendo seu livro" },
  { src: sobre8, alt: "Monike em ensaio corporativo" },
  { src: sobre9, alt: "Monike com diamante" },
];

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif mb-8 text-center">Galeria</h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {carouselImages.map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
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
