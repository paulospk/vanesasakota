import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const enquirySchema = z.object({
  firstName: z.string().trim().nonempty({ message: "First name is required" }).max(100),
  lastName: z.string().trim().nonempty({ message: "Last name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().nonempty({ message: "Message is required" }).max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const { firstName, lastName, email, message } = result.data;
    const subject = encodeURIComponent(`Enquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:vanesa@vanesasakota.com.au?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email", description: "Your enquiry has been prepared in your email client." });
  };

  return (
    <div className="min-h-screen bg-background">
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
              I see clients in person in Sydney CBD. For appointments, referrals, fees and availability please contact me by phone, email, or the enquiry form below.
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
                    href="mailto:vanesa@vanesasakota.com.au"
                    className="text-[13px] md:text-base text-foreground hover:opacity-60 transition-opacity break-all text-right"
                  >
                    vanesa@vanesasakota.com.au
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.6]">
                You do not need a GP referral or a Mental Health Care Plan to book. Because this practice operates independently of the Medicare system, our work is confidential and not restricted by capped sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Enquiry
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Send a Message
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px]">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      maxLength={100}
                      required
                      className="border-foreground/20 bg-white/60"
                    />
                    {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      maxLength={100}
                      required
                      className="border-foreground/20 bg-white/60"
                    />
                    {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    required
                    className="border-foreground/20 bg-white/60"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={2000}
                    rows={6}
                    required
                    className="border-foreground/20 bg-white/60"
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <FooterSection />
    </div>
  );
};

export default Contact;
