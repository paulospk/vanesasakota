import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact | Vanesa Sakota Psychotherapy Sydney CBD</title>
        <meta name="description" content="Contact Vanesa Sakota for in-person psychotherapy appointments in Sydney CBD. Reach out by phone or email for current availability, fees and referrals." />
        <link rel="canonical" href="https://vanesasakota.com.au/contact" />
        <meta property="og:title" content="Contact | Vanesa Sakota Psychotherapy" />
        <meta property="og:description" content="In-person psychotherapy appointments in Sydney CBD. Contact by phone or email." />
        <meta property="og:url" content="https://vanesasakota.com.au/contact" />
      </Helmet>
      <Navbar />


      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-16">
          <div className="max-w-xl space-y-3 md:space-y-5 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Contact
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              Appointments
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.6]">
              I offer in-person sessions at my practice in Sydney CBD. For inquiries regarding current availability, fees, or referrals, please reach out via phone or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-5 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Contact
              </p>
            </div>
            <div className="lg:col-span-7 max-w-[640px] space-y-3">
              <div className="divide-y divide-border/60">
                <div className="flex items-baseline justify-between py-3 first:pt-0">
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Phone</p>
                  <a href="tel:+61405933722" className="text-[15px] md:text-base text-foreground hover:opacity-60 transition-opacity">
                    0405 933 722
                  </a>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">Email</p>
                  <a
                    href="mailto:contact@vanesasakota.com.au"
                    className="text-[13px] md:text-base text-foreground hover:opacity-60 transition-opacity break-all text-right"
                  >
                    contact@vanesasakota.com.au
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.6]">
                You do not need a GP referral or a Mental Health Care Plan to book. Because this practice operates independently of the Medicare system, our work is confidential and not restricted to capped sessions.
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
