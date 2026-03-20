import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Diamond, ArrowRight, ArrowLeft, CheckCircle2, Loader2, CreditCard, QrCode, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfrHybNG4ArAMsp0goPl8qBWhv871v1cNNTiTRwJkH2vSwp8ryxAUkLdd_J50SHaJw/exec";

const TOTAL_STEPS = 6;
const channelOptions = ["Indicação", "Instagram", "Tráfego pago", "Outro"];
const gargaloOptions = ["Oferta", "Posicionamento", "Vendas", "Tempo", "Constância"];

const paymentOptions = [
  {
    value: "cartao-12x",
    icon: CreditCard,
    label: "Cartão de crédito",
    detail: "até 12x de R$ 205,32",
  },
  {
    value: "pix",
    icon: QrCode,
    label: "PIX à vista",
    detail: "R$ 1.997,00",
  },
  {
    value: "boleto-3x",
    icon: FileText,
    label: "Boleto parcelado",
    detail: "até 3x de R$ 711,30",
  },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LapidandoApplicationForm = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState({
    nome: "", email: "", whatsapp: "", instagram: "",
    oQueVende: "", praQuem: "", ticketMeta: "", canal: "",
    gargalo: "", tempoSemanal: "", continuarIgual: "", porqueLapidando: "",
    formaPagamento: "",
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const canAdvance = () => {
    switch (step) {
      case 1: return form.nome.trim() && form.email.trim() && form.whatsapp.trim();
      case 2: return form.oQueVende.trim() && form.praQuem.trim();
      case 3: return form.ticketMeta.trim() && form.canal;
      case 4: return form.gargalo && form.tempoSemanal.trim();
      case 5: return form.continuarIgual.trim() && form.porqueLapidando.trim();
      case 6: return !!form.formaPagamento;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_type: "lapidando-diamantes", ...form, dataEnvio: new Date().toISOString() }),
      });
    } catch (err) { console.error("Sheets error:", err); }

    try {
      await supabase.rpc('insert_form_submission', {
        p_form_type: 'lapidando-diamantes',
        p_page_source: '/lapidando-diamantes',
        p_data: form,
        p_user_agent: navigator.userAgent
      });
    } catch (err) { console.error("DB error:", err); }

    setSubmitted(true);
    setSending(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setForm({ nome: "", email: "", whatsapp: "", instagram: "", oQueVende: "", praQuem: "", ticketMeta: "", canal: "", gargalo: "", tempoSemanal: "", continuarIgual: "", porqueLapidando: "", formaPagamento: "" });
    }, 300);
  };

  const radioClass = (selected: boolean) =>
    `flex items-center gap-2 border rounded-lg px-3 py-2.5 cursor-pointer transition-colors font-sans text-sm ${
      selected ? "border-secondary bg-secondary/10 text-foreground" : "border-input bg-background text-muted-foreground hover:border-secondary/50"
    }`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-serif text-xl">
            <Diamond className="w-5 h-5 text-secondary" />
            Aplicação Lapidando Diamante$
          </DialogTitle>
          <DialogDescription>
            {!submitted ? `Passo ${step} de ${TOTAL_STEPS} — leva menos de 3 minutos` : "Aplicação enviada com sucesso!"}
          </DialogDescription>
        </DialogHeader>

        {!submitted && (
          <div className="w-full bg-muted rounded-full h-1.5 mb-2">
            <div className="bg-gradient-gold h-1.5 rounded-full transition-all duration-500" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
          </div>
        )}

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-secondary mx-auto" />
              <h3 className="text-xl font-serif font-bold">Aplicação recebida! 💎</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm mx-auto">
                Vou analisar sua aplicação com carinho e respondo em até 48h pelo WhatsApp ou e-mail.
              </p>
              <Button onClick={handleClose} className="bg-gradient-gold text-primary-foreground font-sans font-semibold mt-4">Fechar</Button>
            </motion.div>
          ) : (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-5 py-2">
              {step === 1 && (
                <>
                  <div className="space-y-2"><Label className="font-sans text-sm">Seu nome</Label><Input placeholder="Nome completo" value={form.nome} onChange={e => update("nome", e.target.value)} maxLength={100} /></div>
                  <div className="space-y-2"><Label className="font-sans text-sm">E-mail</Label><Input type="email" placeholder="seu@email.com" value={form.email} onChange={e => update("email", e.target.value)} maxLength={200} /></div>
                  <div className="space-y-2"><Label className="font-sans text-sm">WhatsApp</Label><Input placeholder="(00) 00000-0000" value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} maxLength={20} /></div>
                  <div className="space-y-2"><Label className="font-sans text-sm">Instagram <span className="text-muted-foreground">(opcional)</span></Label><Input placeholder="@seuperfil" value={form.instagram} onChange={e => update("instagram", e.target.value)} maxLength={100} /></div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="space-y-2"><Label className="font-sans text-sm">Em 1 frase: o que você vende hoje?</Label><Input placeholder="Ex: consultoria de imagem, bolos artísticos..." value={form.oQueVende} onChange={e => update("oQueVende", e.target.value)} maxLength={200} /></div>
                  <div className="space-y-2"><Label className="font-sans text-sm">Pra quem isso é urgente agora?</Label><Input placeholder="Ex: mulheres empreendedoras, noivas, mães..." value={form.praQuem} onChange={e => update("praQuem", e.target.value)} maxLength={200} /></div>
                </>
              )}
              {step === 3 && (
                <>
                  <div className="space-y-2"><Label className="font-sans text-sm">Ticket atual e meta para 90 dias?</Label><Input placeholder="Ex: R$500 hoje, meta R$2.000" value={form.ticketMeta} onChange={e => update("ticketMeta", e.target.value)} maxLength={200} /></div>
                  <div className="space-y-2">
                    <Label className="font-sans text-sm">Hoje vende mais por:</Label>
                    <RadioGroup value={form.canal} onValueChange={v => update("canal", v)} className="grid grid-cols-2 gap-2">
                      {channelOptions.map(opt => (<label key={opt} className={radioClass(form.canal === opt)}><RadioGroupItem value={opt} />{opt}</label>))}
                    </RadioGroup>
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <div className="space-y-2">
                    <Label className="font-sans text-sm">Seu gargalo principal:</Label>
                    <RadioGroup value={form.gargalo} onValueChange={v => update("gargalo", v)} className="grid grid-cols-2 gap-2">
                      {gargaloOptions.map(opt => (<label key={opt} className={radioClass(form.gargalo === opt)}><RadioGroupItem value={opt} />{opt}</label>))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-2"><Label className="font-sans text-sm">Quanto tempo por semana você consegue dedicar?</Label><Input placeholder="Ex: 3 horas, 5 horas..." value={form.tempoSemanal} onChange={e => update("tempoSemanal", e.target.value)} maxLength={100} /></div>
                </>
              )}
              {step === 5 && (
                <>
                  <div className="space-y-2"><Label className="font-sans text-sm">O que acontece se você continuar igual pelos próximos 3 meses?</Label><Textarea placeholder="Seja honesta consigo mesma..." value={form.continuarIgual} onChange={e => update("continuarIgual", e.target.value)} maxLength={500} rows={3} className="resize-none" /></div>
                  <div className="space-y-2"><Label className="font-sans text-sm">Por que a Lapidando Diamante$ é o que você precisa agora?</Label><Textarea placeholder="Me conta o que fez você chegar até aqui..." value={form.porqueLapidando} onChange={e => update("porqueLapidando", e.target.value)} maxLength={500} rows={3} className="resize-none" /></div>
                </>
              )}
              {step === 6 && (
                <>
                  <div className="text-center space-y-1 mb-2">
                    <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Investimento</p>
                    <p className="text-2xl font-serif font-bold">R$ 1.997,00</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-sans text-sm">Escolha a forma de pagamento preferida:</Label>
                    <RadioGroup value={form.formaPagamento} onValueChange={v => update("formaPagamento", v)} className="space-y-2">
                      {paymentOptions.map(opt => (
                        <label key={opt.value} className={`flex items-center gap-3 border rounded-lg px-4 py-3.5 cursor-pointer transition-colors font-sans ${
                          form.formaPagamento === opt.value
                            ? "border-secondary bg-secondary/10 text-foreground"
                            : "border-input bg-background text-muted-foreground hover:border-secondary/50"
                        }`}>
                          <RadioGroupItem value={opt.value} />
                          <opt.icon className="w-4 h-4 text-secondary/70 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium block">{opt.label}</span>
                            <span className="text-xs text-muted-foreground">{opt.detail}</span>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-2">
                {step > 1 ? <Button variant="ghost" onClick={() => setStep(s => s - 1)} className="text-muted-foreground"><ArrowLeft className="w-4 h-4 mr-1" /> Voltar</Button> : <div />}
                {step < TOTAL_STEPS ? (
                  <Button onClick={() => setStep(s => s + 1)} disabled={!canAdvance()} className="bg-gradient-gold text-primary-foreground font-sans font-semibold">Próximo <ArrowRight className="w-4 h-4 ml-1" /></Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canAdvance() || sending} className="bg-gradient-gold text-primary-foreground font-sans font-semibold">
                    {sending ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Enviando...</> : "✅ Enviar aplicação"}
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default LapidandoApplicationForm;
