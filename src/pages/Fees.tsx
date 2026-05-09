import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Fees
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Sessions & fees
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              Simple, transparent pricing. No referral or mental health plan needed.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Rows */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32 border-b border-border">
        <div className="border-t border-border">
          <div className="py-10 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="max-w-[55ch]">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">Initial consultation</h2>
                <p className="text-sm text-muted-foreground mt-2">90 minutes</p>
                <p className="text-muted-foreground mt-3 leading-[1.8]">
                  A longer first session to talk through what's been happening, your history, and what you're hoping for.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-serif text-3xl text-foreground">$250</p>
              </div>
            </div>
          </div>

          <div className="py-10 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="max-w-[55ch]">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">Ongoing sessions</h2>
                <p className="text-sm text-muted-foreground mt-2">50 minutes</p>
                <p className="text-muted-foreground mt-3 leading-[1.8]">
                  Standard weekly or fortnightly sessions.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-serif text-3xl text-foreground">$180</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Good to know
            </p>
          </div>
          <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground leading-[1.8]">
            <p>
              You don't need a GP referral or Mental Health Treatment Plan. Private health rebates may apply depending on your cover — worth checking with your provider.
            </p>
            <p>
              Payment is taken at the time of each session by card, bank transfer, or cash.
            </p>
            <p>
              I ask for at least <span className="text-foreground font-medium">48 hours notice</span> to reschedule. Late cancellations or missed sessions are charged at the full session fee.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Fees;
