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
        subtitle="Especialista em IA aplicada a negócios femininos. Empresária há 18 anos. Autora. Estrategista."
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <p className="text-foreground font-serif text-xl md:text-2xl text-center italic">
            Sou especialista em IA aplicada a negócios femininos.<br />
            Antes disso, fui (e ainda sou) empresária.
          </p>

          <p>
            Mais de dezoito anos construindo, vendendo e reconstruindo negócios reais. Essa combinação é o meu diferencial: eu não falo de IA como quem leu sobre o assunto. Falo como quem implementa, usa e entrega resultado com ela.
          </p>

          <p>
            Meu trabalho é traduzir o que parece complexo — automações, assistentes inteligentes, fluxos de atendimento e vendas — em soluções acessíveis, aplicáveis e lucrativas para mulheres que lideram negócios reais.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">A jornada que me trouxe até aqui</h2>

          <p>
            Abri meu primeiro CNPJ aos 18 anos. Enquanto muitas pessoas ainda buscavam um caminho, eu já estava contratando, liderando e tomando decisões que exigiam maturidade antes da idade.
          </p>

          <p>
            Ao longo de mais de 17 anos: construí negócios, vendi empresas, fali e recomecei. Vendi uma agência valorizada. Passei por dois episódios de burnout. Enfrentei cinco perdas gestacionais.
          </p>

          <p className="text-foreground font-serif text-lg text-center italic">
            Mesmo assim, continuei construindo.<br />
            Porque uma coisa ficou clara para mim:<br /><br />
            Talento não sustenta negócio. Força não sustenta negócio.<br />
            <strong>Estrutura sustenta.</strong>
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">IA como ferramenta central</h2>
          <p>
            A virada aconteceu quando entendi que inteligência artificial não era coisa de programador. Era a ferramenta que faltava para empreendedoras ganharem escala sem perder humanidade.
          </p>
          <p>
            Hoje desenvolvo e implemento IA humanizada: assistentes personalizados, automações estratégicas e fluxos inteligentes que não substituem a essência da empreendedora — amplificam sua capacidade.
          </p>
          <p>Tecnologia, quando bem direcionada:</p>
          <ul className="space-y-1 text-center">
            <li>libera tempo</li>
            <li>reduz sobrecarga</li>
            <li>aumenta clareza</li>
            <li>protege a essência do negócio</li>
          </ul>
          <p className="text-foreground font-serif text-center italic pt-4">
            Eu não só ensino — eu construo. O Precifica3D, por exemplo, é um SaaS de precificação inteligente para impressão 3D que criei com IA e ferramentas no-code, sem escrever uma linha de código. Hoje tem usuários pagantes.
          </p>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">Método próprio</h2>
          <p>Minha abordagem vai além da mentoria tradicional. Desenvolvi métodos como:</p>
          <p className="text-foreground font-serif text-lg text-center">
            <strong>ALMA DIGITAL™</strong><br />
            e o <strong>Método Mulher no Poder</strong>
          </p>
          <p className="text-center">Unindo três pilares:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Estratégia</p>
              <p className="text-sm">Estrutura e direção.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Inteligência Artificial</p>
              <p className="text-sm">Automação com essência.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Execução</p>
              <p className="text-sm">Implementação real.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4">O ecossistema</h2>
          <p>Hoje lidero um ecossistema que inclui:</p>
          <ul className="space-y-2 text-center text-foreground font-serif">
            <li>Implementação de IA e automações</li>
            <li>Mentorias estratégicas</li>
            <li>Palestras e treinamentos</li>
            <li>Livro e conteúdo</li>
          </ul>
          <p className="text-center">Tudo com um único propósito:</p>
          <p className="text-foreground font-serif text-center italic">
            Ajudar mulheres a deixarem de sobreviver no improviso<br />
            e passarem a viver com previsibilidade, liberdade e autoridade.
          </p>
          <p className="text-foreground font-serif text-center text-xl md:text-2xl pt-4 italic">
            Você já tem valor.<br />
            Só falta estrutura pra transformar isso<br />
            em previsibilidade.
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
