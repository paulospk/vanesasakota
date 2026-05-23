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
        heading: "The Research: The CDC-Kaiser Permanente ACE Study",
        body: "This landmark epidemiological study evaluated over 17,000 participants, tracking the statistically significant relationships between early life adversity (such as chronic stress, neglect, or household dysfunction) and adult health outcomes.",
      },
      {
        body: "The Physical Footprint: Research suggests that significant early life stress can alter long-term physiological development. Data indicates a strong correlation between the amount of childhood adversity experienced and the likelihood of experiencing chronic physical symptoms in adulthood.",
      },
      {
        body: "Elevated Risk Profile: Individuals with higher ACE scores statistically show a higher prevalence of chronic pain, autoimmune flare-ups, and chronic fatigue.",
      },
      {
        body: "A Distinct Factor: This strong correlation remains significant even when accounting for health behaviors like smoking, diet, or alcohol use—suggesting that the physiological impact of prolonged stress itself is a major contributing factor to adult health.",
      },
    ],
  },
  {
    number: "02",
    title: "Biological Pathways: Psychoneuroimmunology (PNI)",
    paragraphs: [
      {
        heading: "The Research: Neuroendocrine-Immune System Pathways",
        body: "Contemporary research in PNI examines the complex interactions between the nervous system, the endocrine (hormone) system, and the immune system during periods of prolonged stress.",
      },
      {
        body: "System-Wide Responses: When the nervous system detects persistent stress, it can trigger the immune system to release pro-inflammatory proteins (cytokines).",
      },
      {
        body: "Sensitised Pain Pathways: Prolonged inflammatory responses are linked to peripheral sensitization, which can contribute to widespread muscle tension, heightened sensitivity to pain, and tissue distress.",
      },
      {
        body: "Hormonal Fluctuations: Chronic arousal can disrupt cortisol regulation, potentially impacting the body's natural sleep cycles, digestion, and systemic recovery.",
      },
    ],
  },
  {
    number: "03",
    title: "Somatic Protection: Pelvic Health & Autonomic Bracing",
    paragraphs: [
      {
        heading: "The Research: Polyvagal Theory and Autonomic Defense Responses",
        body: "Clinical literature exploring functional pelvic pain conditions (such as vaginismus, vulvodynia, and chronic pelvic pain) investigates how the autonomic nervous system influences muscle tension.",
      },
      {
        body: "The Pelvic Floor as a Protective Shield: Guided by Polyvagal Theory, researchers observe that when the nervous system detects danger or vulnerability, it can trigger defensive states (fight, flight, or freeze). This can manifest as involuntary, chronic muscular bracing in the pelvic floor.",
      },
      {
        body: "Persistent Guarding Patterns: Long after an initial physical injury has healed or a stressful period has passed, the nervous system may maintain these defensive, hyper-toned muscular patterns.",
      },
      {
        body: "De-Escalating the System: Clinical approaches focus on signaling safety to the autonomic nervous system, helping the body gradually deactivate this protective shielding pattern.",
      },
    ],
  },
  {
    number: "04",
    title: "The Brain-Skin Axis: Psychodermatological Manifestations",
    paragraphs: [
      {
        heading: "The Research: Embryonic Origins and Cutaneous Neuropeptides",
        body: "Dermatological and neurobiological research investigates the pathways through which psychological stress can interact with conditions like eczema, psoriasis, stress-related hair loss, and vitiligo.",
      },
      {
        body: "A Shared Cellular Origin: In embryo development, human skin and the nervous system grow from the same layer (the ectoderm), remaining intrinsically connected throughout life.",
      },
      {
        body: "Neurogenic Inflammation: During periods of psychological stress, the brain can release specific chemical messengers (neuropeptides) into the skin. This can trigger localized inflammation, potentially weakening the skin barrier and contributing to symptom flare-ups.",
      },
      {
        body: "Bi-Directional Feedback: Because the skin frequently reflects autonomic nervous system activity, incorporating nervous system regulation strategies may help reduce the frequency and intensity of stress-responsive skin flares.",
      },
    ],
  },
  {
    number: "05",
    title: "Amplified Signaling: Central Sensitisation",
    paragraphs: [
      {
        heading: "The Research: Neural Plasticity and Sensory Processing",
        body: "Studies on the central nervous system demonstrate how the brain and spinal cord process ordinary sensory data following periods of chronic stress or trauma.",
      },
      {
        body: "Altered Volume Control: In many functional and psychophysiological symptoms, the central nervous system can undergo a process called central sensitisation, where the spinal cord and brain amplify regular bodily signals.",
      },
      {
        body: "Real Symptoms, Intact Structure: Normal sensory inputs—such as mild touch, temperature shifts, or natural digestion—can be misprocessed by a hypersensitive nervous system and registered as pain or discomfort, even in the absence of structural tissue damage.",
      },
      {
        body: "A Processing Disruption: The symptoms are completely real, but they represent a functional processing error in the nervous system rather than a structural defect (like a fracture). Because the nervous system is neuroplastic, these amplified processing loops can often be systematically retrained and turned back down.",
      },
    ],
  },
  {
    number: "06",
    title: "The Whole-Person Lens: Relational & Biopsychosocial Healing",
    paragraphs: [
      {
        body: "Complex physical symptoms are rarely maintained by a single factor. Lasting recovery is best supported through a biopsychosocial lens, which considers the continuous interaction between your biological health, your internal psychology, and your social or relational environment.",
      },
      {
        body: "Furthermore, because chronic stress and nervous system dysregulation frequently develop within challenging relational contexts, contemporary models indicate that biological healing is deeply supported within a relational space. A hyper-vigilant nervous system rarely down-regulates through cognitive effort alone; it typically relies on co-regulation—the lived experience of safety within a secure, collaborative therapeutic relationship.",
      },
    ],
  },
];

const SectionBlock = ({ section }: { section: Section }) => (
  <article className="border-t border-border pt-8 md:pt-16 first:border-t-0 first:pt-0">
    <div className="mb-4 md:mb-8 flex items-baseline gap-3 md:gap-4">
      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
        {section.number}
      </span>
      <h3 className="font-serif text-xl md:text-3xl tracking-tight text-foreground">
        {section.title}
      </h3>
    </div>

    <div className="space-y-4 md:space-y-6">
      {section.paragraphs.map((p, i) => (
        <div key={i}>
          {p.heading && (
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-2 md:mb-3">
              {p.heading}
            </h4>
          )}
          <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base">{p.body}</p>
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
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              The Evidence Base
            </h1>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="space-y-20 md:space-y-24">
            {sections.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>


      {/* Referrals */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="max-w-[680px] space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              Referrals
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8]">
              <p>
                I welcome collaborative referrals from GPs, gynaecologists, dermatologists, physiotherapists, and other clinicians working with patients whose physical symptoms persist following appropriate medical assessment and investigations.
              </p>
              <p>
                Recognising that complex psychophysiological symptoms are best addressed through an integrated, whole-person approach, I value interdisciplinary care and am always happy to liaise regarding shared patient management. Please feel free to reach out directly for a brief initial conversation prior to making a referral.
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
