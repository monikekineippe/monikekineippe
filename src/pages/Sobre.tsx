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
  { src: sobre8, alt: "Monike em ensaio corporativo" },
  { src: sobre1, alt: "Monike em evento ADESAMPA com seu livro" },
  { src: sobre2, alt: "Monike ministrando palestra sobre SWOT" },
  { src: sobre5, alt: "Monike com a família" },
  { src: sobre3, alt: "Monike em entrevista em evento" },
  { src: sobre6, alt: "Livro Empreender Nunca Foi Sorte" },
  { src: sobre4, alt: "Monike palestrando em evento" },
  { src: sobre7, alt: "Monike lendo seu livro" },
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
            Aprendi na prática.<br />
            E, algumas vezes, na dor.
          </p>

          <p>
            Abri meu primeiro CNPJ aos 18 anos. Enquanto muitas pessoas ainda buscavam um caminho, eu já estava contratando, liderando e tomando decisões que exigiam maturidade antes da idade.
          </p>

          <p>
            Cresci vendo meu pai empreender.<br />
            Mas também ouvi que negócios não eram lugar para mulheres.
          </p>

          <p className="text-foreground font-serif text-lg md:text-xl text-center italic">
            Foi ali que decidi algo definitivo:<br />
            eu não seria apenas empreendedora.<br />
            Eu seria empresária.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">A jornada que ninguém romantiza</h2>
          <p className="text-center">Ao longo de mais de 17 anos:</p>
          <p className="text-center text-foreground font-serif">
            Construí negócios. Vendi empresas. Fali. Recomecei.
          </p>
          <p>
            Vendi uma agência valorizada. Passei por dois episódios de burnout. Enfrentei cinco perdas gestacionais.
          </p>
          <p>Mesmo assim, continuei construindo.</p>
          <p>Porque uma coisa ficou clara para mim:</p>
          <p className="text-foreground font-serif text-lg text-center italic">
            Talento não sustenta negócio.<br />
            Força não sustenta negócio.<br />
            Motivação não sustenta negócio.<br /><br />
            <strong>Estrutura sustenta.</strong>
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">O que eu faço hoje</h2>
          <p>
            Hoje atuo como estrategista de negócios digitais femininos com alma.
          </p>
          <p>
            Ajudo mulheres — principalmente mães e prestadoras de serviço — a transformarem conhecimento em produtos digitais estruturados, capazes de gerar renda com previsibilidade e lucro.
          </p>
          <p className="text-foreground font-serif italic">Meu trabalho não é ensinar a postar mais.</p>
          <p>Meu trabalho é:</p>
          <ul className="space-y-2 list-none text-center">
            <li>• organizar o caos</li>
            <li>• estruturar ofertas</li>
            <li>• sustentar posicionamento</li>
            <li>• construir base sólida para crescer com consistência</li>
          </ul>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">Método próprio</h2>
          <p>Minha abordagem vai além da mentoria tradicional.</p>
          <p>Desenvolvi métodos como:</p>
          <p className="text-foreground font-serif text-lg text-center">
            <strong>ALMA DIGITAL™</strong><br />
            e o <strong>Método Mulher no Poder</strong>
          </p>
          <p className="text-center">Unindo três pilares:</p>
          <ul className="space-y-1 text-center text-foreground font-serif">
            <li>Estratégia</li>
            <li>Identidade</li>
            <li>Execução</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">IA com essência</h2>
          <p>Também encontrei na inteligência artificial uma aliada poderosa.</p>
          <p className="text-foreground font-serif italic text-center">Mas não qualquer IA.</p>
          <p>
            Eu desenvolvo e implemento IA humanizada: assistentes personalizados que não substituem a essência da empreendedora — amplificam sua capacidade estratégica.
          </p>
          <p>Tecnologia, quando bem direcionada:</p>
          <ul className="space-y-1 text-center">
            <li>libera tempo</li>
            <li>reduz sobrecarga</li>
            <li>aumenta clareza</li>
            <li>protege a essência do negócio</li>
          </ul>
          <p className="text-foreground font-serif text-center italic">
            Ela não tira a alma do negócio.<br />
            Ela protege.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">Minha forma de pensar negócios</h2>
          <p className="text-center">Minha abordagem une três forças:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Governante</p>
              <p className="text-sm">Estrutura e direção.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Sábio</p>
              <p className="text-sm">Clareza estratégica.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Criador</p>
              <p className="text-sm">Inovação e visão.</p>
            </div>
          </div>
          <p className="text-foreground font-serif text-center italic">
            Eu não vendo atalhos.<br />
            Eu construo sistemas.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">O ecossistema</h2>
          <p>Hoje lidero um ecossistema que inclui:</p>
          <ul className="space-y-2 text-center text-foreground font-serif">
            <li>Mentorias estratégicas</li>
            <li>Plataforma educacional</li>
            <li>Implementação de IA</li>
            <li>Automações inteligentes</li>
          </ul>
          <p className="text-center">Tudo com um único propósito:</p>
          <p className="text-foreground font-serif text-center italic">
            Ajudar mulheres a deixarem de sobreviver no improviso<br />
            e passarem a viver com previsibilidade, liberdade e autoridade.
          </p>
          <p className="text-foreground font-serif text-center text-xl md:text-2xl pt-4 italic">
            Porque sem estrutura<br />
            não existe liberdade.<br /><br />
            E você nunca conquistará o que a sua imaginação<br />
            não conquistou primeiro. 💎🍀✨
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
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted">
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
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            Se você sente que tem conhecimento, experiência ou paixão —<br />
            mas ainda não conseguiu transformar isso em um negócio estruturado…
          </p>
          <p className="text-foreground font-serif text-lg italic">Você pode começar por aqui.</p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/diagnostico">👉 Faça seu diagnóstico gratuito</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Sobre;
