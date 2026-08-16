import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
  link?: { text: string; href: string };
};

const faqs: FAQ[] = [
  {
    question: "Do I need a referral or Mental Health Care Plan to see you?",
    answer:
      "No, you don't need a referral to see me. If you do have a referral from your GP or specialist - it is most welcome and I will keep your referrer informed of our progress if you wish.",
  },
  {
    question: "Can therapy actually help with physical symptoms?",
    answer:
      "Yes - there's strong research behind it. Many chronic symptoms, including pelvic pain, sensitive skin conditions, and persistent fatigue, are shaped by the nervous system and emotional patterns. Therapy that works with both the mind and body can lead to meaningful change and improve quality of life.",
  },
  {
    question: "What does a session actually look like?",
    answer:
      "Sessions are 50 minutes. The first session however is a longer appointment to discuss what brings you to therapy and to cover your history. You'll always know what we're doing and why.",
  },
  {
    question: "How often should I attend sessions?",
    answer:
      "For most people, weekly sessions are recommended in the early stages of therapy, particularly when working with chronic symptoms or trauma. As things shift, sessions typically move to fortnightly or as needed. This is something we can discuss and adjust.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I ask for at least 48 hours notice to cancel or reschedule a session. Late cancellations or missed appointments may be charged at the full session rate.",
  },
  {
    question: "Do you work with social anxiety or generalised anxiety, not just trauma?",
    answer:
      "Yes. A lot of the people I see aren't coming from a single traumatic event - they're dealing with generalised anxiety, or a persistent social anxiety that's made everyday situations like meetings, dating or socialising feel exhausting. We work with the patterns underneath it, not just the worry on the surface.",
  },
  {
    question: "Do you offer counselling for teenagers?",
    answer:
      "Yes. I see older teenagers (16+) for anxiety, social anxiety, family stress and life transitions, alongside my existing adult caseload. If you're not sure whether your teenager's situation is a fit, reach out and we can talk it through before booking.",
  },
  {
    question: "Do you offer addiction counselling?",
    answer:
      "I work with adults navigating addictive patterns - alcohol, substances, or compulsive behaviours - as part of a broader picture of stress and emotional regulation, rather than a standalone addiction program. If you're not sure whether your situation is a fit, reach out and we can talk it through before booking.",
  },
  {
    question: "Do you treat vaginismus?",
    answer:
      "Yes. Vaginismus is often psychophysiological: it has a strong nervous-system and emotional component alongside the physical one, and I work with it through that lens, alongside, not instead of, any medical or pelvic health treatment you're already receiving. For a lot of clients, it's also tied up with boundaries, the body holding a \"no\" that hasn't been able to be expressed or heard elsewhere, whether that's in a relationship, a past experience, or just difficulty asserting yourself more broadly. We work with that layer alongside the physical symptoms. Many clients see me in parallel with a pelvic health physiotherapist or GP.",
  },
  {
    question: "Can therapy help with chronic fatigue?",
    answer:
      "Often, yes. Persistent fatigue is frequently tied to a nervous system stuck in a stress response, even when it doesn't feel like 'stress' day to day. Therapy won't replace medical investigation if that hasn't happened yet, but it can meaningfully ease the fatigue that's driven by chronic stress and unresolved emotional patterns.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Psychotherapy FAQs | Anxiety, PTSD, Chronic Pain &amp; Phobia</title>
        <meta name="description" content="Common questions about therapy for anxiety, PTSD, phobia, vaginismus, chronic pain and chronic fatigue with Vanesa Sakota in Sydney CBD." />
        <meta name="keywords" content="anxiety therapy Sydney, PTSD treatment Sydney, vaginismus treatment, chronic fatigue therapy, chronic pain therapy, phobia therapy Sydney, social anxiety disorder therapy, teenage counselling Sydney" />
        <link rel="canonical" href="https://www.vanesasakota.com.au/faqs" />
        <meta property="og:title" content="Psychotherapy FAQs | Anxiety, PTSD, Chronic Pain &amp; Phobia" />
        <meta property="og:description" content="Common questions about therapy for anxiety, PTSD, phobia, vaginismus, chronic pain and chronic fatigue with Vanesa Sakota in Sydney CBD." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/faqs" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />


      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="max-w-xl space-y-2 md:space-y-4 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              FAQs
            </p>
            <h1 className="font-serif text-2xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              Common Questions
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-[1.7]">
              A few things people often want to know. If your question isn't here, please reach out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <div className="max-w-[640px]">
            <h2 className="sr-only">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-serif text-sm md:text-base text-foreground hover:no-underline py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                    {faq.link && (
                      <Link to={faq.link.href} className="block mt-2 text-sm underline underline-offset-2 hover:opacity-60 transition-opacity">
                        {faq.link.text}
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default FAQs;
