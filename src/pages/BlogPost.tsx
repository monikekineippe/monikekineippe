import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  category: string;
  tags: string[];
  author: string;
  meta_title: string | null;
  meta_description: string | null;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (!error && data) setPost(data as BlogPostData);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  const formatDate = (date: string | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  };

  if (loading) {
    return (
      <Section>
        <div className="text-center py-20 text-muted-foreground">Carregando artigo...</div>
      </Section>
    );
  }

  if (!post) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="text-2xl font-serif mb-4">Artigo não encontrado</h1>
          <Button variant="heroOutline" asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </Section>
    );
  }

  const seoTitle = post.meta_title || post.title;
  const seoDescription = post.meta_description || post.excerpt || "";

  return (
    <>
      <Helmet>
        <title>{seoTitle} | Monike Kineippe</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        {post.cover_image_url && <meta property="og:image" content={post.cover_image_url} />}
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://monikekineippe.lovable.app/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: seoDescription,
            image: post.cover_image_url,
            author: { "@type": "Person", name: post.author },
            datePublished: post.published_at || post.created_at,
            publisher: { "@type": "Person", name: "Monike Kineippe" },
          })}
        </script>
      </Helmet>

      {/* Hero com imagem de capa */}
      {post.cover_image_url && (
        <div className="w-full h-64 md:h-96 overflow-hidden mt-16">
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <Section>
        <article className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatDate(post.published_at || post.created_at)}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none font-sans
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-secondary prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-blockquote:border-secondary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/5 rounded-lg text-center">
            <p className="font-serif text-xl mb-4">Quer saber como a IA pode transformar seu negócio?</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">Fale comigo</Link>
            </Button>
          </div>
        </article>
      </Section>
    </>
  );
};

export default BlogPost;
