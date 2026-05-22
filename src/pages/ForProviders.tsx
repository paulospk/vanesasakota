import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type Section = {
  title: string;
  paragraphs: string[];
  subsections?: { heading: string; body: string }[];
  callout?: { heading: string; body: string; citation?: string };
  citation?: string;
};

const sections: Section[] = [
  {
    title: "Where it begins: early relational experience",
    paragraphs: [
      "The earliest and most fundamental thing the nervous system learns is whether the world, and the people in it, are safe. This learning happens not through conscious memory but through repeated relational experience with primary caregivers. Long before language, the developing brain is building its first and most deeply weighted predictive model: what happens when I am vulnerable? What happens when I need? What happens when I feel?",
      "When those early environments were chronically unsafe, unpredictable, emotionally invasive, or unable to meet the child's needs, the nervous system adapted. It built a high-alert architecture, calibrated to detect and manage threat as its primary task. The original ACEs study, a landmark cohort of over 17,000 adults, found dose-dependent relationships between the number of adverse childhood experiences and rates of chronic pain, fatigue, immune dysregulation, and psychological distress across the lifespan. Not because memories are stored in tissue, but because the nervous system's default operating mode was set in conditions of sustained threat. Subsequent neuroscientific work has clarified the mechanism: early adversity and toxic stress alter the architecture of developing stress-response systems, with measurable effects on HPA axis regulation, prefrontal-limbic connectivity, and inflammatory pathways.",
    ],
    callout: {
      heading: "The foundational mechanism",
      body: "Early relational experience writes the brain's most heavily weighted priors, its deepest automatic predictions about safety, boundary, and threat. Everything downstream | chronic symptoms, somatic bracing, hypervigilance | is the nervous system running software installed in childhood.",
      citation: "Felitti et al. (1998) | Shonkoff & Garner (2012) | Kotler, Mannino, Fox & Friston (2026)",
    },
  },
  {
    title: "How the predictive brain generates symptoms",
    paragraphs: [
      "The brain is not a passive receiver of signals from the body. It is an active prediction engine, constantly generating expectations about what sensations mean, then comparing incoming signals against those predictions. When a mismatch occurs, a \"prediction error\", the brain either updates its model or doubles down on the original prediction by discounting the new information.",
      "In a nervous system shaped by early chronic threat, the brain's danger predictions carry very high precision, very high confidence. New sensory evidence that contradicts them is reinterpreted rather than integrated. The system becomes locked in a self-confirming loop: it predicts threat, selectively attends to signals that confirm threat, and treats those signals as proof that threat is ongoing. This is the neurological mechanism behind hypervigilance, chronic pain amplification, and persistent somatic symptoms in the absence of structural pathology.",
      "Neuroscientists call the healthy version of this system metastable: the brain fluidly shifts between network configurations, holds uncertainty without escalating, and updates its models in response to experience. Trauma and chronic stress erode this flexibility. The brain becomes stuck in narrow, rigid patterns. Symptoms are the output of that rigidity. It is worth noting that direct measurement of metastability specifically in PTSD and trauma populations remains an active area of research; the framework is well-supported conceptually and by adjacent findings, with direct empirical confirmation still emerging.",
    ],
    callout: {
      heading: "The core finding",
      body: "The body does not keep the score. The brain keeps predicting it. Trauma is not a memory lodged in non-innervated tissue, it is a collapse of neurological flexibility, a brain caught in self-confirming predictions it cannot yet revise.",
      citation: "Kotler, Mannino, Fox & Friston (2026), Frontiers in Systems Neuroscience | Friston (2010) | Hellyer et al. (2015)",
    },
  },
  {
    title: "Two mechanisms from wound to symptom",
    paragraphs: [
      "Research suggests two distinct pathways by which unprocessed experience becomes embodied symptom. Both arise from the same predictive system, but they produce different presentations.",
    ],
    subsections: [
      {
        heading: "Mechanism 1 | Suppressed emotion translated into somatic signal",
        body: "When an emotional charge, rage, grief, shame, terror, is neurologically suppressed because expression was unsafe, the arousal does not disappear. It remains as unresolved prediction error in the body's internal feedback system. The brain must account for this intense internal signal. Unable to resolve it emotionally, it encodes it as a localised physical sensation: burning, pressure, tightness, or pain without clear structural cause. In neuroscientific terms, the brain assigns high precision to tissue coordinates rather than to the emotional state. The interoceptive signal, internal bodily arousal, is mapped onto the body's surface rather than resolved at the level of emotional meaning. Damasio's somatic marker hypothesis describes the underlying architecture: emotional states are represented through distributed neural processing across visceral, brainstem, and cortical networks, with convergence-divergence zones coordinating the reactivation of these patterns in a context-dependent manner. The sensation is not imagined. It is a real neural output, just misdirected.",
      },
      {
        heading: "Mechanism 2 | Relational wounding expressed as motor defense",
        body: "The first domain in which a human being learns the rules of boundary, containment, safety, and intrusion is the attachment relationship with primary caregivers. The nervous system builds its deepest predictions about vulnerability in this relational context, predictions that are then generalised across domains. When early attachment required chronic self-protection against emotional invasion or physical unsafety, the developing nervous system built a durable top-down model: that which attempts to enter my boundary is a threat. In adulthood, when the person encounters a new domain of physical or relational vulnerability, the brain does not carefully evaluate the new context. It retrieves the most heavily weighted historical prior and executes it. The result is a literal motor enactment of the original boundary defense: the body physically braces or closes. The brain has generalised the relational script into a somatic one. This is why presentations like vaginismus, chronic jaw bracing, diaphragm holding, and somatic armour across the chest and shoulders so consistently trace to early relational, rather than purely physical, history, even in the absence of overt abuse.",
      },
    ],
  },
  {
    title: "Female pelvic pain: vulvodynia & vaginismus",
    paragraphs: [
      "These two presentations are the clearest clinical illustration of the two mechanisms, which is why they reward careful distinction even though they are often grouped together.",
    ],
    subsections: [
      {
        heading: "Vulvodynia",
        body: "Chronic vulvar pain without identifiable structural cause, affecting approximately 8 to 16% of women across population-based studies. Frequently misdiagnosed and undertreated. From a predictive processing perspective, this presentation often reflects the brain translating an unresolved emotional charge into localised tissue alarm, assigning high interoceptive precision to the pelvic region rather than resolving the underlying emotional data. The pain is real. Its generator is neural, not peripheral.",
      },
      {
        heading: "Vaginismus",
        body: "Involuntary contraction of the pelvic floor preventing or severely limiting penetration. Even without overt sexual trauma, this presentation consistently traces to early relational wounding. The brain has generalised its deepest attachment-level boundary prediction, \"intrusion is unsafe\", into the physical domain, and executes a literal muscular closure in response to any cue that activates that prior. It is a somatic enactment of an attachment script, not a voluntary or purely physical response.",
      },
    ],
  },
];

