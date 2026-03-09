import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import sobre1 from "@/assets/sobre-1.jpg";
import sobre2 from "@/assets/sobre-2.jpg";
import sobre3 from "@/assets/sobre-3.jpg";
import sobre4 from "@/assets/sobre-4.jpg";
import sobre5 from "@/assets/sobre-5.jpg";
import sobre6 from "@/assets/sobre-6.jpg";
import sobre7 from "@/assets/sobre-7.jpg";
import sobre8 from "@/assets/sobre-8.jpg";
import sobre9 from "@/assets/sobre-9.jpg";

const SobreImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`overflow-hidden rounded-lg ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
      loading="lazy"
    />
  </div>
);

const Sobre = () => {
  return (
    <>
      <PageHero
        tag="Sobre"
        title="Sobre a Monike"
        subtitle="Empresária desde os 18 anos. Autora. Colunista. Estrategista de negócios com alma."
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
              <p className="text-foreground font-serif text-xl md:text-2xl italic">
                Eu não aprendi negócios em teoria.<br />
                Aprendi na prática.<br />
                E, algumas vezes, na dor.
              </p>
              <p>
                Abri meu primeiro CNPJ aos 18 anos. Enquanto muitas pessoas ainda buscavam um caminho, eu já estava contratando, liderando e tomando decisões que exigiam maturidade antes da idade.
              </p>
            </div>
            <SobreImage src={sobre5} alt="Monike com a família" className="aspect-[4/5]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-16">
            <SobreImage src={sobre8} alt="Monike em ensaio corporativo" className="aspect-[4/5] md:order-1" />
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg md:order-2">
              <p>
                Cresci vendo meu pai empreender.<br />
                Mas também ouvi que negócios não eram lugar para mulheres.
              </p>
              <p className="text-foreground font-serif text-lg md:text-xl italic">
                Foi ali que decidi algo definitivo:<br />
                eu não seria apenas empreendedora.<br />
                Eu seria empresária.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">A jornada que ninguém romantiza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>Ao longo de mais de 17 anos:</p>
              <p className="text-foreground font-serif">
                Construí negócios. Vendi empresas. Fali. Recomecei.
              </p>
              <p>
                Vendi uma agência valorizada. Passei por dois episódios de burnout. Enfrentei cinco perdas gestacionais.
              </p>
              <p>Mesmo assim, continuei construindo.</p>
            </div>
            <SobreImage src={sobre2} alt="Monike ministrando palestra sobre SWOT" className="aspect-[4/5]" />
          </div>
          <p className="text-foreground font-serif text-lg text-center italic mt-10">
            Talento não sustenta negócio.<br />
            Força não sustenta negócio.<br />
            Motivação não sustenta negócio.<br /><br />
            <strong>Estrutura sustenta.</strong>
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">O que eu faço hoje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <SobreImage src={sobre3} alt="Monike em entrevista em evento" className="aspect-[4/5] md:order-1" />
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg md:order-2">
              <p>Hoje atuo como estrategista de negócios digitais femininos com alma.</p>
              <p>
                Ajudo mulheres — principalmente mães e prestadoras de serviço — a transformarem conhecimento em produtos digitais estruturados, capazes de gerar renda com previsibilidade e lucro.
              </p>
              <p className="text-foreground font-serif italic">Meu trabalho não é ensinar a postar mais.</p>
              <p>Meu trabalho é:</p>
              <ul className="space-y-2 list-none">
                <li>• organizar o caos</li>
                <li>• estruturar ofertas</li>
                <li>• sustentar posicionamento</li>
                <li>• construir base sólida para crescer com consistência</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">Método próprio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>Minha abordagem vai além da mentoria tradicional.</p>
              <p>Desenvolvi métodos como:</p>
              <p className="text-foreground font-serif text-lg">
                <strong>ALMA DIGITAL™</strong><br />
                e o <strong>Método Mulher no Poder</strong>
              </p>
              <p>Unindo três pilares:</p>
              <ul className="space-y-1 text-foreground font-serif">
                <li>Estratégia</li>
                <li>Identidade</li>
                <li>Execução</li>
              </ul>
            </div>
            <SobreImage src={sobre4} alt="Monike palestrando em evento" className="aspect-[4/5]" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">IA com essência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <SobreImage src={sobre9} alt="Monike com diamante" className="aspect-[4/5] md:order-1" />
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-base md:text-lg md:order-2">
              <p>Também encontrei na inteligência artificial uma aliada poderosa.</p>
              <p className="text-foreground font-serif italic">Mas não qualquer IA.</p>
              <p>
                Eu desenvolvo e implemento IA humanizada: assistentes personalizados que não substituem a essência da empreendedora — amplificam sua capacidade estratégica.
              </p>
              <p>Tecnologia, quando bem direcionada:</p>
              <ul className="space-y-1">
                <li>libera tempo</li>
                <li>reduz sobrecarga</li>
                <li>aumenta clareza</li>
                <li>protege a essência do negócio</li>
              </ul>
              <p className="text-foreground font-serif italic">
                Ela não tira a alma do negócio.<br />
                Ela protege.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">Minha forma de pensar negócios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <SobreImage src={sobre5} alt="Monike com a família" className="aspect-square" />
            <SobreImage src={sobre6} alt="Livro Empreender Nunca Foi Sorte" className="aspect-square" />
            <SobreImage src={sobre7} alt="Monike lendo seu livro" className="aspect-square hidden md:block" />
          </div>
          <p className="text-center font-sans text-muted-foreground mb-6">Minha abordagem une três forças:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Governante</p>
              <p className="text-sm text-muted-foreground">Estrutura e direção.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Sábio</p>
              <p className="text-sm text-muted-foreground">Clareza estratégica.</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-serif text-lg font-medium">Criador</p>
              <p className="text-sm text-muted-foreground">Inovação e visão.</p>
            </div>
          </div>
          <p className="text-foreground font-serif text-center italic mt-6">
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
