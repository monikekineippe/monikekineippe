import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", objetivo: "", instagram: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", objetivo: "", instagram: "", mensagem: "" });
  };

  return (
    <>
      <PageHero
        tag="Contato"
        title="Contato"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-serif mb-6">Fale conosco</h2>
            <div className="space-y-4 text-sm font-sans text-muted-foreground">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-secondary block mb-1">WhatsApp</span>
                <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  (11) 97231-3181 (Carine)
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-secondary block mb-1">E-mail</span>
                <span>contato@monikekineippe.com.br</span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-secondary block mb-1">Palestras</span>
                <a href="https://wa.me/5511972313181" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp Carine
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "nome", label: "Nome", type: "text" },
              { key: "email", label: "E-mail", type: "email" },
              { key: "objetivo", label: "Objetivo", type: "text" },
              { key: "instagram", label: "Instagram", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-[10px] tracking-widest uppercase text-secondary font-sans block mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm font-sans focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                  required={field.key === "nome" || field.key === "email"}
                />
              </div>
            ))}
            <div>
              <label className="text-[10px] tracking-widest uppercase text-secondary font-sans block mb-1.5">Mensagem</label>
              <textarea
                value={form.mensagem}
                onChange={(e) => setForm(prev => ({ ...prev, mensagem: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm font-sans focus:outline-none focus:ring-1 focus:ring-secondary transition-all resize-none"
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Enviar mensagem
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contato;
