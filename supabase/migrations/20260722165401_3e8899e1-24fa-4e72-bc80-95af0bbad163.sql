DROP POLICY IF EXISTS "Public can insert inscricoes" ON public.inscricoes_webinar_heygen;
DROP POLICY IF EXISTS "Public can upsert update inscricoes" ON public.inscricoes_webinar_heygen;

CREATE POLICY "Public can submit webinar" ON public.inscricoes_webinar_heygen FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can update webinar" ON public.inscricoes_webinar_heygen FOR UPDATE TO public USING (true) WITH CHECK (true);

GRANT INSERT, UPDATE ON public.inscricoes_webinar_heygen TO anon, authenticated, public;