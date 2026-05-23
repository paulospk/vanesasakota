import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type Section = {
  number: string;
  title: string;
  paragraphs: { heading?: string; body: string }[];
};

const sections: Section[] = [
  {
    number: "01",
    title: "The Foundational Link: Adverse Childhood Experiences (ACEs)",
    paragraphs: [
      {
        heading: "The Research | The CDC-Kaiser Permanente ACE Study",
        body: "This landmark epidemiological study evaluated over 17,000 participants, tracking the direct relationship between early life adversity (such as chronic stress, abuse, neglect, or household dysfunction) and adult medical outcomes.",
      },
      {
        heading: "The Physical Footprint",
        body: "Early life stress fundamentally alters adult biology. There is a direct, dose-response relationship between the amount of childhood adversity experienced and the likelihood of developing chronic physical illness in adulthood.",
      },
      {
        heading: "Elevated Risk Profile",
        body: "Individuals with higher ACE scores show statistically significant, higher rates of chronic pain, autoimmune conditions, and chronic fatigue.",
      },
      {
        heading: "An Independent Cause",
        body: "This link persists even when controlling for health behaviours like smoking, diet, or alcohol use, proving that adversity itself directly alters long-term physiological development.",
      },
    ],
  },
  {
    number: "02",
    title: "Biological Pathways: Psychoneuroimmunology (PNI)",
    paragraphs: [
      {
        heading: "The Research | Neuroendocrine-Immune System Dysregulation",
        body: "Contemporary research in PNI examines how prolonged psychological stress directly signals the nervous system, the endocrine (hormone) system, and the immune system.",
      },
      {
        heading: "System-Wide Inflammation",
        body: "Chronic stress forces the nervous system to remain in a state of perpetual threat. This tells the immune system to continuously release pro-inflammatory proteins (cytokines).",
      },
      {
        heading: "Sensitised Pain Pathways",
        body: "Prolonged inflammation can result in peripheral sensitisation, causing widespread muscle tension, increased sensitivity to pain, and chronic tissue distress.",
      },
      {
        heading: "Hormonal Imbalance",
        body: "Chronic arousal alters cortisol production, which directly impairs the body's natural ability to regulate sleep, digestion, and systemic healing.",
      },
    ],
  },
  {
    number: "03",
    title: "Somatic Protection: Pelvic Health & Autonomic Bracing",
    paragraphs: [
      {
        heading: "The Research | Neuromuscular Guarding & Autonomic Defense Responses",
        body: "Clinical trials exploring functional pelvic pain conditions (such as vaginismus, vulvodynia, and chronic pelvic pain) look at how the autonomic nervous system commands muscle tissue.",
      },
      {
        heading: "The Pelvic Floor as a Shield",
        body: "The muscles of the pelvic floor are highly sensitive to autonomic defense states (fight, flight, or freeze). When the nervous system perceives threat or vulnerability, it can trigger an involuntary, chronic bracing pattern in these tissues.",
      },
      {
        heading: "Persistent Muscular Memory",
        body: "Long after an initial injury heals or a stressful event passes, the nervous system can keep pelvic muscles locked in a defensive, hyper-toned state.",
      },
      {
        heading: "De-Escalating the Guarding",
        body: "Physical recovery depends on signalling safety to the autonomic nervous system to deactivate this deep muscular shielding pattern.",
      },
    ],
  },
  {
    number: "04",
    title: "The Brain-Skin Axis: Psychodermatological Manifestations",
    paragraphs: [
      {
        heading: "The Research | Embryonic Origins and Cutaneous Neuropeptides",
        body: "Dermatological and neurobiological research investigates why stress directly provokes cutaneous flare-ups in conditions like eczema, psoriasis, stress-related hair loss, and vitiligo.",
      },
      {
        heading: "A Shared Cellular Origin",
        body: "In the womb, human skin and the nervous system develop from the exact same embryonic layer (the ectoderm). They remain intrinsically connected throughout life.",
      },
      {
        heading: "Neurogenic Inflammation",
        body: "Under psychological stress, the brain releases specific chemical messengers (neuropeptides) directly into the skin. This triggers localised inflammation, weakens the skin barrier, and initiates flare-ups.",
      },
      {
        heading: "Bi-Directional Feedback",
        body: "Because the skin behaves as a literal mirror of the autonomic nervous system, working directly with nervous system regulation helps reduce the frequency and severity of stress-responsive skin flares.",
      },
    ],
  },
  {
    number: "05",
    title: "Amplified Signalling: Central Sensitisation",
    paragraphs: [
      {
        heading: "The Research | Neural Plasticity and Maladaptive Processing",
        body: "Studies on the central nervous system demonstrate how the brain and spinal cord process everyday sensory data after periods of chronic stress or trauma.",
      },
      {
        heading: "The Faulty Volume Control",
        body: "In functional and psychophysiological symptoms, the central nervous system undergoes a process called central sensitisation. The spinal cord and brain turn up the volume on regular bodily signals.",
      },
      {
        heading: "Real Pain, Intact Structure",
        body: "Normal sensory inputs, like mild touch, temperature shifts, or natural digestion, are misprocessed by the hypersensitive nervous system and registered as severe pain or distress.",
      },
      {
        heading: "A Software Distortion",
        body: "The symptoms are completely real, but they are a functional software processing error in the nervous system rather than a structural hardware defect (like a broken bone). Because the nervous system is neuroplastic, this processing loop can be systematically retrained and turned back down.",
      },
    ],
  },
  {
    number: "06",
    title: "The Whole-Person Lens: Relational & Biopsychosocial Healing",
    paragraphs: [
      {
        body: "We cannot look at physical symptoms in isolation. True recovery requires a biopsychosocial lens, meaning we look at the interaction between your biological health, your internal psychology, and your social or relational environment.",
      },
      {
        body: "Furthermore, because chronic stress and nervous system dysregulation often develop within challenging relational contexts, true biological healing must also happen in a relational space. A hyper-vigilant nervous system cannot simply think its way into safety alone; it requires co-regulation, the lived experience of safety within a secure, collaborative therapeutic relationship.",
      },
    ],
  },
];

