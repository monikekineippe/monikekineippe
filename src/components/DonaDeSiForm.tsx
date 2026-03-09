import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxNWY78Z9sPxO37hWwNf9-6i9y3VpQxJFUEKu1G53y5SpH3YbWZIAU1GjGDIO9Wyeaf/exec";

interface DonaDeSiFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonaDeSiForm = ({ open, onOpenChange }: DonaDeSiFormProps) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [delivery, setDelivery] = useState("");
  const [hasClients, setHasClients] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [availability, setAvailability] = useState("");
  const [consent, setConsent] = useState(false);

  const isStep1Valid = name.trim().length > 0 && whatsapp.trim().length >= 10;
  const isStep2Valid = delivery.trim().length > 0 && hasClients !== "";
  const isStep3Valid = bottleneck.trim().length > 0 && availability !== "" && consent;

  const handleSubmit = async () => {
    if (!isStep3Valid) return;
    setLoading(true);

    const payload = {
      form_type: "dona-de-si-aplicacao",
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      instagram: instagram.trim(),
      delivery: delivery.trim(),
      hasClients,
      bottleneck: bottleneck.trim(),
      availability,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Erro ao enviar aplicação:", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      // Reset after close animation
      setTimeout(() => {
        setStep(1);
        setSubmitted(false);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg gold-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            Aplicação — Dona de $i
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            {submitted
              ? ""
              : `Etapa ${step} de 3 — Preencha com calma. Eu leio tudo.`}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <p className="font-serif text-2xl text-foreground mb-2">Aplicação enviada! 💎</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
              Vou analisar suas respostas e entro em contato pelo WhatsApp em até 48h.
            </p>
          </div>
        ) : (
          <>
            {/* STEP 1 — Dados de contato */}
            {step === 1 && (
              <div className="space-y-4 mt-2">
                <div>
                  <Label htmlFor="name" className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Seu nome *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    WhatsApp (com DDD) *
                  </Label>
                  <Input
                    id="whatsapp"
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    maxLength={20}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="instagram" className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Instagram (opcional)
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="@seuperfil"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    maxLength={50}
                    className="bg-background"
                  />
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-2"
                  disabled={!isStep1Valid}
                  onClick={() => setStep(2)}
                >
                  Próximo →
                </Button>
              </div>
            )}

            {/* STEP 2 — Sobre o negócio */}
            {step === 2 && (
              <div className="space-y-4 mt-2">
                <div>
                  <Label htmlFor="delivery" className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    O que você vende / entrega? *
                  </Label>
                  <Textarea
                    id="delivery"
                    placeholder="Ex: mentoria de carreira, design para redes sociais, consultoria financeira..."
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    maxLength={500}
                    className="bg-background min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-3 block">
                    Você já tem clientes ou histórico de vendas? *
                  </Label>
                  <RadioGroup value={hasClients} onValueChange={setHasClients} className="space-y-2">
                    {[
                      { value: "sim-recorrente", label: "Sim, vendo com recorrência" },
                      { value: "sim-esporadico", label: "Sim, mas de forma esporádica" },
                      { value: "poucos", label: "Já vendi algumas vezes, mas parou" },
                      { value: "nao", label: "Ainda não vendi" },
                    ].map((opt) => (
                      <div key={opt.value} className="flex items-center gap-3">
                        <RadioGroupItem value={opt.value} id={`clients-${opt.value}`} />
                        <Label htmlFor={`clients-${opt.value}`} className="text-sm font-sans cursor-pointer">
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="flex gap-3 mt-2">
                  <Button variant="heroOutline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                    ← Voltar
                  </Button>
                  <Button variant="hero" size="lg" className="flex-1" disabled={!isStep2Valid} onClick={() => setStep(3)}>
                    Próximo →
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 — Gargalo e disponibilidade */}
            {step === 3 && (
              <div className="space-y-4 mt-2">
                <div>
                  <Label htmlFor="bottleneck" className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Qual seu maior gargalo hoje? *
                  </Label>
                  <Textarea
                    id="bottleneck"
                    placeholder="Ex: não consigo manter constância nas vendas, não sei precificar, estou sobrecarregada..."
                    value={bottleneck}
                    onChange={(e) => setBottleneck(e.target.value)}
                    maxLength={500}
                    className="bg-background min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-3 block">
                    Você tem disponibilidade para um sprint de 14 dias? *
                  </Label>
                  <RadioGroup value={availability} onValueChange={setAvailability} className="space-y-2">
                    {[
                      { value: "sim-total", label: "Sim, consigo me dedicar bem" },
                      { value: "sim-parcial", label: "Sim, com ajustes na agenda" },
                      { value: "dificil", label: "Vai ser apertado, mas quero tentar" },
                      { value: "nao", label: "Agora não consigo" },
                    ].map((opt) => (
                      <div key={opt.value} className="flex items-center gap-3">
                        <RadioGroupItem value={opt.value} id={`avail-${opt.value}`} />
                        <Label htmlFor={`avail-${opt.value}`} className="text-sm font-sans cursor-pointer">
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-dona"
                    checked={consent}
                    onCheckedChange={(v) => setConsent(v === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="consent-dona" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    Autorizo o contato via WhatsApp para retorno sobre minha aplicação.
                  </label>
                </div>
                <div className="flex gap-3 mt-2">
                  <Button variant="heroOutline" size="lg" className="flex-1" onClick={() => setStep(2)}>
                    ← Voltar
                  </Button>
                  <Button
                    variant="gold"
                    size="lg"
                    className="flex-1"
                    disabled={!isStep3Valid || loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Enviando..." : "✅ Enviar aplicação"}
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonaDeSiForm;
