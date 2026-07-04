import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQs | Vanesa Sakota Psychotherapy Sydney CBD</title>
        <meta name="description" content="Common questions about seeing Vanesa Sakota for psychotherapy in Sydney CBD — no GP referral needed, fees, session length, confidentiality and whether therapy helps physical symptoms." />
        <link rel="canonical" href="https://vanesasakota.com.au/faqs" />
        <meta property="og:title" content="FAQs | Vanesa Sakota Psychotherapy Sydney CBD" />
        <meta property="og:description" content="Common questions about psychotherapy with Vanesa Sakota — referrals, fees, session structure and working with physical symptoms." />
        <meta property="og:url" content="https://vanesasakota.com.au/faqs" />
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
              Common questions
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-[1.7]">
              A few things people often want to know. If your question isn't here, please reach out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="mb-5 md:mb-8">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground mb-1">
              Questions
            </p>
            <h2 className="font-serif text-xl md:text-3xl text-foreground tracking-tight leading-tight">
              Frequently Asked
            </h2>
          </div>
          <div className="max-w-[640px]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-serif text-sm md:text-base text-foreground hover:no-underline py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
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
