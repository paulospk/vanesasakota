import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Anxiety & Stress",
    description:
      "Vanesa helps clients identify and manage anxiety symptoms using evidence-based techniques such as CBT and ACT. Whether it's generalised anxiety, social anxiety, or panic attacks, she works with you to build practical coping strategies and reduce avoidance behaviours.",
  },
  {
    title: "Depression & Low Mood",
    description:
      "Through a combination of cognitive and interpersonal approaches, Vanesa supports clients experiencing persistent sadness, loss of motivation, or feelings of hopelessness. Together, you'll work toward understanding underlying patterns and re-engaging with activities that bring meaning.",
  },
  {
    title: "Relationship & Interpersonal Issues",
    description:
      "Vanesa assists individuals navigating difficulties in their relationships — whether romantic, familial, or professional. Sessions focus on improving communication, setting healthy boundaries, and understanding relational dynamics.",
  },
  {
    title: "Trauma & PTSD",
    description:
      "Using trauma-informed approaches, Vanesa provides a safe space for processing distressing experiences. She integrates psychodynamic and somatic awareness techniques to help clients move through trauma at their own pace.",
  },
  {
    title: "Grief & Loss",
    description:
      "Vanesa supports clients through all forms of loss — bereavement, relationship breakdowns, career changes, or other major life transitions. Therapy provides space to process emotions and find a path forward.",
  },
  {
    title: "Self-Esteem & Personal Growth",
    description:
      "For those looking to build confidence, explore identity, or simply understand themselves better, Vanesa offers a reflective and empowering therapeutic experience focused on self-compassion and personal development.",
  },
  {
    title: "Burnout & Work-Related Stress",
    description:
      "Vanesa works with professionals experiencing burnout, workplace conflict, or career-related stress. Sessions focus on identifying stressors, restoring work-life balance, and developing sustainable wellbeing practices.",
  },
  {
    title: "Life Transitions",
    description:
      "Major life changes — such as moving, starting a new job, becoming a parent, or retirement — can be overwhelming. Vanesa helps clients adapt, find clarity, and embrace new chapters with resilience.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-4">
              Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              How Vanesa Can Help
            </h1>
            <p className="text-muted-foreground text-lg">
              Vanesa offers individual psychotherapy and counselling for adults across a range of concerns. Every session is tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-card p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Ready to Take the First Step?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Reaching out is an act of courage. Vanesa is here to support you on your journey toward greater wellbeing.
          </p>
          <Link
            to="/#book"
            className="inline-block bg-foreground text-card px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Session
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
