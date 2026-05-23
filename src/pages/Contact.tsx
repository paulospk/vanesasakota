import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="max-w-xl space-y-4 md:space-y-5 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Appointments
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              Booking & Enquiries
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7]">
              I see clients in person at my practice in the Sydney CBD. Whether you are seeking therapy for yourself or looking to make a clinical referral, please reach out by phone or email to discuss current availability.
            </p>
            <p className="text-muted-foreground/80 text-[13px] md:text-sm italic leading-[1.7]">
              Please note that I currently operate a waitlist for peak appointment times.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Contact
              </p>
            </div>
            <div className="lg:col-span-7 max-w-[640px] divide-y divide-border/60">
              <div className="flex items-baseline justify-between py-4 first:pt-0">
                <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Phone</p>
                <a href="tel:+61405933722" className="text-[15px] md:text-base text-foreground hover:opacity-60 transition-opacity">
                  0405 933 722
                </a>
              </div>
              <div className="flex items-baseline justify-between py-4">
                <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Email</p>
                <a
                  href="mailto:vanesa@vanesasakota.com.au"
                  className="text-[13px] md:text-base text-foreground hover:opacity-60 transition-opacity break-all text-right"
                >
                  vanesa@vanesasakota.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Structure */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Fees
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Fees & Structure
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px] space-y-10 md:space-y-12">

              {/* Fee items as editorial list */}
              <div className="divide-y divide-border/60">
                <div className="py-5 first:pt-0 space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg md:text-xl text-foreground">
                      Initial Consultation
                    </h3>
                    <p className="font-serif text-xl md:text-2xl text-foreground tabular-nums whitespace-nowrap">
                      $250
                    </p>
                  </div>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                    90 minutes
                  </p>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7] pt-1">
                    An extended first session to discuss your history, concern, and clarify the direction for our work together.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg md:text-xl text-foreground">
                      Ongoing Psychotherapy
                    </h3>
                    <p className="font-serif text-xl md:text-2xl text-foreground tabular-nums whitespace-nowrap">
                      $220
                    </p>
                  </div>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                    50 minutes
                  </p>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7] pt-1">
                    Regular sessions typically scheduled on a weekly or fortnightly basis.
                  </p>
                </div>
              </div>

              {/* Referrals & Rebates */}
              <div className="space-y-3">
                <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Referrals & Rebates</p>
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">
                  You do not need a GP referral or a Mental Health Care Plan to book. Because this practice operates independently of the Medicare system, our work is confidential and not restricted by a capped number of sessions or rigid treatment checklists.
                </p>
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">
                  Many major private health funds provide rebates for sessions with PACFA-registered clinical psychotherapists. Please check directly with your insurer to confirm if your specific policy covers psychotherapy.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div className="space-y-3">
                <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Cancellation Policy</p>
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">
                  Payment is settled at the time of your session. Because these hours are dedicated exclusively to your care, a minimum of 48 hours' notice is required for cancellations or rescheduling. This policy ensures fairness to those on the waitlist who are waiting for an opening; otherwise, the full session fee applies to late cancellations or missed appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
