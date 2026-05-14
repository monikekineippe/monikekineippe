// Roda antes de `vite dev` e `vite build` (predev/prebuild). Escreve public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://monikekineippe.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.8" },
  { path: "/ia-humanizada", changefreq: "weekly", priority: "0.9" },
  { path: "/corujah", changefreq: "monthly", priority: "0.8" },
  { path: "/dona-de-si", changefreq: "monthly", priority: "0.8" },
  { path: "/mentorias", changefreq: "monthly", priority: "0.8" },
  { path: "/venda-sem-vender", changefreq: "monthly", priority: "0.8" },
  { path: "/empresaria-40", changefreq: "monthly", priority: "0.8" },
  { path: "/palestras", changefreq: "monthly", priority: "0.7" },
  { path: "/treinamentos", changefreq: "monthly", priority: "0.7" },
  { path: "/livros", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/diagnostico", changefreq: "monthly", priority: "0.7" },
  { path: "/contato", changefreq: "yearly", priority: "0.5" },
];

async function fetchBlogEntries(): Promise<SitemapEntry[]> {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const key =
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return [];
  try {
    const supabase = createClient(url, key);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("published", true);
    if (error || !data) return [];
    return data.map((p: { slug: string; updated_at: string }) => ({
      path: `/blog/${p.slug}`,
      lastmod: p.updated_at?.slice(0, 10),
      changefreq: "monthly" as const,
      priority: "0.6",
    }));
  } catch {
    return [];
  }
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const blog = await fetchBlogEntries();
  const all = [...staticEntries, ...blog];
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(all));
  console.log(
    `sitemap.xml written (${all.length} entries — ${staticEntries.length} static + ${blog.length} blog)`,
  );
})();
