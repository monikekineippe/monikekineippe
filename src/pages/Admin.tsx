import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Download, Eye, Search, Calendar, FileText } from "lucide-react";
import BlogAdmin from "@/components/admin/BlogAdmin";

interface FormSubmission {
  id: string;
  form_type: string;
  page_source: string;
  data: any;
  submitted_at: string;
  user_agent?: string | null;
  ip_address?: unknown;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase.rpc("is_admin", { _user_id: session.user.id });
        if (data) {
          setIsAuthenticated(true);
          fetchSubmissions();
        } else {
          await supabase.auth.signOut();
          toast({ title: "Acesso negado", description: "Você não é administradora.", variant: "destructive" });
        }
      }
      setIsCheckingAuth(false);
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        setIsAuthenticated(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      toast({ title: "Preencha e-mail e senha", variant: "destructive" });
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Erro ao entrar", description: error.message, variant: "destructive" });
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { data } = await supabase.rpc("is_admin", { _user_id: session.user.id });
      if (data) {
        setIsAuthenticated(true);
        fetchSubmissions();
      } else {
        await supabase.auth.signOut();
        toast({ title: "Acesso negado", description: "Você não é administradora.", variant: "destructive" });
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setSubmissions([]);
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("get_form_submissions");

      if (error) throw error;
      setSubmissions((data as FormSubmission[]) || []);
    } catch (error) {
      console.error("Erro ao buscar submissões:", error);
      toast({
        title: "Erro ao carregar dados",
        description: "Verifique sua conexão.",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  const exportToCSV = () => {
    const filteredData = getFilteredSubmissions();
    const csvContent = [
      ["Data", "Tipo", "Página", "Dados"],
      ...filteredData.map(sub => [
        new Date(sub.submitted_at).toLocaleString("pt-BR"),
        sub.form_type,
        sub.page_source,
        JSON.stringify(sub.data)
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  const getFilteredSubmissions = () => {
    return submissions.filter(sub => {
      const matchesSearch = searchTerm === "" || 
        JSON.stringify(sub.data).toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.form_type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === "all" || sub.form_type === selectedType;
      
      return matchesSearch && matchesType;
    });
  };

  const getFormTypes = () => {
    const types = Array.from(new Set(submissions.map(sub => sub.form_type)));
    return types;
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Verificando acesso...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Central Administrativo</CardTitle>
            <CardDescription>Faça login com sua conta de administradora</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Entrar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const filteredSubmissions = getFilteredSubmissions();
  const formTypes = getFormTypes();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Central Administrativo</h1>
            <p className="text-muted-foreground">
              Gerencie formulários e conteúdo do site
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>Sair</Button>
        </div>

        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-1">
              <FileText className="w-4 h-4" /> Blog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{submissions.length}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Lapidando Diamantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.form_type === "lapidando-diamantes").length}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Dona de $i</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.form_type === "dona-de-si-aplicacao").length}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Submissões de Formulários</CardTitle>
                    <CardDescription>
                      {filteredSubmissions.length} registros encontrados
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={fetchSubmissions}
                      disabled={loading}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {loading ? "Carregando..." : "Atualizar"}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={exportToCSV}
                      disabled={filteredSubmissions.length === 0}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Exportar CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Pesquisar por nome, email ou conteúdo..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-background"
                  >
                    <option value="all">Todos os formulários</option>
                    {formTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data/Hora</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Página</TableHead>
                        <TableHead>Dados do Lead</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubmissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">
                                {new Date(submission.submitted_at).toLocaleString("pt-BR")}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                              {submission.form_type}
                            </span>
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {submission.page_source}
                          </TableCell>
                          <TableCell>
                            <div className="max-w-xs">
                              {submission.data && (
                                <div className="space-y-1 text-sm">
                                  {Object.entries(submission.data).map(([key, value]) => (
                                    <div key={key} className="flex gap-2">
                                      <span className="font-semibold text-muted-foreground">
                                        {key}:
                                      </span>
                                      <span className="break-all">{String(value)}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      
                      {filteredSubmissions.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-8">
                            <div className="text-muted-foreground">
                              {loading ? "Carregando..." : "Nenhuma submissão encontrada"}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <BlogAdmin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;