import { createClient } from 'npm:@supabase/supabase-js@2.45.0';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const REFERRAL_OPTIONS = [
  'Google search',
  'Referral from GP or clinician',
  'PACFA directory',
  'Word of mouth',
  'Other',
] as const;

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  referral_source: z.enum(REFERRAL_OPTIONS),
  referral_other: z.string().trim().max(200).optional().or(z.literal('')),
  message: z.string().trim().min(20).max(2000),
  website: z.string().max(0).optional().or(z.literal('')), // honeypot
});

const NOTIFY_TO = 'vanesa@vanesasakota.com.au';
const RATE_LIMIT_PER_HOUR = 3;

async function hashIp(ip: string): Promise<string> {
  const data = new TextEncoder().encode(ip + '::vanesasakota-salt');
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const raw = await req.json();
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Invalid submission', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    const data = parsed.data;

    // Honeypot — silently succeed to not tip off bots
    if (data.website && data.website.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Rate limit by IP hash
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('cf-connecting-ip') ||
      'unknown';
    const ip_hash = await hashIp(ip);
    const userAgent = req.headers.get('user-agent') ?? null;

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: recentCount } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('ip_hash', ip_hash)
      .gte('created_at', oneHourAgo);

    if ((recentCount ?? 0) >= RATE_LIMIT_PER_HOUR) {
      return new Response(
        JSON.stringify({
          error: 'Too many submissions from this connection. Please try again later or call directly.',
        }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // Store submission (source of truth)
    const { data: inserted, error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        referral_source: data.referral_source,
        referral_other: data.referral_other || null,
        message: data.message,
        status: 'received',
        user_agent: userAgent,
        ip_hash,
      })
      .select('id')
      .single();

    if (insertError || !inserted) {
      console.error('Insert failed', insertError);
      return new Response(
        JSON.stringify({ error: 'Could not save your message. Please try again or email directly.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const submissionId = inserted.id;
    const referralDisplay =
      data.referral_source === 'Other' && data.referral_other
        ? `Other — ${data.referral_other}`
        : data.referral_source;

    // Try to send emails via Lovable Emails (send-transactional-email)
    // If not yet configured, submission is still stored and we return success.
    let emailStatus: 'emailed' | 'email_pending' | 'failed' = 'email_pending';
    let emailError: string | null = null;

    try {
      // Notification to Vanesa
      const notifyRes = await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'contact-notification',
          recipientEmail: NOTIFY_TO,
          idempotencyKey: `contact-notify-${submissionId}`,
          replyTo: data.email,
          templateData: {
            name: data.name,
            email: data.email,
            phone: data.phone || '',
            referral: referralDisplay,
            message: data.message,
            submittedAt: new Date().toISOString(),
          },
        },
      });

      // Confirmation to sender
      const confirmRes = await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'contact-confirmation',
          recipientEmail: data.email,
          idempotencyKey: `contact-confirm-${submissionId}`,
          templateData: {
            name: data.name,
          },
        },
      });

      if (notifyRes.error || confirmRes.error) {
        emailStatus = 'failed';
        emailError = `notify:${notifyRes.error?.message ?? 'ok'} confirm:${confirmRes.error?.message ?? 'ok'}`;
      } else {
        emailStatus = 'emailed';
      }
    } catch (err) {
      emailStatus = 'failed';
      emailError = err instanceof Error ? err.message : String(err);
      console.error('Email send failed', err);
    }

    await supabase
      .from('contact_submissions')
      .update({
        status: emailStatus,
        ...(emailError ? { user_agent: `${userAgent ?? ''} | email_err: ${emailError}`.slice(0, 500) } : {}),
      })
      .eq('id', submissionId);

    return new Response(JSON.stringify({ ok: true, id: submissionId }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('submit-contact-form error', err);
    return new Response(
      JSON.stringify({ error: 'Unexpected error. Please try again or email directly.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
