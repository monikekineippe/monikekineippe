import { Helmet } from "react-helmet-async";

const updatedAt = "19 de maio de 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4 border-b border-border/60 pb-8 last:border-0">
    <h2 className="font-serif text-2xl md:text-3xl text-foreground">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const PoliticaDePrivacidade = () => {
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Política de Privacidade | Monike Kineippe</title>
        <meta
          name="description"
          content="Política de Privacidade da Monike Kineippe: coleta, uso, cookies, ferramentas de análise e direitos do titular."
        />
        <link rel="canonical" href="https://monikekineippe.com.br/politica-de-privacidade" />
      </Helmet>

      <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
        <p className="text-secondary text-xs tracking-[0.25em] uppercase mb-5">Política de Privacidade</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">Como seus dados são tratados</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Esta Política explica como a Monike Kineippe coleta, utiliza e protege dados pessoais em seus sites, páginas,
          conteúdos, formulários, produtos digitais e comunicações.
        </p>
        <p className="text-sm text-muted-foreground mb-14">Última atualização: {updatedAt}</p>

        <div className="space-y-10">
          <Section title="1. Quem somos">
            <p>
              Este site é operado por <strong>Monike Kineippe Consultoria e Palestra LTDA</strong>, CNPJ
              19.911.204/0001-02, com contato pelo e-mail <a className="text-secondary hover:underline" href="mailto:contato@monikekineippe.com.br">contato@monikekineippe.com.br</a>.
            </p>
          </Section>

          <Section title="2. Quais dados podemos coletar">
            <p>Podemos coletar dados fornecidos diretamente por você, como nome, e-mail, telefone/WhatsApp, respostas em formulários, mensagens enviadas e informações necessárias para atendimento ou entrega de produtos.</p>
            <p>Também podemos coletar dados técnicos de navegação, como endereço IP, dispositivo, navegador, páginas acessadas, origem da visita, interações com botões e eventos de conversão.</p>
          </Section>

          <Section title="3. Como usamos esses dados">
            <p>Os dados podem ser usados para responder contatos, entregar produtos digitais, processar compras, melhorar páginas e campanhas, personalizar comunicações, medir resultados de anúncios e cumprir obrigações legais.</p>
            <p>Não vendemos dados pessoais. O uso é restrito às finalidades relacionadas aos produtos, conteúdos, relacionamento e operação comercial da marca Monike Kineippe.</p>
          </Section>

          <Section title="4. Cookies, Pixel, GTM e ferramentas de análise">
            <p>Este site pode utilizar cookies e tecnologias semelhantes para funcionamento, análise de tráfego, mensuração de campanhas e remarketing.</p>
            <p>Podemos usar ferramentas como Meta Pixel, Google Tag Manager, Google Analytics e plataformas equivalentes para entender visitas, cliques, origem de tráfego, eventos de compra ou intenção de compra.</p>
            <p>Você pode bloquear cookies nas configurações do seu navegador. Algumas funções do site podem ser impactadas caso os cookies sejam desativados.</p>
          </Section>

          <Section title="5. Checkout e plataformas externas">
            <p>Compras podem ser processadas por plataformas externas, como a Greenn ou outras ferramentas de pagamento. Nesses casos, dados de pagamento, cobrança e acesso ao produto podem ser tratados também pela plataforma responsável pelo checkout.</p>
            <p>Recomendamos consultar a política de privacidade da plataforma utilizada no momento da compra.</p>
          </Section>

          <Section title="6. Compartilhamento de dados">
            <p>Podemos compartilhar dados com fornecedores necessários para a operação, como plataformas de pagamento, e-mail marketing, automação, análise, hospedagem, atendimento, CRM e ferramentas de anúncios.</p>
            <p>Esse compartilhamento ocorre apenas quando necessário para executar serviços, entregar produtos, medir campanhas, cumprir obrigações legais ou proteger direitos.</p>
          </Section>

          <Section title="7. Segurança e retenção">
            <p>Adotamos medidas razoáveis para proteger os dados contra acesso não autorizado, perda, alteração ou uso indevido.</p>
            <p>Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, obrigações legais, resolução de disputas ou exercício regular de direitos.</p>
          </Section>

          <Section title="8. Seus direitos">
            <p>Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, exclusão, portabilidade, informação sobre compartilhamento e revogação de consentimento quando aplicável.</p>
            <p>Para exercer seus direitos, envie uma solicitação para <a className="text-secondary hover:underline" href="mailto:contato@monikekineippe.com.br">contato@monikekineippe.com.br</a>.</p>
          </Section>

          <Section title="9. Alterações nesta Política">
            <p>Esta Política pode ser atualizada a qualquer momento para refletir mudanças legais, operacionais ou tecnológicas. A versão vigente será sempre publicada nesta página.</p>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default PoliticaDePrivacidade;
