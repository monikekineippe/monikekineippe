// Biblioteca central de schemas JSON-LD. Use junto com <SEO schema={...} />.
import { SITE_URL, SITE_NAME, absoluteUrl } from "./seo";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Monike Kineippe",
  url: SITE_URL,
  jobTitle: "Estrategista de IA para Negócios Femininos",
  description:
    "Empresária há 18+ anos, autora e estrategista de IA aplicada a negócios femininos. Implementa automações, assistentes e fluxos inteligentes para empreendedoras.",
  sameAs: [
    "https://www.instagram.com/monikekineippe",
    "https://www.linkedin.com/in/monikekineippe",
  ],
  knowsAbout: [
    "Inteligência Artificial",
    "Automação de processos",
    "Vendas",
    "Empreendedorismo feminino",
    "Posicionamento digital",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  founder: { "@type": "Person", name: "Monike Kineippe" },
  description:
    "Consultoria, palestras, treinamentos e programas de implementação de IA para negócios femininos.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pt-BR",
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const service = (opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.url),
  serviceType: opts.serviceType,
  provider: { "@type": "Person", name: "Monike Kineippe" },
  areaServed: "BR",
});

export const course = (opts: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.url),
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    sameAs: SITE_URL,
  },
});

export const product = (opts: {
  name: string;
  description: string;
  url: string;
  brand?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.url),
  brand: { "@type": "Brand", name: opts.brand || SITE_NAME },
});

export const book = (opts: {
  name: string;
  author?: string;
  description?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: opts.name,
  author: { "@type": "Person", name: opts.author || "Monike Kineippe" },
  description: opts.description,
  url: absoluteUrl(opts.url),
  inLanguage: "pt-BR",
});

export const faqPage = (qa: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const article = (opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: opts.title,
  description: opts.description,
  image: opts.image,
  url: absoluteUrl(opts.url),
  datePublished: opts.datePublished,
  author: { "@type": "Person", name: opts.author || "Monike Kineippe" },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
});
