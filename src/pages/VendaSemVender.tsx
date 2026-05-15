import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import monikeProfile from "@/assets/monike-1.jpg";

const CTA_LINK = "https://payfast.greenn.com.br/102443/offer/cX9FFF?b_id_1=120590&b_offer_1=IAzycE";

const VendaSemVender = () => {
  const handleCTAClick = () => {
    // Tracking Pixel/GA
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.fbq) window.fbq('track', 'InitiateCheckout');
      // @ts-ignore
      if (window.gtag) window.gtag('event', 'begin_checkout');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans selection:bg-[#B8973A] selection:text-[#1A1A1A]">
      <Helmet>
        <title>Venda $em Vender — Domine a Venda Invisível | Monike Kineippe</title>
        <meta name="description" content="Método para mentoras, consultoras, assistentes virtuais e terapeutas fecharem clientes em conversas casuais sem nunca parecer que estão vendendo." />
        <link rel="canonical" href="https://monikekineippe.lovable.app/venda-sem-vender" />
        <meta property="og:title" content="Venda $em Vender — Domine a Venda Invisível" />
        <meta property="og:description" content="Domine a venda invisível e feche clientes em conversas casuais. Método exclusivo." />
        <meta property="og:url" content="https://monikekineippe.lovable.app/venda-sem-vender" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Venda $em Vender",
          description: "Método para vender em conversas casuais sem parecer que está vendendo.",
          url: "https://monikekineippe.lovable.app/venda-sem-vender",
          brand: { "@type": "Brand", name: "Monike Kineippe" },
        })}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="min-h-[90vh] flex items-center bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1100px] text-center z-10">
          <span className="inline-block text-[#B8973A] text-xs tracking-[0.3em] uppercase mb-8 font-medium animate-fade-in">
            PARA MENTORAS, CONSULTORAS, ASSISTENTES VIRTUAIS E TERAPEUTAS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 max-w-4xl mx-auto animate-fade-up">
            Domine a venda invisível.
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-[#F5F0E8]/90 mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Feche clientes em conversas casuais sem nunca parecer que está vendendo.
          </p>
          <p className="text-lg md:text-xl text-[#F5F0E8]/70 leading-relaxed mb-12 max-w-[720px] mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            O método que transforma cafés, eventos e conversas de bastidor em fonte real de novos clientes. Sem script forçado, sem pressão, sem aquela sensação de estar empurrando algo.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="bg-[#B8973A] hover:bg-[#6B1C2A] text-[#1A1A1A] hover:text-[#F5F0E8] text-lg px-12 py-8 h-auto rounded-sm transition-all duration-300 font-semibold"
              onClick={handleCTAClick}
              asChild
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Quero dominar a venda invisível, R$147
              </a>
            </Button>
            <p className="mt-4 text-[#F5F0E8]/70 text-sm">
              De R$297 por R$147 no lançamento, pagamento único, acesso vitalício
            </p>
          </div>
        </div>
        {/* Linha dourada sutil no fundo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-[#B8973A]/30"></div>
      </section>

      {/* 2. O PROBLEMA REAL */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[720px]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Você não tem problema de venda. Você tem um problema de método.
          </h2>
          <div className="space-y-8 text-lg text-[#4A4A4A] leading-[1.7]">
            <p>Você já percebeu que o jeito tradicional de vender não combina com o que você faz?</p>
            <p>
              Uma terapeuta não pode fechar venda como quem vende curso. Uma mentora perde autoridade se pressiona. Uma consultora vira inconveniente quando insiste. Uma assistente virtual desaparece no meio de propostas frias que ninguém responde.
            </p>
            <p>
              Você vende relação, confiança, transformação. E o marketing tradicional te ensina a vender como se fosse produto de prateleira.
            </p>
            
            <div className="pt-8">
              <h3 className="text-[#1A1A1A] font-serif text-2xl mb-6">O resultado é o que você já vive:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#B8973A] mt-2.5 shrink-0 rounded-full"></span>
                  <span>Conversas boas que não viram cliente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#B8973A] mt-2.5 shrink-0 rounded-full"></span>
                  <span>Eventos cheios que rendem zero proposta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#B8973A] mt-2.5 shrink-0 rounded-full"></span>
                  <span>Cafés inspiradores que terminam num "depois a gente se fala".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#B8973A] mt-2.5 shrink-0 rounded-full"></span>
                  <span>A sensação de que vender bem é pra outro tipo de pessoa.</span>
                </li>
              </ul>
            </div>
            
            <p className="font-serif italic text-2xl pt-8 text-[#1A1A1A]">
              Não é. O problema nunca foi você. Foi o método.
            </p>
          </div>
        </div>
      </section>

      {/* 3. A VIRADA DE CHAVE */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[720px]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Existe um jeito de vender onde o cliente decide comprar antes de você pedir.
          </h2>
          <div className="space-y-8 text-lg text-[#F5F0E8]/80 leading-[1.7]">
            <p className="text-2xl text-[#F5F0E8] font-serif">Chama-se venda invisível.</p>
            <p>Não é técnica de manipulação. Não é gatilho mental decorado. Não é script de closer agressivo.</p>
            <p>
              É o oposto. É a arte de conduzirmos uma conversa de tal forma que a pessoa do outro lado chega na decisão de comprar sozinha, sentindo que foi escolha dela, porque foi mesmo.
            </p>
            <p className="text-[#B8973A] font-medium">Você não vende. Você cria o contexto onde a venda acontece.</p>
            
            <div className="pt-8">
              <h3 className="text-[#F5F0E8] font-serif text-2xl mb-6">E quando você domina isso, três coisas mudam:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-[#B8973A] font-serif text-2xl">01</span>
                  <span>Você para de depender de lançamentos, campanhas e exaustão pra vender.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#B8973A] font-serif text-2xl">02</span>
                  <span>Suas conversas casuais passam a render clientes de verdade.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#B8973A] font-serif text-2xl">03</span>
                  <span>Você cobra mais e ouve sim mais vezes, porque o valor fica óbvio antes do preço aparecer.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O MÉTODO (3 PILARES) */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="text-center mb-20">
            <span className="inline-block text-[#B8973A] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              O MÉTODO
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Venda $em Vender</h2>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">Três pilares para transformar qualquer conversa em oportunidade real de venda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Posicionamento Estratégico",
                desc: "Como ser percebida como autoridade antes mesmo de abrir a boca pra falar do seu serviço. A construção de credibilidade que faz o cliente querer comprar de você."
              },
              {
                title: "Neurovendas com Verdade",
                desc: "Os gatilhos reais de decisão de compra, explicados sem manipulação. A linguagem que ativa desejo sem soar comercial. Como o cérebro decide comprar, e como você se alinha com isso de forma ética."
              },
              {
                title: "Fechamento Invisível",
                desc: "A técnica de levar a pessoa ao sim sem pressão, sem insistência, sem a sensação de agora vai pedir o dinheiro. O fechamento que parece continuação natural da conversa."
              }
            ].map((pilar, idx) => (
              <div key={idx} className="bg-white/50 p-10 border border-[#B8973A]/20 flex flex-col items-center text-center transition-all hover:border-[#B8973A]/50">
                <span className="text-[#B8973A] font-serif text-3xl mb-6">0{idx + 1}</span>
                <h3 className="font-serif text-2xl mb-4">{pilar.title}</h3>
                <div className="w-12 h-px bg-[#B8973A] mb-6"></div>
                <p className="text-[#4A4A4A] leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ RECEBE */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[800px]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Tudo que está incluído</h2>
          
          <div className="space-y-16">
            <div className="bg-white/5 p-8 md:p-12 border border-[#B8973A]/20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-[#B8973A] font-serif text-3xl mb-2">
                    Workshop Venda $em Vender
                  </h3>
                  <p className="text-[#F5F0E8]/70 italic">Formato intensivo para aplicação imediata.</p>
                </div>
                <div className="text-right">
                  <span className="text-5xl font-serif text-[#B8973A]/20">06 AULAS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { title: "Apresentação", desc: "Abertura e mentalidade da venda invisível." },
                  { title: "Por que vender parece difícil", desc: "Identificando e removendo as travas comerciais." },
                  { title: "O Método", desc: "A estrutura técnica passo a passo do processo." },
                  { title: "Perguntas e Respostas", desc: "Consultoria direta sobre casos reais das alunas." },
                  { title: "Dinâmica Prática", desc: "Mão na massa para validar a sua nova abordagem." },
                  { title: "Encerramento", desc: "Plano de ação e próximos passos na jornada." }
                ].map((aula, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="font-serif text-2xl text-[#B8973A] opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <div>
                      <h4 className="font-serif text-xl mb-1 text-[#F5F0E8]">{aula.title}</h4>
                      <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{aula.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-[#B8973A] font-serif text-2xl text-center mb-10">Bônus exclusivos de implementação</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Kit Conversas que Convertem", desc: "Banco de frases de abertura, perguntas de qualificação e frases de virada de objeção." },
                  { title: "Mapa da Venda Invisível", desc: "PDF visual com o passo a passo de uma conversa do zero ao sim, adaptado pra cada perfil." },
                  { title: "Templates Pós-Conversa", desc: "Modelos prontos de mensagem, áudio de WhatsApp e proposta que se sustenta sozinha." }
                ].map((bonus, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-white/10 pb-6">
                    <span className="text-[#B8973A] font-serif text-xl shrink-0">Bônus 0{i+1}</span>
                    <div>
                      <h4 className="font-serif text-xl mb-1">{bonus.title}</h4>
                      <p className="text-[#F5F0E8]/60">{bonus.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-12 border-t border-white/10 mt-8">
              <div className="inline-block bg-[#B8973A] text-[#1A1A1A] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4 animate-pulse">
                Destaque Especial
              </div>
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#B8973A]">ACESSO VITALÍCIO</h3>
              <p className="text-[#F5F0E8]/80 text-lg md:text-xl italic max-w-2xl mx-auto">
                Assista no seu tempo, revise quando precisar e tenha o método sempre à mão para cada nova conversa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARA QUEM É */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center">Este método é pra você?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/40 p-12 border-l-4 border-[#B8973A]">
              <h3 className="font-serif text-3xl mb-8">Sim, se você...</h3>
              <ul className="space-y-6 text-lg">
                {[
                  "É mentora, consultora, assistente virtual, terapeuta ou presta serviço com a sua própria voz.",
                  "Sente que vende pelo boca a boca e pela sorte, e quer trocar isso por método.",
                  "Quer cobrar mais sem se sentir gananciosa.",
                  "Acredita que vender bem não precisa custar sua essência."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#B8973A] font-bold">✓</span>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1A1A1A]/5 p-12 border-l-4 border-[#1A1A1A]/30">
              <h3 className="font-serif text-3xl mb-8">Não, se você...</h3>
              <ul className="space-y-6 text-lg">
                {[
                  "Procura fórmula mágica, atalho ou promessa de ficar rica em 30 dias.",
                  "Quer técnicas de pressão e manipulação.",
                  "Não está disposta a aplicar o que aprender."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#6B1C2A] font-bold">✕</span>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE MONIKE */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img 
                src={monikeProfile} 
                alt="Monike Kineippe — Criadora do método Venda $em Vender" 
                className="grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 w-full max-w-md mx-auto md:ml-0"
                loading="lazy"
                width={448}
                height={597}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#B8973A] hidden md:block"></div>
            </div>
            <div className="space-y-8">
              <span className="inline-block text-[#B8973A] text-xs tracking-[0.3em] uppercase font-medium">QUEM TE ENSINA</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Monike Kineippe</h2>
              <div className="space-y-6 text-lg text-[#F5F0E8]/70 leading-[1.7]">
                <p>Há mais de 18 anos ajudo mulheres empreendedoras a transformarem conhecimento em renda previsível, com estrutura e verdade.</p>
                <p>Já impactei mais de 5.000 mulheres, escrevi 2 livros, e construí um ecossistema completo de soluções para empreendedoras que querem crescer sem se perder.</p>
                <p>O método Venda $em Vender nasceu da prática. Foi testado, ajustado e validado em workshops presenciais antes de virar este programa.</p>
                <p>Você está aprendendo com alguém que vende, ensina a vender, e construiu um negócio que se sustenta exatamente do que ensina aqui.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OPORTUNIDADE DO LANÇAMENTO */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[720px] text-center">
          <span className="inline-block text-[#B8973A] text-xs tracking-[0.3em] uppercase mb-4 font-medium">LANÇAMENTO</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Você está entre as primeiras</h2>
          <div className="space-y-8 text-lg text-[#4A4A4A] mb-12">
            <p>Este é o primeiro lançamento aberto do Venda $em Vender fora do formato presencial.</p>
            <p>As alunas desta turma vão construir os primeiros depoimentos públicos do método. É uma oportunidade rara de entrar antes que o preço suba, antes da página ficar cheia de prova social, antes do método virar referência.</p>
          </div>
          <div className="bg-white p-12 border-2 border-[#B8973A] relative">
            <p className="text-[#4A4A4A] line-through italic text-lg opacity-70 mb-2">De R$ 297</p>
            <p className="font-serif text-3xl mb-2">
              por apenas <span className="text-[#B8973A] font-bold">12x de R$ 15,11</span>
            </p>
            <p className="text-xl text-[#4A4A4A]">ou à vista <span className="font-bold">R$ 147,00</span></p>
            
            <div className="mt-8">
              <Button 
                className="bg-[#B8973A] hover:bg-[#6B1C2A] text-[#1A1A1A] hover:text-[#F5F0E8] text-lg px-12 py-7 h-auto rounded-sm transition-all duration-300 font-semibold w-full md:w-auto"
                onClick={handleCTAClick}
                asChild
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  APROVEITAR ESTA OPORTUNIDADE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FECHAMENTO E CTA FINAL */}
      <section className="bg-[#1A1A1A] text-[#F5F0E8] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[800px] text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Você já tem valor. Só falta dominar a venda invisível.
          </h2>
          <div className="space-y-8 text-lg text-[#F5F0E8]/70 leading-relaxed mb-16">
            <p>Vender não é sobre falar mais. É sobre conduzir melhor.</p>
            <p>Se você chegou até aqui, é porque sabe que precisa de método, não de mais conteúdo gratuito perdido por aí. R$147 é menos do que você cobra em uma sessão, em um atendimento, em uma proposta. E pode ser a virada que destrava todas as próximas.</p>
          </div>
          
          <div>
            <Button 
              className="bg-[#B8973A] hover:bg-[#6B1C2A] text-[#1A1A1A] hover:text-[#F5F0E8] text-xl px-12 py-8 h-auto rounded-sm transition-all duration-300 font-semibold mb-6 w-full md:w-auto"
              onClick={handleCTAClick}
              asChild
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Quero acessar o Venda $em Vender por R$147
              </a>
            </Button>
            <p className="text-[#F5F0E8]/50 text-sm">
              Acesso imediato, pagamento único, 7 dias de garantia incondicional
            </p>
          </div>

          <div className="mt-20 p-8 border border-[#B8973A]/40 max-w-lg mx-auto">
            <h4 className="font-serif text-xl mb-4 text-[#B8973A]">Garantia Incondicional</h4>
            <p className="text-[#F5F0E8]/60 leading-relaxed">Se nos primeiros 7 dias você sentir que o método não é pra você, devolvemos 100% do valor. Sem perguntas, sem burocracia.</p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-[#F5F0E8] text-[#1A1A1A] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[720px]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Perguntas que talvez você esteja se fazendo</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "1. Funciona pra quem ainda não tem audiência grande?", a: "Sim. Venda invisível é justamente o método pra quem vende em conversas reais, não em massa." },
              { q: "2. Quanto tempo leva pra aplicar?", a: "Você pode aplicar na próxima conversa. O método é prático, não teórico." },
              { q: "3. E se eu não conseguir aplicar?", a: "Você tem 7 dias de garantia. Risco zero." },
              { q: "4. As aulas têm prazo?", a: "Não. Acesso vitalício, no seu ritmo." },
              { q: "5. Funciona pra vender serviço de ticket alto?", a: "Funciona ainda melhor. Ticket alto exige confiança, e confiança é exatamente o que a venda invisível constrói." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#E5E0D5] px-4">
                <AccordionTrigger className="font-serif text-xl text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] text-lg leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-[#1A1A1A] py-20 text-[#F5F0E8]/40 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="font-serif text-2xl text-[#F5F0E8]/80 mb-8">Monike Kineippe</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm uppercase tracking-widest mb-12">
            <a href="mailto:contato@monikekineippe.com" className="hover:text-[#B8973A] transition-colors">contato@monikekineippe.com</a>
            <a href="#" className="hover:text-[#B8973A] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[#B8973A] transition-colors">Termos de Uso</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Monike Kineippe. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default VendaSemVender;
