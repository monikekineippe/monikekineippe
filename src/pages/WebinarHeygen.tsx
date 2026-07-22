import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Calendar, Sparkles, Video, Users, PlayCircle, Loader2 } from "lucide-react";

// ==== Textos fáceis de editar ====
const EVENTO = {
  titulo: "Webinar HeyGen",
  subtitulo: "[Iniciantes]",
  data: "23 de julho",
  horario: "17h (Brasília)",
  promessa:
    "Dê os primeiros passos na criação do seu avatar com IA: navegue pela plataforma, aprenda a se filmar e entre para a comunidade.",
};

const GOOGLE_CAL_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260723T200000Z%2F20260723T203000Z&details=Obtenha%20informa%C3%A7%C3%B5es%20atualizadas%20em%3A%20https%3A%2F%2Fluma.com%2Fw5etamdn%0A%0AWEBINAR%20PARA%20INICIANTES%21%20Vamos%20dar%20os%20primeiros%20passos%20na%20cria%C3%A7%C3%A3o%20do%20seu%20avatar.%20Navegar%20pela%20plataforma%2C%20dar%20dicas%20de%20como%20se%20filmar%20e%20de%20como%20fazer%20parte%20da%20nossa%20comunidade.%20Participe%21%0A%0AOrganizado%20por%20Rosana%20Pinheiro%20%26%20HeyGen%20Community&location=https%3A%2F%2Fluma.com%2Fevent%2Fevt-MjhHMDNM3HQKOM1&text=WEBINAR%20HEYGEN%20%5BINICIANTES%5D";

const OUTLOOK_CAL_URL =
  "https://outlook.office.com/calendar/0/deeplink/compose?allday=false&body=Obtenha%20informa%C3%A7%C3%B5es%20atualizadas%20em%3A%20https%3A%2F%2Fluma.com%2Fw5etamdn%0A%0AWEBINAR%20PARA%20INICIANTES%21%20Vamos%20dar%20os%20primeiros%20passos%20na%20cria%C3%A7%C3%A3o%20do%20seu%20avatar.%20Navegar%20pela%20plataforma%2C%20dar%20dicas%20de%20como%20se%20filmar%20e%20de%20como%20fazer%20parte%20da%20nossa%20comunidade.%20Participe%21%0A%0AOrganizado%20por%20Rosana%20Pinheiro%20%26%20HeyGen%20Community&enddt=2026-07-23T20%3A30%3A00.000Z&location=https%3A%2F%2Fluma.com%2Fevent%2Fevt-MjhHMDNM3HQKOM1&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-07-23T20%3A00%3A00.000Z&subject=WEBINAR%20HEYGEN%20%5BINICIANTES%5D&uid=evt-MjhHMDNM3HQKOM1";

const TOPICOS = [
  { icon: Sparkles, title: "Primeiros passos no seu avatar", desc: "Como criar e configurar o seu avatar de IA do zero." },
  { icon: PlayCircle, title: "Navegando pela plataforma", desc: "Um tour prático pelas principais funcionalidades da HeyGen." },
  { icon: Video, title: "Como se filmar com qualidade", desc: "Dicas simples de luz, enquadramento e áudio para bons resultados." },
  { icon: Users, title: "Entrando para a comunidade", desc: "Como fazer parte do grupo e continuar evoluindo com outras mulheres." },
];

