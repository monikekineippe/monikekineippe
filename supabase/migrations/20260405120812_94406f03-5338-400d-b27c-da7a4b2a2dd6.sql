
-- 1. Create a security definer function to check admin status (prevents self-referential RLS)
CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users WHERE user_id = _user_id
  );
$$;

-- 2. Fix admin_users policies - replace self-referential INSERT policy
DROP POLICY IF EXISTS "Apenas admins podem inserir novos admins" ON public.admin_users;
DROP POLICY IF EXISTS "Admins podem ver outros admins" ON public.admin_users;

CREATE POLICY "Admins podem ver outros admins"
ON public.admin_users FOR SELECT TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Apenas admins podem inserir novos admins"
ON public.admin_users FOR INSERT TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

-- 3. Add constraints on form_submissions columns
ALTER TABLE public.form_submissions
ADD CONSTRAINT form_type_max_length CHECK (char_length(form_type) <= 100);

ALTER TABLE public.form_submissions
ADD CONSTRAINT page_source_max_length CHECK (char_length(page_source) <= 500);

ALTER TABLE public.form_submissions
ADD CONSTRAINT user_agent_max_length CHECK (char_length(user_agent) <= 512);

-- 4. Explicitly block direct INSERT/UPDATE/DELETE on form_submissions (inserts go through SECURITY DEFINER RPC)
CREATE POLICY "Block direct inserts - use RPC"
ON public.form_submissions FOR INSERT TO public
WITH CHECK (false);

CREATE POLICY "Only admins can update submissions"
ON public.form_submissions FOR UPDATE TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete submissions"
ON public.form_submissions FOR DELETE TO authenticated
USING (public.is_admin(auth.uid()));
