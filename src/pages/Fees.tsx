import FooterSection from "@/components/FooterSection";
const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Fees
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-3">
              Session Fees & Payment
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Transparent pricing designed to keep professional support accessible and straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Rows */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="border-t border-border">
          <div className="py-10 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="max-w-[65ch]">
                <h2 className="font-serif text-xl text-foreground">Initial Consultation & Intake</h2>
                <p className="text-base md:text-lg text-foreground/80 font-medium mt-2">90-minute comprehensive assessment</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Our first session is extended to allow for a thorough exploration of your history, current symptoms, and your goals for therapy. This provides the necessary space to establish a foundation for our work together.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-serif text-3xl text-foreground">$250</p>
                <p className="text-sm text-muted-foreground">per session</p>
              </div>
            </div>
          </div>

          <div className="py-10 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="max-w-[65ch]">
                <h2 className="font-serif text-xl text-foreground">Ongoing Psychotherapy Session</h2>
                <p className="text-base md:text-lg text-foreground/80 font-medium mt-2">50-minute session</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Standard sessions focused on your therapeutic process and long-term resolution.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-serif text-3xl text-foreground">$180</p>
                <p className="text-sm text-muted-foreground">per session</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
          You do not need a Mental Health Treatment Plan or a GP referral to see me. You can book directly. Private health rebates may apply depending on your level of cover - please check with your provider.
        </p>

        {/* Professional Registration */}
        <div className="mt-16 md:mt-20 space-y-12">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Registration
            </p>
            <h2 className="font-serif text-2xl text-foreground mb-4">Professional Registration & Fees</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 max-w-[65ch]">
              <p>
                I am a <strong className="text-foreground">Registered Psychotherapist with the Psychotherapy and Counselling Federation of Australia (PACFA)</strong>.
              </p>
              <p>
                My fees are set to ensure specialized care remains sustainable, comparable to typical gap fees for psychology services.
              </p>
              <p>
                This ensures that high-quality care remains financially sustainable for you without the requirement of a GP referral or a formal mental health care plan.
              </p>
            </div>
          </div>

          {/* Payment */}
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Payment
            </p>
            <h2 className="font-serif text-2xl text-foreground mb-4">Payment Methods</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 max-w-[65ch]">
              <p>
                Payment is required at the time of each session. Accepted payment methods include:
              </p>
              <ul className="space-y-2 text-sm">
                <li>· Credit or Debit Card (Visa, Mastercard)</li>
                <li>· Bank Transfer (EFT)</li>
                <li>· Cash</li>
              </ul>
            </div>
          </div>

          {/* Cancellation */}
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Policy
            </p>
            <h2 className="font-serif text-2xl text-foreground mb-4">Cancellation Policy</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3 max-w-[65ch]">
              <p>
                I ask for at least <strong className="text-foreground">48 hours notice</strong> to cancel or reschedule a session. This allows the time to be offered to someone else. Late cancellations or missed appointments will be charged at the full session fee — $180 for standard sessions and $250 for the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Fees;
