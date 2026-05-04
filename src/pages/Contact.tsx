import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().trim().nonempty({ message: "First name is required" }).max(80),
  lastName: z.string().trim().nonempty({ message: "Last name is required" }).max(80),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().nonempty({ message: "Message cannot be empty" }).max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0]?.message ?? "Some fields are invalid.",
        variant: "destructive",
      });
      return;
    }

    const { firstName, lastName, email, phone, message } = result.data;
    const subject = `Enquiry from ${firstName} ${lastName}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:vanesa@vanesasakota.com.au?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputClasses =
    "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";
  const labelClasses =
    "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Whether you are a prospective client or a referring clinician, I welcome your enquiry. Please reach out using the form below or contact me directly by phone or email. I respond to all enquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Contact Details</h2>
          </div>
          <div className="lg:col-span-8 space-y-3 text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Location</h2>
          </div>
          <div className="lg:col-span-8 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              I currently work online via Zoom, offering sessions to clients across Australia. I am actively establishing permanent consulting rooms in Sydney's Eastern Suburbs and CBD, with a location to be confirmed in 2026. This page will be updated when a location is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Send a Message */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Send a Message</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[40ch]">
              Submitting this form will open your email application with the message pre-filled.
            </p>
          </div>
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    maxLength={80}
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    maxLength={80}
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone number <span className="normal-case font-normal text-muted-foreground/70">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <button
                type="submit"
                className="border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-card transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* For Referring Clinicians */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">For Referring Clinicians</h2>
          </div>
          <div className="lg:col-span-8 text-muted-foreground leading-relaxed max-w-[65ch]">
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
