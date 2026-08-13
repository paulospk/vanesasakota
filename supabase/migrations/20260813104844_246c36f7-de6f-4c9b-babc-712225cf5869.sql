REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

DROP POLICY IF EXISTS "Service role can read contact submissions" ON public.contact_submissions;
CREATE POLICY "Service role can read contact submissions"
ON public.contact_submissions FOR SELECT
USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can update contact submissions" ON public.contact_submissions;
CREATE POLICY "Service role can update contact submissions"
ON public.contact_submissions FOR UPDATE
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can delete contact submissions" ON public.contact_submissions;
CREATE POLICY "Service role can delete contact submissions"
ON public.contact_submissions FOR DELETE
USING (auth.role() = 'service_role');