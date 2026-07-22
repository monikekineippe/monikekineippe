CREATE TABLE public.inscricoes_webinar_heygen (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  whatsapp TEXT NOT NULL,
  criado_em TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  atualizado_em TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT, UPDATE ON public.inscricoes_webinar_heygen TO anon, authenticated;
GRANT ALL ON public.inscricoes_webinar_heygen TO service_role;

ALTER TABLE public.inscricoes_webinar_heygen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert inscricoes"
  ON public.inscricoes_webinar_heygen FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can upsert update inscricoes"
  ON public.inscricoes_webinar_heygen FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only admins can view inscricoes"
  ON public.inscricoes_webinar_heygen FOR SELECT
  TO authenticated
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete inscricoes"
  ON public.inscricoes_webinar_heygen FOR DELETE
  TO authenticated
  USING (public.is_admin(auth.uid()));