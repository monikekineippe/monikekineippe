import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfrHybNG4ArAMsp0goPl8qBWhv871v1cNNTiTRwJkH2vSwp8ryxAUkLdd_J50SHaJw/exec";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  oQueVende: z.string().trim().min(10, "Descreva em pelo menos 10 caracteres").max(200, "Muito longo"),
  tempoEmpreendendo: z.enum(["menos-1", "1-3", "3-5", "mais-5"], { required_error: "Selecione uma opção" }),
  temClientes: z.enum(["frequente", "as-vezes", "ainda-nao"], { required_error: "Selecione uma opção" }),
  faturamento: z.enum(["0-1k", "1-3k", "3-6k", "6-10k", "10k+"], { required_error: "Selecione uma opção" }),
  ticketMedio: z.enum(["ate-200", "200-500", "500-1000", "1000-3000", "3000+"], { required_error: "Selecione uma opção" }),
  temOferta: z.enum(["sim", "mais-ou-menos", "nao"], { required_error: "Selecione uma opção" }),
  comoChegam: z.array(z.string()).min(1, "Selecione pelo menos uma opção"),
  usaIA: z.enum(["nunca", "tentei", "basico", "estrategico"], { required_error: "Selecione uma opção" }),
  consomeTempo: z.enum(["atendimento", "conteudo", "processos", "vendas", "tudo"], { required_error: "Selecione uma opção" }),
  fraseRepresenta: z.enum(["estrutura-primeiro", "manual-demais", "escalar", "implementar-ia"], { required_error: "Selecione uma opção" }),
  objetivo90dias: z.enum(["organizar", "automatizar", "produto-digital", "escalar"], { required_error: "Selecione uma opção" }),
});

type DiagnosticoData = z.infer<typeof diagnosticoSchema>;

