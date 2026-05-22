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
    title: "The Developmental Baseline: Early Relational Stress & ACEs",
    paragraphs: [
      {
        body: "We now know that our nervous system calibrates its baseline threat detection early in life. When a child experiences persistent relational stress, such as chronic misattunement with primary caregivers, emotional neglect, or unpredictable boundaries, the brain adapts to ensure survival. It alters the functional development of key threat-processing and somatic hubs, including the amygdala and the insular cortex.",
      },
      {
        heading: "What This Means on the Ground",
        body: "Early life stress essentially sets the central threat-detection hardware to a permanent surveillance mode. In adulthood, this means the body operates with a structurally lower threshold for stress reactivity. The nervous system becomes highly protective, anticipating danger and preparing to defend its physical boundaries long before a conscious trigger even occurs.",
      },
      {
        heading: "How It Can Manifest",
        body: "This underlying neural vulnerability often forms the bedrock for Generalized Anxiety Disorder (GAD), Panic Disorder, attachment-related anxiety, Complex PTSD (C-PTSD), and Somatic Symptom Disorder.",
      },
    ],
  },
  {
    number: "02",
    title: "The Neurological Highway: The HPA Axis & Central Sensitization",
    paragraphs: [
      {
        body: "When an adult system with a highly sensitive baseline encounters current life stressors or relational vulnerabilities, the brain routinely triggers the Hypothalamic-Pituitary-Adrenal (HPA) axis. This neuroendocrine pathway floods the body with stress hormones and signaling proteins. Over time, chronic activation leads to a breakdown in how the central nervous system processes everyday bodily data, inducing a state of central sensitization.",
      },
      {
        heading: "What This Means on the Ground",
        body: "The central nervous system enters a state of hyper-reactivity, essentially turning the internal volume knob on sensory input all the way up. The spinal cord stops filtering out background noise. Safe, normal, or minor background bodily sensations are amplified and transmitted to the brain as severe threat signals.",
      },
      {
        heading: "How It Can Manifest",
        body: "This neurochemical pipeline frequently drives systemic conditions such as Fibromyalgia, Chronic Fatigue Syndrome (ME/CFS), Irritable Bowel Syndrome (IBS), functional dyspepsia, and chronic tension-type headaches.",
      },
    ],
  },
  {
    number: "03",
    title: "The Live System Loop: Predictive Coding & Active Inference",
    paragraphs: [
      {
        body: "The latest peer-reviewed systems neuroscience establishes that functional symptoms are not immutable trauma memories literally stored or archived in rigid muscle fibers or deep fascia. Instead, the brain functions as a dynamic prediction engine. It relies on past data to project top-down expectations onto the body, prioritizing its deeply ingrained danger predictions over real-time sensory evidence of safety.",
      },
      {
        body: "This predictive software glitch typically manifests in the body through two distinct pathways:",
      },
      {
        heading: "Sensory Amplification (The Blurry Map)",
        body: "Because the brain is projecting an intense expectation of danger onto a specific physical region, the neural map of that body part in the sensory cortex becomes smudged and blurred. The brain misinterprets completely safe mechanical inputs, like light touch, clothing, or minor temperature changes, and actively constructs them as an intense burning, raw, or painful sensation.",
      },
      {
        heading: "Motor & Visceral Bracing (The Involuntary Shield)",
        body: "If an emotional experience or interpersonal boundary feels unsafe or threatens to overwhelm the system, the brain skips conscious processing and executes an immediate physical defense, commanding local muscle groups to tightly contract, spasm, and lock down.",
      },
      {
        heading: "How It Can Manifest | Sensory Amplification",
        body: "Localized Provoked Vulvodynia (Vestibulodynia), Burning Mouth Syndrome (BMS), chronic idiopathic pruritus (unexplained skin itching), and localized atypical facial pain.",
      },
      {
        heading: "How It Can Manifest | Motor & Visceral Bracing",
        body: "Vaginismus, hypertonic pelvic floor dysfunction, temporomandibular joint (TMJ) disorders, globus pharyngeus (the feeling of a lump in the throat), tension-induced bruxism (jaw clenching), and psychogenic tremors.",
      },
    ],
  },
  {
    number: "04",
    title: "The Self-Sustaining Cycle: Circular Inference",
    paragraphs: [
      {
        body: "Once a psychophysiological symptom manifests physically, the brain enters a state of circular inference. It projects a prediction of pain or tension, encounters the physical bracing or burning it just created, and uses that very sensation as absolute proof that the body remains under immediate threat.",
      },
      {
        heading: "What This Means on the Ground",
        body: "A closed, self-sustaining feedback loop forms. The genuine physical distress triggers understandable anticipatory dread, hyperfocus, and anxiety. This emotional arousal immediately fuels the HPA axis and reinforces the brain's danger predictions. The symptom now maintains itself entirely from the top down, even when your current environment is completely safe, stable, and supportive.",
      },
      {
        heading: "How It Can Manifest",
        body: "Illness Anxiety Disorder (health anxiety), severe somatic hyperfocus, panic cycles triggered primarily by bodily sensations, kinesiophobia (fear of movement), and secondary chronic insomnia.",
      },
    ],
  },
];