type PresentationRow = {
  presentation: string;
  examples: string;
  mechanism: string;
};

const presentationRows: PresentationRow[] = [
  {
    presentation: "Localised pain without structural cause",
    examples: "Vulvodynia, functional chest pain, unexplained focal pain",
    mechanism:
      "Suppressed emotional charge encoded as high-precision interoceptive signal. The brain maps unresolvable internal arousal onto tissue coordinates.",
  },
  {
    presentation: "Systemic bracing or motor reflex",
    examples: "Vaginismus, jaw bracing, diaphragm holding, pelvic floor tension",
    mechanism:
      "Top-down motor defense generalised from early relational threat. The brain executes the boundary script learned in attachment in a new somatic domain.",
  },
  {
    presentation: "Nociplastic & centralised pain",
    examples: "Fibromyalgia, central sensitisation, chronic widespread pain",
    mechanism:
      "Danger priors assigned excessive precision, lowering the threshold at which incoming signals register as pain. Real physiological output from a miscalibrated predictive system.",
  },
  {
    presentation: "Chronic fatigue & systemic depletion",
    examples: "ME/CFS spectrum, burnout, post-viral fatigue",
    mechanism:
      "Sustained hypervigilance consuming metabolic and cognitive resources. The brain's continuous threat-management in the absence of resolution depletes the system.",
  },
  {
    presentation: "Gut & digestive dysregulation",
    examples: "IBS, functional nausea, appetite dysregulation",
    mechanism:
      "Interoceptive signals amplified under threat priors and misread as confirmation of danger, circular inference sustaining a gut-brain feedback loop.",
  },
  {
    presentation: "Stress-sensitive skin conditions",
    examples: "Psoriasis, eczema, urticaria, rosacea",
    mechanism:
      "Neurogenic inflammation and HPA dysregulation driven by sustained stress-state predictions. Bidirectional: skin distress amplifies the psychological signal, reinforcing the loop.",
  },
];

