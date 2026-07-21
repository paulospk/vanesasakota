import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = "https://znzjbtfydmblmzlaqkka.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuempidGZ5ZG1ibG16bGFxa2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTExNDQsImV4cCI6MjA5NTI2NzE0NH0.QXM0amG0tM_gbR9BVG1j_-UUzl08b7H_546mJyBJ1lc";

type State =
  | "validating"
  | "ready"
  | "already"
  | "invalid"
  | "submitting"
  | "success"
  | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("validating");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } },
        );
        const data = await res.json();
        if (res.ok && data.valid) setState("ready");
        else if (data?.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke(
      "handle-email-unsubscribe",
      { body: { token } },
    );
    if (error) setState("error");
    else if (data?.success) setState("success");
    else if (data?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="font-serif text-3xl text-foreground">Unsubscribe</h1>

          {state === "validating" && (
            <p className="text-muted-foreground">Checking your link…</p>
          )}

          {state === "ready" && (
            <>
              <p className="text-muted-foreground">
                Confirm you'd like to unsubscribe from emails sent by
                vanesasakota.com.au.
              </p>
              <Button onClick={confirm}>Confirm unsubscribe</Button>
            </>
          )}

          {state === "submitting" && (
            <p className="text-muted-foreground">Processing…</p>
          )}

          {state === "success" && (
            <p className="text-foreground">
              You've been unsubscribed. You won't receive further emails from
              this address.
            </p>
          )}

          {state === "already" && (
            <p className="text-foreground">
              This address has already been unsubscribed.
            </p>
          )}

          {state === "invalid" && (
            <p className="text-muted-foreground">
              This unsubscribe link is invalid or has expired.
            </p>
          )}

          {state === "error" && (
            <p className="text-muted-foreground">
              Something went wrong. Please try again or email
              vanesa@vanesasakota.com.au.
            </p>
          )}
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Unsubscribe;
