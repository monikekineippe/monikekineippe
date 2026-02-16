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
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <p className="text-foreground font-serif text-xl md:text-2xl text-center italic">
            Eu não aprendi negócios em teoria.<br />
            Aprendi na prática. E, algumas vezes, na dor.
          </p>

          <p>
            Abri meu primeiro CNPJ aos 18 anos. Enquanto muitas pessoas ainda buscavam um caminho, eu já estava contratando, liderando e tomando decisões que exigiam maturidade antes da idade. Cresci vendo meu pai empreender, mas também vivi a frustração de ouvir que negócios não eram lugar para mulheres. Foi ali que decidi que não seria apenas empreendedora — seria empresária.
          </p>

          <p>
            Ao longo de mais de 17 anos, construí, vendi, fali, recomecei. Vendi uma agência valorizada, enfrentei dois episódios de burnout, vivi cinco perdas gestacionais e, mesmo assim, escolhi continuar construindo. Não romantizo a jornada. Eu a estruturei.
          </p>

          <p>
            Foi na maternidade e no momento em que precisei pausar tudo que entendi algo definitivo: talento não basta. Força não basta. Motivação não basta. O que sustenta um negócio é <strong className="text-foreground">estrutura</strong>.
          </p>

          <p>
            Hoje, sou estrategista de negócios digitais femininos com alma. Ajudo mulheres — especialmente mães e prestadoras de serviço — a transformarem conhecimento em produtos digitais estruturados, com previsibilidade e lucro. Meu trabalho não é ensinar a postar mais. É organizar o caos, estruturar ofertas, sustentar posicionamento e construir base sólida para crescer com consistência.
          </p>

          <p>
            Fui além da mentoria tradicional. Desenvolvi métodos próprios como o <strong className="text-foreground">ALMA DIGITAL™</strong> e o <strong className="text-foreground">Sistema SE$ (Sistema + Essência = Suce$$o)</strong>, unindo estratégia, identidade e execução. E encontrei na inteligência artificial uma aliada poderosa.
          </p>

          <p className="text-foreground font-serif text-lg md:text-xl text-center italic">
            Mas não qualquer IA.
          </p>

          <p>
            Eu desenvolvo e implemento IA humanizada — assistentes personalizados que não substituem a essência da empreendedora, mas potencializam sua capacidade estratégica. A tecnologia, quando bem direcionada, libera tempo, reduz sobrecarga e aumenta clareza. Ela não tira a alma do negócio. Ela protege.
          </p>

          <div className="py-4">
            <p className="text-foreground font-serif text-lg mb-4 text-center">Minha abordagem une três forças:</p>
            <ul className="space-y-2 text-center">
              <li><strong className="text-foreground">Estrutura</strong> de Governante.</li>
              <li><strong className="text-foreground">Clareza</strong> de Sábio.</li>
              <li><strong className="text-foreground">Inovação</strong> de Criador.</li>
            </ul>
          </div>

          <p className="text-foreground font-serif text-center text-lg italic">
            Não vendo atalhos.<br />
            Construo sistemas.
          </p>

          <p>
            Hoje, lidero um ecossistema que inclui mentorias, plataforma educacional, implementação de IA e automações estratégicas — tudo com um único propósito: ajudar mulheres a deixarem de sobreviver no improviso e passarem a viver com previsibilidade, liberdade e autoridade.
          </p>

          <p className="text-foreground font-serif text-center text-xl md:text-2xl pt-4 italic">
            Porque sem estrutura, não existe liberdade.<br />
            E você nunca conquistará o que a sua imaginação não conquistou primeiro. 💎🍀✨
          </p>
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
