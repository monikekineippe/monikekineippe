import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  /** Caminho da rota (ex: "/sobre"). Vira canonical absoluto. */
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  /** JSON-LD: pode ser um único schema ou um array. */
  schema?: object | object[];
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  schema,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = canonical ? absoluteUrl(canonical) : SITE_URL;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
