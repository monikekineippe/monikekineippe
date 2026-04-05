import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string;
  tags: string[];
  author: string;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image_url, category, tags, author, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const categories = ["all", ...Array.from(new Set(posts.map((p) => p.category)))];
  const filtered = selectedCategory === "all" ? posts : posts.filter((p) => p.category === selectedCategory);

  const formatDate = (date: string | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  };

  return (
    <>
      <PageHero
        tag="Blog"
        title="Blog"
        subtitle="Artigos sobre negócios femininos, IA aplicada e estratégia para empreendedoras."
      />

      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-sans tracking-wide transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat === "all" ? "Todos" : cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-16 text-muted-foreground">Carregando artigos...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">Nenhum artigo publicado ainda.</p>
              <p className="text-muted-foreground mt-2">Em breve novos conteúdos por aqui!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <Card className="h-full gold-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {post.cover_image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs font-sans">
                          {post.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.published_at || post.created_at)}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      {post.excerpt && (
                        <p className="text-base text-muted-foreground font-sans leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm font-sans text-secondary group-hover:gap-2 transition-all">
                        Ler artigo <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Blog;
