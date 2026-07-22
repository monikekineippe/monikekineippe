CREATE OR REPLACE FUNCTION public.get_form_submissions()
RETURNS SETOF public.form_submissions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  IF NOT public.is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Acesso negado: requer privilégio de administrador';
  END IF;
  RETURN QUERY SELECT * FROM public.form_submissions ORDER BY submitted_at DESC;
END;
$function$;