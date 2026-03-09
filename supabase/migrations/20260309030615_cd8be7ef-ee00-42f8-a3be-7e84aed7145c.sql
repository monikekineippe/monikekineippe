
CREATE OR REPLACE FUNCTION public.get_form_submissions()
RETURNS SETOF public.form_submissions
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT * FROM public.form_submissions ORDER BY submitted_at DESC;
$$;
