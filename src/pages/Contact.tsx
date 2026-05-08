import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Whether you are a prospective client or a referring clinician, I welcome your enquiry. The best way to reach me is directly by phone or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-foreground mb-4">Contact Details</h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>The best way to get in touch is directly.</p>
            <p>
              <span className="text-foreground font-medium">Phone:</span>{" "}
              <a href="tel:+61405933722" className="hover:underline">0405 933 722</a>
            </p>
            <p>
              <span className="text-foreground font-medium">Email:</span>{" "}
              <a href="mailto:vanesa@vanesasakota.com.au" className="hover:underline">
                vanesa@vanesasakota.com.au
              </a>
            </p>
            <p>I respond to all enquiries within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-6 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-foreground mb-4">Location</h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              I currently work online via Zoom, offering sessions to clients across Australia. I am actively establishing permanent consulting rooms in Sydney's Eastern Suburbs and CBD, with a location to be confirmed in 2026. This page will be updated when a location is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* For Referring Clinicians */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-6 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-foreground mb-4">For Referring Clinicians</h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              If you are a GP, gynaecologist, dermatologist, physiotherapist, or other specialist seeking a psychotherapeutic partner for a patient, I am happy to speak with you directly before a referral is made. Please call or email to arrange a brief consultation.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
