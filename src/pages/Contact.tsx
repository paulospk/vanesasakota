import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
const vanesaPortrait = { url: "/images/vanesa-contact-2026.jpg" };

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact | Vanesa Sakota Psychotherapy Sydney CBD</title>
        <meta name="description" content="Book an in-person psychotherapy appointment with Vanesa Sakota in Sydney CBD. Located at BMA House, 135 Macquarie Street. No GP referral required. Call 0405 933 722." />
        <link rel="canonical" href="https://vanesasakota.com.au/contact" />
        <meta property="og:title" content="Contact | Vanesa Sakota Psychotherapy Sydney CBD" />
        <meta property="og:description" content="In-person psychotherapy appointments in Sydney CBD. BMA House, 135 Macquarie Street. No referral required." />
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
              I'm available for in person sessions on Mondays and Fridays in the city. Please feel free to contact me by email, and I will reply within 24 hours.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.6]">
              No GP referral or Mental Health Care Plan is required to book. If you have questions about fees or what to expect before your first session, visit the{" "}
              <Link to="/faqs" className="text-foreground hover:opacity-60 transition-opacity">
                FAQs page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-5 md:py-10">
          <div className="max-w-[640px] mx-auto lg:max-w-none lg:grid lg:grid-cols-10 lg:gap-8">
            <div className="lg:col-span-3 hidden lg:block" />
            <div className="lg:col-span-7 max-w-[640px] space-y-6">
              <figure className="w-full">
                <img
                            src={vanesaPortrait.url}
                  alt="Vanesa Sakota, psychotherapist in Sydney CBD"
                  className="w-full max-w-[360px] h-auto object-cover rounded-sm"
                  loading="lazy"
                />
              </figure>
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
                    href="mailto:vanesa@vanesasakota.com.au"
                    className="text-[13px] md:text-base text-foreground hover:opacity-60 transition-opacity break-all text-right"
                  >
                    vanesa@vanesasakota.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Crisis disclaimer */}
      <section className="bg-background">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-8 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
              As this is a private practice, I am unable to provide immediate crisis support, and messages are not checked continuously. If you are in distress and need urgent care, please prioritize your safety and reach out to Lifeline on 13 11 14, the NSW Mental Health Line on 1800 011 511, or call 000.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />

    </div>
  );
};

export default Contact;
