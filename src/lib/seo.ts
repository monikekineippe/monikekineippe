// Constantes globais de SEO. Trocar SITE_URL quando o domínio próprio entrar.
export const SITE_URL = "https://monikekineippe.lovable.app";
export const SITE_NAME = "Monike Kineippe";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const absoluteUrl = (path: string = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
