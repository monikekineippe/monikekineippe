-- Drop existing function with CASCADE to handle dependencies (policies)
DROP FUNCTION IF EXISTS public.is_admin(uuid) CASCADE;

-- Create a secure function to check if a user is an admin
CREATE OR REPLACE FUNCTION public.is_admin(p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users WHERE user_id = p_user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Function to validate submission data
CREATE OR REPLACE FUNCTION public.validate_submission_data(p_data JSONB, p_form_type TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  IF p_data IS NULL THEN RETURN FALSE; END IF;
  
  -- Basic structure check for diagnostic form
  IF p_form_type = 'diagnostic' THEN
    RETURN (
      p_data ? 'name' AND 
      p_data ? 'email' AND
      jsonb_typeof(p_data->'name') = 'string' AND
      jsonb_typeof(p_data->'email') = 'string'
    );
  END IF;
  
  -- Default to true for other types if they exist, or false if unknown
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql IMMUTABLE SET search_path = public;

-- Enable RLS on all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Clear any existing policies (including those dropped by CASCADE but just to be sure of names)
DROP POLICY IF EXISTS "Admins can view admins" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can insert admins" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update admins" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can delete admins" ON public.admin_users;
DROP POLICY IF EXISTS "Only existing admins can insert new admins" ON public.admin_users;
DROP POLICY IF EXISTS "Only existing admins can update admins" ON public.admin_users;
DROP POLICY IF EXISTS "Only existing admins can delete admins" ON public.admin_users;

-- Admin Users Policies
CREATE POLICY "Admins can view admins" 
ON public.admin_users FOR SELECT 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert admins" 
ON public.admin_users FOR INSERT 
TO authenticated 
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update admins" 
ON public.admin_users FOR UPDATE 
TO authenticated 
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete admins" 
ON public.admin_users FOR DELETE 
TO authenticated 
USING (public.is_admin(auth.uid()));

-- Blog Posts Policies
DROP POLICY IF EXISTS "Anyone can view posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can manage posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can manage all posts" ON public.blog_posts;

CREATE POLICY "Anyone can view posts" 
ON public.blog_posts FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage posts" 
ON public.blog_posts 
FOR ALL 
TO authenticated 
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Form Submissions Policies
DROP POLICY IF EXISTS "Public can submit forms" ON public.form_submissions;
DROP POLICY IF EXISTS "Only admins can view submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Only admins can delete submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Only admins can update submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can view submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can delete submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Admins can update submissions" ON public.form_submissions;

CREATE POLICY "Public can submit forms" 
ON public.form_submissions FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Only admins can view submissions" 
ON public.form_submissions FOR SELECT 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete submissions" 
ON public.form_submissions FOR DELETE 
TO authenticated 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update submissions" 
ON public.form_submissions FOR UPDATE 
TO authenticated 
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Add constraint with NOT VALID as requested
ALTER TABLE public.form_submissions
DROP CONSTRAINT IF EXISTS check_submission_data;

ALTER TABLE public.form_submissions
ADD CONSTRAINT check_submission_data 
CHECK (public.validate_submission_data(data, form_type))
NOT VALID;