const references: string[] = [
  "Felitti VJ et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. Am J Prev Med. 14(4):245 to 258.",
  "Shonkoff JP & Garner AS (2012). The lifelong effects of early childhood adversity and toxic stress. Pediatrics. 129(1):e232 to 246.",
  "Friston K (2010). The free-energy principle: a unified brain theory? Nat Rev Neurosci. 11:127 to 138.",
  "Damasio AR (1996). The somatic marker hypothesis and the possible functions of the prefrontal cortex. Phil Trans R Soc B. 351:1413 to 1420.",
  "Hellyer PJ et al. (2015). Cognitive flexibility through metastable neural dynamics is disrupted by damage to the structural connectome. J Neurosci. 35:9050 to 9063.",
  "Allen M et al. (2022). In the body's eye: the computational anatomy of interoceptive inference. PLoS Comput Biol. 18:e1010490.",
  "Mayer EA et al. (2015). Gut/brain axis and the microbiota. J Clin Invest. 125(3):926 to 938.",
  "Harlow BL & Stewart EG (2003). A population-based assessment of chronic unexplained vulvar pain. Am J Obstet Gynecol. 188(1):S54 to 60.",
  "IASP (2017). Nociplastic pain terminology.",
  "Kotler S, Mannino M, Fox G & Friston K (2026). The body does not keep the score: trauma, predictive coding, and the restoration of metastability. Front. Syst. Neurosci. 20:1812957.",
];

const SectionBlock = ({ section }: { section: Section }) => (
  <article className="border-t border-border pt-16 first:border-t-0 first:pt-0">
    <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-8">
      {section.title}
    </h3>

    <div className="space-y-5 mb-8">
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>

    {section.subsections?.map((sub, i) => (
      <div key={i} className="mb-8">
        <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
          {sub.heading}
        </h4>
        <p className="text-muted-foreground leading-relaxed">{sub.body}</p>
      </div>
    ))}

    {section.callout && (
      <div className="mt-8 border-l-2 border-foreground/30 pl-6 py-2">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
          {section.callout.heading}
        </p>
        <p className="text-foreground/90 leading-relaxed italic">
          {section.callout.body}
        </p>
        {section.callout.citation && (
          <p className="text-xs text-muted-foreground/80 mt-4">
            {section.callout.citation}
          </p>
        )}
      </div>
    )}
  </article>
);

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Mind Body Science
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              The mind-body connection
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              A plain overview of what current research tells us about how early experience shapes the nervous system, and how that produces physical symptoms, drawn from the latest work in computational and systems neuroscience.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <div className="space-y-20 md:space-y-24">
            {sections.slice(0, 3).map((s) => (
              <SectionBlock key={s.title} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Presentations table */}
      <section className="bg-accent/20 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            What this looks like across presentations
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            Both mechanisms operate across a wide range of conditions. The table below maps common presentations to their underlying neurological process.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-12 gap-6 border-b border-border pb-4 mb-4">
              <p className="col-span-5 uppercase tracking-[0.2em] text-xs font-semibold text-foreground">
                Presentation
              </p>
              <p className="col-span-7 uppercase tracking-[0.2em] text-xs font-semibold text-foreground">
                The neurological mechanism
              </p>
            </div>
            <div className="divide-y divide-border">
              {presentationRows.map((row) => (
                <div key={row.presentation} className="grid grid-cols-12 gap-6 py-6">
                  <div className="col-span-5">
                    <p className="text-foreground leading-snug mb-2">{row.presentation}</p>
                    <p className="text-sm text-muted-foreground/90 italic leading-snug">
                      {row.examples}
                    </p>
                  </div>
                  <p className="col-span-7 text-muted-foreground leading-relaxed">
                    {row.mechanism}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden divide-y divide-border border-t border-border">
            {presentationRows.map((row) => (
              <div key={row.presentation} className="py-6 space-y-3">
                <p className="text-foreground leading-snug">{row.presentation}</p>
                <p className="text-sm text-muted-foreground/90 italic leading-snug">
                  {row.examples}
                </p>
                <p className="text-muted-foreground leading-relaxed">{row.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pelvic pain section */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-16">
          <SectionBlock section={sections[3]} />
        </div>
      </section>

      {/* Referrals */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-[680px] space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              Referrals
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8]">
              <p>
                For this patient population we routinely collaborate with gynaecologists, rheumatologists, pelvic floor physiotherapists, clinical psychologists, pain specialists, and dermatologists with a particular interest in psychodermatology. We are happy to coordinate multidisciplinary referral pathways and to support patients navigating the intersection of physical and psychological care.
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

      {/* References */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-8">
            References
          </h2>
          <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
