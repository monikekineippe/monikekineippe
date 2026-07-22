GRANT INSERT, UPDATE ON public.inscricoes_webinar_heygen TO anon, authenticated;
GRANT ALL ON public.inscricoes_webinar_heygen TO service_role;

-- Ensure email uniqueness for upsert onConflict
CREATE UNIQUE INDEX IF NOT EXISTS inscricoes_webinar_heygen_email_key ON public.inscricoes_webinar_heygen (email);