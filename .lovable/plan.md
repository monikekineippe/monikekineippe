# Plano de SEO — Monike Kineippe

Plano em 3 fases, alinhado ao briefing técnico anexado. Stack atual: React + Vite + react-router-dom (já com `react-helmet-async` e `HelmetProvider` instalados em `App.tsx`). Domínio canônico: `https://monikekineippe.lovable.app` (atualizar para `monikekineippe.com.br` quando o domínio próprio for ligado).

---

## FASE 1 — Fundação técnica (semanas 1–2)

Sem isso, todo o resto trabalha contra o site.

1. **Componente `<SEO />` reutilizável** em `src/components/SEO.tsx`
   - Props: `title`, `description`, `canonical`, `ogImage`, `ogType`, `schema`.
   - Centraliza `<title>`, `meta description`, `canonical`, Open Graph, Twitter Card e JSON-LD por rota.
   - Remover o `<link rel="canonical">` estático do `index.html` (cada rota passa a ter o seu).

2. **Biblioteca de schemas** em `src/lib/schemas.ts`
   - `personSchema` (Monike), `organizationSchema`, `breadcrumb(items)`, `book(...)`, `course(...)`, `product(...)`, `faqPage(qa[])`, `event(...)` para palestras.

3. **Aplicação por página** (cada `pages/*.tsx` recebe `<SEO ... />` no topo):
   - `/` → Person + Organization
   - `/sobre` → Person + Breadcrumb
   - `/ia-humanizada` → Course/Service + Breadcrumb
   - `/corujah` → Product + Breadcrumb
   - `/dona-de-si` → Service + Breadcrumb
   - `/mentorias`, `/venda-sem-vender`, `/empresaria-40` → Service + Breadcrumb
   - `/palestras` → Service + Event(s)
   - `/treinamentos` → Course + Breadcrumb
   - `/livros` → Book + Breadcrumb
   - `/blog` e `/blog/:slug` → Article + Breadcrumb (+ FAQPage quando aplicável)
   - `/diagnostico`, `/contato` → Webpage + Breadcrumb
   - `/admin` → `noindex`

4. **Sitemap automático** via `scripts/generate-sitemap.ts` com hooks `predev`/`prebuild` em `package.json`. Inclui rotas estáticas + posts do blog (consulta a tabela `blog_posts` published).

5. **`public/robots.txt`** mantido permitindo tudo, com `Disallow: /admin` e diretiva `Sitemap:` apontando para `/sitemap.xml`.

6. **Imagens & Core Web Vitals**
   - Adicionar `width`/`height` e `loading="lazy"` (exceto LCP/hero) em todas as `<img>`.
   - Conversão das principais para `.webp` em `src/assets/`.
   - Manter `preconnect` para Google Fonts (já está) e `font-display: swap`.

7. **Mensuração** (manual pelo usuário, eu deixo o GA4 plugado quando ela enviar o ID)
   - Google Search Console (verificar via DNS).
   - Google Analytics 4 (snippet no `index.html`).

---

## FASE 2 — Página pilar e brand SEO (semanas 3–4)

1. **Mapa de meta tags** aplicado em cada rota (Title ≤60, Description ≤160), com a palavra-chave principal por página — usando o mapa do briefing.
2. **Hierarquia H1–H3** revisada: 1 H1 por página, com keyword.
3. **Padrão de ALT** em todas as imagens da Monike e logos.
4. **URLs amigáveis** — auditar e padronizar (já estão boas).
5. **Internal linking pilar-cluster**: `/ia-humanizada` como pilar, recebendo links de `/corujah`, `/dona-de-si`, `/mentorias`, `/diagnostico` e dos artigos de blog. Texto âncora descritivo.

---

## FASE 3 — Conteúdo e ampliação (mês 2+)

1. Blog com função comercial: pillar content trimestral + clusters mensais + CTAs claras para `/diagnostico`.
2. `FAQPage` schema nos artigos com perguntas reais.
3. Repurposing sistemático para Substack/coluna.

---

## Detalhes técnicos para implementação

- **Stack**: Vite + react-router-dom + `react-helmet-async` (já instalado, `HelmetProvider` ativo em `App.tsx`).
- **Novos arquivos**: `src/components/SEO.tsx`, `src/lib/schemas.ts`, `scripts/generate-sitemap.ts`.
- **Edição em massa**: cada página em `src/pages/` recebe `<SEO />` no topo do JSX retornado.
- **Limpeza**: remover canonical estático e duplicações em `index.html`.
- **Sitemap dinâmico**: usar Supabase client em Node (`@supabase/supabase-js`) para listar `blog_posts` publicados; fallback estático em caso de erro.
- **Domínio**: usar `https://monikekineippe.lovable.app` por enquanto. Quando o domínio próprio entrar, trocar a constante `SITE_URL` em `schemas.ts`, `SEO.tsx` e `generate-sitemap.ts`.
- **Validação**: Rich Results Test, PageSpeed Insights (alvo ≥85 mobile), Search Console pós-deploy.

---

## Estimativa de execução

- **Fase 1**: 1 ciclo grande (componente SEO + schemas + sitemap + robots + aplicação em todas as ~18 páginas + GA4 placeholder).
- **Fase 2**: 1 ciclo médio (revisão de H1, ALT, internal links).
- **Fase 3**: contínuo, conforme produção de conteúdo.

Posso começar pela **Fase 1 inteira em uma única entrega**. Confirma que sigo?
