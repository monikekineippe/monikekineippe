GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inscricoes_webinar_heygen TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inscricoes_webinar_heygen TO authenticated;
GRANT ALL ON public.inscricoes_webinar_heygen TO service_role;