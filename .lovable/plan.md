
## Goal
Add a fully functioning contact form on the Contact page that:
1. Saves every submission to the backend database
2. Emails you a notification at `vanesa@vanesasakota.com.au` for each enquiry
3. Sends the sender an auto-confirmation so they know it came through
4. Does not conflict with your existing Office 365 email on the root domain
5. Includes a "How did you find out about me?" dropdown

Phone number stays visible everywhere as requested; the form is offered as an additional option.

## What we'll build

### 1. Contact form UI (`src/pages/Contact.tsx`)
Placed above the existing phone/email details, styled to match the rest of the site (Fraunces headings, Geist body, ice-blue accents, no em-dashes).

Fields:
- **Name** (required)
- **Email** (required, validated)
- **Phone** (optional)
- **How did you find out about me?** (dropdown, required) with options:
  - Google search
  - Referral from GP or clinician
  - PACFA directory
  - Word of mouth
  - Instagram
  - Other
- **If "Other", tell me a little more** (text input, only shown when Other is selected)
- **Message** (required, multi-line, 20–2000 chars)
- **Honeypot** hidden field (spam trap, invisible to humans)
- Submit button + success / error states + inline validation

Client-side validation with `zod`.

### 2. Backend table `contact_submissions`
Stores every submission as the source of truth (so nothing is lost even if email fails).

Columns: `id`, `name`, `email`, `phone`, `referral_source`, `referral_other`, `message`, `status` (received / emailed / failed), `created_at`, `user_agent`, `ip_hash`.

RLS:
- `INSERT` allowed for anonymous visitors (that's the whole point of the form)
- `SELECT/UPDATE/DELETE` denied to everyone (only the service role, used by edge functions, can read)
- Grants: `INSERT` to `anon` and `authenticated`; `ALL` to `service_role`

### 3. Email delivery — Lovable Emails on a subdomain
Sender subdomain: `notify.vanesasakota.com.au` (or similar). This is a delegated subdomain and does **not** touch your existing Office 365 setup on `vanesasakota.com.au` — your inbox keeps working exactly as it does now.

Setup steps (I'll walk you through them in-product):
1. Open the email setup dialog and confirm the subdomain
2. Add the NS records shown in the dialog at GoDaddy (only NS records for the subdomain — nothing else touched)
3. Wait for verification (usually minutes, up to 72 hours worst case)
4. Once verified, emails start sending automatically

### 4. Edge function: `submit-contact-form`
The form posts to this function. It:
1. Validates the payload again server-side with `zod`
2. Rejects submissions where the honeypot is filled (silent spam drop)
3. Basic rate limit: max 3 submissions per IP hash per hour
4. Inserts the row into `contact_submissions`
5. Sends **two emails**:
   - **Notification to you** at `vanesa@vanesasakota.com.au` with all form details + a "Reply to: [sender's email]" header so you can just hit Reply
   - **Confirmation to the sender** letting them know you'll respond within 24 hours
6. Updates the row status to `emailed` or `failed`
7. Returns success/error JSON

### 5. Two email templates
Branded React Email templates matching the site's clinical humanist tone (Fraunces serif, no em-dashes, ice-blue accents):
- `contact-notification` — internal notification with full submission details
- `contact-confirmation` — auto-reply to the sender

## Spam protection layers
- Honeypot hidden field (catches most bots)
- Server-side validation (rejects malformed payloads)
- Per-IP rate limit (3/hour)
- Suppression list is respected automatically by Lovable Emails

## What you need to do
1. Approve this plan
2. When prompted, complete the email setup dialog and add the NS records at GoDaddy for the sender subdomain (I'll show you the exact records after setup starts)
3. That's it. Nothing at AWS changes — the form runs against Lovable Cloud (Supabase), and the static site on S3/CloudFront just makes HTTPS calls to the edge function.

## Out of scope (deliberately)
- No admin dashboard for viewing submissions right now (you can add one later if you want). For now, every submission arrives as an email in your inbox, and we can query the DB directly if anything is ever missed.
- No changes to the phone number's visibility.
- No changes to your Office 365 mail — the sender subdomain is completely separate from your root domain's MX records.

## Technical notes
- Table: `public.contact_submissions` with RLS enabled, insert-only for public
- Edge function name: `submit-contact-form` (deploys with `verify_jwt = false` since it's public)
- Uses Lovable Emails queue infra (`email_domain--setup_email_infra` + `email_domain--scaffold_transactional_email`)
- Sender FROM: `noreply@notify.vanesasakota.com.au` (display: "Vanesa Sakota Psychotherapy"), Reply-To on the notification email set to the sender's address so you can reply directly from your Outlook
