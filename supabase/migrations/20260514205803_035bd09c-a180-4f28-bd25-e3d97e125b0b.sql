-- 1. Drop all dependent policies first
DROP POLICY IF EXISTS "Admins podem ver outros admins" ON public.admin_users;
DROP POLICY IF EXISTS "Apenas admins podem inserir novos admins" ON public.admin_users;
DROP POLICY IF EXISTS "Only admins can update submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Only admins can delete submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Apenas admins podem visualizar submissões" ON public.form_submissions;
DROP POLICY IF EXISTS "Only admins can view submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can manage all posts" ON public.blog_posts;

-- 2. Drop and Re-create the is_admin function
DROP FUNCTION IF EXISTS public.is_admin(uuid);
DROP FUNCTION IF EXISTS public.is_admin(text);

CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE public.admin_users.user_id = $1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 3. Re-apply admin_users policies (Secure version)
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view admins" 
ON public.admin_users FOR SELECT 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only existing admins can insert new admins" 
ON public.admin_users FOR INSERT 
TO authenticated 
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only existing admins can update admins" 
ON public.admin_users FOR UPDATE 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only existing admins can delete admins" 
ON public.admin_users FOR DELETE 
TO authenticated 
USING (public.is_admin(auth.uid()));

-- 4. Re-apply blog_posts policies
CREATE POLICY "Admins can manage all posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- 5. Harden form_submissions
-- Flexible constraint that ensures it's an object and has at least some identifiers
ALTER TABLE public.form_submissions DROP CONSTRAINT IF EXISTS check_submission_data;
ALTER TABLE public.form_submissions
ADD CONSTRAINT check_submission_data 
CHECK (
  jsonb_typeof(data) = 'object' AND
  (data ? 'name' OR data ? 'nome' OR data ? 'full_name' OR data ? 'email')
);

DROP POLICY IF EXISTS "Block direct inserts - use RPC" ON public.form_submissions;
DROP POLICY IF EXISTS "Public can submit diagnostics" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can view submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can delete submissions" ON public.form_submissions;

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit diagnostics" 
ON public.form_submissions FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Admins can view submissions" 
ON public.form_submissions FOR SELECT 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete submissions" 
ON public.form_submissions FOR DELETE 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update submissions" 
ON public.form_submissions FOR UPDATE 
TO authenticated 
USING (public.is_admin(auth.uid()));
