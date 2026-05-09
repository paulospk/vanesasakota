import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Get in touch
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              Whether you're considering therapy for yourself or making a referral, I'd be glad to hear from you. The easiest way to reach me is by phone or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Details
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">How to reach me</h2>
            </div>
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
              <p className="text-muted-foreground leading-[1.8]">
                I respond to all enquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Where
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">Location</h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] text-muted-foreground leading-[1.8]">
              <p>
                Sessions are currently online via Zoom, available across Australia. Consulting rooms in Sydney's Eastern Suburbs and CBD are coming in 2026.
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