const references = [
  "Chrousos, G. P. (2009). Stress and disorders of the stress system. Nature Reviews Endocrinology, 5(7), 374–381.",
  "Felitti, V. J., Anda, R. F., Nordenberg, D., Williamson, D. F., Spitz, A. M., Edwards, V., Koss, M. P., & Marks, J. S. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults: The Adverse Childhood Experiences (ACE) Study. American Journal of Preventive Medicine, 14(4), 245–258.",
  "Fitzcharles, M. A., Cohen, S. P., Clauw, D. J., Littlejohn, G., Usui, C., & Häuser, W. (2021). Nociplastic pain: towards an understanding of prevalent pain conditions. The Lancet, 397(10289), 2098–2110.",
  "Kotler, S., Mannino, M., Fox, G., & Friston, K. (2026). The body does not keep the score: trauma, predictive coding, and the restoration of metastability. Frontiers in Systems Neuroscience, 20, Article 1812957.",
  "Shonkoff, J. P., Garner, A. S., Committee on Early Childhood, Adoption, and Dependent Care, Section on Developmental and Behavioral Pediatrics, & American Academy of Pediatrics. (2012). The lifelong effects of early childhood adversity and toxic stress. Pediatrics, 129(1), e232–e246.",
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
              The Mind-Body Pipeline: How Chronic Alarm Becomes Physical Symptoms
            </h1>
            <div className="space-y-5 text-muted-foreground text-lg leading-[1.8]">
              <p>
                When you experience persistent physical symptoms without an underlying organic cause, the distress you feel is entirely real. It is not an illusion, nor is it all in your head. Instead, it is a tangible, visible, and highly coordinated protective process executed in real time by a sensitized nervous system.
              </p>
              <p>
                By looking through a modern psycho-neuro-immunological lens, we can trace a clear, evidence-based line from early life relational history down to the real-time neural software that creates and maintains non-organic physical distress.
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

      {/* Moving Forward */}
      <section className="bg-accent/20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              Moving Forward: Updating the System
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8]">
              <p>
                Because these symptoms are driven by a protective software loop rather than permanent, organic tissue destruction, the nervous system remains entirely capable of neuroplastic re-calibration.
              </p>
              <p>
                On the ground, resolution is not about trying to forcefully excavate or purge a hidden scar from your tissues. It is a structured process of retraining the brain's prediction engine. By systematically downregulating the central threat state, working directly and relationally with the parts of the system holding the danger expectations, and introducing safe, novel sensorimotor experiences, we teach the brain to stand down its protective defenses and safely return to a state of ease, flexibility, and fluid movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
              Complete Clinical References
            </h2>
            <ul className="space-y-4">
              {references.map((r, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {r}
                </li>
              ))}
            </ul>
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
