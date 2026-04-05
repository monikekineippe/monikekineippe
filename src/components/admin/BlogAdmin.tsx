import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Eye, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  category: string;
  tags: string[];
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  author: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

const emptyPost: Omit<BlogPost, "id" | "created_at" | "updated_at"> = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  cover_image_url: "",
  category: "Negócios Femininos",
  tags: [],
  published: false,
  meta_title: "",
  meta_description: "",
  author: "Monike Kineippe",
  published_at: null,
};

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data as BlogPost[]);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleNew = () => {
    setEditing({ ...emptyPost });
    setTagsInput("");
  };

  const handleEdit = (post: BlogPost) => {
    setEditing({ ...post });
    setTagsInput(post.tags?.join(", ") || "");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Erro ao excluir", variant: "destructive" });
    } else {
      toast({ title: "Artigo excluído" });
      fetchPosts();
    }
  };

  const handleSave = async () => {
    if (!editing?.title || !editing?.content) {
      toast({ title: "Preencha título e conteúdo", variant: "destructive" });
      return;
    }

    const slug = editing.slug || generateSlug(editing.title);
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const now = new Date().toISOString();

    const postData = {
      title: editing.title,
      slug,
      excerpt: editing.excerpt || null,
      content: editing.content,
      cover_image_url: editing.cover_image_url || null,
      category: editing.category || "Negócios Femininos",
      tags,
      published: editing.published || false,
      meta_title: editing.meta_title || null,
      meta_description: editing.meta_description || null,
      author: editing.author || "Monike Kineippe",
      updated_at: now,
      published_at: editing.published ? (editing.published_at || now) : null,
    };

    let error;
    if (editing.id) {
      ({ error } = await supabase.from("blog_posts").update(postData).eq("id", editing.id));
    } else {
      ({ error } = await supabase.from("blog_posts").insert(postData));
    }

    if (error) {
      toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editing.id ? "Artigo atualizado" : "Artigo criado" });
      setEditing(null);
      fetchPosts();
    }
  };

  // Editor view
  if (editing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => setEditing(null)}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
          </Button>
          <h2 className="text-xl font-bold">{editing.id ? "Editar Artigo" : "Novo Artigo"}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Label>Título *</Label>
              <Input
                value={editing.title || ""}
                onChange={(e) => setEditing({ ...editing, title: e.target.value, slug: generateSlug(e.target.value) })}
                placeholder="Título do artigo"
              />
            </div>

            <div>
              <Label>Slug (URL)</Label>
              <Input
                value={editing.slug || ""}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                placeholder="slug-do-artigo"
              />
            </div>

            <div>
              <Label>Resumo</Label>
              <Textarea
                value={editing.excerpt || ""}
                onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                placeholder="Breve descrição do artigo para listagem..."
                rows={3}
              />
            </div>

            <div>
              <Label>Conteúdo * (HTML)</Label>
              <Textarea
                value={editing.content || ""}
                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                placeholder="<p>Conteúdo do artigo em HTML...</p>"
                rows={20}
                className="font-mono text-sm"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Publicação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={editing.published || false}
                    onCheckedChange={(checked) => setEditing({ ...editing, published: checked })}
                  />
                  <Label>{editing.published ? "Publicado" : "Rascunho"}</Label>
                </div>
                <Button onClick={handleSave} className="w-full">
                  {editing.id ? "Atualizar" : "Criar Artigo"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Detalhes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label>Categoria</Label>
                  <Input
                    value={editing.category || ""}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    placeholder="Ex: IA Aplicada"
                  />
                </div>
                <div>
                  <Label>Tags (separadas por vírgula)</Label>
                  <Input
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="ia, negócios, estratégia"
                  />
                </div>
                <div>
                  <Label>Autora</Label>
                  <Input
                    value={editing.author || ""}
                    onChange={(e) => setEditing({ ...editing, author: e.target.value })}
                  />
                </div>
                <div>
                  <Label>URL da imagem de capa</Label>
                  <Input
                    value={editing.cover_image_url || ""}
                    onChange={(e) => setEditing({ ...editing, cover_image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label>Meta Title</Label>
                  <Input
                    value={editing.meta_title || ""}
                    onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })}
                    placeholder="Título para o Google (max 60 chars)"
                    maxLength={60}
                  />
                </div>
                <div>
                  <Label>Meta Description</Label>
                  <Textarea
                    value={editing.meta_description || ""}
                    onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })}
                    placeholder="Descrição para o Google (max 160 chars)"
                    maxLength={160}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Artigos do Blog</h2>
        <Button onClick={handleNew}>
          <Plus className="w-4 h-4 mr-1" /> Novo Artigo
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "Publicado" : "Rascunho"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(post.created_at).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      {post.published && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(post)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {posts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    {loading ? "Carregando..." : "Nenhum artigo criado ainda"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogAdmin;
