import { Helmet } from "react-helmet-async";

const updatedAt = "19 de maio de 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4 border-b border-border/60 pb-8 last:border-0">
    <h2 className="font-serif text-2xl md:text-3xl text-foreground">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const TermosDeUso = () => {
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Termos de Uso | Monike Kineippe</title>
        <meta
          name="description"
          content="Termos de Uso dos sites, conteúdos, páginas e produtos digitais de Monike Kineippe."
        />
        <link rel="canonical" href="https://monikekineippe.com.br/termos-de-uso" />
      </Helmet>

      <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
        <p className="text-secondary text-xs tracking-[0.25em] uppercase mb-5">Termos de Uso</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">Regras de uso do site e conteúdos</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Estes Termos regulam o uso dos sites, páginas, conteúdos, produtos digitais, materiais e comunicações da Monike Kineippe.
          Ao acessar ou comprar qualquer produto, você concorda com estas condições.
        </p>
        <p className="text-sm text-muted-foreground mb-14">Última atualização: {updatedAt}</p>

        <div className="space-y-10">
          <Section title="1. Identificação">
            <p>
              Este site é operado por <strong>Monike Kineippe Consultoria e Palestra LTDA</strong>, CNPJ
              19.911.204/0001-02, com contato pelo e-mail <a className="text-secondary hover:underline" href="mailto:contato@monikekineippe.com.br">contato@monikekineippe.com.br</a>.
            </p>
          </Section>

          <Section title="2. Uso do site">
            <p>Você se compromete a utilizar o site, páginas e materiais de forma lícita, ética e compatível com estes Termos.</p>
            <p>É proibido tentar invadir sistemas, copiar páginas, explorar falhas, automatizar acessos indevidos, usar conteúdos para fins ilícitos ou prejudicar a operação do site.</p>
          </Section>

          <Section title="3. Produtos digitais e acesso">
            <p>Produtos digitais, cursos, treinamentos, mentorias, materiais, aulas e bônus são disponibilizados conforme as condições descritas na página da oferta e/ou checkout.</p>
            <p>O acesso pode depender de confirmação de pagamento, cadastro em plataforma externa e cumprimento das regras da plataforma utilizada.</p>
          </Section>

          <Section title="4. Pagamento, garantia e reembolso">
            <p>Pagamentos são processados por plataformas externas de checkout. As formas de pagamento, parcelamento, prazos, garantia e reembolso seguem as condições informadas na oferta e na plataforma de pagamento no momento da compra.</p>
            <p>Quando houver garantia, ela será aplicada conforme prazo e regras comunicadas na página de vendas ou checkout.</p>
          </Section>

          <Section title="5. Propriedade intelectual">
            <p>Todos os conteúdos, textos, aulas, vídeos, páginas, frameworks, imagens, materiais, metodologias, identidade visual e comunicações são protegidos por direitos autorais e pertencem à Monike Kineippe ou a seus respectivos titulares.</p>
            <p>É proibido copiar, revender, distribuir, disponibilizar, reproduzir ou adaptar qualquer conteúdo sem autorização expressa.</p>
          </Section>

          <Section title="6. Uso individual e vedação de compartilhamento">
            <p>Quando um produto for adquirido para uso individual, o acesso é pessoal e intransferível.</p>
            <p>Compartilhar login, arquivos, aulas, links privados ou materiais pagos com terceiros pode gerar cancelamento de acesso, sem prejuízo de medidas legais cabíveis.</p>
          </Section>

          <Section title="7. Resultados e responsabilidade">
            <p>Conteúdos educacionais, estratégicos e comerciais têm finalidade informativa e de orientação. Resultados dependem de aplicação, contexto, mercado, consistência e decisões individuais.</p>
            <p>Não garantimos resultados financeiros, comerciais ou profissionais específicos.</p>
          </Section>

          <Section title="8. Links e ferramentas externas">
            <p>O site pode conter links para plataformas externas, como checkout, redes sociais, WhatsApp, comunidades, ferramentas de análise ou hospedagem de produtos.</p>
            <p>Não controlamos políticas, disponibilidade, segurança ou funcionamento de sites de terceiros.</p>
          </Section>

          <Section title="9. Alterações dos Termos">
            <p>Estes Termos podem ser atualizados a qualquer momento. A versão vigente será sempre publicada nesta página.</p>
          </Section>

          <Section title="10. Foro e legislação aplicável">
            <p>Estes Termos são regidos pelas leis brasileiras. Eventuais controvérsias deverão ser resolvidas preferencialmente de forma amigável pelos canais oficiais de contato.</p>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default TermosDeUso;
