import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Appointments
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Booking & Enquiries
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              I see clients in person at my practice in the Sydney CBD. Whether you are seeking therapy for yourself or looking to make a clinical referral, please reach out by phone or email to discuss current availability.
            </p>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              Please note that I currently operate a waitlist for peak appointment times.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3"></div>
            <div className="lg:col-span-7 max-w-[680px] space-y-6">
              <div className="border-b border-border/60 pb-5">
                <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-2">Phone</p>
                <a href="tel:+61405933722" className="text-base md:text-lg text-foreground hover:opacity-70 transition-opacity">
                  0405 933 722
                </a>
              </div>
              <div className="border-b border-border/60 pb-5">
                <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:vanesa@vanesasakota.com.au"
                  className="text-base md:text-lg text-foreground hover:opacity-70 transition-opacity break-all"
                >
                  vanesa@vanesasakota.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Structure */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Fees
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Fees & Structure
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="border border-border bg-background p-6 flex flex-col gap-3">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    Initial Consultation
                  </h3>
                  <p className="text-base md:text-lg text-foreground/80 font-medium">
                    Duration: 90 minutes
                  </p>
                  <p className="font-serif text-3xl text-foreground">
                    $290
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.6] mt-auto">
                    An extended first session to complete a clinical intake, discuss your history, and clarify the direction for our work together.
                  </p>
                </div>
                <div className="border border-border bg-background p-6 flex flex-col gap-3">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    Ongoing Psychotherapy Session
                  </h3>
                  <p className="text-base md:text-lg text-foreground/80 font-medium">
                    Duration: 50 minutes
                  </p>
                  <p className="font-serif text-3xl text-foreground">
                    $240
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.6] mt-auto">
                    Regular sessions dedicated to your therapeutic process, typically scheduled on a weekly or fortnightly basis.
                  </p>
                </div>
              </div>

              {/* Referrals & Rebates */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-xl text-foreground">Referrals & Rebates</h3>
                <p className="text-muted-foreground leading-[1.8]">
                  You do not need a GP referral or a Mental Health Care Plan to book. Because this practice operates independently of the Medicare system, our work is confidential and not restricted by a capped number of sessions or rigid treatment checklists.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Many major private health funds provide rebates for sessions with PACFA-registered clinical psychotherapists. Please check directly with your insurer to confirm if your specific policy covers psychotherapy.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-xl text-foreground">Cancellation Policy</h3>
                <p className="text-muted-foreground leading-[1.8]">
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
