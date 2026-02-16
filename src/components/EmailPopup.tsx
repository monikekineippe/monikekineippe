import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("email-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (val: boolean) => {
    setOpen(val);
    if (!val) sessionStorage.setItem("email-popup-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
    sessionStorage.setItem("email-popup-dismissed", "true");
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md gold-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Receba conteúdos com direção</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Estratégia, IA e estrutura direto no seu e-mail. Sem spam. Com intenção.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-6">
            <p className="font-serif text-lg text-foreground">Pronto! 💎</p>
            <p className="text-sm text-muted-foreground mt-2">Você está na lista.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <Input
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background"
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                Autorizo receber comunicações da Monike Kineippe. Posso cancelar a qualquer momento.
              </label>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={!consent}>
              Quero receber
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
