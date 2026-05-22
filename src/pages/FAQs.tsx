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
    question: "Do I need a GP referral or Mental Health Treatment Plan to see you?",
    answer:
      "No. You can book directly without a referral. A Mental Health Treatment Plan is not required and there is no waiting list. If you do have a referral from your GP or specialist, that is welcome, but it is not a prerequisite.",
  },
  {
    question: "Can therapy actually help with physical symptoms?",
    answer:
      "Yes — and there's strong research behind it. Many chronic symptoms, including pelvic pain, sensitive skin conditions, and persistent fatigue, are shaped by the nervous system and emotional patterns held in the body. Therapy that works with both the mind and body can lead to real, lasting change, especially when medical treatment has reached its limits.",
  },
  {
    question: "What does a session actually look like?",
    answer:
      "Sessions are 50 minutes, currently online via Zoom. The first session is a longer conversation about what brings you here and what you're hoping for. After that, sessions are collaborative — sometimes conversational, sometimes using body-based techniques like Brainspotting. You'll always know what we're doing and why.",
  },
  {
    question: "How much does it cost and are there rebates?",
    answer:
      "The initial consultation is $250. Subsequent sessions are $180. You do not need a Mental Health Treatment Plan to access my services. Private health rebates may apply depending on your level of cover - please check with your provider before your first session.",
  },
  {
    question: "Do you offer Medicare rebates?",
    answer:
      "Not currently. Medicare rebates for psychology services require registration as a psychologist. As a registered psychotherapist and counsellor, I am not Medicare-registered. Some private health funds do cover psychotherapy - it is worth checking your policy.",
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
      "I draw on Clinical Resource Therapy, Brainspotting, and Cognitive Behavioural Therapy. Some of this work is conversational; some works more directly with the body and nervous system. I tailor the approach to each person — and explain things as we go.",
  },
  {
    question: "I am a clinician - how do I refer a patient?",
    answer: (
      <>
        You are welcome to contact me directly by phone or email to discuss whether a referral is appropriate. I am happy to provide brief case consultation before a referral is made, and to liaise with you regarding shared patients where that is helpful. A formal referral letter is not required, though it is welcome. Contact:{" "}
        <a href="mailto:vanesa@vanesasakota.com.au" className="underline hover:no-underline">vanesa@vanesasakota.com.au</a>
        {" "}· 0405 933 722
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
    <div className="min-h-screen bg-hero">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-4">
              FAQs
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Common questions
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              A few things people often want to know. If yours isn't here, please reach out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-serif text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <FooterSection />
    </div>
  );
};

export default FAQs;
