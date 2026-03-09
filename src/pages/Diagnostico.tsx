import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

const diagnosticoSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20, "WhatsApp muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  ehMae: z.enum(["sim", "nao"], { required_error: "Selecione uma opção" }),
  temClientes: z.enum(["frequente", "as-vezes", "ainda-nao"], { required_error: "Selecione uma opção" }),
  oQueVende: z.string().trim().min(10, "Descreva em pelo menos 10 caracteres").max(200, "Muito longo"),
  ticketMedio: z.enum(["ate-200", "200-500", "500-1000", "1000-3000", "3000+"], { required_error: "Selecione uma opção" }),
  faturamento: z.enum(["0-1k", "1-3k", "3-6k", "6-10k", "10k+"], { required_error: "Selecione uma opção" }),
  comoChegam: z.array(z.string()).min(1, "Selecione pelo menos uma opção"),
  gargalo: z.enum([
    "oferta-confusa",
    "posicionamento", 
    "vendas",
    "tempo-execucao",
    "bastidor-automacao"
  ], { required_error: "Selecione uma opção" }),
  tempoSemanal: z.enum(["0-1h", "2-3h", "4-6h", "7h+"], { required_error: "Selecione uma opção" }),
  temOferta: z.enum(["sim", "mais-ou-menos", "nao"], { required_error: "Selecione uma opção" }),
  energia: z.array(z.number()).length(1),
  objetivo: z.enum(["destravar", "sistema-completo"], { required_error: "Selecione uma opção" })
});

type DiagnosticoData = z.infer<typeof diagnosticoSchema>;

