import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-4">
              Fees
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Session Fees & Payment
            </h1>
            <p className="text-muted-foreground text-lg">
              Transparent pricing with options for Medicare rebates and private health insurance claims.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="border border-border bg-card">
          <div className="p-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl text-foreground">Individual Psychotherapy Session</h2>
                <p className="text-sm text-muted-foreground mt-1">50-minute session</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-3xl text-foreground">$220</p>
                <p className="text-sm text-muted-foreground">per session</p>
              </div>
            </div>
          </div>

          <div className="p-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl text-foreground">Initial Intake Session</h2>
                <p className="text-sm text-muted-foreground mt-1">Up to 60 minutes — comprehensive assessment</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-3xl text-foreground">$220</p>
                <p className="text-sm text-muted-foreground">per session</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicare */}
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-4">Medicare Rebates</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 max-w-[65ch]">
              <p>
                If you have a valid <strong className="text-foreground">Mental Health Treatment Plan (MHTP)</strong> from your GP, you may be eligible for a Medicare rebate for up to 10 sessions per calendar year.
              </p>
              <p>
                The current Medicare rebate for counselling/psychotherapy sessions is approximately <strong className="text-foreground">$93.35</strong> per session (subject to change — check the MBS schedule for current rates). The remaining gap of approximately <strong className="text-foreground">$126.65</strong> is payable at the time of the session.
              </p>
              <h3 className="font-serif text-lg text-foreground pt-2">How to access a Medicare rebate:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Visit your GP and request a Mental Health Treatment Plan (MHTP).</li>
                <li>Your GP will provide a referral specifying the number of approved sessions.</li>
                <li>Bring your referral and Medicare card to your first appointment with Vanesa.</li>
                <li>After each session, Vanesa will process the Medicare claim or provide a receipt for you to submit via the Medicare app or office.</li>
              </ol>
            </div>
          </div>

          {/* Private Health */}
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-4">Private Health Insurance</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 max-w-[65ch]">
              <p>
                Depending on your level of cover and insurer, you may be able to claim a portion of the session fee under <strong className="text-foreground">'counselling'</strong> or <strong className="text-foreground">'psychotherapy'</strong> on your extras cover.
              </p>
              <p>
                Vanesa will provide you with a detailed receipt containing her provider details, which you can submit to your insurer for reimbursement. Please check with your private health fund to confirm your eligibility and rebate amount.
              </p>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-4">Payment Methods</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 max-w-[65ch]">
              <p>
                Payment is required at the time of each session. Accepted payment methods include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Credit or debit card (Visa, Mastercard, AMEX)
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Bank transfer (EFT)
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Cash
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <div className="mt-12 border border-border bg-accent/30 p-8">
          <h3 className="font-serif text-lg text-foreground mb-3">Cancellation Policy</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A minimum of <strong className="text-foreground">24 hours' notice</strong> is required to cancel or reschedule an appointment. Late cancellations or missed appointments will be charged the full session fee of $220.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/#book"
            className="inline-block bg-foreground text-card px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Session
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Fees;
