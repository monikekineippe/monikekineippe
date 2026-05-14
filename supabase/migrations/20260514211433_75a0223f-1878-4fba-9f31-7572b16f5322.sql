-- 1. BLOG_POSTS: remove "always true" policy
DROP POLICY IF EXISTS "Anyone can view posts" ON public.blog_posts;

-- 2. GET_FORM_SUBMISSIONS: revoke public access and require admin check
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM anon;
REVOKE EXECUTE ON FUNCTION public.get_form_submissions() FROM authenticated;

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

-- 3. INSERT_FORM_SUBMISSION: ensure search_path and maintain public access
ALTER FUNCTION public.insert_form_submission SET search_path = public;
GRANT EXECUTE ON FUNCTION public.insert_form_submission TO anon, authenticated;

-- 4. IS_ADMIN: revoke from PUBLIC, maintain for authenticated
REVOKE EXECUTE ON FUNCTION public.is_admin(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin(uuid) TO authenticated;

-- 5. VALIDATE_SUBMISSION_DATA: revoke from PUBLIC
REVOKE EXECUTE ON FUNCTION public.validate_submission_data(jsonb, text) FROM PUBLIC;