const Diagnostico = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<DiagnosticoData | null>(null);

  const form = useForm<DiagnosticoData>({
    resolver: zodResolver(diagnosticoSchema),
    defaultValues: {
      energia: [5],
      comoChegam: []
    }
  });

  const onSubmit = (data: DiagnosticoData) => {
    setResultData(data);
    setShowResult(true);
  };

  const nextStep = async () => {
    const currentFields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(currentFields);
    
    if (isValid && currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (isValid && currentStep === 2) {
      form.handleSubmit(onSubmit)();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof DiagnosticoData)[] => {
    switch (step) {
      case 0:
        return ["nome", "whatsapp", "email", "ehMae", "temClientes"];
      case 1:
        return ["oQueVende", "ticketMedio", "faturamento", "comoChegam"];
      case 2:
        return ["gargalo", "tempoSemanal", "temOferta", "energia", "objetivo"];
      default:
        return [];
    }
  };

  const getRecommendation = (data: DiagnosticoData) => {
    const faturamento = data.faturamento;
    const temClientes = data.temClientes;
    const energia = data.energia[0];
    const tempo = data.tempoSemanal;
    const temOferta = data.temOferta;
    const gargalo = data.gargalo;
    const ticketMedio = data.ticketMedio;

    // Rota 1 - PRAIA
    if (
      ["0-1k", "1-3k"].includes(faturamento) ||
      temClientes === "ainda-nao" ||
      energia <= 5 ||
      ["0-1h", "2-3h"].includes(tempo) ||
      temOferta === "nao"
    ) {
      return "praia";
    }

    // Rota 4 - Implementação
    if (
      gargalo === "bastidor-automacao" &&
      (faturamento === "10k+" || ["1000-3000", "3000+"].includes(ticketMedio))
    ) {
      return "implementacao";
    }

    // Rota 3 - CoruJah
    if (gargalo === "tempo-execucao" && temOferta === "mais-ou-menos") {
      return "corujah";
    }

    // Rota 2 - Mentoria (padrão)
    if (
      ["as-vezes", "frequente"].includes(temClientes) &&
      (["3-6k", "6-10k", "10k+"].includes(faturamento) || ["500-1000", "1000-3000", "3000+"].includes(ticketMedio)) &&
      energia >= 6 &&
      ["4-6h", "7h+"].includes(tempo) &&
      ["oferta-confusa", "posicionamento", "vendas"].includes(gargalo)
    ) {
      return "mentoria";
    }

    return "mentoria"; // default
  };

  const getGargaloText = (gargalo: string) => {
    const gargalos = {
      "oferta-confusa": "oferta confusa",
      "posicionamento": "posicionamento", 
      "vendas": "processos de venda",
      "tempo-execucao": "falta de tempo/execução",
      "bastidor-automacao": "automação e bastidores"
    };
    return gargalos[gargalo as keyof typeof gargalos] || gargalo;
  };

  if (showResult && resultData) {
    const recommendation = getRecommendation(resultData);
    const gargaloText = getGargaloText(resultData.gargalo);

    return (
      <>
        <PageHero
          tag="Resultado"
          title="Seu Diagnóstico Está Pronto"
          subtitle="Descubra qual é seu próximo passo para destravar o dinheiro no digital"
        />

        <Section>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-center">
                  {resultData.nome}, seu Raio-X ALMA está pronto. 💎
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg mb-6 text-muted-foreground">
                  <strong>Síntese:</strong> pelo que você respondeu, seu dinheiro está travado principalmente por <strong>{gargaloText}</strong>.
                </p>
                
                <div className="bg-accent p-6 rounded-lg mb-6">
                  <h3 className="font-serif text-lg mb-3">Seu primeiro resultado em 7 dias:</h3>
                  <p className="text-sm">
                    ✅ Fazer 10 convites com um script pronto e buscar {resultData.ticketMedio === "ate-200" ? "1-3 clientes" : "1 venda"}.
                  </p>
                </div>

                {recommendation === "praia" && (
                  <Card className="border-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">
                        Seu próximo passo recomendado: Chega de Nadar e Morrer na Praia (21 dias)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Um plano leve (1 passo por semana) pra você sair do caos e colocar dinheiro em movimento.
                      </p>
                      <Button variant="hero" size="lg" asChild className="w-full">
                        <a href="https://payfast.greenn.com.br/redirect/260462" target="_blank" rel="noopener noreferrer">
                          Entrar no Chega de Nadar (R$47)
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {recommendation === "mentoria" && (
                  <Card className="border-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">
                        Seu próximo passo recomendado: Mentoria em Grupo Lapidando Diamantes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Porque você não precisa de mais conteúdo: precisa de arquitetura completa (posicionamento + oferta + processo + rotina) com cadência e feedback.
                      </p>
                      <p className="text-sm font-semibold mb-4">
                        📅 Início 20/03 • 10 vagas • R$ 1.997
                      </p>
                      <Button variant="hero" size="lg" asChild className="w-full">
                        <a href="https://monikekineippe.lovable.app/lapidando-diamantes" target="_blank" rel="noopener noreferrer">
                          Aplicar para uma vaga
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {recommendation === "corujah" && (
                  <Card className="border-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">
                        Seu próximo passo recomendado: CoruJah
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Porque o que te trava agora é execução e consistência. Você precisa de um braço operacional.
                      </p>
                      <Button variant="hero" size="lg" asChild className="w-full">
                        <a href="https://payfast.greenn.com.br/redirect/212761" target="_blank" rel="noopener noreferrer">
                          Acessar CoruJah
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {recommendation === "implementacao" && (
                  <Card className="border-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">
                        Seu próximo passo recomendado: Implementação IA/Automações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Porque seu gargalo é bastidor: atendimento, processos e automação.
                      </p>
                      <Button variant="hero" size="lg" asChild className="w-full">
                        <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer">
                          Falar no WhatsApp / Ver detalhes
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="outline" onClick={() => {
                setShowResult(false);
                setCurrentStep(0);
                form.reset();
              }}>
                Fazer novo diagnóstico
              </Button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero
        tag="Gratuito"
        title="Diagnóstico de Previsibilidade"
        subtitle="Em 3 minutos, descubra o que está travando seu dinheiro no digital — e qual é seu próximo passo."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-6">
              <strong>Para quem:</strong> Mães prestadoras de serviço que já têm valor (e muitas vezes clientes), mas ainda não têm um sistema no digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-serif text-lg mb-2">Raio-X ALMA</h3>
                <p className="text-sm text-muted-foreground">Análise completa do seu negócio</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg mb-2">7 dias de ação</h3>
                <p className="text-sm text-muted-foreground">Plano prático para movimento</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg mb-2">Próximo degrau</h3>
                <p className="text-sm text-muted-foreground">Recomendação personalizada</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-serif">
                  {currentStep === 0 && "Etapa 1 — Você"}
                  {currentStep === 1 && "Etapa 2 — Negócio e dinheiro"}
                  {currentStep === 2 && "Etapa 3 — Gargalo + execução"}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {currentStep + 1}/3
                </span>
              </div>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form className="space-y-6">
                  
                  {/* Etapa 1 - Você */}
                  {currentStep === 0 && (
                    <>
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(11) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ehMae"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Você é mãe?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="flex gap-6"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="sim" id="mae-sim" />
                                  <Label htmlFor="mae-sim">Sim</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="nao" id="mae-nao" />
                                  <Label htmlFor="mae-nao">Não</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="temClientes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Você já tem clientes pagantes?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="frequente" id="clientes-frequente" />
                                  <Label htmlFor="clientes-frequente">Sim, com frequência</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="as-vezes" id="clientes-as-vezes" />
                                  <Label htmlFor="clientes-as-vezes">Sim, às vezes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="ainda-nao" id="clientes-ainda-nao" />
                                  <Label htmlFor="clientes-ainda-nao">Ainda não</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Etapa 2 - Negócio e dinheiro */}
                  {currentStep === 1 && (
                    <>
                      <FormField
                        control={form.control}
                        name="oQueVende"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>O que você vende? (1 frase)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Descreva o que você vende em uma frase..."
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ticketMedio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ticket médio hoje:</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="ate-200" id="ticket-ate-200" />
                                  <Label htmlFor="ticket-ate-200">até R$ 200</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="200-500" id="ticket-200-500" />
                                  <Label htmlFor="ticket-200-500">R$ 200–500</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="500-1000" id="ticket-500-1000" />
                                  <Label htmlFor="ticket-500-1000">R$ 500–1.000</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="1000-3000" id="ticket-1000-3000" />
                                  <Label htmlFor="ticket-1000-3000">R$ 1.000–3.000</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="3000+" id="ticket-3000+" />
                                  <Label htmlFor="ticket-3000+">R$ 3.000+</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="faturamento"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Faturamento médio últimos 30 dias:</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="0-1k" id="fat-0-1k" />
                                  <Label htmlFor="fat-0-1k">R$ 0–1k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="1-3k" id="fat-1-3k" />
                                  <Label htmlFor="fat-1-3k">R$ 1–3k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="3-6k" id="fat-3-6k" />
                                  <Label htmlFor="fat-3-6k">R$ 3–6k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="6-10k" id="fat-6-10k" />
                                  <Label htmlFor="fat-6-10k">R$ 6–10k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="10k+" id="fat-10k+" />
                                  <Label htmlFor="fat-10k+">R$ 10k+</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="comoChegam"
                        render={() => (
                          <FormItem>
                            <FormLabel>Como seus clientes chegam hoje? (pode marcar mais de uma)</FormLabel>
                            <div className="space-y-3">
                              {[
                                { id: "indicacao", label: "Indicação/off-line" },
                                { id: "instagram", label: "Instagram" },
                                { id: "whatsapp", label: "WhatsApp" },
                                { id: "trafego", label: "Tráfego" },
                                { id: "outro", label: "Outro" }
                              ].map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="comoChegam"
                                  render={({ field }) => {
                                    return (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, item.id])
                                                : field.onChange(field.value?.filter((value) => value !== item.id))
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Etapa 3 - Gargalo + execução */}
                  {currentStep === 2 && (
                    <>
                      <FormField
                        control={form.control}
                        name="gargalo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu maior gargalo agora é:</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="oferta-confusa" id="gargalo-oferta" />
                                  <Label htmlFor="gargalo-oferta">Oferta confusa (não sei o que vender)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="posicionamento" id="gargalo-posicionamento" />
                                  <Label htmlFor="gargalo-posicionamento">Posicionamento (ninguém entende)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="vendas" id="gargalo-vendas" />
                                  <Label htmlFor="gargalo-vendas">Vendas (conversas não fecham)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="tempo-execucao" id="gargalo-tempo" />
                                  <Label htmlFor="gargalo-tempo">Tempo/execução (não sustento)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="bastidor-automacao" id="gargalo-bastidor" />
                                  <Label htmlFor="gargalo-bastidor">Bastidor/automação (atendimento vira caos)</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tempoSemanal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tempo real por semana pro negócio (além do atendimento):</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="0-1h" id="tempo-0-1h" />
                                  <Label htmlFor="tempo-0-1h">0–1h</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="2-3h" id="tempo-2-3h" />
                                  <Label htmlFor="tempo-2-3h">2–3h</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="4-6h" id="tempo-4-6h" />
                                  <Label htmlFor="tempo-4-6h">4–6h</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="7h+" id="tempo-7h+" />
                                  <Label htmlFor="tempo-7h+">7h+</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="temOferta"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Você tem uma oferta em 1 frase hoje?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="flex gap-6"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="sim" id="oferta-sim" />
                                  <Label htmlFor="oferta-sim">Sim</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="mais-ou-menos" id="oferta-mais-ou-menos" />
                                  <Label htmlFor="oferta-mais-ou-menos">Mais ou menos</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="nao" id="oferta-nao" />
                                  <Label htmlFor="oferta-nao">Não</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="energia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Energia essa semana (0–10):</FormLabel>
                            <FormControl>
                              <div className="px-3">
                                <Slider
                                  min={0}
                                  max={10}
                                  step={1}
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  className="w-full"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                  <span>0</span>
                                  <span className="font-medium">Atual: {field.value[0]}</span>
                                  <span>10</span>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="objetivo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>O que você quer agora?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="destravar" id="objetivo-destravar" />
                                  <Label htmlFor="objetivo-destravar">Destravar e colocar dinheiro em movimento</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="sistema-completo" id="objetivo-sistema" />
                                  <Label htmlFor="objetivo-sistema">Sistema completo (previsibilidade)</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  <div className="flex justify-between pt-6">
                    {currentStep > 0 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Voltar
                      </Button>
                    )}
                    <div className="ml-auto">
                      <Button type="button" onClick={nextStep} variant="hero" size="lg">
                        {currentStep === 2 ? "Ver meu diagnóstico" : "Próxima etapa"}
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Diagnostico;