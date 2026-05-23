import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const sessions = [
  {
    title: "Initial Consultation",
    length: "90 minutes",
    fee: "$250",
    note: "An extended first session, allowing time for a thorough history and a clear understanding of your presenting concerns.",
  },
  {
    title: "Ongoing Psychotherapy Session",
    length: "50-minute session",
    fee: "$220",
    note: "Standard therapy session for ongoing clinical work, conducted weekly or fortnightly as appropriate.",
  },
];

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
              Booking & enquiries
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              I am currently seeing clients online via Zoom, available across Australia. Whether you're considering therapy for yourself or making a referral, I'd be glad to hear from you. The easiest way to reach me is by phone or email.
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

      {/* Session Fees */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Fees
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Session fees &amp; payment
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {sessions.map((s) => (
                  <div
                    key={s.title}
                    className="border border-border bg-background p-6 flex flex-col gap-3"
                  >
                    <h3 className="font-serif text-xl text-foreground leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/80 font-medium">
                      {s.length}
                    </p>
                    <p className="font-serif text-3xl text-foreground">
                      {s.fee}
                    </p>
                    {s.note && (
                      <p className="text-sm text-muted-foreground leading-[1.6] mt-auto">
                        {s.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-[1.8]">
                You do not need a Mental Health Care Plan or a GP referral to see me. You can book directly. Private health rebates may apply depending on your level of cover — please check with your provider.
              </p>
              <p className="text-sm text-muted-foreground leading-[1.8]">
                Payment is required at the time of session. A minimum of 48 hours' notice is required for cancellations or rescheduling; the full session fee applies for late cancellations or missed appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
