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
    question: "What can I expect in my first session?",
    answer:
      "Your first session is an opportunity for Vanesa to understand your background, current concerns, and what you hope to achieve through therapy. It's also a chance for you to ask questions and get a feel for whether the therapeutic relationship feels right. There's no pressure to share more than you're comfortable with — the first session is about building trust and establishing a foundation for the work ahead.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Standard sessions are 50 minutes in duration. Initial intake sessions may run slightly longer (up to 60 minutes) to allow time for a thorough assessment.",
  },
  {
    question: "How much does a session cost?",
    answer:
      "Sessions are $220 per hour. Please see the Fees page for information about Medicare rebates and private health insurance.",
  },
  {
    question: "Do you offer Medicare rebates?",
    answer:
      "If you have a Mental Health Treatment Plan (MHTP) from your GP, you may be eligible for a Medicare rebate. The rebate amount is set by Medicare and the gap payment will be the difference between the session fee and the rebate. Please speak with your GP about obtaining a referral.",
  },
  {
    question: "Can I claim through private health insurance?",
    answer:
      "Depending on your level of cover, you may be able to claim a portion of the session fee through your private health insurer under 'counselling' or 'psychotherapy.' Vanesa can provide you with a receipt that includes all the details needed for claiming. Please check with your insurer for specific coverage details.",
  },
  {
    question: "How often should I attend sessions?",
    answer:
      "This depends on your individual needs and goals. Many clients begin with weekly sessions and gradually reduce frequency as they progress. Vanesa will work with you to find a schedule that feels supportive without being overwhelming.",
  },
  {
    question: "Is everything I say confidential?",
    answer:
      "Yes. Confidentiality is a cornerstone of the therapeutic relationship. Everything discussed in sessions remains strictly confidential, with very limited exceptions required by law — such as an immediate risk of harm to yourself or others, or mandatory reporting obligations. Vanesa will explain these boundaries clearly at the start of therapy.",
  },
  {
    question: "What therapeutic approaches does Vanesa use?",
    answer:
      "Vanesa uses an integrative approach, drawing on Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), psychodynamic psychotherapy, and person-centred counselling. She tailors her approach to suit each client's unique needs and preferences.",
  },
  {
    question: "Do you offer online or telehealth sessions?",
    answer:
      "Yes. Vanesa offers both in-person and telehealth (video) sessions. Telehealth sessions are conducted via a secure video platform and are available for clients who prefer the convenience of attending from home or who are unable to attend in person.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "A minimum of 24 hours' notice is required to cancel or reschedule an appointment. Late cancellations or missed appointments (no-shows) will be charged the full session fee. This policy ensures that appointment times can be offered to other clients in need.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can benefit anyone — you don't need to be in crisis to seek support. If you're feeling stuck, overwhelmed, anxious, or simply want to understand yourself better, therapy can provide valuable tools and perspective. If you're unsure, you're welcome to reach out for an initial conversation before committing to a session.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-4">
              FAQs
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about therapy sessions, pricing, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
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