// ==== Validação ====
const schema = z.object({
  nome_completo: z
    .string()
    .trim()
    .min(3, "Digite seu nome completo")
    .refine((v) => v.split(/\s+/).length >= 2, "Digite nome e sobrenome"),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z
    .string()
    .refine((v) => v.replace(/\D/g, "").length >= 10 && v.replace(/\D/g, "").length <= 11, "WhatsApp inválido"),
});

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const WebinarHeygen = () => {
  const [form, setForm] = useState({ nome_completo: "", email: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: field === "whatsapp" ? maskPhone(value) : value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("inscricoes_webinar_heygen")
      .upsert(
        {
          nome_completo: parsed.data.nome_completo,
          email: parsed.data.email.toLowerCase(),
          whatsapp: parsed.data.whatsapp,
          atualizado_em: new Date().toISOString(),
        },
        { onConflict: "email" }
      );
    setLoading(false);

    if (error) {
      setErrors({ form: "Não foi possível concluir sua inscrição. Tente novamente." });
      return;
    }
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0e0a0a] text-[#f5efe6]">
      <Helmet>
        <title>Webinar HeyGen [Iniciantes] | Monike Kineippe</title>
        <meta
          name="description"
          content="Inscreva-se no Webinar HeyGen para iniciantes com Monike Kineippe. Aprenda a criar seu avatar de IA, navegar pela plataforma e entrar para a comunidade."
        />
        <link rel="canonical" href="https://monikekineippe.com.br/webinar-heygen" />
      </Helmet>

      {/* Topbar minimal */}
      <header className="border-b border-[#c9a961]/15">
        <div className="container mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <span className="font-serif text-lg tracking-wide">Monike Kineippe</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a961]">
            em parceria com HeyGen
          </span>
        </div>
      </header>

      {success ? (
        <SuccessScreen />
      ) : (
        <>
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(600px 300px at 50% 0%, rgba(201,169,97,0.18), transparent 60%)",
              }}
            />
            <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32 text-center relative">
              <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#c9a961] mb-6">
                💎 Webinar Gratuito • Online
              </span>
              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
                {EVENTO.titulo}
                <br />
                <span className="text-[#c9a961]">{EVENTO.subtitulo}</span>
              </h1>
              <p className="text-base md:text-lg text-[#f5efe6]/70 max-w-2xl mx-auto leading-relaxed mb-10">
                {EVENTO.promessa}
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border border-[#c9a961]/30 rounded-sm px-8 py-5 mb-10">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-serif text-lg">{EVENTO.data}</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-[#c9a961]/30" />
                <span className="font-serif text-lg">{EVENTO.horario}</span>
              </div>

              <div>
                <button
                  onClick={scrollToForm}
                  className="inline-block bg-[#c9a961] hover:bg-[#b8974f] text-[#0e0a0a] font-sans text-sm tracking-[0.2em] uppercase px-10 py-4 transition-colors"
                >
                  Fazer minha inscrição
                </button>
              </div>
            </div>
          </section>

          {/* O que você vai aprender */}
          <section className="border-t border-[#c9a961]/10">
            <div className="container mx-auto max-w-5xl px-6 py-20">
              <div className="text-center mb-14">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a961]">
                  O que você vai aprender
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">
                  Os primeiros passos no seu avatar de IA
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {TOPICOS.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="border border-[#c9a961]/15 p-8 hover:border-[#c9a961]/40 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#c9a961] mb-4" />
                    <h3 className="font-serif text-xl mb-2">{title}</h3>
                    <p className="text-sm text-[#f5efe6]/60 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Para quem é */}
          <section className="border-t border-[#c9a961]/10 bg-[#141010]">
            <div className="container mx-auto max-w-3xl px-6 py-20 text-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a961]">Para quem é</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-6">
                Para iniciantes que querem começar com avatares de IA
              </h2>
              <p className="text-[#f5efe6]/70 leading-relaxed">
                Se você quer entender, na prática, como usar a HeyGen para criar o seu próprio avatar
                e escalar a sua presença digital com elegância — este encontro é para você. ✨
              </p>
            </div>
          </section>

          {/* Formulário */}
          <section id="inscricao" className="border-t border-[#c9a961]/10">
            <div className="container mx-auto max-w-xl px-6 py-24">
              <div className="text-center mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a961]">
                  Garanta sua vaga
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">Inscrição gratuita</h2>
                <p className="text-sm text-[#f5efe6]/60 mt-3">Vagas limitadas — 🍀 confirme já a sua.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Field
                  label="Nome completo"
                  value={form.nome_completo}
                  onChange={(v) => handleChange("nome_completo", v)}
                  error={errors.nome_completo}
                  placeholder="Seu nome completo"
                />
                <Field
                  label="E-mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange("email", v)}
                  error={errors.email}
                  placeholder="voce@email.com"
                />
                <Field
                  label="WhatsApp"
                  value={form.whatsapp}
                  onChange={(v) => handleChange("whatsapp", v)}
                  error={errors.whatsapp}
                  placeholder="(00) 00000-0000"
                  inputMode="tel"
                />

                {errors.form && (
                  <p className="text-sm text-red-400 text-center">{errors.form}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c9a961] hover:bg-[#b8974f] disabled:opacity-60 text-[#0e0a0a] font-sans text-sm tracking-[0.2em] uppercase py-4 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
                    </>
                  ) : (
                    "Quero garantir minha vaga"
                  )}
                </button>
              </form>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
};

const Field = ({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: "tel" | "text" | "email";
}) => (
  <div>
    <label className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a961] mb-2">
      {label}
    </label>
    <input
      type={type}
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-[#c9a961]/30 focus:border-[#c9a961] outline-none px-4 py-3 text-[#f5efe6] placeholder:text-[#f5efe6]/30 transition-colors"
    />
    {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
  </div>
);

const SuccessScreen = () => (
  <section className="min-h-[80vh] flex items-center">
    <div className="container mx-auto max-w-xl px-6 py-24 text-center">
      <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a961]">Confirmado</span>
      <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
        Inscrição confirmada! 💎
      </h1>
      <p className="text-[#f5efe6]/70 leading-relaxed mb-10">
        Sua vaga no Webinar HeyGen está garantida. Adicione o evento à sua agenda para não esquecer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={GOOGLE_CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0e0a0a] font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 transition-colors"
        >
          Adicionar ao Google Calendar
        </a>
        <a
          href={OUTLOOK_CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#0e0a0a] font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 transition-colors"
        >
          Adicionar ao Outlook
        </a>
      </div>
    </div>
    <Footer />
  </section>
);

const Footer = () => (
  <footer className="border-t border-[#c9a961]/10 mt-0">
    <div className="container mx-auto max-w-5xl px-6 py-10 text-center">
      <p className="font-serif text-lg mb-2">Monike Kineippe</p>
      <p className="text-xs tracking-[0.2em] uppercase text-[#f5efe6]/50">
        Convide suas amigas para participar também ✨
      </p>
    </div>
  </footer>
);

export default WebinarHeygen;
