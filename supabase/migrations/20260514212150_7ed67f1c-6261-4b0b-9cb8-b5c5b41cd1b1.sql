-- Remover policy que expõe rascunhos do blog
DROP POLICY IF EXISTS "Anyone can view posts" ON public.blog_posts;

-- Revogar acesso público ao get_form_submissions
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM anon;
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM authenticated;

-- Recriar get_form_submissions com checagem interna de admin
CREATE OR REPLACE FUNCTION public.get_form_submissions()
RETURNS SETOF public.form_submissions AS $$
BEGIN
  IF NOT public.is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Acesso negado: requer privilégio de administrador';
  END IF;
  RETURN QUERY SELECT * FROM public.form_submissions ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_form_submissions() TO authenticated;

-- Garantir search_path em insert_form_submission
ALTER FUNCTION public.insert_form_submission SET search_path = public;
GRANT EXECUTE ON FUNCTION public.insert_form_submission TO anon, authenticated;

-- Revogar is_admin de PUBLIC, manter para authenticated
REVOKE EXECUTE ON FUNCTION public.is_admin(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin(uuid) TO authenticated;

-- Revogar validate_submission_data de PUBLIC (usada via CHECK)
REVOKE EXECUTE ON FUNCTION public.validate_submission_data(jsonb, text) FROM PUBLIC;