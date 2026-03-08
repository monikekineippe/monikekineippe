import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoIcon from "@/assets/logo-icon.png";
import monike1 from "@/assets/monike-1.jpg";
import { Clock, Users, Handshake, Wrench, MessageCircle, GraduationCap, BookOpen, Network, Gift, Hammer, Mic, Star } from "lucide-react";

const MetodoMulherNoPoder = () => {
  const buyLink = "https://payfast.greenn.com.br/redirect/188551";

  return (
    <>
      {/* Hero */}
      <div className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={logoIcon} alt="Método Mulher no Poder" className="w-16 h-16 mb-6 object-contain" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
              Não é apenas sobre <span className="text-secondary">VENDER</span>, é sobre construir um negócio que garanta o futuro da sua família e o seu.
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 font-sans leading-relaxed mb-8">
              <strong>Pare de apenas sobreviver</strong> às responsabilidades de ser mãe, esposa e empresária, viva plenamente sem abrir mão dos seus sonhos e desejos.
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero estar no poder</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={monike1} alt="Monike Kineippe" className="rounded-lg max-h-[500px] object-cover premium-shadow" />
          </div>
        </div>
      </div>

      {/* Dor / Identificação */}
      <Section variant="wine">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-foreground/80 font-sans leading-relaxed mb-8">
            Quantas vezes você já se sentiu à beira de um surto? Tentando equilibrar as demandas da casa, a pressão de ser uma boa mãe, as responsabilidades do casamento, e o peso de fazer seu negócio decolar?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-8">
            A verdade é que você não precisa escolher entre ser uma boa mãe, uma esposa companheira ou uma empresária de sucesso.
          </h2>
          <p className="text-primary-foreground/70 font-sans leading-relaxed mb-4">
            A rotina é uma corda bamba, e você caminha por ela todos os dias. A sobrecarga, o cansaço, e a sensação de que está falhando em alguma parte… é sufocante.
          </p>
          <p className="text-primary-foreground/70 font-sans leading-relaxed mb-6">
            E aquela culpa silenciosa que te persegue? Parece que cada escolha é um sacrifício, e você sente que está perdendo em todas as frentes.
          </p>
          <p className="text-secondary font-serif text-lg italic">
            "Eu sei exatamente como é porque eu já estive aí."
          </p>
        </div>
      </Section>

      {/* Empresária 4.0 */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-4">A Comunidade</span>
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-6">
            Empresária 4.0
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            As pessoas estão sempre nos colocando rótulos, e junto deles suas expectativas injustas e esmagadoras. A mãe perfeita, a filha obediente, a esposa sempre disponível… e ainda temos que ser empresárias de sucesso.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            Que tal um rótulo onde nós mulheres possamos ressignificar todos os outros, e ainda nos orgulharmos de ser?
          </p>
          <p className="font-serif text-lg text-foreground mb-6">
            <strong>Então nasceu a Empresária 4.0.</strong> A modernidade exige muito de nós, mas nós podemos muito mais!
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero ser 4.0 também</a>
          </Button>
        </div>
      </Section>

      {/* Ecossistema */}
      <Section variant="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight text-center mb-4">
            Um ecossistema de apoio criado para você: mulher, mãe, esposa e empresária.
          </h2>
          <p className="text-center text-muted-foreground font-sans mb-12">
            Você nunca mais estará sozinha, e sim, é possível!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Conteúdo no seu Tempo", desc: "Mais de 20 horas de conteúdo direto ao ponto para aplicar no seu negócio, mesmo com apenas 15 minutos por dia." },
              { icon: Users, title: "Companheiras da mesma Guerra", desc: "Cercada por mulheres que enfrentam os mesmos desafios e que vão te apoiar em cada passo." },
              { icon: Handshake, title: "Parcerias e Vantagens", desc: "Condições especiais com empresas que entendem suas necessidades como empresária, mãe e esposa." },
              { icon: Wrench, title: "+ Prática", desc: "Templates, tutoriais e guias passo a passo testados em mais de 20 segmentos. É só copiar e colar." },
              { icon: MessageCircle, title: "Hotseat Sócia por um Dia", desc: "Encontros semanais ao vivo para resolver seus problemas com insights personalizados." },
              { icon: GraduationCap, title: "Masterclass Mensal", desc: "Uma super aula mensal aprofundando em um tema específico escolhido pela comunidade." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card gold-border rounded-lg text-center flex flex-col items-center gap-3">
                <item.icon className="w-8 h-8 text-secondary" />
                <h3 className="font-serif text-base font-medium">{item.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="gold" size="xl" asChild>
              <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero entrar na comunidade</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* O que você encontra */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight text-center mb-12">
            Preparamos tudo para você que não tem tempo pra mais nada
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Aulas super dinâmicas", desc: "Mais de 20 horas de conteúdo atualizado semanalmente, pensado para você estudar e aplicar, mesmo com 15min no dia." },
              { icon: Network, title: "Networking personalizado", desc: "Apoio de mulheres empreendedoras compartilhando caminhos para resolver desafios familiares e empresariais." },
              { icon: Gift, title: "Clube de vantagens", desc: "Condições especiais de empresas parceiras alinhadas com seu crescimento empresarial e autocuidado." },
              { icon: Hammer, title: "Ferramentas Práticas", desc: "Recursos, templates e guias passo a passo para aplicar no negócio, copiando estratégias de 20+ segmentos." },
              { icon: Mic, title: "Hot seat das sócias", desc: "Encontro SEMANAL para trazer suas dificuldades e receber dicas e insights personalizados." },
              { icon: Star, title: "Masterclass Mensal", desc: "Super aula mensal com especialista para aprofundar em tema específico da comunidade." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-accent/50 rounded-lg flex flex-col items-center gap-3 text-center">
                <item.icon className="w-7 h-7 text-secondary" />
                <h3 className="font-serif text-base font-medium">{item.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Para quem é */}
      <Section variant="wine">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-serif mb-2">Chega de se contentar em sobreviver.</h2>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-secondary mb-4">É hora de viver plenamente!</h2>
          <p className="text-primary-foreground/70 font-sans mb-10">
            Se você é uma mulher que carrega o mundo nas costas, <strong className="text-primary-foreground">aqui é o seu lugar.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              { title: "É mãe, esposa, filha e empresária", desc: "Encontrará o apoio e ferramentas para equilibrar todos esses papéis, sem perder sua essência." },
              { title: "Busca crescimento pessoal e profissional", desc: "Nós entendemos suas lutas e estamos aqui para te guiar em cada passo." },
              { title: "Não quer estar mais sozinha", desc: "Uma rede de apoio que não só te entende, mas te impulsiona ao próximo nível." },
              { title: "Precisa de ferramentas práticas", desc: "Tudo desenhado para ser prático e aplicável, com resultados reais e tangíveis." },
              { title: "Está cansada de sobreviver", desc: "Sua chance de transformar sua rotina, suas escolhas e, finalmente, sua vida." },
            ].map((item, i) => (
              <div key={i} className="p-5 border border-secondary/20 rounded-lg">
                <h3 className="font-serif text-sm font-medium text-secondary mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="gold" size="xl" asChild>
              <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero viver plenamente</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* 3 Pilares */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4">
            Aqui você encontrará tudo que precisa!
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-10">
            O método que desenvolvi para te guiar rumo a uma vida com liberdade e autonomia vem de práticas validadas por anos de experiência no mercado empresarial. São <strong className="text-foreground">3 pilares</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Mentalidade", desc: "Fortalecer sua mentalidade empreendedora para superar crenças limitantes e se posicionar com confiança." },
              { num: "02", title: "Estratégia", desc: "Ferramentas e estratégias práticas para estruturar e escalar o seu negócio de forma sustentável." },
              { num: "03", title: "Comunidade", desc: "Rede de apoio e networking com mulheres que compartilham os mesmos desafios e sonhos." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card gold-border rounded-lg text-center">
                <span className="text-4xl font-serif font-bold text-secondary/30">{item.num}</span>
                <h3 className="font-serif text-lg font-medium mt-2 mb-3">{item.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Preço */}
      <Section variant="accent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-8">
            A jornada não é fácil, mas está longe de ser impossível.
          </h2>

          <div className="bg-card gold-border rounded-xl p-10 premium-shadow">
            <p className="text-sm font-sans text-muted-foreground uppercase tracking-widest mb-2">Por apenas</p>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="text-lg font-sans text-muted-foreground">12x</span>
              <span className="text-5xl font-serif font-bold text-foreground">R$ 49,70</span>
            </div>
            <p className="text-sm font-sans text-muted-foreground mb-6">ou R$ 497 à vista</p>
            <p className="text-sm font-sans text-muted-foreground mb-8">Caminhe conosco por 1 ano.</p>
            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero caminhar com vocês</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-sans mt-8 leading-relaxed">
            Lembre-se, esta oferta é limitada e exclusiva. Garanta sua vaga e comece a jornada para se tornar a empreendedora de sucesso que você merece ser.
          </p>
        </div>
      </Section>

      {/* CTA final */}
      <Section variant="wine">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-6">
            Está pronta para transformar sua vida e construir o futuro que você e sua família merecem?
          </h2>
          <p className="text-primary-foreground/70 font-sans leading-relaxed mb-4">
            Pare de sobreviver e comece a viver uma vida de poder, onde você não precisa escolher entre ser uma boa mãe, esposa ou empresária. Você pode ser tudo isso e muito mais.
          </p>
          <p className="text-secondary font-serif text-lg italic mb-8">
            "A escolha é sua, e eu estarei ao seu lado em cada passo dessa jornada. Vamos juntas!"
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href={buyLink} target="_blank" rel="noopener noreferrer">Quero entrar agora</a>
          </Button>
        </div>
      </Section>


      {/* FAQ */}
      <Section variant="accent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight text-center mb-10">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "O que terei acesso?", a: "Acesso a recursos, ferramentas e mais de 15 cursos inclusos na comunidade Empresária 4.0 durante o período de vigência do plano contratado." },
              { q: "Não tenho computador, consigo acessar pelo celular?", a: "Sim! Você poderá acessar direto do celular e ainda assistir às aulas mesmo sem internet. A plataforma foi desenvolvida com trilhas de aprendizado e aulas rápidas de no máximo 15 minutinhos." },
              { q: "Quanto tempo terei acesso?", a: "Terá acesso por 12 meses ou enquanto a sua assinatura estiver ativa." },
              { q: "E se eu me arrepender?", a: "Depois de fazer sua compra, você tem até 7 dias para cancelar o seu pedido e receber o valor integral da sua inscrição diretamente pela plataforma de pagamento." },
              { q: "Moro em outro país. Posso comprar?", a: "Sim, a plataforma faz a conversão automaticamente. Qualquer dúvida entre em contato via e-mail: suporte@metodomulhernopoder.com.br" },
              { q: "A comunidade é só para empreendedoras ou também para autônomas?", a: "É tanto para empreendedoras como para autônomas. A comunidade é para você que quer se sentir mais autoconfiante, segura e preparada para ser protagonista da sua história." },
              { q: "Ainda não tenho o meu negócio! Vou conseguir acompanhar?", a: "Claro! Toda a plataforma serve tanto para quem está começando do zero quanto para quem quer crescer e escalar o próprio negócio. Vamos te pegar pela mão e guiá-la nessa jornada." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-secondary/20">
                <AccordionTrigger className="text-left font-sans text-sm hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA final bottom */}
      <Section>
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://metodomulhernopoder.com.br/" target="_blank" rel="noopener noreferrer">Ver site oficial</a>
          </Button>
          <Button variant="gold" size="xl" asChild>
            <a href={buyLink} target="_blank" rel="noopener noreferrer">Garantir minha vaga</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default MetodoMulherNoPoder;