const Diagnostico = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<DiagnosticoData | null>(null);

  const form = useForm<DiagnosticoData>({
    resolver: zodResolver(diagnosticoSchema),
    defaultValues: { comoChegam: [] },
  });

  const onSubmit = async (data: DiagnosticoData) => {
    setResultData(data);
    setShowResult(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_type: "diagnostico-ia", ...data }) });
    } catch (err) { console.error("Erro planilha:", err); }
    try {
      await supabase.rpc("insert_form_submission", { p_form_type: "diagnostico-ia", p_page_source: "/diagnostico", p_data: data as any, p_user_agent: navigator.userAgent });
    } catch (err) { console.error("Erro banco:", err); }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields);
    if (isValid && currentStep < 2) setCurrentStep(currentStep + 1);
    else if (isValid && currentStep === 2) form.handleSubmit(onSubmit)();
  };

  const prevStep = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };

  const getFieldsForStep = (step: number): (keyof DiagnosticoData)[] => {
    if (step === 0) return ["nome", "whatsapp", "email", "oQueVende", "tempoEmpreendendo", "temClientes"];
    if (step === 1) return ["faturamento", "ticketMedio", "temOferta", "comoChegam"];
    return ["usaIA", "consomeTempo", "fraseRepresenta", "objetivo90dias"];
  };

  const getRecommendation = (data: DiagnosticoData) => {
    const { faturamento, temClientes, temOferta, usaIA, consomeTempo, fraseRepresenta, objetivo90dias, ticketMedio } = data;
    if (["0-1k", "1-3k"].includes(faturamento) || temClientes === "ainda-nao" || temOferta === "nao" || fraseRepresenta === "estrutura-primeiro" || objetivo90dias === "organizar") return "estrutura";
    if ((["6-10k", "10k+"].includes(faturamento) || ["1000-3000", "3000+"].includes(ticketMedio)) && ["basico", "estrategico"].includes(usaIA) && fraseRepresenta === "escalar" && objetivo90dias === "escalar") return "escala";
    if (objetivo90dias === "produto-digital" || (consomeTempo === "conteudo" && temOferta === "mais-ou-menos")) return "corujah";
    if (["3-6k", "6-10k", "10k+"].includes(faturamento) && (["atendimento", "processos", "tudo"].includes(consomeTempo) || fraseRepresenta === "manual-demais" || fraseRepresenta === "implementar-ia" || objetivo90dias === "automatizar")) return "implementacao";
    return "implementacao";
  };

  if (showResult && resultData) {
    const rec = getRecommendation(resultData);
    return (
      <>
        <PageHero tag="Resultado" title="Seu Diagnóstico Está Pronto" subtitle={`${resultData.nome}, aqui está a leitura do seu momento — e o próximo passo mais inteligente.`} />
        <Section>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground mb-2 text-sm font-sans">Com base nas suas respostas, seu nível de uso de IA é:</p>
                <p className="text-center font-serif text-xl mb-2">
                  {resultData.usaIA === "nunca" && "Ainda não começou — e tudo bem."}
                  {resultData.usaIA === "tentei" && "Já tentou, mas faltou método."}
                  {resultData.usaIA === "basico" && "Usa de forma básica — há espaço para avançar."}
                  {resultData.usaIA === "estrategico" && "Já usa com estratégia — hora de escalar."}
                </p>
              </CardContent>
            </Card>

            {rec === "estrutura" && (
              <Card className="gold-border">
                <CardHeader><CardTitle className="text-xl font-serif text-center">Seu negócio precisa de estrutura antes de tecnologia.</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm text-muted-foreground font-sans">Não adianta automatizar o caos. O primeiro passo é organizar sua oferta, seu posicionamento e seu sistema de vendas. Depois a IA entra para acelerar.</p>
                  <div className="pt-4 space-y-3">
                    <Button variant="hero" size="lg" className="w-full" asChild><Link to="/dona-de-si">Conhecer a Mentoria Dona de $i</Link></Button>
                    <Button variant="heroOutline" size="lg" className="w-full" asChild><Link to="/empresaria-40">Conhecer a Comunidade Empresária 4.0</Link></Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {rec === "corujah" && (
              <Card className="gold-border">
                <CardHeader><CardTitle className="text-xl font-serif text-center">Você tem conhecimento. Falta transformar em produto.</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm text-muted-foreground font-sans">A CoruJah é uma IA estratégica que pega seu conhecimento e transforma em produto digital estruturado — com nome, módulos, preço, copy e criativos. Em 20 minutos.</p>
                  <div className="pt-4"><Button variant="hero" size="lg" className="w-full" asChild><Link to="/corujah">Conhecer a CoruJah IA</Link></Button></div>
                </CardContent>
              </Card>
            )}

            {rec === "implementacao" && (
              <Card className="gold-border">
                <CardHeader><CardTitle className="text-xl font-serif text-center">Seu negócio funciona — mas está te consumindo.</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm text-muted-foreground font-sans">Você não precisa de mais conteúdo nem de mais estratégia. Precisa que alguém organize seus processos e implemente automações inteligentes. Em 45 dias, sua operação respira.</p>
                  <div className="pt-4">
                    <a href="https://wa.me/5511972313181?text=Oi%20Carine%2C%20fiz%20o%20diagnostico%20e%20quero%20saber%20mais%20sobre%20o%20programa%20IA%20com%20Alma" target="_blank" rel="noopener noreferrer" className="block w-full text-center h-12 leading-[3rem] rounded-md bg-primary text-primary-foreground font-sans tracking-wide uppercase text-xs hover:bg-primary/90 transition-all duration-300">Quero saber mais sobre IA com Alma</a>
                    <Button variant="heroOutline" size="lg" className="w-full mt-3" asChild><Link to="/ia-humanizada">Ver detalhes do programa</Link></Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {rec === "escala" && (
              <Card className="gold-border">
                <CardHeader><CardTitle className="text-xl font-serif text-center">Você está pronta para escalar — falta a máquina.</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm text-muted-foreground font-sans">Seu negócio já tem resultado. Agora precisa de uma estrutura de vendas previsível, posicionamento premium e IA estratégica trabalhando por você. Em 3 meses, sua máquina roda.</p>
                  <div className="pt-4">
                    <a href="https://wa.me/5511972313181?text=Oi%20Carine%2C%20fiz%20o%20diagnostico%20e%20quero%20saber%20mais%20sobre%20o%20Sistema%20de%20Escala" target="_blank" rel="noopener noreferrer" className="block w-full text-center h-12 leading-[3rem] rounded-md bg-primary text-primary-foreground font-sans tracking-wide uppercase text-xs hover:bg-primary/90 transition-all duration-300">Quero saber mais sobre o Sistema de Escala</a>
                    <Button variant="heroOutline" size="lg" className="w-full mt-3" asChild><Link to="/ia-humanizada">Ver detalhes do programa</Link></Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-center mt-8"><Button variant="outline" onClick={() => { setShowResult(false); setCurrentStep(0); form.reset(); }}>Fazer novo diagnóstico</Button></div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero tag="Gratuito" title="Onde a IA pode destravar seu negócio" subtitle="Em 3 minutos, descubra qual automação ou estratégia com IA faz sentido para o seu momento — e qual é o próximo passo." />
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-6 text-sm font-sans"><strong>Para quem:</strong> Empreendedoras e prestadoras de serviço que sentem que fazem tudo sozinhas e querem entender como inteligência artificial pode ajudar na prática.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center"><h3 className="font-serif text-lg mb-2">Leitura do momento</h3><p className="text-sm text-muted-foreground">Onde seu negócio está agora</p></div>
              <div className="text-center"><h3 className="font-serif text-lg mb-2">Maturidade em IA</h3><p className="text-sm text-muted-foreground">Seu nível de uso de tecnologia</p></div>
              <div className="text-center"><h3 className="font-serif text-lg mb-2">Próximo passo</h3><p className="text-sm text-muted-foreground">Recomendação personalizada</p></div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-serif">
                  {currentStep === 0 && "Etapa 1 — Você e seu negócio"}
                  {currentStep === 1 && "Etapa 2 — Dinheiro e estrutura"}
                  {currentStep === 2 && "Etapa 3 — Tecnologia, gargalo e objetivo"}
                </CardTitle>
                <span className="text-sm text-muted-foreground">{currentStep + 1}/3</span>
              </div>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form className="space-y-6">

                  {currentStep === 0 && (<>
                    <FormField control={form.control} name="nome" render={({ field }) => (<FormItem><FormLabel>Nome</FormLabel><FormControl><Input placeholder="Seu nome" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="whatsapp" render={({ field }) => (<FormItem><FormLabel>WhatsApp</FormLabel><FormControl><Input placeholder="(11) 99999-9999" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>E-mail</FormLabel><FormControl><Input type="email" placeholder="seu@email.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="oQueVende" render={({ field }) => (<FormItem><FormLabel>O que você vende? (1 frase)</FormLabel><FormControl><Textarea placeholder="Descreva o que você vende em uma frase..." className="min-h-[80px]" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="tempoEmpreendendo" render={({ field }) => (<FormItem><FormLabel>Há quanto tempo você empreende?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"menos-1",label:"Menos de 1 ano"},{value:"1-3",label:"1 a 3 anos"},{value:"3-5",label:"3 a 5 anos"},{value:"mais-5",label:"Mais de 5 anos"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`te-${o.value}`}/><Label htmlFor={`te-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="temClientes" render={({ field }) => (<FormItem><FormLabel>Você já tem clientes pagantes?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"frequente",label:"Sim, com frequência"},{value:"as-vezes",label:"Sim, às vezes"},{value:"ainda-nao",label:"Ainda não"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`cl-${o.value}`}/><Label htmlFor={`cl-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                  </>)}

                  {currentStep === 1 && (<>
                    <FormField control={form.control} name="faturamento" render={({ field }) => (<FormItem><FormLabel>Faturamento médio nos últimos 30 dias:</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"0-1k",label:"R$ 0–1k"},{value:"1-3k",label:"R$ 1–3k"},{value:"3-6k",label:"R$ 3–6k"},{value:"6-10k",label:"R$ 6–10k"},{value:"10k+",label:"R$ 10k+"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`fat-${o.value}`}/><Label htmlFor={`fat-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="ticketMedio" render={({ field }) => (<FormItem><FormLabel>Ticket médio hoje:</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"ate-200",label:"Até R$ 200"},{value:"200-500",label:"R$ 200–500"},{value:"500-1000",label:"R$ 500–1.000"},{value:"1000-3000",label:"R$ 1.000–3.000"},{value:"3000+",label:"R$ 3.000+"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`tk-${o.value}`}/><Label htmlFor={`tk-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="temOferta" render={({ field }) => (<FormItem><FormLabel>Você tem uma oferta clara e estruturada?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"sim",label:"Sim, sei exatamente o que vendo e por quanto"},{value:"mais-ou-menos",label:"Mais ou menos, ainda ajusto conforme o cliente"},{value:"nao",label:"Não, vendo de tudo um pouco"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`of-${o.value}`}/><Label htmlFor={`of-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="comoChegam" render={() => (<FormItem><FormLabel>Como seus clientes chegam hoje? (pode marcar mais de uma)</FormLabel><div className="space-y-3">{[{id:"indicacao",label:"Indicação / boca a boca"},{id:"instagram",label:"Instagram"},{id:"whatsapp",label:"WhatsApp"},{id:"trafego",label:"Tráfego pago"},{id:"outro",label:"Outro"}].map(item=>(<FormField key={item.id} control={form.control} name="comoChegam" render={({ field }) => (<FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((v) => v !== item.id))}/></FormControl><FormLabel className="font-normal">{item.label}</FormLabel></FormItem>)}/>))}</div><FormMessage /></FormItem>)} />
                  </>)}

                  {currentStep === 2 && (<>
                    <FormField control={form.control} name="usaIA" render={({ field }) => (<FormItem><FormLabel>Você já usa alguma inteligência artificial no seu negócio?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"nunca",label:"Não, nunca usei"},{value:"tentei",label:"Já tentei mas não consegui aplicar direito"},{value:"basico",label:"Uso de forma básica (ChatGPT para textos, por exemplo)"},{value:"estrategico",label:"Uso com alguma estratégia (automações, assistentes, fluxos)"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`ia-${o.value}`}/><Label htmlFor={`ia-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="consomeTempo" render={({ field }) => (<FormItem><FormLabel>O que mais consome seu tempo hoje?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"atendimento",label:"Atendimento manual (Direct, WhatsApp, e-mails)"},{value:"conteudo",label:"Criação de conteúdo (posts, stories, copy)"},{value:"processos",label:"Processos e bastidor (organização, entregas, financeiro)"},{value:"vendas",label:"Vendas e follow-up (prospecção, fechamento, pós-venda)"},{value:"tudo",label:"Tudo — faço tudo sozinha e não dou conta"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`ct-${o.value}`}/><Label htmlFor={`ct-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="fraseRepresenta" render={({ field }) => (<FormItem><FormLabel>Qual frase mais te representa agora?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-3">{[{value:"estrutura-primeiro",label:"\"Preciso primeiro organizar meu negócio antes de pensar em tecnologia\""},{value:"manual-demais",label:"\"Já tenho estrutura mas faço tudo no manual e não aguento mais\""},{value:"escalar",label:"\"Quero escalar mas não consigo me multiplicar\""},{value:"implementar-ia",label:"\"Quero alguém que implemente IA no meu negócio comigo\""}].map(o=>(<div key={o.value} className="flex items-start space-x-2"><RadioGroupItem value={o.value} id={`fr-${o.value}`} className="mt-1"/><Label htmlFor={`fr-${o.value}`} className="leading-relaxed">{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="objetivo90dias" render={({ field }) => (<FormItem><FormLabel>O que você quer conquistar nos próximos 90 dias?</FormLabel><FormControl><RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">{[{value:"organizar",label:"Organizar meu negócio e ter clareza do que vendo"},{value:"automatizar",label:"Automatizar processos e parar de fazer tudo sozinha"},{value:"produto-digital",label:"Criar um produto digital estruturado"},{value:"escalar",label:"Escalar meu faturamento com previsibilidade"}].map(o=>(<div key={o.value} className="flex items-center space-x-2"><RadioGroupItem value={o.value} id={`obj-${o.value}`}/><Label htmlFor={`obj-${o.value}`}>{o.label}</Label></div>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
                  </>)}

                  <div className="flex justify-between pt-6">
                    {currentStep > 0 && (<Button type="button" variant="outline" onClick={prevStep}>Voltar</Button>)}
                    <div className="ml-auto"><Button type="button" onClick={nextStep} variant="hero" size="lg">{currentStep === 2 ? "Ver meu diagnóstico" : "Próxima etapa"}</Button></div>
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