const SectionBlock = ({ section }: { section: Section }) => (
  <article className="border-t border-border pt-16 first:border-t-0 first:pt-0">
    <div className="mb-8 flex items-baseline gap-4">
      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
        {section.number}
      </span>
      <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
        {section.title}
      </h3>
    </div>

    <div className="space-y-6">
      {section.paragraphs.map((p, i) => (
        <div key={i}>
          {p.heading && (
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
              {p.heading}
            </h4>
          )}
          <p className="text-muted-foreground leading-relaxed">{p.body}</p>
        </div>
      ))}
    </div>
  </article>
);

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Mind-Body Evidence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              The Evidence Base: The Science of Psychophysiological Symptoms
            </h1>
            <div className="space-y-5 text-muted-foreground text-lg leading-[1.8]">
              <p>
                Persistent physical symptoms are not imaginary. They are the measurable, biological outcomes of a nervous system responding to chronic stress, trauma, and adversity. Below is the clinical research mapping exactly how these experiences manifest in the physical body, how we view these symptoms, and how lasting recovery is achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <div className="space-y-20 md:space-y-24">
            {sections.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>


      {/* Referrals */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-[680px] space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              Referrals
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8]">
              <p>
                I welcome referrals from GPs, gynaecologists, dermatologists, physiotherapists, and other clinicians working with patients whose symptoms persist despite clear investigations.
              </p>
              <p>
                I'm happy to have a brief conversation before a referral is made, or to liaise about shared patients. Please reach out directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
              <a href="mailto:vanesa@vanesasakota.com.au" className="text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                vanesa@vanesasakota.com.au
              </a>
              <a href="tel:0405933722" className="text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                0405 933 722
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
