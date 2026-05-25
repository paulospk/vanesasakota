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
    question: "Do I need a GP referral or Mental Health Care Plan to see you?",
    answer:
      "No. You can book directly without a referral. A Mental Health Care Plan is not required. If you do have a referral from your GP or specialist - it is most welcome and I will keep your referrer informed of our progress, if you wish - however the referral itself is not a requirement.",
  },
  {
    question: "Can therapy actually help with physical symptoms?",
    answer:
      "Yes — and there's strong research behind it. Many chronic symptoms, including pelvic pain, sensitive skin conditions, and persistent fatigue, are shaped by the nervous system and emotional patterns held in the body. Therapy that works with both the mind and body can lead to real, lasting change, especially when medical treatment has reached its limits.",
  },
  {
    question: "What does a session actually look like?",
    answer:
      "Sessions are 50 minutes. The first session however is a longer appointment to discuss what brings you to therapy and to cover your history. You'll always know what we're doing and why.",
  },
  {
    question: "How often should I attend sessions?",
    answer:
      "For most people, weekly sessions are recommended in the early stages of therapy, particularly when working with chronic symptoms or trauma. As things shift, sessions typically move to fortnightly. This is something we will discuss and adjust based on where you are and what you are working toward.",
  },
  {
    question: "How long will I need to be in therapy?",
    answer:
      "This depends on what you are bringing and what you are hoping to achieve. Some people notice meaningful change within a few months. Others are working with more complex or longstanding presentations and benefit from longer-term support. I will always be transparent about this as we go, and the decision about how long to continue is always yours.",
  },
  {
    question: "Is everything confidential?",
    answer:
      "Yes, with the standard exceptions required by law. Confidentiality would only be broken if there were serious concerns about your safety or the safety of another person, or if required by a court order. Everything else stays between us. I practise in accordance with the PACFA Code of Ethics 2017. If you ever have a concern about the service you have received, you are welcome to raise it with me directly or contact PACFA via pacfa.org.au.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "I draw on Clinical Resource Therapy, Brainspotting, and Cognitive Behavioural Therapy. I tailor the approach to each person - and explain things as we go. There is no physical contact involved.",
  },
  {
    question: "I am a clinician - how do I refer a patient?",
    answer: (
      <>
        You are welcome to contact me directly by phone or email to discuss whether a referral is appropriate. I am happy to provide brief case consultation before a referral is made, and to liaise with you regarding shared patients where that is helpful. A formal referral letter is not required, though it is welcome. Contact:{" "}
        <a href="mailto:contact@vanesasakota.com.au" className="underline hover:no-underline">contact@vanesasakota.com.au</a>
        {" "}| 0405 933 722
      </>
    ),
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
